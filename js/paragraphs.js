const languageSelector = document.getElementById("select-language");

// When a new <option> is selected in the langauge tab
function selectLanguage() {
    const index = languageSelector.selectedIndex;


    if (index == 0){
        console.log(index)
        paragraphs = [
            "Change can be scary, but it's often necessary for growth and progress. Embrace the unknown and be open to new experiences. You never know where life may take you, but if you trust yourself and have faith in the journey, you'll find your way to where you're meant to be.",
            "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
            "Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. While this wasn't something completely unheard of, it also wasn't normal. It was a sure sign of what was going to happen that day.",
            "The piano sat silently in the corner of the room. Nobody could remember the last time it had been played. The little girl walked up to it and hit a few of the keys. The sound of the piano rang throughout the house for the first time in years. In the upstairs room, confined to her bed, the owner of the house had tears in her eyes.",
            "She closed her eyes and then opened them again. What she was seeing just didn't make sense. She shook her head seeing if that would help. It didn't. Although it seemed beyond reality, there was no denying she was witnessing a large formation of alien spaceships filling the sky.",
            "It was hidden under the log beside the stream. It had been there for as long as Jerry had been alive. He wasn't sure if anyone besides him and his friends knew of its existence. He knew that anyone could potentially find it, but it was well enough hidden that it seemed unlikely to happen.",
            "He stared out the window at the snowy field. He'd been stuck in the house for close to a month and his only view of the outside world was through the window. There wasn't much to see. It was mostly just the field with an occasional bird or small animal who ventured into the field.",
            "A long black shadow slid across the pavement near their feet and the five Venusians, very much startled, looked overhead. They were barely in time to see the huge gray form of the carnivore before it vanished behind a sign atop a nearby building which bore the mystifying information Pepsi-Cola.",
            "There was only one way to do things in the Statton house. That one way was to do exactly what the father, Charlie, demanded. He made the decisions and everyone else followed without question. That was until today.",
            "The irony of the situation hadn't escaped her. She had taken years to sculpt the perfect persona with the perfect look that she shared on Instagram. She knew her hundreds of thousands of followers envied that life she showed and stayed engaged with her because they wanted that life too.",
            "Have you ever wondered about toes? Why 10 toes and not 12. Why are some bigger than others? Some people can use their toes to pick up things while others can barely move them on command. Some toes are nice to look at while others are definitely not something you want to look at.",
            "Life is full of challenges, and sometimes it can feel overwhelming. But it's important to remember that you are stronger than you think. You have the power to overcome any obstacle and achieve your goals. Believe in yourself and keep moving forward.",
            "Stormi is a dog. She is dark grey and has long legs. Her eyes are expressive and are able to let her humans know what she is thinking. Her tongue is long, pink, and wet. Her long legs allow her to sprint after other dogs, people or bunnies. She can be a good dog, but also very bad.",
            "Dragons don't exist they said. They are the stuff of legend and people's imagination. Greg would have agreed with this assessment without a second thought 24 hours ago. But now that there was a dragon staring directly into his eyes, he questioned everything that he had been told.",
            "Success is not always measured by how much money you make or how many awards you receive. True success is about living a life that is fulfilling and meaningful to you. It's about doing what you love, making a positive impact, and finding happiness in the journey.",
        ];
        randomParagraph();
        reloadStats();
    }
    if (index == 1){
        paragraphs = [
                "En medio del bosque, un rayo de sol se filtraba entre las ramas de los árboles, iluminando el camino que se extendía ante mis ojos. El canto de los pájaros resonaba en el aire, creando una melodía armoniosa que llenaba el ambiente de paz y serenidad. El aroma de la hierba húmeda impregnaba mis sentidos mientras avanzaba con paso decidido hacia mi destino.",
                "En la tranquila playa, las olas rompían suavemente en la orilla, formando espumas blancas que se desvanecían lentamente en la arena. El viento acariciaba mi rostro mientras contemplaba el horizonte, donde el sol comenzaba a descender, tiñendo el cielo de tonos cálidos y dorados.",
                "En el bullicioso mercado, los vendedores anunciaban sus productos con entusiasmo, creando un ambiente animado y colorido. El aroma de las especias y los sabores exóticos despertaban mi curiosidad culinaria, invitándome a probar nuevos platillos y descubrir nuevos sabores.",
                "En la cima de la montaña, el viento soplaba con fuerza, despeinando mi cabello y llenando mis pulmones de aire fresco. La vista panorámica era simplemente impresionante: un paisaje de majestuosas montañas cubiertas de vegetación, lagos cristalinos y valles verdes que se extendían hasta el horizonte.",
                "En la acogedora biblioteca, el suave murmullo de las páginas al pasar se mezclaba con el sonido de las teclas de las máquinas de escribir antiguas. El aroma a papel y tinta impregnaba el ambiente, transportándome a mundos de fantasía y conocimiento. Me sumergí en la lectura, dejando que las palabras me envolvieran y me llevaran a lugares lejanos y tiempos pasados.",
                "En el bullicioso mercado, los colores vibrantes de las frutas y verduras llenaban los puestos, creando un festín visual para los sentidos. El aroma de las especias y hierbas frescas flotaba en el aire, despertando mi apetito y mi curiosidad culinaria. Me dejé llevar por la multitud, degustando sabores exóticos y descubriendo nuevos ingredientes que añadirían magia a mis creaciones culinarias.",
                "En el jardín botánico, los senderos serpenteantes me llevaban a través de una variedad de plantas exóticas y flores deslumbrantes. Los rayos del sol se filtraban entre las hojas, creando juegos de sombras y luces que bailaban a mi alrededor. Respiré profundamente, llenando",
                "La brisa marina acaricia mi rostro mientras camino por la playa, llevándome a un estado de calma y serenidad que solo el mar puede proporcionar.",
                "El sonido de las hojas susurrando al viento en un bosque encantado me transporta a un mundo mágico y me hace sentir parte de la naturaleza.",
                "La risa de mi sobrino resonando en la habitación llena mi corazón de alegría y me recuerda la pureza y felicidad que se encuentra en los pequeños momentos.",
                "El aroma a café recién hecho invade la cocina, despertando mis sentidos y preparándome para disfrutar de una taza caliente que me brinda energía y confort.",
                "La suave melodía de un violín llena la sala de conciertos y me envuelve en un abrazo de emociones, transportándome a un lugar donde solo existe la música.",
                "El suave tacto de la arena entre mis dedos mientras construyo un castillo en la playa me conecta con mi niño interior y me regala momentos de diversión y creatividad.",
                "La luz dorada del amanecer tiñe el cielo y despierta la esperanza en mi corazón, recordándome que cada día es una oportunidad para comenzar de nuevo.",
                "El aroma suave y delicado de las velas encendidas crea un ambiente íntimo y acogedor, invitándome a relajarme y disfrutar de momentos de paz y serenidad en mi propio espacio.",
                "El murmullo suave de la lluvia golpeando el tejado crea una sinfonía relajante que me sumerge en un estado de calma y me permite disfrutar de una tarde de descanso y reflexión.",
                "La suave caricia del sol en mi rostro mientras caminaba por la playa me llenó de una sensación de bienestar y me conectó con la energía vital que emana de la naturaleza.",
                "El sabor dulce y jugoso de una fruta madura en pleno verano es un regalo refrescante que puedo saborear en cada mordisco, despertando mi paladar y deleitando mis sentidos con su frescura.",
        ];      
        randomParagraph();
        reloadStats();
    }
}

textArea.addEventListener("input", initTyping);
selectLanguage();


//