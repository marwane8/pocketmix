## Structre Guide

1. Define purpose
- what are the major pages of the site

2. Define style
- what are the colors and typographies
- what websites inspire you the most

3. Wire frame
- basic structure of the site

4. Details
- add subtle animations 

5. Adabtability
- Implement CMS backend to change important parts


## Style Guide

home
 |
 |_service
 |_contact

Inspiration:
https://www.jordanvoth.com/

(color guide)[https://youtu.be/KMS3VwGh3HY?si=B3vIV0iqahaZdwi6]
60/30/10 - mycolor.space

(font guide)[https://youtu.be/iR7ceUWMpJ8?si=JejxpfvjDHADgjEy]

(style guide)[https://youtu.be/S1yMcIicf0c?si=WaPxUmltlIxQDO5Q]


# Image Guide

1. Save picture at 2x width hegiht
2. Blur images while they are loading
3. Compress in photopea before adding
5. Add useful Alt Tags
4. Send different image sizes based on device

### Saving Images: 
Hero Images: - range between 2000px - 3000px - expirement with stretching of the photo

Save images at:
 - 75% for high quality
 - 50% for mid quality

Standard Aspect Ratios:
3:2 - portaits landscpats
1:1 - square
4:3 - hero sections and screen views


### Displaying Images in Tailwind
Use the following syntax to display images:

style={{ backgroundImage: `url(${path-to-image})` }}
className="bg-cover bg-no-repeat bg-<position>"

* set bg to cover and no repeat and position according to
(bg-position)[https://tailwindcss.com/docs/background-position]






### Code Guide
variables, functions, parameters => camelCase
object keys => snake_case



