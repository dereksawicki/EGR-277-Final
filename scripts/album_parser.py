import json


output = []
with open('album_small.json') as json_file:  
    data = json.load(json_file)['data']

    for image in data['images']:
    	i = {
    		'src': image['link']
    	}

    	w = image['width']
    	h = image['height']

    	i['width'] = 3 if w < h else 4
    	i['height'] = 4 if w < h else 3

    	output.append(i)

with open('out.txt', 'w') as out:
	json.dump(output, out, ensure_ascii=False)
