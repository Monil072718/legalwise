let recognition;
let isListening = false;
const micBtn = document.getElementById('mic-btn');
const userIp = document.getElementById('userIp');

micBtn.addEventListener('click', () => {
    if (!recognition) {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            userIp.value = transcript;

            if (e.results[0].isFinal) {
                stopRecognition();
            }
        });

        recognition.addEventListener('end', () => {
            if (isListening) recognition.start();
            else stopRecognition();
        });
    }

    if (isListening) {
        stopRecognition();
    } else {
        recognition.start();
        micBtn.innerHTML = '<i class="ri-mic-fill"></i>';
        isListening = true;
    }
});

function stopRecognition() {
    if (recognition) {
        recognition.stop();
    }
    micBtn.innerHTML = '<i class="ri-mic-line"></i>';
    isListening = false;
}


function sendQueryToServer(input) {
    const allChats = document.getElementById('all-chats');
    if (input.value == '') {
        alert("Please enter a query!");
        return;
    }
    const prefix = `
        Give me detailed answer of My question :- \n
    `;
    let userPrompt = input.value;
    allChats.innerHTML += `
    <div class="chat">
      <div class='user-icon'>
        <img src="images/user.jpg" width='30' height='30' alt="Not Found" />
      </div>
      <p class='txt'>${userPrompt}</p>
    </div>`;
    userPrompt = prefix + input.value;
    fetch('http://localhost:3001/generate-response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: userPrompt }),
    })
        .then(response => response.json())
        .then(data => {
            displayResponseWordByWord(data.responseData);
        })
        .catch(error => {
            console.error('Error sending request to server:', error);
            alert('Failed to communicate with the server.');
        });
    input.value = '';
}


function displayResponseWordByWord(response) {
    const allChats = document.getElementById('all-chats');
    const formattedResponse = response.replace(/\n/g, '<br>');
    const botResponseDiv = document.createElement('div');
    botResponseDiv.className = 'chat bot';
    const aiIconDiv = document.createElement('div');
    aiIconDiv.className = 'ai-icon';
    aiIconDiv.innerHTML = '<i class="ri-focus-2-line text-black"></i>';
    const p = document.createElement('p');
    p.className = 'txt';
    botResponseDiv.appendChild(aiIconDiv);
    botResponseDiv.appendChild(p);
    allChats.appendChild(botResponseDiv);
    let words = formattedResponse.split(/\s+/);
    let index = 0;
    let totalWords = words.length;
    let delay = Math.max(30, 3000 / totalWords);
    function appendWord() {
        if (index < totalWords) {
            p.innerHTML += words[index] + ' ';
            index++;
            if (index < totalWords) {
                setTimeout(appendWord, delay);
            }
        }
    }
    appendWord();
}