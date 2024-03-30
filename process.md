# Welcome To My Project!
#### Started on 3/29/24
Currently focusing on landing page and single recipe page that I'm using from frontmentor.io [https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm/hub]

### Technolgy Stack: 
- Javascript
- HTML/CSS
- Next.js

(Will be expanding the list as I get into backend projects)


## My Thoughts and what I learned while doing the project:
3/30
- Technology's method changed a lot within the last 2 years. 
    - React's original page for React.JS has redacted. Now they recommend users to use Next.js and other React frameworks.
    - Took me a while to realize that I am using Next.js. 
        - They do not use "index.js" anymore for the main component of each folder. It's pages.js now. 


## Struggles: 
3/30: 
- How to route pages: 
    - I was struggling to figure out how to use React Dom Router to route different pages like "/home" and "/recipes/omelette". 
    - Routed like this :    ``` <Route path= "/" element={<RecipePage/>}/>" ``` and ```"<Route path="/recipe" element={<RecipePage />} /> ```, with Routes and Router as its parents from React Router Dom. I soon figured out that I was using NextJS (thanks to ChatGPT) and learned how routing worked in Next.js with this video: https://www.youtube.com/watch?v=Vm7qM1wmXwE .
    - I think React Router Dom is about to become deprecated since there's no React.JS anymore. 
- In order to make the page a "component", we need to label at the top of the page " 'use client' ". 
