

def standalonize(begin, list_of_js, ext_css, list_of_css, remaining, dest='temp.html'):
    with open(dest, 'w') as destination:
        for line in begin:
            destination.write(line)
        
        for js_file in list_of_js:
            with open(js_file, 'r') as current_js:
                destination.write("""  <script type="text/javascript">\n""")
                for line in current_js:
                    destination.write("    "+line)
                destination.write("  </script>\n")

        destination.write(ext_css)

        for css_file in list_of_css:
            with open(css_file, 'r') as current_css:
                destination.write("""  <style type="text/css">\n""")
                for line in current_css:
                    destination.write("    "+line)
                destination.write("  </style>\n")

        for line in remaining:
            destination.write(line)
    


if __name__ == '__main__':

    begin_time=True
    remaining_time=False

    begin=[]
    remaining=[]

    with open('Ukan_Izan.html', 'r') as main_html:
        for line in main_html:
            if "<script src=\"essentials.js\"></script>" in line:
                begin_time=False
            if "</head>" in line:
                remaining_time=True
                # continue
            if begin_time:
                begin.append(line)
            if remaining_time:
                remaining.append(line)

    list_of_js=["essentials.js","voca1.js","ukan_izan.js"]

    ext_css="""  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n"""

    list_of_css=["style.css"]


    # full_text=
    standalonize(begin, list_of_js, ext_css, list_of_css, remaining, dest='Ukan_Izan_standalone.html')
