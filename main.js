const contractedBrailleMap = {
    // Lesson 1-3 | Alphabet
    "A": "⠠⠁", "B": "⠠⠃", "C": "⠠⠉", "D": "⠠⠙", "E": "⠠⠑", "F": "⠠⠋", "G": "⠠⠛", "H": "⠠⠓", "I": "⠠⠊", "J": "⠚", 
    "K": "⠠⠅", "L": "⠠⠇", "M": "⠠⠍", "N": "⠠⠝", "O": "⠠⠕", "P": "⠠⠏", "Q": "⠠⠟", "R": "⠠⠗", "S": "⠠⠎", "T": "⠠⠞", 
    "U": "⠠⠥", "V": "⠠⠧", "W": "⠠⠺", "X": "⠠⠭", "Y": "⠠⠽", "Z": "⠠⠵",
    "a": "⠁", "b": "⠃", "c": "⠉", "d": "⠙", "e": "⠑", "f": "⠋", "g": "⠛", "h": "⠓", "i": "⠊", "j": "⠚", 
    "k": "⠅", "l": "⠇", "m": "⠍", "n": "⠝", "o": "⠕", "p": "⠏", "q": "⠟", "r": "⠗", "s": "⠎", "t": "⠞", 
    "u": "⠥", "v": "⠧", "w": "⠺", "x": "⠭", "y": "⠽", "z": "⠵",
    
    // Lesson 4 | Numbers
    "1": "⠼⠁", "2": "⠼⠃", "3": "⠼⠉", "4": "⠼⠙", "5": "⠼⠑", "6": "⠼⠋", "7": "⠼⠛", "8": "⠼⠓", "9": "⠼⠊", "0": "⠼⠚",
    
    // Lesson 5 | Letter contractions
    "But": "⠠⠃", "Can": "⠠⠉", "Do": "⠠⠙", "Every": "⠠⠑", "From": "⠠⠋", "Go": "⠠⠛", "Have": "⠠⠓", "Just": "⠠⠚", "Knowledge": "⠠⠅", "Like": "⠠⠇", "More": "⠠⠍", "Not": "⠠⠝", "Oh": "⠠⠕", "People": "⠠⠏", "Quite": "⠠⠟", "Rather": "⠠⠗", "So": "⠠⠎", "That": "⠠⠞", "Us": "⠠⠥", "Very": "⠠⠧", "Will": "⠠⠺", "It": "⠠⠭", "You": "⠠⠽", "As": "⠠⠵",
    "but": "⠃", "can": "⠉", "do": "⠙", "every": "⠑", "from": "⠋", "go": "⠛", "have": "⠓", "just": "⠚", "knowledge": "⠅", "like": "⠇", "more": "⠍", "not": "⠝", "oh": "⠕", "people": "⠏", "quite": "⠟", "rather": "⠗", "so": "⠎", "that": "⠞", "us": "⠥", "very": "⠧", "will": "⠺", "it": "⠭", "you": "⠽", "as": "⠵",
    
    // Lesson 6 | basic punctuation & caps sign
    " ": " ", ",": "⠂", "’": "⠄",
    
    // Lesson 7 | other basic punctuation
    "?": "⠦", "!": "⠖", ".": "⠲", "-": "⠤", 
    
    // Lesson 8 | letter combo contractions
    "About": "⠠⠁⠃", "Above": "⠠⠁⠃⠧", "According": "⠠⠁⠉", "Across": "⠠⠁⠉⠗", "After": "⠠⠁⠋",  "Afternoon": "⠠⠁⠋⠝", "Afterward": "⠠⠁⠋⠺", "Also": "⠠⠁⠇", "Almost": "⠠⠁⠇⠍", "Already": "⠠⠁⠇⠗", "Altogether": "⠠⠁⠇⠞", "Always": "⠠⠁⠇⠺", "Blind": "⠠⠃⠇", "Braille": "⠠⠃⠗⠇", "Again": "⠠⠁⠛", "Either": "⠠⠑⠊", "Friend": "⠠⠋⠗", "Good": "⠠⠛⠙", "Great": "⠠⠛⠗⠞", "Him": "⠠⠓⠍", "Immediate": "⠠⠊⠍⠍", "Little": "⠠⠇⠇", "Letter": "⠠⠇⠗", "Necessary": "⠠⠝⠑⠉", "Neither": "⠠⠝⠑⠊", "Paid": "⠠⠏⠙", "Quick": "⠠⠟⠅", "Said": "⠠⠎⠙", "Today": "⠠⠞⠙", "Together": "⠠⠞⠛⠗", "Tonight": "⠠⠞⠝", "Tomorrow": "⠠⠞⠍", "Would": "⠠⠺⠙", "Its": "⠠⠭⠎", "It’s": "⠠⠭⠄⠎",
    "about": "⠁⠃", "above": "⠁⠃⠧", "according": "⠁⠉", "across": "⠁⠉⠗", "after": "⠁⠋",  "afternoon": "⠁⠋⠝", "fterward": "⠁⠋⠺", "also": "⠁⠇", "almost": "⠁⠇⠍", "already": "⠁⠇⠗", "altogether": "⠁⠇⠞", "always": "⠁⠇⠺", "blind": "⠠⠃⠇", "braille": "⠃⠗⠇", "again": "⠁⠛", "either": "⠑⠊", "friend": "⠋⠗", "good": "⠛⠙", "great": "⠛⠗⠞", "him": "⠓⠍", "immediate": "⠊⠍⠍", "little": "⠇⠇", "letter": "⠇⠗", "necessary": "⠝⠑⠉", "neither": "⠝⠑⠊", "paid": "⠏⠙", "quick": "⠟⠅", "said": "⠎⠙", "today": "⠞⠙", "together": "⠞⠛⠗", "tonight": "⠞⠝", "tomorrow": "⠞⠍", "would": "⠺⠙", "its": "⠭⠎", "it’s": "⠭⠄⠎",
    
    // Lesson 9 | And For Of The With
    "And": "⠠⠯", "For": "⠠⠿", "Of": "⠠⠷", "The": "⠠⠮", "With": "⠠⠫",
    "and": "⠠⠯", "for": "⠠⠿", "of": "⠠⠷", "the": "⠠⠮", "with": "⠠⠫",
    
    // Lesson 10
    "Ch": "⠠⠡", "Child": "⠠⠡", "Gh": "⠠⠣", "Sh": "⠠⠩", "Shall": "⠠⠩", "Th": "⠠⠹", "This": "⠠⠹", "Wh": "⠠⠱", "Which": "⠠⠱",
    "ch": "⠡", "child": "⠡", "gh": "⠣", "sh": "⠩", "shall": "⠩", "th": "⠹", "this": "⠹", "wh": "⠱", "which": "⠱",
    
    // Lesson 11 | sufixes
    "Ed": "⠠⠫", "Er": "⠠⠻", "Ou": "⠠⠳", "Out": "⠠⠳", "Ow": "⠠⠪",
    "ed": "⠫", "er": "⠻", "ou": "⠳", "out": "⠳", "ow": "⠪",
    
    // Lesson 12
    "St": "⠠⠌", "Still": "⠠⠌", "st": "⠌", "still": "⠌", "Ar": "⠠⠜", "ar": "⠜", "ing": "⠬",
    
    // Lesson 13
    "Although": "⠠⠁⠇⠹", "Against": "⠠⠁⠛⠌", "Children": "⠠⠡⠝", "First": "⠠⠋⠌", "Much": "⠠⠍⠡", "Must": "⠠⠍⠌", "Should": "⠠⠩⠙", "Such": "⠠⠎⠡", "Perhaps": "⠠⠏⠻⠓",
    "although": "⠁⠇⠹", "against": "⠁⠛⠌", "children": "⠡⠝", "first": "⠋⠌", "much": "⠍⠡", "must": "⠍⠌", "should": "⠩⠙", "such": "⠎⠡", "perhaps": "⠏⠻⠓",
    
    // Lesson 14 | dot 5 contractions
    "Day": "⠠⠐⠙", "Ever": "⠠⠐⠑", "Father": "⠠⠐⠋", "Here": "⠠⠐⠓", "Know": "⠠⠐⠅", "Lord": "⠠⠐⠇", "Mother": "⠠⠐⠍", "Name": "⠠⠐⠝", "One": "⠠⠐⠕", "Part": "⠠⠐⠏", "Question": "⠠⠐⠟", "Right": "⠠⠐⠗", "Some": "⠠⠐⠎", "Time": "⠠⠐⠞", "Under": "⠠⠐⠥", "Work": "⠠⠐⠺", "Young": "⠠⠐⠽", "Character": "⠠⠐⠡", "Through": "⠠⠐⠹", "Ought": "⠠⠐⠳", "There": "⠠⠐⠮", "Where": "⠠⠐⠱",
    "day": "⠐⠙", "ever": "⠐⠑", "father": "⠐⠋", "here": "⠐⠓", "know": "⠐⠅", "lord": "⠐⠇", "mother": "⠐⠍", "name": "⠐⠝", "one": "⠐⠕", "part": "⠐⠏", "question": "⠐⠟", "right": "⠐⠗", "some": "⠐⠎", "time": "⠐⠞", "under": "⠐⠥", "work": "⠐⠺", "young": "⠐⠽", "character": "⠐⠡", "through": "⠐⠹", "ought": "⠐⠳", "there": "⠐⠮", "where": "⠐⠱",
    
    // Lesson 15 | upon these words whose flowers are those
    "Upon": "⠠⠘⠥", "Word": "⠠⠘⠺", "These": "⠠⠘⠮", "Those": "⠠⠘⠹", "Whose": "⠠⠘⠱",
    "upon": "⠘⠥", "word": "⠘⠺", "these": "⠘⠮", "those": "⠘⠹", "whose": "⠘⠱",
    
    // Lesson 16 | dots-4-5-6 contractions
    "Cannot": "⠠⠸⠉", "Had": "⠠⠸⠓", "Many": "⠠⠸⠍", "Spirit": "⠠⠸⠎", "World": "⠠⠸⠺", "Their": "⠠⠸⠮",
    "cannot": "⠸⠉", "had": "⠸⠓", "many": "⠸⠍", "spirit": "⠸⠎", "world": "⠸⠺", "their": "⠸⠮",
    
    // Lesson 17 | f stands for self - vs stands for selves - g stands for ing
    "Herself": "⠠⠓⠻⠋", "Himself": "⠠⠓⠍⠋", "Myself": "⠠⠍⠽⠋", "Yourself": "⠠⠽⠗⠋", "Ourselves": "⠠⠳⠗⠧⠎", "Thyself": "⠠⠹⠽⠋", "Yourselves": "⠠⠽⠗⠧⠎", "Oneself": "⠠⠐⠕⠋", "Themselves": "⠠⠮⠍⠧⠎", "Itself": "⠠⠭⠋", "Deceiving": "⠠⠙⠉⠧⠛", "Deceive": "⠠⠙⠉⠧", "Perceiving": "⠠⠏⠻⠉⠧⠛", "Perceive": "⠠⠏⠻⠉⠧", "Receiving": "⠠⠗⠉⠧⠛", "Receive": "⠠⠗⠉⠧", "Declaring": "⠠⠙⠉⠇⠛", "Declare": "⠠⠙⠉⠇", "Rejoicing": "⠠⠗⠚⠉⠛", "Rejoice": "⠠⠗⠚⠉",
    "herself": "⠓⠻⠋", "himself": "⠓⠍⠋", "myself": "⠍⠽⠋", "yourself": "⠽⠗⠋", "ourselves": "⠳⠗⠧⠎", "thyself": "⠹⠽⠋", "yourselves": "⠽⠗⠧⠎", "oneself": "⠐⠕⠋", "themselves": "⠮⠍⠧⠎", "itself": "⠭⠋", "deceiving": "⠙⠉⠧⠛", "deceive": "⠙⠉⠧", "perceiving": "⠏⠻⠉⠧⠛", "perceive": "⠏⠻⠉⠧", "receiving": "⠗⠉⠧⠛", "receive": "⠗⠉⠧", "declaring": "⠙⠉⠇⠛", "declare": "⠙⠉⠇", "rejoicing": "⠗⠚⠉⠛", "rejoice": "⠗⠚⠉", 
    
    // Lesson 18
    "ound": "⠨⠙", "ance": "⠨⠑", "sion": "⠨⠝", "less": "⠨⠎", "ount": "⠨⠞",
    
    // Lesson 19
    "ence": "⠰⠑", "tion": "⠰⠝", "ness": "⠰⠎", "ong": "⠰⠛", "full": "⠰⠇", "ity": "⠰⠽", "ment": "⠰⠞",
    
    // Lesson 20
    "En": "⠠⠢", "Enough": "⠠⠢", "en": "⠢", "enough": "⠢", "In": "⠠⠔", "in": "⠔",
    
    // Lesson 21 | used alone but not next to lowered punctionation
    "Be": "⠠⠆", "His": "⠠⠦", "Was": "⠠⠴", "Were": "⠠⠶",
    "be": "⠆", "his": "⠦", "was": "⠴", "were": "⠶",
    // be is also used at the beginning of words that make the sound be such as before or become
    
    // Lesson 22 | used only in the middle of word
    "ea": "⠂", "bb": "⠆", "cc": "⠒", "ff": "⠖", "gg": "⠶",
    
    // Lesson 23 | used only at the beginning of words
    "Con": "⠠⠒", "Dis": "⠠⠲",
    "con": "⠒", "dis": "⠲",
    
    // Lesson 24 | Contractions with other contractions in them
    "Conceive": "⠠⠒⠉⠧", "Conceiving": "⠠⠒⠉⠧⠛", "Because": "⠠⠆⠉", "Before": "⠠⠆⠋", "Behind": "⠠⠆⠓", "Below": "⠠⠆⠇", "Beneath": "⠠⠆⠝", "Beyond": "⠠⠆⠽", "Beside": "⠠⠆⠎", "Between": "⠠⠆⠞",
    "conceive": "⠒⠉⠧", "conceiving": "⠒⠉⠧⠛", "because": "⠆⠉", "before": "⠆⠋", "behind": "⠆⠓", "below": "⠆⠇", "beneath": "⠆⠝", "beyond": "⠆⠽", "beside": "⠆⠎", "between": "⠆⠞",
    
    // Lesson 25 | Punctuation & signs
    ";": "⠆", ":": "⠒", "@": "⠈⠁", "#": "⠸⠹", "$": "⠈⠎", "•": "⠸⠲", "%": "⠨⠴", "–": "⠠⠤",
    
    // Lesson 26 | Punctuation
    "“": "⠦", "”": "⠴", '"': "⠴", "‘": "⠠⠦", "'": "⠠⠴", "(": "⠐⠣", ")": "⠐⠜", "[": "⠨⠣", "]": "⠨⠜", "<": "⠈⠣", ">": "⠈⠜",
    
    "Can’t": "⠠⠉⠁⠝⠄⠞", "Don’t": "⠠⠙⠕⠝⠄⠞", "Haven’t": "⠠⠓⠁⠧⠑⠝⠄⠞", "That’s": "⠠⠓⠁⠧⠑⠝⠄⠞",
    "can’t": "⠉⠁⠝⠄⠞", "don’t": "⠙⠕⠝⠄⠞", "haven’t": "⠓⠁⠧⠑⠝⠄⠞", "that’s": "⠓⠁⠧⠑⠝⠄⠞",
};

const uncontractedBrailleMap = {
    // Lesson 1-3 | Alphabet
    "A": "⠠⠁", "B": "⠠⠃", "C": "⠠⠉", "D": "⠠⠙", "E": "⠠⠑", "F": "⠠⠋", "G": "⠠⠛", "H": "⠠⠓", "I": "⠠⠊", "J": "⠚", 
    "K": "⠠⠅", "L": "⠠⠇", "M": "⠠⠍", "N": "⠠⠝", "O": "⠠⠕", "P": "⠠⠏", "Q": "⠠⠟", "R": "⠠⠗", "S": "⠠⠎", "T": "⠠⠞", 
    "U": "⠠⠥", "V": "⠠⠧", "W": "⠠⠺", "X": "⠠⠭", "Y": "⠠⠽", "Z": "⠠⠵",
    "a": "⠁", "b": "⠃", "c": "⠉", "d": "⠙", "e": "⠑", "f": "⠋", "g": "⠛", "h": "⠓", "i": "⠊", "j": "⠚", 
    "k": "⠅", "l": "⠇", "m": "⠍", "n": "⠝", "o": "⠕", "p": "⠏", "q": "⠟", "r": "⠗", "s": "⠎", "t": "⠞", 
    "u": "⠥", "v": "⠧", "w": "⠺", "x": "⠭", "y": "⠽", "z": "⠵",
    
    // Lesson 4 | Numbers
    "1": "⠼⠁", "2": "⠼⠃", "3": "⠼⠉", "4": "⠼⠙", "5": "⠼⠑", "6": "⠼⠋", "7": "⠼⠛", "8": "⠼⠓", "9": "⠼⠊", "0": "⠼⠚",
    
    // Lesson 6 | basic punctuation & caps sign
    " ": " ", ",": "⠂", "’": "⠄",
    
    // Lesson 7 | other basic punctuation
    "?": "⠦", "!": "⠖", ".": "⠲", "-": "⠤",
    
    // Lesson 25 | Punctuation & signs
    ";": "⠆", ":": "⠒", "@": "⠈⠁", "#": "⠸⠹", "$": "⠈⠎", "•": "⠸⠲", "%": "⠨⠴", "–": "⠠⠤",
    
    // Lesson 26 | Punctuation
    "“": "⠦", "”": "⠴", '"': "⠴", "‘": "⠠⠦", "'": "⠠⠴", "(": "⠐⠣", ")": "⠐⠜", "[": "⠨⠣", "]": "⠨⠜", "<": "⠈⠣", ">": "⠈⠜",
};

function convertToBraille(text, mode) {
    const map = mode === "contracted" ? contractedBrailleMap : uncontractedBrailleMap;
    let brailleText = "";
    const words = text.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let contractedWord = "";
        if (mode === "contracted") {
            contractedWord = contractWord(word, map);
        } else {
            contractedWord = convertWordUncontracted(word, map);
        }
        brailleText += contractedWord + " ";
    }
    return brailleText.trim();
    
    function contractWord(word, map) {
        let result = "";
        let i = 0;
        while (i < word.length) {
            let foundContraction = false;

            // Check if the current character is an apostrophe or punctuation
            if (["'", ".", ",", "?", "!"].includes(word[i])) {
                result += map[word[i]] || word[i]; // Use Braille symbol or original
                i++;
                continue; // Skip contraction check
            }

            // Prioritize Multi-letter contractions (4, 3, 2 chars)
            for (let len = 4; len > 0; len--) {
                if (i + len <= word.length) {
                    const chunk = word.substring(i, i + len);
                    if (map[chunk]) {
                        result += map[chunk];
                        i += len;
                        foundContraction = true;
                        break;
                    }
                }
            }

            // If still not found attempt character contractions
            if (!foundContraction) {
                const char = word[i];
                if (map[char]) {
                    result += map[char];
                } else {
                    result += char; // Handle chars not in map (including punctuation)
                }
                i++;
            }
        }
        return result;
    }

    function convertWordUncontracted(word, map) {
        let result = "";
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (char === char.toUpperCase() && char.match(/[A-Z]/)) {
                result += map[char]; // Capital letter
            } else {
                result += map[char] || char; // Lowercase or other characters
            }
        }
        return result;
    }
}

function updateBraille() {
    const inputText = document.getElementById("inputText").value;
    const mode = document.querySelector('input[name="brailleMode"]:checked').value;
    const brailleText = convertToBraille(inputText, mode);
    document.getElementById("brailleOutput").textContent = brailleText;
    navigator.clipboard.writeText(brailleText).catch(err => console.error("Clipboard copy failed: ", err));
}

document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copyBtn');
    function copyToClipboard() {
        navigator.clipboard.writeText(output.textContent)
            .then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = 'Copy to Clipboard', 2000);
            })
            .catch(err => console.error('Failed to copy: ', err));
    }
});

document.getElementById("inputText").addEventListener("input", updateBraille);
document.querySelectorAll('input[name="brailleMode"]').forEach(radio => radio.addEventListener("change", updateBraille));