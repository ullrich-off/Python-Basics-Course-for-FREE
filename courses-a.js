/* Courses 1-3: Meet Python, Variables, Working with Text */
(function(){
var L=PC.L,C=PC.C,Q=PC.Q,tip=PC.tip,words=PC.words,go=PC.go,snip=PC.snip,out=PC.out;

PC.courses.push({id:'hello',cc:'c1',icon:'>>>',title:'Meet Python',blurb:'Write and run your very first programs. No experience needed.',
learn:['What code is, in plain words','How to make Python show messages with print()','What text (strings) and simple maths look like','How to read errors without panic'],
lessons:[
{t:'Your first program',s:'print() and quotes',steps:[
 L('What is code?',`<p>A computer is very fast, but it cannot guess what you mean. <b>Code</b> is a list of instructions that tells it exactly what to do, a bit like a recipe.</p><p><b>Python</b> is a language for writing those instructions. It is friendly and reads almost like English, which is why so many people start with it.</p>`+words(`<b>program</b>: a set of instructions.<br><b>run</b>: tell the computer to follow them.`)+`<p>Here is your first instruction. It tells Python to show a message on the screen:</p>`+snip(R`print("Hello, world!")`)+go(`Press <b>Run</b> on the right. What shows up in the Output box?`)+tip(`You cannot break anything here. Change the message and run it again as often as you like.`),R`print("Hello, world!")
`),
 C('Say something else',`<p>The words inside the quotes are what Python shows. Change them and Python shows something different.</p>`+go(`Make Python show exactly: <code>I am learning Python!</code>`),R`print("Hello, world!")
`,[{o:'I am learning Python!'}],`Only change the words between the quotes. Keep the quotes and both brackets.`,R`print("I am learning Python!")`),
 Q('What does print() do?',['Sends a page to your printer','Shows something on the screen','Saves your file','Deletes the text'],1,`In Python, <code>print</code> means "show this on the screen", not on paper.`),
 C('Two lines',`<p>Every <code>print()</code> starts a new line. Two prints give two lines.</p>`+go(`Show <code>Hello</code> on the first line and <code>Python</code> on the second line.`),R`print("Hello")
# Add a second print below
`,[{o:'Hello\nPython'}],`Add a new line of code: print("Python")`,R`print("Hello")
print("Python")`)
]},
{t:'Text and numbers',s:'Strings and simple maths',steps:[
 L('Text is called a string',`<p>Text in code goes inside quotes. Programmers call it a <b>string</b>, like a string of letters. You can use double quotes <code>"like this"</code> or single quotes <code>'like this'</code>.</p><p>Numbers do <b>not</b> need quotes. Python can even do maths for you.</p>`+words(`<b>string</b>: text inside quotes.<br><b>integer</b>: a whole number like 7 or -3.`)+go(`Run the code. Then change the numbers and run again.`),R`print("I am text")
print('I am text too')
print(42)
print(2 + 3)
`),
 C('A quote problem',`<p>This code has a bug. The text contains an apostrophe (<code>'</code>), and Python thinks the text ended there.</p>`+tip(`If your text contains a single quote, wrap the whole text in <b>double</b> quotes.`)+go(`Fix the code so it shows <code>It's a nice day</code>.`),R`print('It's a nice day')
`,[{o:"It's a nice day"}],`Swap the outer single quotes for double quotes.`,R`print("It's a nice day")`,{fix:true}),
 Q('Which of these is a string?',['42','"42"','print','2 + 3'],1,`Quotes make it text, even when the characters look like a number.`),
 C('Let Python do maths',`<p>Python understands <code>+</code> (add), <code>-</code> (take away), <code>*</code> (times) and <code>/</code> (divide).</p>`+go(`Use <code>print</code> to show the answer to 12 times 4.`),R`# Use print with a calculation
`,[{o:'48'},{s:/\*/,m:'Use the * sign for "times".'}],`Write print(12 * 4). The star * means times.`,R`print(12 * 4)`)
]},
{t:'Comments and errors',s:'Notes to yourself, and mistakes',steps:[
 L('Comments and error messages',`<p>A <b>comment</b> is a note for humans. Python ignores everything after a <code>#</code>. Use comments to explain your code to future you.</p><p>An <b>error</b> is Python telling you it got confused. Everyone gets errors, even experts. They are not a sign you did something wrong. They are clues.</p><p>An error looks like this:</p>`+out(`NameError: name 'pritn' is not defined on line 1`)+`<p>It tells you three things: the <b>kind</b> of error (NameError), <b>what</b> went wrong, and <b>where</b> (line 1).</p>`+tip(`When you see an error, read it slowly. The line number tells you where to look first.`),R`# This line is a comment. Python skips it.
print("Comments help humans")  # this one too
`),
 C('Fix the typo',`<p>Python is picky. One wrong letter and it does not know the word.</p>`+go(`Fix the code so it shows <code>Hello</code>. Run it first to see the error.`),R`pritn("Hello")
`,[{o:'Hello'}],`Look closely at the word print. Are all the letters in the right order?`,R`print("Hello")`,{fix:true}),
 C('Close the bracket',`<p>Brackets and quotes always come in pairs: one to open, one to close.</p>`+go(`Fix the code so it shows <code>Almost there!</code>`),R`print("Almost there!"
`,[{o:'Almost there!'}],`The line is missing a closing bracket ) at the end.`,R`print("Almost there!")`,{fix:true}),
 Q('What does a line starting with # do?',['Prints a hashtag','Python ignores it: it is a note for people','Makes the next line run twice','Causes an error'],1,`Comments are ignored by Python. They are only for people reading the code.`),
 C('Write a comment',`<p>Good programmers leave notes. Time to write your first one.</p>`+go(`Write a comment (a line starting with <code>#</code>), and also print the name of your favourite colour.`),R`
`,[{s:/^\s*#/m,raw:1,m:'Add a comment: a line that starts with #.'},{r:/\S/,m:'Also print something. Use print("your colour").'}],`Example: first line # my favourite colour, second line print("blue").`,R`# my favourite colour
print("blue")`)
]}
]});

PC.courses.push({id:'vars',cc:'c2',icon:'x =',title:'Variables',blurb:'Give values names, do maths, and ask the user questions.',
learn:['Store things in named boxes called variables','Do maths with + - * / // % **','Convert between text and numbers','Ask the user questions with input()'],
lessons:[
{t:'Boxes with names',s:'Your first variables',steps:[
 L('A variable is a labelled box',`<p>Imagine a box with a label on it. You put something inside, and later you ask for it by the label. In Python that box is a <b>variable</b>.</p>`+snip(R`name = "Mia"`)+`<p>This reads: "make a box called <code>name</code> and put the text <code>Mia</code> inside". The <code>=</code> sign does not mean "equals" here. It means <b>store</b>.</p>`+words(`<b>variable</b>: a name that holds a value.<br><b>assign</b>: store a value in a variable.`)+go(`Run it. Then change Mia to your name.`),R`name = "Mia"
print(name)
age = 12
print(age)
`),
 C('Make a variable',`<p>You choose the variable's name. Pick names that explain themselves, like <code>score</code> or <code>player_name</code>.</p>`+go(`Make a variable called <code>score</code> with the value <code>10</code>, then print it.`),R`# Create a variable called score and set it to 10
# Then print it
`,[{o:'10'},{s:/\bscore\s*=\s*10\b/,m:'Create a variable called score and set it to 10.'}],`Write score = 10 on one line, then print(score) on the next. No quotes around the number or the variable.`,R`score = 10
print(score)`),
 Q('What does this print?  x = 5  then  x = 7  then  print(x)',['5','7','12','An error'],1,`A variable holds only its newest value. The second line replaced the 5 with a 7.`),
 C('Use two variables',`<p>Variables can hold anything. You print a variable by writing its name <b>without</b> quotes. With quotes, Python would print the word itself.</p>`+go(`Print <code>first</code>, then print <code>last</code>, each on its own line.`),R`first = "Ada"
last = "Lovelace"
# Print first, then print last
`,[{o:'Ada\nLovelace'},{s:/print\(\s*first\s*\)/,m:'Print the variable first (no quotes around it).'}],`print(first) on one line, print(last) on the next.`,R`first = "Ada"
last = "Lovelace"
print(first)
print(last)`)
]},
{t:'Changing variables',s:'Update, reuse, and name well',steps:[
 L('Variables can change',`<p>That is why they are called <b>variable</b>. You can update them as often as you like. Python works out the right side first, then stores the result.</p>`+snip(R`lives = lives - 1`)+`<p>Read it as: "take the current lives, subtract 1, and store the answer back in lives".</p>`+tip(`There is a shortcut: <code>lives -= 1</code> means the same thing. <code>+=</code> adds in the same way.`)+go(`Run it and watch the number go down.`),R`lives = 3
print(lives)
lives = lives - 1
print(lives)
lives = lives - 1
print(lives)
`),
 C('Collect coins',`<p>Your game character starts with some coins and picks up more.</p>`+go(`Add 3 to <code>coins</code>, then print it.`),R`coins = 5
# Add 3 coins to coins, then print coins
`,[{o:'8'},{s:/coins\s*(=\s*coins\s*\+\s*3|\+=\s*3)/,m:'Update the variable: coins = coins + 3'}],`Write coins = coins + 3 and then print(coins).`,R`coins = 5
coins = coins + 3
print(coins)`),
 L('Naming rules',`<p>Python has a few rules for variable names:</p><ul><li>Use letters, numbers and underscores <code>_</code>.</li><li>No spaces, and no dashes.</li><li>Do not start with a number.</li><li>Capital letters count: <code>Score</code> and <code>score</code> are different names.</li></ul><p>Programmers write names in <code>lowercase_with_underscores</code>, like <code>high_score</code>. Pick names that say what is inside.</p>`,R`player_name = "Sam"
high_score = 250
print(player_name, high_score)
`),
 Q('Which one is a valid variable name?',['my age','2cool','my_age','my-age'],2,`Only <code>my_age</code> follows the rules. A space or a dash would confuse Python, and names cannot start with a number.`),
 C('Fix the name',`<p>This variable name has a space in it, which Python cannot read.</p>`+go(`Fix the code so it prints <code>5</code>.`),R`my age = 5
print(my age)
`,[{o:'5'}],`Replace the space with an underscore in both places: my_age.`,R`my_age = 5
print(my_age)`,{fix:true})
]},
{t:'Numbers and maths',s:'+ - * / // % **',steps:[
 L('Python is a calculator',`<p>Besides plus, minus and times, Python has a few special tools:</p><ul><li><code>/</code> divides and gives a decimal: <code>7 / 2</code> is 3.5</li><li><code>//</code> divides and keeps only the whole part: <code>7 // 2</code> is 3</li><li><code>%</code> gives the <b>remainder</b>, what is left over: <code>7 % 2</code> is 1</li><li><code>**</code> is "to the power of": <code>2 ** 3</code> is 8</li></ul><p>Python follows school maths order: brackets first, then times and divide, then plus and minus.</p>`+words(`<b>float</b>: a number with a decimal point, like 3.5.<br><b>remainder</b>: what is left after dividing.`),R`print(7 + 3)
print(7 - 3)
print(7 * 3)
print(7 / 2)
print(7 // 2)
print(7 % 2)
print(2 ** 3)
`),
 Q('What is 10 % 3 ?',['1','3','3.33','0'],0,`10 divided by 3 fits 3 times (that is 9), and 1 is left over. So the remainder is 1.`),
 C('Share the pizza',`<p>17 slices of pizza are shared between 5 friends. Everyone gets the same number of whole slices.</p>`+go(`Print how many slices each friend gets, then print how many are left over. Use <code>//</code> and <code>%</code>.`),R`slices = 17
friends = 5
# Print how many whole slices each friend gets
# Then print how many slices are left over
`,[{o:'3\n2'}],`print(slices // friends) shows the whole slices each. print(slices % friends) shows what is left.`,R`slices = 17
friends = 5
print(slices // friends)
print(slices % friends)`),
 C('Brackets first',`<p>Python does multiplication before addition, just like in school. Brackets change the order.</p>`+go(`This code should print <code>20</code>, but it prints 14. Fix it with brackets.`),R`print(2 + 3 * 4)
`,[{o:'20'}],`Put brackets around 2 + 3.`,R`print((2 + 3) * 4)`,{fix:true})
]},
{t:'Types and converting',s:'int, float and str',steps:[
 L('Every value has a type',`<p>Python treats different kinds of values differently. The most common <b>types</b> are:</p><ul><li><code>int</code>: whole numbers (7)</li><li><code>float</code>: decimals (2.5)</li><li><code>str</code>: text ("hello")</li><li><code>bool</code>: <code>True</code> or <code>False</code></li></ul><p>The text <code>"5"</code> is not the same as the number <code>5</code>. Run the code to see how differently they behave.</p>`+tip(`<code>type(x)</code> tells you the type of anything. Very handy when you are confused.`),R`print(type(5))
print(type(2.5))
print(type("5"))
print(type(True))
print("5" + "5")
print(5 + 5)
`),
 C('Text to number',`<p>You can change one type into another: <code>int("12")</code> gives the number 12, <code>str(12)</code> gives the text "12", and <code>float("2.5")</code> gives 2.5.</p>`+go(`<code>age</code> is text. Turn it into a number, add 1, and print the result (13).`),R`age = "12"
# Turn age into a number, add 1, and print the result
`,[{o:'13'},{s:/int\(/,m:'Use int() to turn the text into a number.'}],`print(int(age) + 1)`,R`age = "12"
print(int(age) + 1)`),
 C('Number to text',`<p>You cannot add a number to text with <code>+</code>. Turn the number into text first with <code>str()</code>.</p>`+go(`Print <code>Your score is 95</code> using the variable <code>score</code>.`),R`score = 95
# Print: Your score is 95
`,[{o:'Your score is 95'},{s:/str\(|f["']/,m:'Turn the number into text with str(score).'}],`print("Your score is " + str(score))`,R`score = 95
print("Your score is " + str(score))`),
 Q('What does int("7") + 1 give?',['8','"71"','An error','7'],0,`<code>int("7")</code> turns the text into the number 7, and 7 + 1 is 8.`)
]},
{t:'Asking questions',s:'input() makes programs interactive',steps:[
 L('Let the user type something',`<p><code>input()</code> stops your program and waits for the user to type. Whatever they type becomes the value.</p>`+snip(R`name = input("What is your name? ")`)+`<p>When you run it, a box appears in the Output area. Type an answer and press <b>Enter</b>.</p>`+tip(`<code>input()</code> <b>always gives text</b>, even if the user types a number. Use <code>int()</code> when you need to do maths with it.`)+go(`Run it and answer the question.`),R`name = input("What is your name? ")
print("Nice to meet you, " + name + "!")
`),
 C('A friendly greeting',`<p>The checker will type its own names to test your code.</p>`+go(`Ask for the name with <code>input()</code> and print <code>Hello, NAME!</code> (for example <code>Hello, Ada!</code>).`),R`# Ask for the name with input()
# Then print Hello, name!
`,[{i:['Ada'],o:'Hello, Ada!'},{i:['Sam'],o:'Hello, Sam!'}],`name = input("Name? ") on one line, then print("Hello, " + name + "!")`,R`name = input("Name? ")
print("Hello, " + name + "!")`),
 C('Double it',`<p>Remember: input gives text. The text <code>"4"</code> times 2 would be <code>"44"</code>, not 8. Convert first.</p>`+go(`Print the number times 2.`),R`number = input("Pick a number: ")
# Print the number times 2 (careful: input gives text!)
`,[{i:['4'],o:'8'},{i:['10'],o:'20'}],`Wrap input in int(): number = int(input("Pick a number: "))`,R`number = int(input("Pick a number: "))
print(number * 2)`),
 Q('What type of value does input() always give you?',['A whole number','Text (a string)','A decimal','True or False'],1,`Always text. If you want a number, convert it with <code>int()</code> or <code>float()</code>.`),
 C('Next birthday',`<p>Time to put it together.</p>`+go(`Ask for the age, then print <code>Next year you will be 13</code> (if the age is 12).`),R`# Ask for age, then print: Next year you will be ...
`,[{i:['12'],o:'Next year you will be 13'},{i:['30'],o:'Next year you will be 31'}],`age = int(input("How old are you? ")) then print("Next year you will be " + str(age + 1))`,R`age = int(input("How old are you? "))
print("Next year you will be " + str(age + 1))`)
]}
]});

PC.courses.push({id:'text',cc:'c3',icon:'"Aa"',title:'Working with Text',blurb:'Join, build, change and slice text like a pro.',
learn:['Join text together','Build sentences with f-strings','Use text tools like upper() and replace()','Grab single letters and slices'],
lessons:[
{t:'Joining text',s:'+ and *',steps:[
 L('Gluing strings together',`<p>You can add two pieces of text with <code>+</code>. This is called <b>concatenation</b> (a big word for "gluing"). Python adds nothing in between, so you must add the spaces yourself.</p><p>You can also repeat text with <code>*</code>: <code>"ha" * 3</code> gives <code>hahaha</code>.</p>`+go(`Run it. Notice where the space is missing in the first result.`),R`first = "Sam"
last = "Lee"
print(first + last)
print(first + " " + last)
print("ha" * 3)
print("-" * 20)
`),
 C('Build a greeting',`<p>Use <code>+</code> to build a sentence from pieces.</p>`+go(`Print <code>Hello, Ada!</code> by gluing together <code>"Hello, "</code>, the variable <code>name</code>, and <code>"!"</code>.`),R`name = "Ada"
# Join "Hello, " and name and "!"
`,[{o:'Hello, Ada!'},{s:/\+/,m:'Use + to glue the pieces together.'}],`print("Hello, " + name + "!")`,R`name = "Ada"
print("Hello, " + name + "!")`),
 C('A line of stars',`<p>Repeating text is great for drawing lines.</p>`+go(`Print 15 stars in a row (<code>***************</code>) using multiplication.`),R`# Print 15 stars using *
`,[{o:'***************'},{s:/\*\s*15|15\s*\*/,m:'Use "*" * 15 instead of typing every star.'}],`print("*" * 15)`,R`print("*" * 15)`),
 Q('What does print("3" + "4") show?',['7','34','An error','3 + 4'],1,`Both are text, so <code>+</code> glues them: 34. It does not add them as numbers.`)
]},
{t:'f-strings',s:'The easy way to build sentences',steps:[
 L('Put values inside text',`<p>Gluing with <code>+</code> gets messy. An <b>f-string</b> is easier: put the letter <code>f</code> before the opening quote, and write variable names inside curly braces <code>{ }</code>.</p>`+snip(R`print(f"{name} is {age} years old.")`)+`<p>Python replaces each <code>{...}</code> with the real value. No <code>str()</code> needed, and you can even do maths inside the braces.</p>`+words(`<b>f-string</b>: text with an f in front where {braces} are filled in.`),R`name = "Mia"
age = 11
print(f"{name} is {age} years old.")
print(f"Next year {name} will be {age + 1}.")
`),
 C('Your first f-string',``+go(`Print <code>Sam is 12 years old</code> using an f-string and the two variables.`),R`name = "Sam"
age = 12
# Print: Sam is 12 years old
`,[{o:'Sam is 12 years old'},{s:/f["']/,m:'Use an f-string: put an f right before the opening quote.'}],`print(f"{name} is {age} years old")`,R`name = "Sam"
age = 12
print(f"{name} is {age} years old")`),
 C('The missing f',`<p>Without the <code>f</code>, Python prints the curly braces as plain text.</p>`+go(`Fix the code so it shows <code>A pizza costs 8 dollars.</code>`),R`item = "pizza"
price = 8
print("A {item} costs {price} dollars.")
`,[{o:'A pizza costs 8 dollars.'}],`Add the letter f right before the opening quote.`,R`item = "pizza"
price = 8
print(f"A {item} costs {price} dollars.")`,{fix:true}),
 Q('What do the curly braces { } do inside an f-string?',['Nothing, they are decoration','They hold a variable or calculation whose value is put into the text','They turn the text into a list','They make the text bold'],1,`Python swaps each pair of braces for the value inside them.`)
]},
{t:'Text tools',s:'len, upper, lower, replace',steps:[
 L('Methods are tools for values',`<p>Text comes with built-in tools. You use them by writing a dot after the value, then the tool name and brackets. These tools are called <b>methods</b>.</p><ul><li><code>len(text)</code> counts the characters</li><li><code>text.upper()</code> and <code>text.lower()</code> change the case</li><li><code>text.strip()</code> removes spaces at both ends</li><li><code>text.replace("a", "b")</code> swaps pieces</li></ul>`+tip(`Methods do not change the original. They give you a <b>new</b> value back. To keep it, store it in a variable.`),R`word = "Python"
print(len(word))
print(word.upper())
print(word.lower())
print("  hello  ".strip())
print("I like cats".replace("cats", "dogs"))
`),
 C('How long is it?',``+go(`Print how many characters <code>text</code> has (spaces count too).`),R`text = "Learning is fun"
# Print how many characters text has
`,[{o:'15'},{s:/len\(/,m:'Use len() to count the characters.'}],`print(len(text))`,R`text = "Learning is fun"
print(len(text))`),
 C('SHOUT',``+go(`Ask for a name and print it in capital letters.`),R`name = input("Name: ")
# Print name in capital letters
`,[{i:['sam'],o:'SAM'},{i:['Ada'],o:'ADA'}],`print(name.upper())`,R`name = input("Name: ")
print(name.upper())`),
 C('Swap a word',``+go(`Print the sentence with <code>apples</code> replaced by <code>bananas</code>.`),R`sentence = "I love apples"
# Replace apples with bananas and print the result
`,[{o:'I love bananas'},{s:/replace\(/,m:'Use .replace() on the sentence.'}],`print(sentence.replace("apples", "bananas"))`,R`sentence = "I love apples"
print(sentence.replace("apples", "bananas"))`),
 Q('What does "Hello".lower() give?',['HELLO','hello','Hello','An error'],1,`<code>lower()</code> turns every letter into a small letter.`)
]},
{t:'Positions and slices',s:'Counting from zero',steps:[
 L('Every letter has a position',`<p>Each character in text has a position number, called an <b>index</b>. And here is the big surprise: <b>counting starts at 0</b>, not 1.</p>`+out(` P  y  t  h  o  n\n 0  1  2  3  4  5\n-6 -5 -4 -3 -2 -1`)+`<p>Use square brackets to grab one letter: <code>word[0]</code>. A negative number counts from the end, so <code>word[-1]</code> is the last letter.</p><p>A <b>slice</b> grabs a piece: <code>word[1:4]</code> means "from position 1 up to, but not including, position 4".</p>`,R`word = "Python"
print(word[0])
print(word[5])
print(word[-1])
print(word[0:2])
print(word[2:])
print(word[:3])
`),
 C('The first letter',``+go(`Print the first letter of <code>word</code>.`),R`word = "Python"
# Print the first letter
`,[{o:'P'},{s:/\[/,m:'Use square brackets: word[...]'}],`Remember counting starts at 0: print(word[0])`,R`word = "Python"
print(word[0])`),
 C('A slice',``+go(`Print the middle part <code>yth</code>.`),R`word = "Python"
# Print the middle part: yth
`,[{o:'yth'}],`y is at position 1 and the slice stops before position 4: word[1:4]`,R`word = "Python"
print(word[1:4])`),
 C('The last letter',``+go(`Ask for a word and print its last letter.`),R`word = input("Word: ")
# Print the last letter
`,[{i:['cat'],o:'t'},{i:['dog'],o:'g'},{i:['Python'],o:'n'}],`Use word[-1]. Negative numbers count from the end.`,R`word = input("Word: ")
print(word[-1])`),
 Q('What does "Python"[1:3] give?',['Py','yt','yth','Pyt'],1,`Positions 1 and 2 (the slice stops before 3): y and t.`)
]}
]});
})();
