const Footer = () => (

  <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-center sm:text-left">
        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Karthikeya Mohan
        </p>
        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          AI Engineer • Machine Learning • Intelligent Systems
        </p>
      </div>


  <div className="flex items-center gap-6">
    <a
      href="https://github.com/KarthikeyatheDev"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-white transition-colors"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/karthikeya-m-48516a288/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-white transition-colors"
    >
      LinkedIn
    </a>

    <a
      href="mailto:mkarthikeya122@gmail.com"
      className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-white transition-colors"
    >
      Email
    </a>

    <a
      href="tel:+919392745443"
      className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-white transition-colors"
    >
      Phone
    </a>
  </div>
</div>
{/* 
<div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-900">
  <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
    © {new Date().getFullYear()} Karthikeya Mohan. Open to AI Engineering, Machine Learning, and Software Engineering opportunities.
  </p>
</div> */}

  </footer>
);

export default Footer;