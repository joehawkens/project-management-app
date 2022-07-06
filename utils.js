export function renderListWithTemplate(template, parent, list, callback) {
    list.forEach(item => {
      const clone = template.content.cloneNode(true);
      const templateWithData = callback(clone, item);
      parent.appendChild(templateWithData);
    })
  }