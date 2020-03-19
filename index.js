import './styles.scss';

const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

const openTheLetter = () => {
  envelope.classList.add('envelope--open');
}

const readTheLetter = () => {
  envelope.classList.add('envelope--discard');
  letter.querySelectorAll('.page__turner').forEach(handlePageTurn);
}

const handlePageTurn = (el) => {
  const page = el.parentNode;
  el.addEventListener('click', () => letter.appendChild(page));
}

const initialise = () => {
  envelope.addEventListener('click', openTheLetter);
  letter.addEventListener('click', readTheLetter);
}

window.addEventListener('load', initialise);
