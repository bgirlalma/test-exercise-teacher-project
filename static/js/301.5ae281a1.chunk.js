"use strict";(self.webpackChunktest_exercise_teacher_project=self.webpackChunktest_exercise_teacher_project||[]).push([[301],{4301:(n,e,i)=>{i.r(e),i.d(e,{default:()=>G});var a,t,r,o,s,d,x,p,l,c,h,m,g,f=i(7528),u=i(5043),b=i(3003),A=i(9919),j=i(3712),y=i(3886),v=i(197);const w=v.Ay.div(a||(a=(0,f.A)(["\n  position: relative;\n  min-height: 100vh;\n  min-width: 100vh;\n"]))),k=v.Ay.h2(t||(t=(0,f.A)(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 32px;\n  color: #121417;\n  margin-bottom: 32px;\n\n  @media screen and (max-width: 470px){\n    display: flex;\n    justify-content: center;\n  }\n\n"]))),_=v.Ay.div(r||(r=(0,f.A)(["\n  position: relative;\n"]))),R=v.Ay.li(o||(o=(0,f.A)(["\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  gap: 48px;\n  padding: 24px;\n  background-color: #fff;\n  border-radius: 24px;\n  margin-bottom: 32px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media screen and (max-width: 1100px) {\n    gap: 20px;\n  }\n\n  @media screen and (max-width: 800px) {\n    padding: 18px;\n  }\n"]))),z=v.Ay.div(s||(s=(0,f.A)(["\n  position: absolute;\n  display: flex;\n  top: 0;\n  right: 0;\n  margin-top: 21px;\n  margin-right: 16px;\n  padding: 4px;\n  background-color: #fff;\n  border-radius: 100%;\n\n  @media screen and (max-width: 1100px) {\n    margin-top: 21px;\n    margin-right: 25px;\n  }\n\n  @media screen and (max-width: 970px) {\n    margin-top: 21px;\n    margin-right: 30px;\n  }\n"]))),S=v.Ay.img(d||(d=(0,f.A)(["\n  width: 96px;\n  height: 96px;\n  padding: 12px;\n  border-radius: 50%;\n  border: 3px solid #fbe9ba;\n\n  @media screen and (max-width: 1100px) {\n    width: 85px;\n    height: 85px;\n  }\n\n  @media screen and (max-width: 970px) {\n    width: 75px;\n    height: 75px;\n  }\n"]))),C=v.Ay.div(x||(x=(0,f.A)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 1330px) {\n    flex-direction: column;\n\n    & > :first-child {\n      order: 2;\n    }\n  }\n"]))),I=v.Ay.p(p||(p=(0,f.A)(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #8a8a89;\n\n  @media screen and (max-width: 1330px) {\n    margin-bottom: 15px;\n  }\n"]))),L=v.Ay.h2(l||(l=(0,f.A)(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 24px;\n  color: #121417;\n  margin-bottom: 32px;\n"]))),E=v.Ay.p(c||(c=(0,f.A)(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #121417;\n  margin-bottom: 8px;\n"]))),F=v.Ay.button(h||(h=(0,f.A)(["\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n  color: #121417;\n  padding: 0;\n\n  text-decoration: underline;\n  cursor: pointer;\n\n  background-color: inherit;\n  border: none;\n\n  transition: 0.5s ease-in-out;\n\n  &:hover {\n    color: #9fbaae;\n  }\n"]))),J=v.Ay.ul(m||(m=(0,f.A)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 32px;\n  column-gap: 8px;\n  gap: 10px;\n"]))),N=v.Ay.li(g||(g=(0,f.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border: 1px solid rgba(18, 20, 23, 0.2);\n  border-radius: 35px;\n  padding: 0 12px;\n  height: 32px;\n  margin-right: 8px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 114%;\n  color: #121417;\n  cursor: pointer;\n\n  transition: 0.5s ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: #9fbaae;\n  }\n"])));var O=i(9477),P=i(579);const q=()=>{const[n,e]=(0,u.useState)([]),i=(0,b.d4)((n=>n.teachers.teachers)),[a,t]=(0,u.useState)({}),[r,o]=(0,u.useState)(4);return(0,u.useEffect)((()=>{const n=JSON.parse(localStorage.getItem("favorites"))||[],a=i.filter((e=>n.includes(e.id)));e(a)}),[i]),(0,P.jsxs)(w,{children:[(0,P.jsx)(k,{children:"Favorite Page"}),(0,P.jsx)("ul",{children:n&&n.slice(0,r).map((n=>(0,P.jsxs)(R,{children:[(0,P.jsxs)(_,{children:[(0,P.jsx)(S,{src:n.avatar_url,alt:n.name}),(0,P.jsx)(z,{children:(0,P.jsx)(A.A,{})})]}),(0,P.jsxs)("div",{children:[(0,P.jsxs)(C,{children:[(0,P.jsx)(I,{children:"Languages"}),(0,P.jsx)(j.A,{teacher:n})]}),(0,P.jsxs)(L,{children:[n.name," ",n.surname]}),(0,P.jsxs)(E,{children:["Speaks: ",n.languages]}),(0,P.jsxs)(E,{children:["Lesson Info: ",n.lesson_info]}),(0,P.jsxs)(E,{children:["Conditions: ",n.conditions]}),a[n.id]?(0,P.jsx)(y.default,{teacher:n}):(0,P.jsx)(F,{onClick:()=>{return e=n.id,void t((n=>({...n,[e]:!n[e]})));var e},children:"Read more"}),!a[n.id]&&(0,P.jsx)("div",{children:(0,P.jsx)(J,{children:n.levels.map(((n,e)=>(0,P.jsx)(N,{level:n,children:n},e)))})})]})]},n.id)))}),r<n.length&&(0,P.jsx)(O.A,{loadmore:()=>{o((n=>n+4))}})]})};var B;const D=v.Ay.div(B||(B=(0,f.A)(["\n  padding: 96px 128px 96px 128px;\n  background-color: #f8f8f8;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 100vh;\n\n  @media screen and (max-width: 1300px) {\n    padding: 96px;\n  }\n\n  @media screen and (max-width: 1100px) {\n    padding: 96px 60px;\n  }\n\n  @media screen and (max-width: 970px) {\n    padding: 96px 40px;\n  }\n\n  @media screen and (max-width: 470px) {\n    padding: 40px 0;\n  }\n"]))),G=()=>(0,P.jsx)(D,{children:(0,P.jsx)(q,{})})}}]);
//# sourceMappingURL=301.5ae281a1.chunk.js.map