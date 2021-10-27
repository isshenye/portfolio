"use strict";(self.webpackChunkdjamaile_dev=self.webpackChunkdjamaile_dev||[]).push([[718],{5541:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={slug:"how-i-structure-my-react-ts-applications-2021",title:"How I structure my React /TS applications (2021)",author:"Djamaile Rahamat",author_title:"Software Engineer",author_url:"https://github.com/djamaile",author_image_url:"https://avatars.githubusercontent.com/u/15789670?v=4",tags:["typescript","javascript","react"]},l=void 0,p={permalink:"/blog/how-i-structure-my-react-ts-applications-2021",editUrl:"https://github.com/djamaile/portfolio/edit/master/blog/2021-08-06-how-i-structure-my-react-ts-applications-2021.md",source:"@site/blog/2021-08-06-how-i-structure-my-react-ts-applications-2021.md",title:"How I structure my React /TS applications (2021)",description:"(code is hosted at//github.com/djamaile/react-boilerplate-2021)",date:"2021-08-06T00:00:00.000Z",formattedDate:"August 6, 2021",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"react",permalink:"/blog/tags/react"}],readingTime:4.36,truncated:!0,authors:[{name:"Djamaile Rahamat",title:"Software Engineer",url:"https://github.com/djamaile",imageURL:"https://avatars.githubusercontent.com/u/15789670?v=4"}],prevItem:{title:"How to setup husky, eslint and prettier within minutes",permalink:"/blog/how-to-setup-husky-eslint-prettier"},nextItem:{title:"How I structure my React/TS applications",permalink:"/blog/how-i-structure-my-react-ts-applications"}},u={authorsImageUrls:[void 0]},c=[{value:"\ud83d\udcd6 Api",id:"-api",children:[]},{value:"\ud83e\uddea Tests/Cypress",id:"\ud83e\uddea-testscypress",children:[]},{value:"\ud83d\udc33 Docker",id:"-docker",children:[]},{value:"\u2638\ufe0f Kubernetes",id:"\ufe0f-kubernetes",children:[]},{value:"\ud83d\ude3a Github workflow",id:"-github-workflow",children:[]}],h={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"(code is hosted at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/djamaile/react-boilerplate-2021"},"https://github.com/djamaile/react-boilerplate-2021"),")"),(0,o.kt)("p",null,"(last years post: ",(0,o.kt)("a",{parentName:"p",href:"https://dev.to/djamaile/how-i-structure-my-react-ts-applications-160g"},"https://dev.to/djamaile/how-i-structure-my-react-ts-applications-160g"),")"),(0,o.kt)("p",null,"Last year, I created a post on how I structure my ReactJS projects. Now that it is summer vacation again, I shook the structure up a bit. But honestly there are few changes, because in the end React changed little (which is a good thing). So, in this post I will highlight what I changed/added."),(0,o.kt)("p",null,"Lets first start with a picture of the whole folder structure!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v2gi5gcq2xp701ek0mq5.png",alt:"Folder structure"})),(0,o.kt)("p",null,"Now lets discuss the changes :)"),(0,o.kt)("h3",{id:"-api"},"\ud83d\udcd6 Api"),(0,o.kt)("p",null,"In the API folder, I only now have a generic request function and what I added was react-query. If you are not familiar with react-query, it is a library for fetching server state. React-query comes with a lot of power like caching, data synchronisation, etc."),(0,o.kt)("p",null,"In this project, I have kept react-query pretty simple by only adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultQueryFn"),", what looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import axios, { Method, AxiosResponse } from 'axios';\n\nconst api = axios.create({\n  // baseURL: process.env.REACT_APP_HOST_BACKEND,\n  baseURL: 'https://rickandmortyapi.com/api',\n});\n\nconst request = <T>(\n  method: Method,\n  url: string,\n  params: any,\n): Promise<AxiosResponse<T>> => {\n  return (\n    api.request <\n    T >\n    {\n      method,\n      url,\n      params,\n    }\n  );\n};\n\n// Define a default query function that will receive the query key\nexport const defaultQueryFn = async ({ queryKey }: any): Promise<unknown> => {\n  const data = await request(queryKey[0], queryKey[1], queryKey[2]);\n  return data;\n};\n")),(0,o.kt)("p",null,"As you can see, the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultQueryFn")," is calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," function. Now we can add this to our ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClient")," and in our Home view we can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery")," functionality like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport '../../styles/home.css';\nimport { useQuery } from 'react-query';\nimport { Header } from '../../components';\n\nconst Home: React.FC = () => {\n  const { data, error, isFetching } = useQuery(['GET', '/character', {}]);\n\n  if (isFetching) return <p>Is loading...</p>;\n\n  if (error) return <p>${error}</p>;\n\n  console.log(data);\n\n  return (\n    <div className=\"App\">\n      <Header />\n    </div>\n  );\n};\n\nexport default Home;\n")),(0,o.kt)("p",null,"I am still experimenting with react-query and see how I can use it better. But this is how I have been using it for now."),(0,o.kt)("h3",{id:"\ud83e\uddea-testscypress"},"\ud83e\uddea Tests/Cypress"),(0,o.kt)("p",null,"Yes, the infamous test folder. I actually ended up deleting it! I still have tests but I put them directly into the views/","[view]"," folder."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wdq0o5ephjy6o95m8b77.png",alt:"Test code in component"})),(0,o.kt)("p",null,"I have to admit that I am not using Jest as much anymore. I have switched over to using Cypress. Cypress is a tool for end-to-end tests and I have been liking it so far. So, in ",(0,o.kt)("inlineCode",{parentName:"p"},"cypress/integration/404_page.ts")," you can see I have a spec test that tests if the user can go back to the home page if the user has reached to 404 page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe('404 page', function () {\n  it('should give the option to return to home', function () {\n    cy.visit('/does-not-exists');\n    cy.contains('Return to Home');\n    cy.get('a').click();\n    cy.contains('Learn React', { timeout: 10000 });\n  });\n});\n")),(0,o.kt)("h3",{id:"-docker"},"\ud83d\udc33 Docker"),(0,o.kt)("p",null,"I have added also Dockerfiles to my default repo. I have two separate two Dockerfiles, one for development and one for production."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:15-alpine AS builder\n\nWORKDIR /app\n\nCOPY . .\n\nRUN yarn install\n\nRUN yarn build\n\nFROM nginx:stable-alpine\n\nWORKDIR /usr/share/nginx/html\n\nRUN rm -rf *\n\nCOPY --from=builder /app/build .\n\nENTRYPOINT ["nginx", "-g", "daemon off;"\n')),(0,o.kt)("p",null,"To build a image use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker build -t djam97/react-boilerplate-2021:prod -f docker/Dockerfile.prod .\n")),(0,o.kt)("h3",{id:"\ufe0f-kubernetes"},"\u2638\ufe0f Kubernetes"),(0,o.kt)("p",null,"I use Kubernetes daily so that's why I added also some k8s manifests. They are pretty bare bone, but they get the job done and are easily extensible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: react-boiler-plate\n  labels:\n    app: react-boiler-plate\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: react-boiler-plate\n  template:\n    metadata:\n      labels:\n        app: react-boiler-plate\n    spec:\n      containers:\n        - name: react-boiler-plate\n          image: djam97/react-boilerplate-2021:prod\n          imagePullPolicy: Never\n          ports:\n            - containerPort: 3000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: react-boiler-plate-service\nspec:\n  selector:\n    app: react-boiler-plate\n  ports:\n    - protocol: TCP\n      port: 3000\n      targetPort: 3000\n")),(0,o.kt)("p",null,"To apply the manifests use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f k8s/\n")),(0,o.kt)("h3",{id:"-github-workflow"},"\ud83d\ude3a Github workflow"),(0,o.kt)("p",null,"I have also added a Github action that deploys your React app to Github pages. This is great for initial testing or for when your site is not going to have live on it's own server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Deploy site\n\non:\n  push:\n    branches: [main]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    continue-on-error: true\n    strategy:\n      matrix:\n        node-version: [14.x]\n    steps:\n      - uses: actions/checkout@v2\n      - name: Setup Node\n        uses: actions/setup-node@v1\n        with:\n          node-version: '14.x'\n      - name: Get yarn cache\n        id: yarn-cache\n        run: echo \"::set-output name=dir::$(yarn cache dir)\"\n      - name: Cache dependencies\n        uses: actions/cache@v1\n        with:\n          path: ${{ steps.yarn-cache.outputs.dir }}\n          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}\n          restore-keys: |\n            ${{ runner.os }}-yarn-\n      - name: Yarn installation\n        run: yarn install && CI='' yarn build\n      - name: Deploy\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.ACCESS_TOKEN }}\n          publish_dir: ./buil\n")),(0,o.kt)("p",null,"If you also want to use it, there are some steps you need to take. First, you need to create a personal access token in GitHub and add it as a secret to your repo as ",(0,o.kt)("inlineCode",{parentName:"p"},"ACCESS_TOKEN"),". Last, change the homepage in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},' - "homepage": "https://djamaile.github.io/react-boilerplate-2021",\n + "homepage": "https://<your username>.github.io/react-boilerplate-2021",\n')),(0,o.kt)("p",null,"###\ud83d\uddc4\ufe0f Extra files\nBesides the usual prettier, eslint, husky setup. I have also added ",(0,o.kt)("inlineCode",{parentName:"p"},"@commitlint/config-conventional")," to make sure every commit complies with being a conventional commit. If you don't know what that is, you can read up on it here: ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"https://www.conventionalcommits.org/en/v1.0.0/#summary")))}d.isMDXComponent=!0}}]);