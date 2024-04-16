const questions = [
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Japanese Anime &amp; Manga',
    question:
      'In the &quot;Re:Zero&quot; manga series, which of the following Sin Archbishops eats Rem&#039;s existence?',
    correct_answer: 'Ley Batenkaitos',
    incorrect_answers: ['Roy Alphard', 'Petelgeuse Romanee-Conti', 'Louis Arneb']
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment: Video Games',
    question: 'In Rust, how many Timed Explosive Charges does it take to destroy a Ladder Hatch?',
    correct_answer: '1',
    incorrect_answers: ['3', '2', '5']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Music',
    question: 'From which country does the piano originate?',
    correct_answer: 'Italy',
    incorrect_answers: ['Germany', 'Austria', 'France']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Video Games',
    question: 'What is the main character of Metal Gear Solid 2?',
    correct_answer: 'Raiden',
    incorrect_answers: ['Solidus Snake', 'Big Boss', 'Venom Snake']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Geography',
    question: 'In which English county is Stonehenge?',
    correct_answer: 'Wiltshire',
    incorrect_answers: ['Somerset', 'Cumbria', 'Herefordshire']
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'General Knowledge',
    question:
      'What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?',
    correct_answer: 'Spruce Goose',
    incorrect_answers: ['Noah&#039;s Ark', 'Fat Man', 'Trojan Horse']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Film',
    question:
      'Who played Baron Victor Frankestein in the 1957 Hammer horror film &quot;The Curse of Frankenstein&quot;?',
    correct_answer: 'Peter Cushing',
    incorrect_answers: ['Boris Karloff', 'Vincent Price', 'Lon Chaney Jr.']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Music',
    question: '&quot;Lift Your Spirit&quot; is an album by which artist?',
    correct_answer: 'Aloe Blacc',
    incorrect_answers: ['Lena Meyer-Landrut', 'Stevie Wonder', 'Taylor Swift']
  },
  {
    type: 'boolean',
    difficulty: 'medium',
    category: 'Science: Computers',
    question: 'MacOS is based on Linux.',
    correct_answer: 'False',
    incorrect_answers: ['True']
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Sports',
    question: 'With which doubles partner did John McEnroe have most success?',
    correct_answer: 'Peter Fleming',
    incorrect_answers: ['Mark Woodforde', 'Michael Stich', 'Mary Carillo']
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Geography',
    question: 'How many countries border Kyrgyzstan?',
    correct_answer: '4',
    incorrect_answers: ['3', '1', '6']
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Science: Computers',
    question:
      'What is the name of the process that sends one qubit of information using two bits of classical information?',
    correct_answer: 'Quantum Teleportation',
    incorrect_answers: ['Super Dense Coding', 'Quantum Entanglement', 'Quantum Programming']
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Animals',
    question: 'How many known living species of hyenas are there?',
    correct_answer: '4',
    incorrect_answers: ['8', '2', '6']
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'General Knowledge',
    question:
      'Which church&#039;s interior in Vatican City was designed in 1503 by renaissance architects including Bramante, Michelangelo and Bernini?',
    correct_answer: 'St. Peter&#039;s Basilica',
    incorrect_answers: ['Catania Cathedral', 'St. Mark&rsquo;s Basilica', 'The Duomo of Florence']
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Entertainment: Music',
    question:
      'Which member of the English band &quot;The xx&quot; released their solo album &quot;In Colour&quot; in 2015?',
    correct_answer: 'Jamie xx',
    incorrect_answers: ['Romy Madley Croft', 'Oliver Sim', 'Baria Qureshi']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'History',
    question: 'In what year did the First World War end?',
    correct_answer: '1918',
    incorrect_answers: ['1914', '1916', '1912']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Film',
    question: 'Who played Batman in the 1997 film &quot;Batman and Robin&quot;?',
    correct_answer: 'George Clooney',
    incorrect_answers: ['Michael Keaton', 'Val Kilmer', 'Christian Bale']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'General Knowledge',
    question:
      'The new One World Trade Center in Manhattan, New York City was designed by which architect? ',
    correct_answer: 'David Childs',
    incorrect_answers: ['Bjarke Ingels', 'Michael Arad', 'Fumihiko Maki']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'History',
    question: 'Which Roman Emperor led the Roman Empire to reach its maximum territorial extent?',
    correct_answer: 'Trajan',
    incorrect_answers: ['Julius Caesar', 'Claudius', 'Constantine the Great']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Music',
    question:
      'Which of these Johns was murdered by gunshots outside the Dakota in New York in 1980?',
    correct_answer: 'John Lennon',
    incorrect_answers: ['Johnny Thunders', 'John Denver', 'John Cascella']
  },
  {
    type: 'boolean',
    difficulty: 'medium',
    category: 'Science: Mathematics',
    question: 'The set of all algebraic numbers is countable.',
    correct_answer: 'True',
    incorrect_answers: ['False']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Film',
    question:
      'How much money did the 2019 Marvel movie &quot;Avengers: Endgame&quot; grossed for it&#039;s record-breaking worldwide opening weekend?',
    correct_answer: '1.2 billion USD',
    incorrect_answers: ['640 million USD', '456 million USD', '392 million USD']
  },
  {
    type: 'boolean',
    difficulty: 'medium',
    category: 'Science: Computers',
    question:
      'The last Windows operating system to be based on the Windows 9x kernel was Windows 98.',
    correct_answer: 'False',
    incorrect_answers: ['True']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Video Games',
    question: 'Final Fantasy VI was originally released outside Japan under what name?',
    correct_answer: 'Final Fantasy III',
    incorrect_answers: ['Final Fantasy VI', 'Final Fantasy V', 'Final Fantasy II']
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Geography',
    question: 'What is the capital of Spain?',
    correct_answer: 'Madrid',
    incorrect_answers: ['Barcelona', 'Sevilla', 'Toledo']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Board Games',
    question:
      'At the start of a standard game of the Monopoly, if you throw a double six, which square would you land on?',
    correct_answer: 'Electric Company',
    incorrect_answers: ['Water Works', 'Chance', 'Community Chest']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Video Games',
    question:
      'In the Pok&eacute;mon series, which type is Sudowoodo, the Imitation Pok&eacute;mon?',
    correct_answer: 'Rock',
    incorrect_answers: ['Grass', 'Bug', 'Ground']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Video Games',
    question: 'What is the subtitle for Gran Turismo 3?',
    correct_answer: 'A-Spec',
    incorrect_answers: ['Championship', 'Drive', 'Nitro']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Video Games',
    question:
      'In Left 4 Dead, what is the name of the Special Infected that is unplayable in Versus mode?',
    correct_answer: 'The Witch',
    incorrect_answers: ['The Tank', 'The Smoker', 'The Spitter']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Video Games',
    question: 'What was the name of the first MMORPG to popularize the genre?',
    correct_answer: 'Ultima Online',
    incorrect_answers: ['World of Warcraft', 'Meridian 59', 'Guild Wars']
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'General Knowledge',
    question: 'Which company did Valve cooperate with in the creation of the Vive?',
    correct_answer: 'HTC',
    incorrect_answers: ['Oculus', 'Google', 'Razer']
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Animals',
    question: 'What is the collective noun for vultures?',
    correct_answer: 'Wake',
    incorrect_answers: ['Ambush', 'Building', 'Gaze']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Vehicles',
    question: 'Which of these cars is NOT considered one of the 5 Modern Supercars by Ferrari?',
    correct_answer: 'Testarossa',
    incorrect_answers: ['Enzo Ferrari', 'F40', '288 GTO']
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'General Knowledge',
    question: 'Who founded the Khan Academy?',
    correct_answer: 'Sal Khan',
    incorrect_answers: ['Ben Khan', 'Kitt Khan', 'Adel Khan']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Science &amp; Nature',
    question:
      'When the Falcon Heavy was launched on it&#039;s test flight, what was the only part of the operation that failed?',
    correct_answer: 'Center Core Landing',
    incorrect_answers: ['Side Booster Landing', 'Deployment of Starman', 'Ignition and Liftoff']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'History',
    question: 'Who assassinated Archduke Franz Ferdinand?',
    correct_answer: 'Gavrilo Princip',
    incorrect_answers: ['Nedeljko Čabrinović', 'Oskar Potiorek', 'Ferdinand Cohen-Blind']
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment: Video Games',
    question:
      'In the Assassin&#039;s Creed series,what was the name of Desmond Miles given by Abstergo?',
    correct_answer: 'Subject 17',
    incorrect_answers: ['Subject 16', 'Subject 18', 'Alta&iuml;r Ibn-La&#039;Ahad']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Animals',
    question: 'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
    correct_answer: 'Nuts',
    incorrect_answers: ['Nothing', 'Fruit', 'Seaweed']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'General Knowledge',
    question: 'What is the name of the very first video uploaded to YouTube?',
    correct_answer: 'Me at the zoo',
    incorrect_answers: ['tribute', 'carrie rides a truck', 'Her new puppy from great grandpa vern.']
  },
  {
    type: 'boolean',
    difficulty: 'easy',
    category: 'Science: Mathematics',
    question: 'The &#039;Squaring the Circle&#039; problem is solvable.',
    correct_answer: 'False',
    incorrect_answers: ['True']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Geography',
    question: 'How many sovereign states are members of the United Nations?',
    correct_answer: '195',
    incorrect_answers: ['201', '153', '178']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Science: Computers',
    question:
      'In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?',
    correct_answer: 'print(&quot;Hello World&quot;)',
    incorrect_answers: [
      'console.log(&quot;Hello World&quot;)',
      'echo &quot;Hello World&quot;',
      'printf(&quot;Hello World&quot;)'
    ]
  },
  {
    type: 'boolean',
    difficulty: 'medium',
    category: 'General Knowledge',
    question:
      'The word &quot;news&quot; originates from the first letters of the 4 main directions on a compass (North, East, West, South).',
    correct_answer: 'False',
    incorrect_answers: ['True']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Video Games',
    question:
      'Which of the following is not a prosecutor in the &quot;Ace Attorney&quot; video game series?',
    correct_answer: 'Jake Marshall',
    incorrect_answers: ['Godot', 'Miles Edgeworth', 'Jacques Portsman']
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Geography',
    question: 'What national museum will you find in Cooperstown, New York?',
    correct_answer: 'National Baseball Hall of Fame',
    incorrect_answers: [
      'Metropolitan Museum of Art',
      'National Toy Hall of Fame',
      'Museum of Modern Art'
    ]
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment: Books',
    question:
      'What was the first ever entry written for the SCP Foundation collaborative writing project?',
    correct_answer: 'SCP-173',
    incorrect_answers: ['SCP-001', 'SCP-999', 'SCP-1459']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Video Games',
    question:
      'Which stage was planned to be a part of &quot;Sonic the Hedgehog 2&quot;, but was scrapped during development?',
    correct_answer: 'Genocide City Zone',
    incorrect_answers: ['Stardust Speedway Zone', 'Sky High Zone ', 'Clockwork Zone']
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Entertainment: Music',
    question:
      'Who recorded the 1975 album &#039;Captain Fantastic and the Brown Dirt Cowboy&#039;?',
    correct_answer: 'Elton John',
    incorrect_answers: ['John Denver', 'Billy Joel', 'Joe Cocker']
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Science: Computers',
    question: 'Who invented the &quot;Spanning Tree Protocol&quot;?',
    correct_answer: 'Radia Perlman',
    incorrect_answers: ['Paul Vixie', 'Vint Cerf', 'Michael Roberts']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'History',
    question:
      'John Moses Browning, the designer of the M1918 BAR (Browning Automatic Rifle) was a part of which religion?',
    correct_answer: 'Mormon',
    incorrect_answers: ['Catholic', 'Jewish', 'Atheist']
  }
]

export { questions }
