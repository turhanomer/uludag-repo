import sys
import re

def convert(html_file, component_name, out_file, extract_main=False):
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    if extract_main:
        match = re.search(r'<main.*?>(.*?)</main>', content, re.DOTALL | re.IGNORECASE)
        if match:
            content = match.group(0)
    else:
        match = re.search(r'<body.*?>(.*?)</body>', content, re.DOTALL | re.IGNORECASE)
        if match:
            content = match.group(1)

    # Convert class to className
    content = content.replace('class="', 'className="')
    # Convert for to htmlFor
    content = content.replace('for="', 'htmlFor="')
    # Convert inline comments <!-- --> to {/* */}
    content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)
    
    # fix self closing tags: input, img, hr, br
    content = re.sub(r'<(img|input|hr|br)([^>]*?)(?<!/)>', r'<\1\2/>', content)
    # Check for empty style tag and remove or convert
    content = re.sub(r'style="([^"]*)"', r'', content) # Just remove style for simplicity or handle it if needed
    
    # Remove script tags
    content = re.sub(r'<script.*?>.*?</script>', '', content, flags=re.DOTALL)

    jsx = f"""import React from 'react';

const {component_name} = () => {{
  return (
    <>
      {content}
    </>
  );
}};

export default {component_name};
"""
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(jsx)

if __name__ == '__main__':
    convert('kariyer.html', 'Kariyer', 'src/pages/Kariyer.jsx', extract_main=True)
    convert('admin.html', 'Admin', 'src/pages/Admin.jsx', extract_main=False)
    convert('mentorluk.html', 'Mentorluk', 'src/pages/Mentorluk.jsx', extract_main=False)
