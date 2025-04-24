const customStyles = `
@keyframes breathe {
  0%, 100% { box-shadow: 0 0 15px rgba(239, 68, 68, 0.7); }
  50% { box-shadow: 0 0 30px rgba(239, 68, 68, 0.9); }
}

@keyframes slashEffect {
  0% { width: 0; transform: translateX(-50%); opacity: 0; }
  50% { width: 100%; transform: translateX(0); opacity: 1; }
  100% { width: 0; transform: translateX(50%); opacity: 0; }
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: rgb(239, 68, 68);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.active-nav::after {
  width: 100%;
}

.breathe-effect {
  animation: breathe 3s infinite ease-in-out;
}

.slash-animation::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.8), transparent);
  transform: translateY(-50%);
  animation: slashEffect 2s forwards;
  z-index: -1;
}

.bg-custom-gradient {
  background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%);
}
`;

export default customStyles;