/* Courses 8-10 plus warm-up questions, daily challenges, cheat sheet and glossary */
(function(){
var L=PC.L,C=PC.C,Q=PC.Q,tip=PC.tip,words=PC.words,go=PC.go,snip=PC.snip,out=PC.out;

PC.courses.push({id:'dicts',cc:'c2',icon:'{ }',title:'Dictionaries',blurb:'Look things up by name, plus tuples and sets.',
learn:['Store key and value pairs','Read, add, change and loop over dictionaries','Meet tuples (fixed) and sets (unique)'],
lessons:[
{t:'Key and value',s:'Look things up by name',steps:[
 L('A dictionary is a real dictionary',`<p>In a real dictionary you look up a <b>word</b> to find its <b>meaning</b>. A Python <b>dictionary</b> works the same way: you look up a <b>key</b> to get its <b>value</b>.</p>`+snip(R`person = {"name": "Mia", "age": 11}`)+`<p>Curly braces, and each pair is <code>key: value</code>. Read a value with square brackets and the key: <code>person["name"]</code>.</p>`+words(`<b>key</b>: the name you look up.<br><b>value</b>: what you get back.`),R`person = {"name": "Mia", "age": 11}
print(person["name"])
print(person["age"])
person["age"] = 12
person["city"] = "Berlin"
print(person)
`),
 C('Look up a value',``+go(`Print Ben's age.`),R`ages = {"Ann": 12, "Ben": 14}
# Print Ben's age
`,[{o:'14'}],`print(ages["Ben"])`,R`ages = {"Ann": 12, "Ben": 14}
print(ages["Ben"])`),
 C('Add a new pair',`<p>Adding is the same as changing: just assign to a key.</p>`+go(`Add <code>"plums"</code> with the value <code>7</code> to <code>stock</code>, then print <code>stock</code>.`),R`stock = {"apples": 5, "pears": 2}
# Add plums: 7, then print stock
`,[{o:"{'apples': 5, 'pears': 2, 'plums': 7}"}],`stock["plums"] = 7`,R`stock = {"apples": 5, "pears": 2}
stock["plums"] = 7
print(stock)`),
 Q('What happens if you ask for a key that is not in the dictionary, like d["x"]?',['It gives 0','It gives an empty string','You get a KeyError','Python adds the key for you'],2,`Python raises a <b>KeyError</b>. Next lesson shows a safer way: <code>.get()</code>.`)
]},
{t:'Working with dictionaries',s:'get, in, items',steps:[
 L('Safer lookups and loops',`<ul><li><code>d.get(key)</code> gives the value, or <code>None</code> if it is missing (no crash). <code>d.get(key, "x")</code> gives "x" when missing.</li><li><code>key in d</code> asks if the key exists.</li><li><code>for key in d</code> loops over the keys.</li><li><code>d.items()</code> gives key and value together.</li></ul>`,R`prices = {"tea": 2, "cake": 4}
print(prices.get("tea"))
print(prices.get("milk", "not sold"))
print("cake" in prices)
for item in prices:
    print(item, prices[item])
for item, price in prices.items():
    print(f"{item} costs {price}")
`),
 C('Print all scores',``+go(`Loop through <code>scores</code> and print lines like <code>Ann: 90</code>.`),R`scores = {"Ann": 90, "Ben": 75, "Cy": 82}
# Print each name and score like  Ann: 90
`,[{o:'Ann: 90\nBen: 75\nCy: 82'},{s:/\bfor\b/,m:'Use a for loop.'}],`for name, score in scores.items(): print(f"{name}: {score}")`,R`scores = {"Ann": 90, "Ben": 75, "Cy": 82}
for name, score in scores.items():
    print(f"{name}: {score}")`),
 C('Count the letters',`<p>A classic: use a dictionary as a tally. For each letter, add 1 to its count. If the letter is new, start at 1.</p>`+go(`Fill <code>counts</code> so it shows how often each letter appears in <code>"banana"</code>.`),R`word = "banana"
counts = {}
# Loop through each letter and count it
print(counts)
`,[{o:"{'b': 1, 'a': 3, 'n': 2}"}],`for letter in word: if letter in counts: counts[letter] = counts[letter] + 1 else: counts[letter] = 1`,R`word = "banana"
counts = {}
for letter in word:
    if letter in counts:
        counts[letter] = counts[letter] + 1
    else:
        counts[letter] = 1
print(counts)`),
 Q('What does d.get("x") give when "x" is not a key?',['An error','None','0','An empty string'],1,`<code>get</code> is the gentle version: it gives <code>None</code> instead of crashing.`)
]},
{t:'Tuples and sets',s:'Two more containers',steps:[
 L('Fixed and unique',`<ul><li>A <b>tuple</b> is like a list you cannot change. Write it with round brackets: <code>(3, 4)</code>. Good for things that belong together, like a point on a map.</li><li>A <b>set</b> keeps only <b>unique</b> values and has no order. Write it with curly braces: <code>{1, 2, 3}</code>. Duplicates disappear.</li></ul>`,R`point = (3, 4)
x, y = point
print(x, y)
colors = {"red", "blue", "red", "green"}
print(len(colors))
colors.add("pink")
print(len(colors))
print("red" in colors)
`),
 C('How many different?',`<p>Turning a list into a set removes the repeats: <code>set(my_list)</code>.</p>`+go(`Print how many <b>different</b> numbers are in the list.`),R`numbers = [1, 2, 2, 3, 3, 3, 4]
# Print how many different numbers there are
`,[{o:'4'},{s:/set\(/,m:'Use set() to remove repeats, then len().'}],`print(len(set(numbers)))`,R`numbers = [1, 2, 2, 3, 3, 3, 4]
print(len(set(numbers)))`),
 Q('What is the main difference between a tuple and a list?',['Tuples are faster to type','A tuple cannot be changed after it is made','Tuples hold only numbers','There is no difference'],1,`Lists can change (append, remove). Tuples stay fixed.`),
 C('Swap two values',`<p>Tuples let you swap two variables in one line: <code>a, b = b, a</code>.</p>`+go(`Swap <code>a</code> and <code>b</code>, then print <code>a</code> and then <code>b</code>.`),R`a = 1
b = 2
# Swap a and b, then print a, then print b
`,[{o:'2\n1'}],`a, b = b, a`,R`a = 1
b = 2
a, b = b, a
print(a)
print(b)`)
]}
]});

PC.courses.push({id:'debug',cc:'c3',icon:'bug',title:'Bug Squash',blurb:'Read errors, hunt bugs, and keep programs running.',
learn:['Read an error message step by step','Spot the usual beginner bugs','Handle problems with try and except'],
lessons:[
{t:'Reading error messages',s:'Your best clue',steps:[
 L('Errors are clues',`<p>Every error message has three parts:</p>`+out(`NameError: name 'scroe' is not defined on line 3`)+`<ol><li><b>The kind</b>: NameError</li><li><b>What happened</b>: Python does not know the name <code>scroe</code></li><li><b>Where</b>: line 3</li></ol><p>The most common kinds you will meet: <b>NameError</b> (a typo in a name), <b>SyntaxError</b> (the code is written wrongly), <b>TypeError</b> (mixing types), <b>IndexError</b> (a position that does not exist).</p>`+tip(`Detective trick: read the error, jump to that line, and also look at the line just above it. The real mistake is sometimes there.`),R`# A working program. Next, you will hunt bugs in broken ones.
score = 10
print(score)
`),
 Q('You see:  NameError: name \'scroe\' is not defined. What is the most likely problem?',['The computer is broken','A typo: the variable is probably called score','The number is too big','Python is out of date'],1,`NameError means Python does not know a name. "scroe" looks like a typo of "score".`),
 Q('You see:  IndexError: list index out of range. What does it mean?',['The list is empty of letters','You asked for a position that is past the end of the list','The list has too many items','You forgot a colon'],1,`A list with 3 items has positions 0, 1, 2. Asking for position 3 or higher gives an IndexError.`),
 C('Hunt the typo',``+go(`Run the code to see the error. Then fix it so it prints <code>10</code>.`),R`score = 10
print(scroe)
`,[{o:'10'}],`The variable is called score. Check the spelling in the print line.`,R`score = 10
print(score)`,{fix:true}),
 C('Text plus number',`<p>This one gives a <b>TypeError</b>. You cannot glue text and a number with +.</p>`+go(`Fix it so it prints <code>I am 12</code>.`),R`age = 12
print("I am " + age)
`,[{o:'I am 12'}],`Turn the number into text: str(age).`,R`age = 12
print("I am " + str(age))`,{fix:true})
]},
{t:'Common bugs',s:'Typical beginner mistakes',steps:[
 L('The usual suspects',`<p>Most bugs are one of these:</p><ul><li>A missing <b>colon</b> after <code>if</code>, <code>for</code>, <code>while</code> or <code>def</code></li><li>Wrong <b>indentation</b> (spaces at the start of a line)</li><li>A <b>typo</b> or wrong capital letter</li><li>Quotes or brackets that never close</li><li><code>=</code> where you meant <code>==</code></li><li>Counting from 1 instead of 0</li></ul><p>A good method: <b>read the error</b>, <b>look at that line</b>, <b>change one thing</b>, run again. And add <code>print()</code> lines to see what your variables hold.</p>`,R`# Debugging with print: what is x right now?
x = 5
print("x is", x)
x = x * 2
print("x is now", x)
`),
 C('Missing colon',``+go(`Fix the code so it prints 0, 1 and 2.`),R`for i in range(3)
    print(i)
`,[{o:'0\n1\n2'}],`The for line needs a colon at the end.`,R`for i in range(3):
    print(i)`,{fix:true}),
 C('Wrong indentation',``+go(`Fix the code so it prints <code>Yes</code>.`),R`if True:
print("Yes")
`,[{o:'Yes'}],`The print line belongs to the if, so indent it by 4 spaces.`,R`if True:
    print("Yes")`,{fix:true}),
 C('Off by one',`<p>The list has 3 colours, so the last position is 2, not 3.</p>`+go(`Fix the code so it prints <code>blue</code>.`),R`colors = ["red", "green", "blue"]
print(colors[3])
`,[{o:'blue'}],`Use position 2 (or -1 for the last item).`,R`colors = ["red", "green", "blue"]
print(colors[2])`,{fix:true}),
 C('A maths bug',`<p>This should print the average of 4 and 6, which is 5.0. It prints something else because of the order of operations.</p>`+go(`Fix it so it prints <code>5.0</code>.`),R`a = 4
b = 6
print(a + b / 2)
`,[{o:'5.0'}],`Add brackets so the addition happens first: (a + b) / 2`,R`a = 4
b = 6
print((a + b) / 2)`,{fix:true})
]},
{t:'try and except',s:'Keep going when things go wrong',steps:[
 L('Catch the mistake',`<p>Sometimes you know something might go wrong, like a user typing letters instead of a number. Put the risky code in a <code>try</code> block. If it fails, Python jumps to <code>except</code> instead of crashing.</p>`+tip(`Name the error you expect, like <code>except ValueError:</code>, so you do not hide other bugs by accident.`),R`try:
    number = int("hello")
    print(number)
except ValueError:
    print("That was not a number!")
print("The program keeps going")
`),
 C('Safe number input',`<p>The checker will type a number, and also some letters.</p>`+go(`Ask for a number. If it is a number, print double it. If not, print <code>Please type a number</code>.`),R`text = input("Number: ")
# Try to turn text into an int. Print double, or the message.
`,[{i:['4'],o:'8'},{i:['abc'],o:'Please type a number'},{i:['10'],o:'20'}],`try: number = int(text) then print(number * 2). except ValueError: print("Please type a number")`,R`text = input("Number: ")
try:
    number = int(text)
    print(number * 2)
except ValueError:
    print("Please type a number")`),
 C('Safe divide',``+go(`Complete <code>safe_divide</code>. It returns a divided by b, but returns <code>"Cannot divide by zero"</code> when b is 0.`),R`def safe_divide(a, b):
    pass
`,[{a:'print(safe_divide(10, 2))',o:'5.0'},{a:'print(safe_divide(1, 0))',o:'Cannot divide by zero'}],`Use try / except ZeroDivisionError, or simply if b == 0: return "Cannot divide by zero".`,R`def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Cannot divide by zero"`),
 Q('What does the except block do?',['Runs always','Runs only if the try block caused an error','Runs before the try block','Stops the program'],1,`<code>except</code> is the safety net. It only runs when the code in <code>try</code> failed.`)
]}
]});

PC.courses.push({id:'projects',cc:'c4',icon:'\u2605',title:'Mini Projects',blurb:'Build three real programs, then take the final exam.',
learn:['Plan a program in small steps','Build a number guessing game, a quiz and a calculator','Prove your skills with the final exam'],
lessons:[
{t:'Guess the number',s:'Your first game',steps:[
 L('Plan before you code',`<p>Big programs are small steps in a row. Here is the plan for a guessing game:</p><ol><li>Pick a secret number.</li><li>Ask for a guess. Keep asking until it is right.</li><li>After each wrong guess, say if it was too low or too high.</li></ol><p>Notice what you need: a <b>variable</b> (the secret), <b>input</b>, a <b>while loop</b>, and <b>if / elif / else</b>. You know all of these.</p>`,R`secret = 7
guess = 0
while guess != secret:
    guess = int(input("Guess: "))
    print("Got a guess:", guess)
print("Done")
`),
 C('Build the game',`<p>The secret number is 7. The checker will play a few games.</p>`+go(`Keep asking for guesses. After a wrong guess print <code>Too low!</code> or <code>Too high!</code>. When the guess is right print <code>You got it!</code>.`),R`secret = 7
guess = 0
# Keep asking until guess equals secret
# Print "Too low!" or "Too high!" after a wrong guess
# At the end print "You got it!"
`,[{i:['3','9','7'],o:'Too low!\nToo high!\nYou got it!'},{i:['7'],o:'You got it!'},{i:['1','2','7'],o:'Too low!\nToo low!\nYou got it!'}],`while guess != secret: ask with int(input(...)), then if guess < secret: print("Too low!") elif guess > secret: print("Too high!"). After the loop print("You got it!").`,R`secret = 7
guess = 0
while guess != secret:
    guess = int(input("Guess: "))
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
print("You got it!")`),
 C('Count the tries',`<p>Games are better with a score. Count how many guesses the player needed.</p>`+go(`Same game, but the last line should say <code>You got it in 3 tries!</code> (using the real number of tries).`),R`secret = 7
guess = 0
tries = 0
# Same game, but count the tries
`,[{i:['1','2','7'],o:'Too low!\nToo low!\nYou got it in 3 tries!'},{i:['7'],o:'You got it in 1 tries!'},{i:['9','7'],o:'Too high!\nYou got it in 2 tries!'}],`Add tries = tries + 1 inside the loop, after each guess. End with print(f"You got it in {tries} tries!")`,R`secret = 7
guess = 0
tries = 0
while guess != secret:
    guess = int(input("Guess: "))
    tries = tries + 1
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
print(f"You got it in {tries} tries!")`)
]},
{t:'Quiz game',s:'Lists, loops and scores',steps:[
 L('A quiz in a dozen lines',`<p>Plan: keep the questions and answers in a list of pairs, loop over them, compare each answer, and keep a score. Notice <code>.lower()</code>: it makes the check ignore capital letters.</p>`,R`questions = [["Capital of France?", "paris"], ["2 + 2?", "4"]]
score = 0
for question, answer in questions:
    reply = input(question + " ")
    if reply.lower() == answer:
        print("Correct!")
        score = score + 1
    else:
        print("Wrong!")
print(f"Score: {score}/{len(questions)}")
`),
 C('Your own quiz',`<p>The questions are ready. The checker will answer them.</p>`+go(`Loop over the questions. Print <code>Correct!</code> or <code>Wrong!</code> after each answer (ignore capital letters), then print <code>Score: X/3</code>.`),R`questions = [
    ["Capital of France?", "paris"],
    ["2 + 2?", "4"],
    ["Colour of grass?", "green"],
]
score = 0
# Ask each question, check the answer, count the score
# At the end print: Score: X/3
`,[{i:['Paris','4','green'],o:'Correct!\nCorrect!\nCorrect!\nScore: 3/3'},{i:['paris','5','blue'],o:'Correct!\nWrong!\nWrong!\nScore: 1/3'},{i:['x','y','z'],o:'Wrong!\nWrong!\nWrong!\nScore: 0/3'}],`for question, answer in questions: reply = input(question) ... compare reply.lower() == answer`,R`questions = [
    ["Capital of France?", "paris"],
    ["2 + 2?", "4"],
    ["Colour of grass?", "green"],
]
score = 0
for question, answer in questions:
    reply = input(question + " ")
    if reply.lower() == answer:
        print("Correct!")
        score = score + 1
    else:
        print("Wrong!")
print(f"Score: {score}/3")`)
]},
{t:'Mini calculator',s:'Decisions and safety',steps:[
 L('Think about every case',`<p>A calculator asks for two numbers and an operator (<code>+ - * /</code>), then prints the answer. Good programs also handle the awkward cases: dividing by zero, or an operator the program does not know.</p>`+tip(`List the cases first: +, -, *, / (and zero!), and "anything else". Then write one branch for each.`),R`a = int(input("First number: "))
op = input("Operator: ")
b = int(input("Second number: "))
print(a, op, b)
`),
 C('Build the calculator',`<p>The checker will type three lines: first number, operator, second number.</p>`+go(`Print the result of <code>+</code>, <code>-</code>, <code>*</code> or <code>/</code>. For <code>/</code> with a second number of 0 print <code>Cannot divide by zero</code>. For any other operator print <code>Unknown operator</code>.`),R`a = int(input("First number: "))
op = input("Operator: ")
b = int(input("Second number: "))
# Print the result, or an error message
`,[{i:['6','+','4'],o:'10'},{i:['6','-','4'],o:'2'},{i:['6','*','4'],o:'24'},{i:['6','/','4'],o:'1.5'},{i:['6','/','0'],o:'Cannot divide by zero'},{i:['6','?','4'],o:'Unknown operator'}],`Use an if / elif ladder on op. For "/", check b == 0 first.`,R`a = int(input("First number: "))
op = input("Operator: ")
b = int(input("Second number: "))
if op == "+":
    print(a + b)
elif op == "-":
    print(a - b)
elif op == "*":
    print(a * b)
elif op == "/":
    if b == 0:
        print("Cannot divide by zero")
    else:
        print(a / b)
else:
    print("Unknown operator")`)
]},
{t:'Final exam',s:'Show what you know',steps:[
 L('You are ready',`<p>This is your final exam: four quick questions and three coding tasks. They use everything from the course. Take your time, use hints if you need them, and remember: you can always run your code first.</p><p>You already know more Python than most people. Let us prove it.</p>`,R`# Warm up here if you like
print("Ready!")
`),
 Q('What does this print?   x = 4   x = x + 1   print(x * 2)',['8','10','5','9'],1,`x becomes 5, then 5 times 2 is 10.`),
 Q('Which line correctly starts a loop that runs 3 times?',['for i in range(3):','for i in 3:','loop 3 times:','while range(3)'],0,`<code>for i in range(3):</code> repeats 3 times (i is 0, 1, 2).`),
 Q('What does len(["a", "b", "c"]) give?',['2','3','4','"abc"'],1,`Three items, so 3.`),
 Q('What does a function give back if it has no return?',['0','Nothing at all','None','False'],2,`<code>None</code>, Python's "nothing here".`),
 C('Exam 1: greeting',``+go(`Ask for a name and an age. Print <code>NAME will be AGE+1 next year</code>. For example <code>Ada will be 13 next year</code>.`),R`# Ask for name, then age, then print the sentence
`,[{i:['Ada','12'],o:'Ada will be 13 next year'},{i:['Sam','30'],o:'Sam will be 31 next year'}],`name = input(...), age = int(input(...)), then print(f"{name} will be {age + 1} next year")`,R`name = input("Name: ")
age = int(input("Age: "))
print(f"{name} will be {age + 1} next year")`),
 C('Exam 2: biggest in a list',``+go(`Loop through the list and print the biggest number, <b>without</b> using <code>max()</code>. (The answer is 9.)`),R`numbers = [4, 9, 2, 7]
# Find the biggest number with a loop
`,[{o:'9'},{s:/\bfor\b/,m:'Use a for loop.'},{s:/^(?![\s\S]*\bmax\s*\()/,m:'Do not use max(). Use a loop.'}],`biggest = numbers[0], then loop: if n > biggest: biggest = n`,R`numbers = [4, 9, 2, 7]
biggest = numbers[0]
for n in numbers:
    if n > biggest:
        biggest = n
print(biggest)`),
 C('Exam 3: palindrome',`<p>A palindrome reads the same backwards, like <code>level</code>. Tip: <code>word[::-1]</code> reverses text.</p>`+go(`Complete <code>is_palindrome</code> so it returns True or False.`),R`def is_palindrome(word):
    pass
`,[{a:'print(is_palindrome("level"))',o:'True'},{a:'print(is_palindrome("python"))',o:'False'},{a:'print(is_palindrome("racecar"))',o:'True'},{a:'print(is_palindrome("ab"))',o:'False'}],`return word == word[::-1]`,R`def is_palindrome(word):
    return word == word[::-1]`)
]}
]});

/* ---------- daily warm-up questions ---------- */
function W(c,q,opts,ans,why){var s=Q(q,opts,ans,why); s.c=c; PC.warm.push(s)}
W('hello','Which command shows text on the screen?',['show()','print()','say()','display()'],1,'<code>print()</code> is how Python shows things.');
W('hello','What does a line starting with # do?',['It runs twice','Python ignores it','It prints a hashtag','It causes an error'],1,'It is a comment, a note for people.');
W('hello','Which of these is text (a string)?',['42','"42"','True','4.2'],1,'Quotes make it a string.');
W('vars','What does  x = 5  do?',['Asks if x equals 5','Stores 5 in x','Prints 5','Deletes x'],1,'A single = stores a value.');
W('vars','What is 17 // 5 ?',['3','3.4','2','4'],0,'<code>//</code> keeps only the whole number of the division.');
W('vars','What type does input() always return?',['int','float','str (text)','bool'],2,'Always text. Use int() to convert.');
W('vars','What does int("8") + 1 give?',['9','"81"','An error','8'],0,'int("8") is the number 8, plus 1 is 9.');
W('text','What does "ha" * 3 give?',['hahaha','ha3','An error','ha ha ha'],0,'Multiplying text repeats it.');
W('text','What is "Python"[0] ?',['P','y','n','Python'],0,'Counting starts at 0, so index 0 is the first letter.');
W('text','What do the braces do in f"Hi {name}"?',['Nothing','Insert the value of name','Make a list','Cause an error'],1,'They are filled with the variable value.');
W('logic','What does 5 == 5 give?',['True','False','5','An error'],0,'== asks if two things are equal.');
W('logic','Which line must end with a colon?',['print("hi")','if x > 3','x = 3','import math'],1,'<code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code>, <code>while</code> and <code>def</code> lines end with a colon.');
W('logic','What is  True and False ?',['True','False','None','Error'],1,'and needs both True.');
W('lists','What position does the first item of a list have?',['0','1','-1','It depends'],0,'Counting starts at 0.');
W('lists','Which adds an item to the end of a list?',['add()','append()','insert_end()','push()'],1,'<code>list.append(item)</code>');
W('loops','How many times does  for i in range(4):  run?',['3','4','5','1'],1,'range(4) gives 0, 1, 2, 3: four times.');
W('loops','Which keyword stops a loop right away?',['stop','exit','break','end'],2,'<code>break</code> leaves the loop.');
W('funcs','Which keyword creates a function?',['func','def','function','make'],1,'<code>def</code> defines a function.');
W('funcs','What does return do?',['Prints a value','Sends a value back to the caller','Repeats the function','Deletes the function'],1,'return hands the answer back.');
W('dicts','How do you read the value for key "a" in dictionary d?',['d(a)','d["a"]','d.a','d{a}'],1,'Square brackets with the key.');
W('debug','Which error means Python does not know a name?',['TypeError','NameError','IndexError','KeyError'],1,'NameError: usually a typo.');
W('debug','What does except do?',['Runs when try had an error','Runs always','Ends the program','Repeats the code'],0,'It is the safety net for try.');

/* ---------- daily challenges (small puzzles) ---------- */
function D(c){return function(title,html,starter,tests,hint,sol){var s=C(title,html,starter,tests,hint,sol); s.c=c; PC.daily.push(s)}}
D('hello')('Say hi twice',go(`Print <code>Hi!</code> on two lines.`),R`# Print Hi! two times
`,[{o:'Hi!\nHi!'}],`Two print lines.`,R`print("Hi!")
print("Hi!")`);
D('vars')('Rectangle perimeter',`<p>The perimeter is the distance around a rectangle: 2 times (width + height).</p>`+go(`Ask for the width and the height. Print the perimeter.`),R`width = int(input("Width: "))
height = int(input("Height: "))
# Print the perimeter
`,[{i:['3','4'],o:'14'},{i:['10','1'],o:'22'}],`print(2 * (width + height))`,R`width = int(input("Width: "))
height = int(input("Height: "))
print(2 * (width + height))`);
D('vars')('Temperature',`<p>Celsius to Fahrenheit: multiply by 9, divide by 5, add 32.</p>`+go(`Ask for degrees Celsius and print the Fahrenheit value.`),R`c = int(input("Celsius: "))
# Print the Fahrenheit value
`,[{i:['100'],o:'212.0'},{i:['0'],o:'32.0'}],`print(c * 9 / 5 + 32)`,R`c = int(input("Celsius: "))
print(c * 9 / 5 + 32)`);
D('text')('Initials',go(`Ask for a first and a last name. Print the initials in capital letters, like <code>AL</code> for Ada Lovelace.`),R`first = input("First name: ")
last = input("Last name: ")
# Print the two initials in capitals
`,[{i:['Ada','Lovelace'],o:'AL'},{i:['sam','lee'],o:'SL'}],`print(first[0].upper() + last[0].upper())`,R`first = input("First name: ")
last = input("Last name: ")
print(first[0].upper() + last[0].upper())`);
D('text')('Backwards',go(`Ask for a word and print it backwards.`),R`word = input("Word: ")
# Print the word backwards
`,[{i:['python'],o:'nohtyp'},{i:['abc'],o:'cba'}],`word[::-1] reverses text.`,R`word = input("Word: ")
print(word[::-1])`);
D('logic')('Leap year',`<p>A year is a leap year if it divides by 4, except when it divides by 100, unless it also divides by 400.</p>`+go(`Ask for a year and print <code>Leap year</code> or <code>Not a leap year</code>.`),R`year = int(input("Year: "))
# Print Leap year or Not a leap year
`,[{i:['2024'],o:'Leap year'},{i:['1900'],o:'Not a leap year'},{i:['2000'],o:'Leap year'},{i:['2023'],o:'Not a leap year'}],`(year % 4 == 0 and year % 100 != 0) or year % 400 == 0`,R`year = int(input("Year: "))
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("Leap year")
else:
    print("Not a leap year")`);
D('lists')('Second largest',go(`Print the second largest number in the list (it is 8).`),R`nums = [5, 8, 2, 9, 1]
# Print the second largest number
`,[{o:'8'}],`Sort the list, then take position -2.`,R`nums = [5, 8, 2, 9, 1]
nums.sort()
print(nums[-2])`);
D('loops')('Sum of digits',`<p>For 123 the answer is 1 + 2 + 3 = 6.</p>`+go(`Ask for a number. Print the sum of its digits.`),R`text = input("Number: ")
# Add up the digits
`,[{i:['123'],o:'6'},{i:['9'],o:'9'},{i:['4050'],o:'9'}],`Loop over the text, and add int(digit) to a total.`,R`text = input("Number: ")
total = 0
for digit in text:
    total = total + int(digit)
print(total)`);
D('loops')('Stars triangle',go(`Print this triangle of stars (use a loop):<br><code>*</code><br><code>**</code><br><code>***</code><br><code>****</code>`),R`# Print a triangle of stars, 4 rows
`,[{o:'*\n**\n***\n****'}],`for i in range(1, 5): print("*" * i)`,R`for i in range(1, 5):
    print("*" * i)`);
D('funcs')('Is it a vowel?',go(`Complete <code>is_vowel</code>. It returns True if the letter is a, e, i, o or u (any case).`),R`def is_vowel(letter):
    pass
`,[{a:'print(is_vowel("a"))',o:'True'},{a:'print(is_vowel("B"))',o:'False'},{a:'print(is_vowel("U"))',o:'True'}],`return letter.lower() in "aeiou"`,R`def is_vowel(letter):
    return letter.lower() in "aeiou"`);
D('funcs')('Average',go(`Complete <code>average</code> so it returns the average of a list of numbers.`),R`def average(numbers):
    pass
`,[{a:'print(average([2, 4, 6]))',o:'4.0'},{a:'print(average([10, 20]))',o:'15.0'}],`return sum(numbers) / len(numbers)`,R`def average(numbers):
    return sum(numbers) / len(numbers)`);
D('dicts')('Word counter',go(`Print how many times the word <code>to</code> appears in the sentence (it is 2).`),R`sentence = "to be or not to be"
# Count the word "to"
`,[{o:'2'}],`Split the sentence into words, then loop or use .count("to") on the list.`,R`sentence = "to be or not to be"
words = sentence.split()
print(words.count("to"))`);

/* ---------- cheat sheet ---------- */
PC.cheat.push(
 {t:'Printing and comments',items:[
  {h:'Show text or numbers',code:'print("Hello")\nprint(42)',n:'Text goes in quotes. Numbers do not.'},
  {h:'Several things in one line',code:'print("Score:", 10)',n:'A comma puts a space between the parts.'},
  {h:'Comments',code:'# Python ignores this line',n:'Notes for people.'}]},
 {t:'Variables and types',items:[
  {h:'Store a value',code:'name = "Mia"\nage = 12\nprint(name, age)',n:'= stores. Names use letters, numbers and underscores.'},
  {h:'Check and convert types',code:'print(type(5))\nprint(int("7") + 1)\nprint(str(7) + "!")\nprint(float("2.5"))',n:'int() whole number, float() decimal, str() text.'},
  {h:'Ask the user',code:'name = input("Your name? ")\nprint("Hi", name)',n:'input() always gives text.'}]},
 {t:'Maths',items:[
  {h:'Operators',code:'print(7 + 2, 7 - 2, 7 * 2, 7 / 2)\nprint(7 // 2, 7 % 2, 2 ** 3)',n:'// whole part, % remainder, ** power.'},
  {h:'Useful functions',code:'print(abs(-3), round(2.567, 1), min(4, 2), max(4, 2))',n:'Built in, nothing to import.'}]},
 {t:'Text (strings)',items:[
  {h:'Join and repeat',code:'print("a" + "b")\nprint("ab" * 3)',n:'+ glues, * repeats.'},
  {h:'f-strings',code:'name = "Mia"\nprint(f"Hello {name}! 2+2={2 + 2}")',n:'Put f before the quote and use {braces}.'},
  {h:'Text tools',code:'s = "  Hello  "\nprint(len(s), s.strip(), s.upper(), s.lower())\nprint(s.replace("Hello", "Bye"))',n:'Methods return new text.'},
  {h:'Positions and slices',code:'w = "Python"\nprint(w[0], w[-1], w[1:4], w[:2], w[2:])',n:'Counting starts at 0. Negative counts from the end.'}]},
 {t:'Decisions',items:[
  {h:'Comparisons',code:'print(3 == 3, 3 != 4, 3 < 4, 3 >= 4)',n:'== asks if equal. = stores.'},
  {h:'if / elif / else',code:'x = 15\nif x > 20:\n    print("big")\nelif x > 10:\n    print("medium")\nelse:\n    print("small")',n:'Colons and 4-space indents.'},
  {h:'and, or, not',code:'age = 15\nprint(age > 10 and age < 20)\nprint(age < 10 or age > 60)\nprint(not True)',n:'Combine yes/no questions.'}]},
 {t:'Lists',items:[
  {h:'Make, read, change',code:'fruits = ["apple", "pear"]\nprint(fruits[0], fruits[-1])\nfruits[0] = "kiwi"\nprint(fruits)',n:'Positions start at 0.'},
  {h:'Add and remove',code:'a = [1, 2]\na.append(3)\na.insert(0, 0)\na.remove(2)\nprint(a, a.pop(), a)',n:'append, insert, remove, pop.'},
  {h:'Helpers',code:'n = [3, 1, 2]\nprint(len(n), sum(n), min(n), max(n), 2 in n)\nn.sort()\nprint(n)',n:'len, sum, min, max, in, sort.'}]},
 {t:'Loops',items:[
  {h:'for loop',code:'for name in ["Ann", "Ben"]:\n    print(name)',n:'Once for each item.'},
  {h:'range',code:'for i in range(1, 6):\n    print(i)',n:'range(1, 6) gives 1 to 5.'},
  {h:'while loop',code:'n = 3\nwhile n > 0:\n    print(n)\n    n = n - 1',n:'Make sure something changes.'},
  {h:'break and continue',code:'for i in range(1, 8):\n    if i == 3:\n        continue\n    if i == 6:\n        break\n    print(i)',n:'continue skips a round. break stops the loop.'}]},
 {t:'Functions',items:[
  {h:'def, parameters, return',code:'def add(a, b):\n    return a + b\n\nprint(add(2, 3))',n:'return gives the answer back.'}]},
 {t:'Dictionaries, tuples, sets',items:[
  {h:'Dictionary',code:'d = {"name": "Mia", "age": 11}\nd["city"] = "Rome"\nprint(d["name"], d.get("x", "none"))\nfor k, v in d.items():\n    print(k, v)',n:'Look up by key. get() is safe.'},
  {h:'Tuple and set',code:'p = (3, 4)\nx, y = p\ns = {1, 2, 2, 3}\nprint(x, y, len(s))',n:'Tuple: fixed. Set: unique values.'}]},
 {t:'Errors',items:[
  {h:'try / except',code:'try:\n    n = int("abc")\nexcept ValueError:\n    print("Not a number")',n:'Catch the problem instead of crashing.'},
  {h:'Common errors',code:'# NameError: typo in a name\n# SyntaxError: missing colon, quote or bracket\n# TypeError: mixing text and numbers\n# IndexError: position too big\nprint("Read the line number first!")',n:'Read the kind, the message and the line.'}]}
);

/* ---------- glossary ---------- */
[
 ['argument','The value you pass into a function when you call it.'],
 ['boolean','A value that is either True or False.'],
 ['bug','A mistake in a program.'],
 ['call','To run a function by writing its name and brackets.'],
 ['comment','A note for people. Starts with # and is ignored by Python.'],
 ['condition','A question with a True or False answer, used by if and while.'],
 ['debug','To find and fix bugs.'],
 ['dictionary','A collection of key and value pairs, written with curly braces.'],
 ['float','A number with a decimal point, like 2.5.'],
 ['function','A named bundle of code you can run again and again.'],
 ['index','The position number of an item in a list or text. Starts at 0.'],
 ['input','Information typed in by the user. Python gets it with input().'],
 ['integer','A whole number, like 7 or -3. Python calls it int.'],
 ['list','An ordered collection of values in square brackets.'],
 ['loop','Code that repeats. Python has for loops and while loops.'],
 ['method','A tool that belongs to a value, written with a dot, like text.upper().'],
 ['parameter','A variable in the brackets of a function definition.'],
 ['return','Hands a value back from a function to the code that called it.'],
 ['string','Text inside quotes. Python calls it str.'],
 ['syntax','The spelling and grammar rules of code.'],
 ['tuple','Like a list, but it cannot be changed.'],
 ['variable','A name that holds a value.']
].forEach(function(g){PC.gloss.push({w:g[0],d:g[1]})});
})();
