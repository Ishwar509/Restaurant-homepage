(()=>{"use strict";function t(){const t=document.createElement("div");t.classList.add("home");const e=new Image;return e.src="../images/Designer.png",e.classList.add("logo"),t.appendChild(e),t}function e(){const t=document.createElement("div");t.classList.add("contactSection"),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("contactContainer"),t.appendChild(function(){const t=document.createElement("table");return t.classList.add("openingHrs"),t.innerHTML='<tbody>\n            <tr>\n                <th colspan="2">Opening Hours</th>\n            </tr>\n            <tr>\n                <td>Tuesday</td>\n                <td>18:00 - 22:00</td>\n            </tr>\n            <tr>\n                <td>Wednesday</td>\n                <td>18:00 - 22:00</td>\n            </tr>\n            <tr>\n                <td>Thursday</td>\n                <td>18:00 - 22:00</td>\n            </tr>\n            <tr>\n                <td>Friday</td>\n                <td>18:00 - 23:00</td>\n            </tr>\n            <tr>\n                <td>Saturday</td>\n                <td>17:00 - 23:00</td>\n            </tr>\n            <tr>\n                <td>Sunday</td>\n                <td>17:00 - 23:00</td>\n            </tr>\n        </tbody>',t}()),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("info"),t.innerHTML='<div class="address">\n                        <h2>Address:</h2>\n                        <p>123 Gourmet Street</p>\n                        <p>Cityville, Stateburg, 56789</p>\n                    </div>\n                    <div class="phone">\n                        <h2>Phone:</h2>\n                        <p>(555) 123-4567</p>\n                    </div>\n                    <div class="email">\n                        <h2>Email:</h2>\n                        <p>info@flavorhavenrestaurant.com</p>\n                    </div>',t}()),t}());const e=document.createElement("div");return e.classList.add("contactSideImg"),t.appendChild(e),t}function n(){const t=document.createElement("div");t.classList.add("menu");const e=function(){const t=document.createElement("ul");t.classList.add("list");for(let[e,n]of Object.entries(a)){let a=d(e.toLowerCase(),e,n);t.appendChild(a)}return t}();t.appendChild(e);const n=document.createElement("div");return n.classList.add("menu-img"),t.appendChild(n),t}const a={Breakfast:["Sunrise Scramble Delight","Fluffy Pancake Bliss","Avocado Toast Extravaganza","Berry Blast Smoothie Bowl"],Brunch:["Mediterranean Brunch Platter","Savory Spinach and Feta Quiche","Brunch Tacos with Spicy Salsa","Croissant Sandwich Royale"],Lunch:["Grilled Chicken Caesar Wrap","Quinoa Salad with Roasted Vegetables","Classic Caprese Panini","Thai Basil Chicken Stir-Fry"],Dinner:["Balsamic Glazed Salmon","Creamy Mushroom Risotto","BBQ Pulled Pork Tacos","Pesto Pasta with Sun-Dried Tomatoes"]};function d(t,e="",n=[]){const a=document.createElement("li");a.classList.add(t);const d=document.createElement("span");d.textContent=e;const s=document.createElement("ul");return n.forEach((t=>{let e=document.createElement("li");e.textContent=t,s.appendChild(e)})),a.appendChild(d),a.appendChild(s),a}function s(){const t=document.createElement("div");return t.classList.add("aboutSection"),t.appendChild(function(){const t=document.createElement("div");t.classList.add("aboutSideImg");const e=new Image;return e.src="./images/tables-chairs-with-umbrellas.jpg",e.alt="restaurant outside view",t.appendChild(e),t}()),t.appendChild(function(){const t=document.createElement("div");t.classList.add("aboutInfo");const e=document.createElement("h1");e.textContent="Flavor Haven";const n=document.createElement("p");n.textContent="Welcome to Flavor Haven, where passion for taste meets culinary artistry.Nestled in the heart of Leonida, our restaurant is a celebration of diverse flavors and a commitment to creating a unique dining experience.";const a=document.createElement("p");return a.textContent="At Flavor Haven, our chefs meticulously craft each dish,blending international influences with local ingredients. The result is a menu that offers a symphony of tastes, inviting you to embark on a culinary journey that is both exciting and satisfying.",[e,n,a].forEach((e=>{t.appendChild(e)})),t}()),t}const o=document.querySelector("#content");function c(a){const d=a.target.dataset.tab;if(null!==d)switch(function(){let t=document.querySelector("div.header + div");null!==t&&o.removeChild(t)}(),d){case"home":i(t);break;case"about":i(s);break;case"menu":i(n);break;case"contact":i(e)}}function i(e){e===t?(o.classList.remove("otherTab"),o.classList.add("homeTab","homepage")):(o.classList.remove("homeTab","homepage"),o.classList.add("otherTab")),o.appendChild(e())}document.querySelectorAll("[data-tab]").forEach((t=>{t.addEventListener("click",c)})),i(t)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVExRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWVTZWN0aW9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL21vZHVsZXMvbWVudVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9tb2R1bGVzL2Fib3V0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZVNlY3Rpb24oKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IFwiLi4vaW1hZ2VzL0Rlc2lnbmVyLnBuZ1wiXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RTZWN0aW9uJyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQoKSk7XG4gICAgXG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RTaWRlSW1nJyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RDb250ZW50KCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdENvbnRhaW5lcicpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvcGVuaW5nSHJzVGFibGUoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIG9wZW5pbmdIcnNUYWJsZSgpe1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCdvcGVuaW5nSHJzJyk7XG5cbiAgICB0YWJsZS5pbm5lckhUTUwgPSBgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiMlwiPk9wZW5pbmcgSG91cnM8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+VHVlc2RheTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjE4OjAwIC0gMjI6MDA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+V2VkbmVzZGF5PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+MTg6MDAgLSAyMjowMDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5UaHVyc2RheTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjE4OjAwIC0gMjI6MDA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+RnJpZGF5PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+MTg6MDAgLSAyMzowMDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5TYXR1cmRheTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjE3OjAwIC0gMjM6MDA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+U3VuZGF5PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+MTc6MDAgLSAyMzowMDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PmA7XG5cbiAgICByZXR1cm4gdGFibGU7XG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RJbmZvKCl7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgaW5mby5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BZGRyZXNzOjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4xMjMgR291cm1ldCBTdHJlZXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DaXR5dmlsbGUsIFN0YXRlYnVyZywgNTY3ODk8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGhvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5QaG9uZTo8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+KDU1NSkgMTIzLTQ1Njc8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5FbWFpbDo8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+aW5mb0BmbGF2b3JoYXZlbnJlc3RhdXJhbnQuY29tPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuXG4gICAgcmV0dXJuIGluZm87XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBtZW51TGlzdCA9IGNyZWF0ZU1lbnVMaXN0KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcblxuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWltZycpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBtZW51ID0ge1xuICAgIEJyZWFrZmFzdDogW1xuICAgICAgICBcIlN1bnJpc2UgU2NyYW1ibGUgRGVsaWdodFwiLFxuICAgICAgICBcIkZsdWZmeSBQYW5jYWtlIEJsaXNzXCIsXG4gICAgICAgIFwiQXZvY2FkbyBUb2FzdCBFeHRyYXZhZ2FuemFcIixcbiAgICAgICAgXCJCZXJyeSBCbGFzdCBTbW9vdGhpZSBCb3dsXCJcbiAgICBdLFxuICAgIEJydW5jaDogW1xuICAgICAgICBcIk1lZGl0ZXJyYW5lYW4gQnJ1bmNoIFBsYXR0ZXJcIixcbiAgICAgICAgXCJTYXZvcnkgU3BpbmFjaCBhbmQgRmV0YSBRdWljaGVcIixcbiAgICAgICAgXCJCcnVuY2ggVGFjb3Mgd2l0aCBTcGljeSBTYWxzYVwiLFxuICAgICAgICBcIkNyb2lzc2FudCBTYW5kd2ljaCBSb3lhbGVcIlxuICAgIF0sXG4gICAgTHVuY2ggOiBbXG4gICAgICAgIFwiR3JpbGxlZCBDaGlja2VuIENhZXNhciBXcmFwXCIsXG4gICAgICAgIFwiUXVpbm9hIFNhbGFkIHdpdGggUm9hc3RlZCBWZWdldGFibGVzXCIsXG4gICAgICAgIFwiQ2xhc3NpYyBDYXByZXNlIFBhbmluaVwiLFxuICAgICAgICBcIlRoYWkgQmFzaWwgQ2hpY2tlbiBTdGlyLUZyeVwiXG4gICAgXSxcbiAgICBEaW5uZXI6IFtcbiAgICAgICAgXCJCYWxzYW1pYyBHbGF6ZWQgU2FsbW9uXCIsXG4gICAgICAgIFwiQ3JlYW15IE11c2hyb29tIFJpc290dG9cIixcbiAgICAgICAgXCJCQlEgUHVsbGVkIFBvcmsgVGFjb3NcIixcbiAgICAgICAgXCJQZXN0byBQYXN0YSB3aXRoIFN1bi1EcmllZCBUb21hdG9lc1wiXG4gICAgXSxcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUxpc3QoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG5cbiAgICBmb3IobGV0IFt0aXRsZSwgbGlzdEl0ZW1zXSBvZiBPYmplY3QuZW50cmllcyhtZW51KSl7XG4gICAgICAgIGxldCBsaXN0ID0gY3JlYXRlTGlzdCh0aXRsZS50b0xvd2VyQ2FzZSgpLCB0aXRsZSwgbGlzdEl0ZW1zKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTGlzdChuYW1lLCB0aXRsZSA9IFwiXCIsIGxpc3RJdGVtPVtdKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb25zdCBsaXN0SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBsaXN0SXRlbS5mb3JFYWNoKChpdGVtTmFtZSk9PntcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaXRlbU5hbWU7XG4gICAgICAgIGxpc3RJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbUNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWJvdXRTZWN0aW9uKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0U2VjdGlvbicpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVJbWdDb250ZW50KCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBzaWRlSW1nQ29udGVudCgpe1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dFNpZGVJbWcnKTtcblxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBcIi4vaW1hZ2VzL3RhYmxlcy1jaGFpcnMtd2l0aC11bWJyZWxsYXMuanBnXCI7XG4gICAgaW1nLmFsdCA9IFwicmVzdGF1cmFudCBvdXRzaWRlIHZpZXdcIjtcbiAgICBcbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIHJldHVybiBpbWdDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGFib3V0Q29udGVudCgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dEluZm8nKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkZsYXZvciBIYXZlblwiO1xuXG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYTEudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gRmxhdm9yIEhhdmVuLCB3aGVyZSBwYXNzaW9uIGZvciB0YXN0ZSBtZWV0cyBjdWxpbmFyeSBhcnRpc3RyeS5OZXN0bGVkIGluIHRoZSBoZWFydCBvZiBMZW9uaWRhLCBvdXIgcmVzdGF1cmFudCBpcyBhIGNlbGVicmF0aW9uIG9mIGRpdmVyc2UgZmxhdm9ycyBhbmQgYSBjb21taXRtZW50IHRvIGNyZWF0aW5nIGEgdW5pcXVlIGRpbmluZyBleHBlcmllbmNlLlwiO1xuXG4gICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYTIudGV4dENvbnRlbnQgPSBcIkF0IEZsYXZvciBIYXZlbiwgb3VyIGNoZWZzIG1ldGljdWxvdXNseSBjcmFmdCBlYWNoIGRpc2gsYmxlbmRpbmcgaW50ZXJuYXRpb25hbCBpbmZsdWVuY2VzIHdpdGggbG9jYWwgaW5ncmVkaWVudHMuIFRoZSByZXN1bHQgaXMgYSBtZW51IHRoYXQgb2ZmZXJzIGEgc3ltcGhvbnkgb2YgdGFzdGVzLCBpbnZpdGluZyB5b3UgdG8gZW1iYXJrIG9uIGEgY3VsaW5hcnkgam91cm5leSB0aGF0IGlzIGJvdGggZXhjaXRpbmcgYW5kIHNhdGlzZnlpbmcuXCJcblxuICAgIGxldCBhcnIgPSBbaGVhZGluZywgcGFyYTEsIHBhcmEyXTtcbiAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJcbmltcG9ydCBjcmVhdGVIb21lU2VjdGlvbiBmcm9tIFwiLi9tb2R1bGVzL2hvbWVTZWN0aW9uLmpzXCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdFNlY3Rpb24gZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0U2VjdGlvbi5qc1wiO1xuaW1wb3J0IGNyZWF0ZU1lbnVTZWN0aW9uIGZyb20gXCIuL21vZHVsZXMvbWVudVNlY3Rpb24uanNcIjtcbmltcG9ydCBjcmVhdGVBYm91dFNlY3Rpb24gZnJvbSBcIi4vbW9kdWxlcy9hYm91dFNlY3Rpb24uanNcIjtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFiXScpO1xuXG5uYXZCdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVGFiKTtcbn0pO1xuXG5cbmxvYWRUYWIoY3JlYXRlSG9tZVNlY3Rpb24pO1xuXG5mdW5jdGlvbiByZW1vdmVDdXJyZW50VGFiKCl7XG4gICAgbGV0IGN1cnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuaGVhZGVyICsgZGl2Jyk7XG4gICAgaWYoY3VyciA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChjdXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFiKGUpe1xuICAgIGNvbnN0IHRhYiA9IGUudGFyZ2V0LmRhdGFzZXQudGFiO1xuXG4gICAgaWYodGFiID09PSBudWxsKSByZXR1cm47XG5cbiAgICByZW1vdmVDdXJyZW50VGFiKCk7XG5cbiAgICBzd2l0Y2ggKHRhYil7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgbG9hZFRhYihjcmVhdGVIb21lU2VjdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWJvdXQnOlxuICAgICAgICAgICAgbG9hZFRhYihjcmVhdGVBYm91dFNlY3Rpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgbG9hZFRhYihjcmVhdGVNZW51U2VjdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICBsb2FkVGFiKGNyZWF0ZUNvbnRhY3RTZWN0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZFRhYih0YWJDcmVhdG9yKXtcbiAgICBpZih0YWJDcmVhdG9yID09PSBjcmVhdGVIb21lU2VjdGlvbil7XG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3RoZXJUYWInKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lVGFiJywgJ2hvbWVwYWdlJyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZVRhYicsICdob21lcGFnZScpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ290aGVyVGFiJyk7XG4gICAgfVxuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJDcmVhdG9yKCkpO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVIb21lU2VjdGlvbiIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImltZyIsIkltYWdlIiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVDb250YWN0U2VjdGlvbiIsImNvbnRlbnQiLCJ0YWJsZSIsImlubmVySFRNTCIsIm9wZW5pbmdIcnNUYWJsZSIsImluZm8iLCJjb250YWN0SW5mbyIsImNvbnRhY3RDb250ZW50IiwiaW1nQ29udGFpbmVyIiwiY3JlYXRlTWVudVNlY3Rpb24iLCJtZW51TGlzdCIsInRpdGxlIiwibGlzdEl0ZW1zIiwiT2JqZWN0IiwiZW50cmllcyIsIm1lbnUiLCJsaXN0IiwiY3JlYXRlTGlzdCIsInRvTG93ZXJDYXNlIiwiY3JlYXRlTWVudUxpc3QiLCJCcmVha2Zhc3QiLCJCcnVuY2giLCJMdW5jaCIsIkRpbm5lciIsIm5hbWUiLCJsaXN0SXRlbSIsImhlYWRpbmciLCJ0ZXh0Q29udGVudCIsImxpc3RJdGVtQ29udGFpbmVyIiwiZm9yRWFjaCIsIml0ZW1OYW1lIiwiZWxlbWVudCIsImNyZWF0ZUFib3V0U2VjdGlvbiIsImFsdCIsInNpZGVJbWdDb250ZW50IiwicGFyYTEiLCJwYXJhMiIsImFib3V0Q29udGVudCIsIm1haW5Db250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2hhbmdlVGFiIiwiZSIsInRhYiIsInRhcmdldCIsImRhdGFzZXQiLCJjdXJyIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVDdXJyZW50VGFiIiwibG9hZFRhYiIsInRhYkNyZWF0b3IiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9