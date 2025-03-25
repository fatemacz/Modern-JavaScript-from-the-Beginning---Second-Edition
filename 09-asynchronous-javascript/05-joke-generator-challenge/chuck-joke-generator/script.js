const jokeEl = document.getElementById('joke');
const jokeLink = document.getElementById('joke-link');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                // console.log(JSON.parse(this.responseText));
                // console.log(JSON.parse(this.responseText).value);
                jokeEl.innerHTML = JSON.parse(this.responseText).value;
                jokeLink.href = JSON.parse(this.responseText).url;
                jokeLink.innerHTML = 'View Source';
            } else {
                jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
                jokeLink.href = '#';
                jokeLink.innerHTML = '';
            }
        }
    };

    xhr.send();
};

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
