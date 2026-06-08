import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove aside
    content = re.sub(r'<aside.*?</aside>', '', content, flags=re.DOTALL)
    # Remove footer
    content = re.sub(r'<footer.*?</footer>', '', content, flags=re.DOTALL)
    
    # Remove ml-64 from main
    content = content.replace('className="ml-64 min-h-screen"', 'className="w-full min-h-screen"')
    content = content.replace('ml-64 ', '')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_file('src/pages/Admin.jsx')
process_file('src/pages/Mentorluk.jsx')
