
import json
import re

with open('d:/NUXAR/src/data/perfumes.ts', 'r', encoding='utf-8') as f:
    perfumes_ts_content = f.read()

# Extracting Cowok Base
cowok_base_match = re.search(r'const aromaCowokBase: .*? = \[(.*?)\];', perfumes_ts_content, re.DOTALL)
cowok_base_text = cowok_base_match.group(1) if cowok_base_match else ""

# Extracting Cewek Base
cewek_base_match = re.search(r'const aromaCewekBase: .*? = \[(.*?)\];', perfumes_ts_content, re.DOTALL)
cewek_base_text = cewek_base_match.group(1) if cewek_base_match else ""

def parse_items(text):
    # This is a naive parser for the specific format in perfumes.ts
    # Using regex to find blocks of {}
    blocks = re.findall(r'\{.*?id: \'(.*?)\', name: \'(.*?)\', fullName: \'(.*?)\', order: (.*?),.*?notes: (\{.*?\}),.*?character: (\{.*?\}),.*?personality: (\{.*?\}),.*?bestFor: (\{.*?\}),.*?performance: (\{.*?\}),.*?additional: (\{.*?\}),.*?description: \'(.*?)\'.*?\}', text, re.DOTALL)
    items = []
    for b in blocks:
        item = {
            'id': str(b[0]),
            'name': b[1],
            'fullName': b[2],
            'order': int(b[3]),
            'notes': b[4].replace("'", '"'),
            'character': b[5].replace("'", '"'),
            'personality': b[6].replace("'", '"'),
            'bestFor': b[7].replace("'", '"'),
            'performance': b[8].replace("'", '"'),
            'additional': b[9].replace("'", '"'),
            'description': b[10]
        }
        items.append(item)
    return items

cowok_items = parse_items(cowok_base_text)
cewek_items = parse_items(cewek_base_text)

# Replicating clones
def add_clones(items, suffix, description):
    original_len = len(items)
    for i in range(11, 36):
        base = items[(i % original_len) - 1]
        clone = base.copy()
        clone['id'] = f"{base['id'].split('-')[0]}-{i}"
        clone['name'] = f"{base['name']} {suffix}"
        clone['fullName'] = f"{base['fullName']} {suffix}"
        clone['order'] = i
        clone['description'] = description
        items.append(clone)

add_clones(cowok_items, 'Gold Edition', 'Varian eksklusif dengan sentuhan aroma yang lebih mendalam dan intens.')
add_clones(cewek_items, 'Platinum Luxe', 'EDISI PLATINUM dengan tingkat konsentrasi fragransi yang lebih tinggi untuk ketahanan maksimal.')

# Building SQL
sql = "-- =============================================================================\n"
sql += "-- NUXAR MASTER DATABASE RESTORATION & SECURITY SCRIPT (COMPLETE 70 ITEMS)\n"
sql += "-- =============================================================================\n\n"
sql += "DROP TABLE IF EXISTS public.perfumes CASCADE;\n"
sql += "DROP TABLE IF EXISTS public.blogs CASCADE;\n\n"
sql += "CREATE TABLE public.perfumes (\n"
sql += "    id TEXT PRIMARY KEY,\n"
sql += "    name TEXT NOT NULL,\n"
sql += "    brand TEXT,\n"
sql += "    full_name TEXT NOT NULL,\n"
sql += "    gender TEXT,\n"
sql += "    category TEXT,\n"
sql += "    notes JSONB,\n"
sql += "    character JSONB,\n"
sql += "    personality JSONB,\n"
sql += "    best_for JSONB,\n"
sql += "    performance JSONB,\n"
sql += "    additional JSONB,\n"
sql += "    description TEXT,\n"
sql += "    image_url TEXT,\n"
sql += "    display_order INTEGER,\n"
sql += "    created_at TIMESTAMPTZ DEFAULT NOW()\n"
sql += ");\n\n"
sql += "CREATE TABLE public.blogs (\n"
sql += "    id TEXT PRIMARY KEY,\n"
sql += "    slug TEXT UNIQUE NOT NULL,\n"
sql += "    title TEXT NOT NULL,\n"
sql += "    excerpt TEXT,\n"
sql += "    content TEXT,\n"
sql += "    read_time TEXT,\n"
sql += "    date TEXT,\n"
sql += "    image TEXT,\n"
sql += "    category TEXT,\n"
sql += "    created_at TIMESTAMPTZ DEFAULT NOW()\n"
sql += ");\n\n"
sql += "ALTER TABLE public.perfumes ENABLE ROW LEVEL SECURITY;\n"
sql += "ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;\n\n"

sql += "-- 🛡️ SECURITY POLICIES (NASA-Grade)\n"
sql += "CREATE POLICY \"Public: Read Only\" ON public.perfumes FOR SELECT USING (true);\n"
sql += "CREATE POLICY \"Public: Read Only\" ON public.blogs FOR SELECT USING (true);\n"
sql += "CREATE POLICY \"Admin: Full Control\" ON public.perfumes FOR ALL TO authenticated USING (true) WITH CHECK (true);\n"
sql += "CREATE POLICY \"Admin: Full Control\" ON public.blogs FOR ALL TO authenticated USING (true) WITH CHECK (true);\n"
sql += "CREATE POLICY \"System: Internal Bypass\" ON public.perfumes FOR ALL TO service_role USING (true) WITH CHECK (true);\n"
sql += "CREATE POLICY \"System: Internal Bypass\" ON public.blogs FOR ALL TO service_role USING (true) WITH CHECK (true);\n\n"

sql += "INSERT INTO public.blogs (id, slug, title, excerpt, content, read_time, date, image, category) VALUES\n"
sql += "('blog-1', 'cara-memilih-parfum-sesuai-kepribadian', 'Cara Memilih Parfum Sesuai Kepribadian', 'Temukan aroma yang paling cocok dengan karakter dan gaya hidupmu.', 'Memilih parfum yang tepat bisa meningkatkan percaya dirimu...', '5 menit', '10 Feb 2026', '/blog-1.jpg', 'Tips'),\n"
sql += "('blog-2', 'rahasia-parfum-tahan-lama', 'Rahasia Membuat Parfum Tahan Lama', 'Pelajari teknik spray yang benar...', 'Untuk membuat parfum tahan lama, spray di titik nadi...', '4 menit', '5 Feb 2025', '/blog-2.jpg', 'Tips');\n\n"

sql += "INSERT INTO public.perfumes (id, name, full_name, gender, category, notes, character, personality, best_for, performance, additional, description, image_url, display_order) VALUES\n"

all_sql_items = []
for item in cowok_items + cewek_items:
    gender = 'pria' if item['id'].startswith('cowok') else 'wanita'
    category = 'cowok' if item['id'].startswith('cowok') else 'cewek'
    
    # Cleaning JSON string for SQL
    def sq(s): return s.replace("'", "''")
    def sj(j): 
        j = re.sub(r'(\w+):', r'"\1":', j)
        return j.replace("'", "\"")

    line = f"('{item['id']}', '{sq(item['name'])}', '{sq(item['fullName'])}', '{gender}', '{category}', '{sj(item['notes'])}'::jsonb, '{sj(item['character'])}'::jsonb, '{sj(item['personality'])}'::jsonb, '{sj(item['bestFor'])}'::jsonb, '{sj(item['performance'])}'::jsonb, '{sj(item['additional'])}'::jsonb, '{sq(item['description'])}', NULL, {item['order']})"
    all_sql_items.append(line)

sql += ",\n".join(all_sql_items) + ";\n"

with open('d:/NUXAR/supabase_master_restore.sql', 'w', encoding='utf-8') as f:
    f.write(sql)
