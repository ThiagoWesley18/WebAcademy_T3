const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
//const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
//const insertY = ["the soup kitchen", "Disneyland", "the White House"];
//const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
const storyText = "Estavam 94 Fahrenheit lá fora, então :insertx: foi dar uma caminhada. Quando chegaram a :inserty:, ficaram olhando horrorizados por alguns momentos, depois :insertz:. Bob viu tudo, mas não ficou surpreso - :insertx: pesa 300 libras e era um dia quente.";
const insertX = ["Willy doende", "Paizão", "Papai Noel"];
const insertY = ["cozinha da sopa", "Disneyland", "a Casa Branca"];
const insertZ = ["espontaneamente explodiu", "derreteu em uma poça na calçada", "virou uma lesma e rastejou para longe"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;  
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);  
    
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.071429) + " stone";
        const temperature =  Math.round((94-32) * 5/9) + " centigrade";
        newStory = newStory.replace('94 Fahrenheit', temperature);
        newStory = newStory.replace('300 libras', weight);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}