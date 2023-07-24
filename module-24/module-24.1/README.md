## 1- DOM

Document object model -- ata HTML file ke object akare prokash kore

## 2. getElemtsByIdTagName

return kore - HTMLCollection(8) [li, li, li, li, li, li, li, li]

```javascript
const tagNmae = document.getElementsByTagName("li");

for (const item of tagNmae) {
  console.log(item.innerText);
}
```

## 3. Traversing dom - getElementsByClassName Vs getElementById

const classList = document.getElementsByClassName("mern-topic");
console.log(classList);
retucn kore- HTMLCollection(4) [li.mern-topic, li.mern-topic, li.mern-topic, li.mern-topic]
