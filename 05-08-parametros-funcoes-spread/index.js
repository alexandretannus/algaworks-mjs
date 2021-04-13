const ingredients = ['ovo', 'presunto']
const spices = ['sal', 'pimenta']

// adiciona o array spices dentro de ingredients
// ingredients.push(spices)

// adiciona o conteúdo do array spices dentro de ingredients
// ingredients.push.apply(ingredients, spices) // forma do Javascript tradicional
ingredients.push(...spices) // utilizando spread operator
