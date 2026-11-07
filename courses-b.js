/* Courses 4-7: Making Decisions, Lists, Loops, Functions */
(function(){
var L=PC.L,C=PC.C,Q=PC.Q,tip=PC.tip,words=PC.words,go=PC.go,snip=PC.snip,out=PC.out;

function times3(){var a=[];for(var i=1;i<=10;i++)a.push('3 x '+i+' = '+(3*i));return a.join('\n')}
function fizz(){var a=[];for(var i=1;i<=15;i++)a.push(i%15===0?'FizzBuzz':i%3===0?'Fizz':i%5===0?'Buzz':String(i));return a.join('\n')}

PC.courses.push({id:'logic',cc:'c4',icon:'if',title:'Making Decisions',blurb:'Teach your programs to choose with if, elif and else.',
learn:['True and False values (booleans)','Compare things with == != < > <= >=','Choose what runs with if / elif / else','Combine conditions with and, or, not'],
lessons:[
{t:'True or False',s:'Booleans and comparing',steps:[
 L('Questions with yes/no answers',`<p>Python can ask yes/no questions. The answer is always one of two special values: <code>True</code> or <code>False</code>. They are called <b>booleans</b>.</p><p>You ask a question with a comparison:</p><ul><li><code>==</code> equal to</li><li><code>!=</code> not equal to</li><li><code>&gt;</code> bigger, <code>&lt;</code> smaller</li><li><code>&gt;=</code> bigger or equal, <code>&lt;=</code> smaller or equal</li></ul>`+tip(`Two equal signs <code>==</code> ask "are these the same?". One equal sign <code>=</code> stores a value. Mixing them up is the most common beginner mistake.`),R`print(5 > 3)
print(5 < 3)
print(5 == 5)
print(5 != 5)
print(10 >= 10)
print("cat" == "cat")
`),
 Q('What is the difference between = and == ?',['They are the same thing','= stores a value, == asks if two things are equal','== stores a value, = asks a question','Neither is used in Python'],1,`<code>age = 12</code> stores 12. <code>age == 12</code> asks "is age equal to 12?" and gives True or False.`),
 C('Old enough?',``+go(`Print whether <code>age</code> is at least 13. It should show <code>True</code> or <code>False</code>.`),R`age = 15
# Print whether age is at least 13
`,[{o:'True'},{s:/>=/,m:'Use the >= sign for "at least".'}],`print(age >= 13)`,R`age = 15
print(age >= 13)`),
 C('A match?',``+go(`Print <code>True</code> if <code>guess</code> is the same as <code>answer</code>, otherwise <code>False</code>. (With these values, it should show False.)`),R`guess = "cat"
answer = "dog"
# Print whether guess is the same as answer
`,[{o:'False'},{s:/==/,m:'Use == to compare.'}],`print(guess == answer)`,R`guess = "cat"
answer = "dog"
print(guess == answer)`)
]},
{t:'if statements',s:'Run code only sometimes',steps:[
 L('If this, then that',`<p>An <code>if</code> statement runs some code only when a condition is True.</p>`+snip(R`if temperature > 25:
    print("It is hot!")`)+`<p>Two details matter a lot:</p><ul><li>The <b>colon</b> <code>:</code> at the end of the <code>if</code> line.</li><li>The <b>indent</b>: the lines that belong to the <code>if</code> start with 4 spaces. Press <kbd>Tab</kbd> to add them.</li></ul><p>The line without the indent (<code>print("Done")</code> below) always runs.</p>`,R`temperature = 30
if temperature > 25:
    print("It is hot!")
print("Done")
`),
 C('Your first if',``+go(`If <code>age</code> is 13 or more, print <code>Teenager</code>.`),R`age = 16
# If age is 13 or more, print "Teenager"
`,[{o:'Teenager'},{s:/\bif\b/,m:'Use an if statement.'}],`if age >= 13: then on the next line, indented 4 spaces, print("Teenager")`,R`age = 16
if age >= 13:
    print("Teenager")`),
 L('Otherwise: else',`<p>Add <code>else</code> to say what happens when the condition is <b>not</b> True. It also needs a colon and an indent.</p>`,R`age = 10
if age >= 13:
    print("Teenager")
else:
    print("Kid")
`),
 C('Even or odd',`<p>A number is even when dividing it by 2 leaves no remainder, so <code>number % 2 == 0</code>.</p>`+go(`Ask for a number. Print <code>even</code> or <code>odd</code>.`),R`number = int(input("Number: "))
# Print "even" if the number is even, otherwise "odd"
`,[{i:['4'],o:'even'},{i:['7'],o:'odd'},{i:['0'],o:'even'}],`if number % 2 == 0: print("even") else: print("odd") (each on its own indented line)`,R`number = int(input("Number: "))
if number % 2 == 0:
    print("even")
else:
    print("odd")`),
 Q('What must the end of an if line have?',['A semicolon ;','A colon :','A full stop .','Nothing'],1,`Every <code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code>, <code>while</code> and <code>def</code> line ends with a colon.`)
]},
{t:'elif ladders',s:'More than two choices',steps:[
 L('Many choices with elif',`<p><code>elif</code> means "else, if". You can stack as many as you want. Python checks them from top to bottom and runs the <b>first</b> one that is True, then skips the rest.</p>`+tip(`Order matters. Put the strictest check first (like score &gt;= 90) and the catch-all <code>else</code> last.`),R`score = 72
if score >= 90:
    print("A")
elif score >= 70:
    print("B")
else:
    print("C")
`),
 C('Grade it',`<p>The checker will try several scores.</p>`+go(`Ask for a score. Print <code>A</code> for 90 or more, <code>B</code> for 80 or more, <code>C</code> for 70 or more, otherwise <code>F</code>.`),R`score = int(input("Score: "))
# Print A, B, C or F
`,[{i:['95'],o:'A'},{i:['85'],o:'B'},{i:['72'],o:'C'},{i:['40'],o:'F'},{i:['90'],o:'A'}],`Use if score >= 90, then elif score >= 80, then elif score >= 70, then else.`,R`score = int(input("Score: "))
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")`),
 Q('With score = 85, and checks  if score >= 90 / elif score >= 80 / elif score >= 70  which one runs?',['The first','The second','The third','The second and the third'],1,`85 is not 90 or more, so the first fails. The second (80 or more) is True, so Python runs it and skips the rest.`),
 C('Traffic light',``+go(`Ask for a colour. Print <code>Stop</code> for red, <code>Wait</code> for yellow, <code>Go</code> for green, and <code>Unknown colour</code> for anything else.`),R`colour = input("Colour: ")
# Print Stop, Wait, Go or Unknown colour
`,[{i:['red'],o:'Stop'},{i:['yellow'],o:'Wait'},{i:['green'],o:'Go'},{i:['blue'],o:'Unknown colour'}],`Compare with == and use elif for the second and third choice.`,R`colour = input("Colour: ")
if colour == "red":
    print("Stop")
elif colour == "yellow":
    print("Wait")
elif colour == "green":
    print("Go")
else:
    print("Unknown colour")`)
]},
{t:'and, or, not',s:'Combining conditions',steps:[
 L('Mix questions together',`<p>Combine conditions to ask bigger questions:</p><ul><li><code>and</code>: both must be True</li><li><code>or</code>: at least one must be True</li><li><code>not</code>: flips True to False and the other way around</li></ul>`,R`age = 15
has_ticket = True
if age >= 12 and has_ticket:
    print("Welcome in!")
day = "Sunday"
if day == "Saturday" or day == "Sunday":
    print("Weekend!")
print(not True)
`),
 C('Ride height',`<p>A ride allows ages 10 to 60, both included.</p>`+go(`Ask for an age. Print <code>Can ride</code> if it is allowed, otherwise <code>Cannot ride</code>.`),R`age = int(input("Age: "))
# Can ride: 10 to 60 (including both)
`,[{i:['9'],o:'Cannot ride'},{i:['10'],o:'Can ride'},{i:['30'],o:'Can ride'},{i:['60'],o:'Can ride'},{i:['61'],o:'Cannot ride'}],`if age >= 10 and age <= 60: ...`,R`age = int(input("Age: "))
if age >= 10 and age <= 60:
    print("Can ride")
else:
    print("Cannot ride")`),
 C('Weekend or weekday',``+go(`Ask for a day. Print <code>Weekend</code> for Saturday or Sunday, otherwise <code>Weekday</code>.`),R`day = input("Day: ")
# Print Weekend or Weekday
`,[{i:['Saturday'],o:'Weekend'},{i:['Sunday'],o:'Weekend'},{i:['Monday'],o:'Weekday'}],`if day == "Saturday" or day == "Sunday":`,R`day = input("Day: ")
if day == "Saturday" or day == "Sunday":
    print("Weekend")
else:
    print("Weekday")`),
 Q('What is  True and False ?',['True','False','An error','None'],1,`<code>and</code> needs both sides to be True. One False makes the whole thing False.`)
]}
]});

PC.courses.push({id:'lists',cc:'c5',icon:'[ ]',title:'Lists',blurb:'Keep many values together and work with them.',
learn:['Make lists and read items by position','Add, remove and change items','Use len, sum, max, min, sort and in'],
lessons:[
{t:'Your first list',s:'Many values, one name',steps:[
 L('A list is a row of boxes',`<p>A <b>list</b> holds many values in order. Write it with square brackets and commas. Each item has a position number starting at <b>0</b>, just like letters in text.</p>`+words(`<b>list</b>: an ordered collection of values.<br><b>item</b>: one value inside a list.`),R`fruits = ["apple", "banana", "cherry"]
print(fruits)
print(fruits[0])
print(fruits[2])
print(len(fruits))
fruits[1] = "blueberry"
print(fruits)
`),
 C('Pick an item',``+go(`Print the second colour in the list (remember: counting starts at 0).`),R`colors = ["red", "green", "blue"]
# Print the second color
`,[{o:'green'}],`The second item is at position 1: colors[1]`,R`colors = ["red", "green", "blue"]
print(colors[1])`),
 C('Change an item',`<p>You change an item by assigning to its position.</p>`+go(`Change <code>"dog"</code> to <code>"hamster"</code>, then print the list.`),R`pets = ["cat", "dog", "fish"]
# Change "dog" to "hamster", then print the list
`,[{o:"['cat', 'hamster', 'fish']"}],`pets[1] = "hamster"`,R`pets = ["cat", "dog", "fish"]
pets[1] = "hamster"
print(pets)`),
 Q('A list has 4 items. What is the position of the last one?',['4','3','5','1'],1,`Positions are 0, 1, 2, 3. The last of 4 items is at position 3. (You can also use -1 to always get the last one.)`)
]},
{t:'Add and remove',s:'append, insert, remove, pop',steps:[
 L('Lists can grow and shrink',`<ul><li><code>append(x)</code> adds to the end</li><li><code>insert(i, x)</code> adds at position i</li><li><code>remove(x)</code> deletes the first x it finds</li><li><code>pop()</code> removes the last item and gives it back to you</li></ul>`,R`todo = ["homework", "dishes"]
todo.append("walk dog")
print(todo)
todo.insert(0, "wake up")
print(todo)
todo.remove("dishes")
print(todo)
last = todo.pop()
print(last)
print(todo)
`),
 C('Add to the end',``+go(`Add <code>4</code> to the end of the list, then print the list.`),R`numbers = [1, 2, 3]
# Add 4 to the end, then print the list
`,[{o:'[1, 2, 3, 4]'},{s:/append/,m:'Use .append() to add to the end.'}],`numbers.append(4)`,R`numbers = [1, 2, 3]
numbers.append(4)
print(numbers)`),
 C('Remove an item',``+go(`Remove <code>"apple"</code> from the list, then print the list.`),R`snacks = ["chips", "apple", "cookie"]
# Remove "apple", then print the list
`,[{o:"['chips', 'cookie']"}],`snacks.remove("apple")`,R`snacks = ["chips", "apple", "cookie"]
snacks.remove("apple")
print(snacks)`),
 C('Collect names',`<p>Start with an empty list <code>[]</code> and add things as the user types them.</p>`+go(`Ask for a name 3 times with <code>input()</code>, add each one to the list, then print the list.`),R`names = []
# Ask for a name 3 times and append each one
# Then print the list
`,[{i:['a','b','c'],o:"['a', 'b', 'c']"},{i:['Zoe','Max','Ann'],o:"['Zoe', 'Max', 'Ann']"}],`Write names.append(input("Name: ")) three times, then print(names).`,R`names = []
names.append(input("Name: "))
names.append(input("Name: "))
names.append(input("Name: "))
print(names)`),
 Q('What does pop() do?',['Adds an item','Removes the last item and gives it back','Sorts the list','Counts the items'],1,`<code>pop()</code> takes the last item out of the list and hands it to you.`)
]},
{t:'Handy list tricks',s:'len, sum, max, sort, in',steps:[
 L('Built-in helpers',`<p>Python has ready-made tools for lists:</p><ul><li><code>len(list)</code> the number of items</li><li><code>sum(list)</code>, <code>max(list)</code>, <code>min(list)</code> for number lists</li><li><code>list.sort()</code> sorts the list</li><li><code>x in list</code> asks "is x in there?" and gives True or False</li></ul>`,R`scores = [70, 95, 82, 60]
print(len(scores))
print(sum(scores))
print(max(scores))
print(min(scores))
scores.sort()
print(scores)
print(95 in scores)
print(100 in scores)
`),
 C('The average',`<p>The average is the sum divided by how many there are.</p>`+go(`Print the average of <code>scores</code>.`),R`scores = [70, 95, 82, 60]
# Print the average score
`,[{o:'76.75'},{s:/sum\(/,m:'Use sum() and len().'}],`print(sum(scores) / len(scores))`,R`scores = [70, 95, 82, 60]
print(sum(scores) / len(scores))`),
 C('In alphabetical order',``+go(`Sort the names, then print the list.`),R`names = ["Zoe", "Ben", "Mia"]
# Sort the names and print the list
`,[{o:"['Ben', 'Mia', 'Zoe']"}],`names.sort() changes the list. Then print(names).`,R`names = ["Zoe", "Ben", "Mia"]
names.sort()
print(names)`),
 C('Is it in the list?',``+go(`Ask for a fruit. Print <code>Yes</code> if it is in the list, otherwise <code>No</code>.`),R`fruits = ["apple", "pear"]
fruit = input("Fruit: ")
# Print Yes or No
`,[{i:['apple'],o:'Yes'},{i:['kiwi'],o:'No'},{i:['pear'],o:'Yes'}],`if fruit in fruits: ...`,R`fruits = ["apple", "pear"]
fruit = input("Fruit: ")
if fruit in fruits:
    print("Yes")
else:
    print("No")`),
 Q('After  nums = [3, 1, 2]  and  nums.sort()  what is nums?',['[3, 1, 2]','[1, 2, 3]','[3, 2, 1]','None'],1,`<code>sort()</code> puts the list in order, smallest first, and changes the list itself.`)
]}
]});

PC.courses.push({id:'loops',cc:'c6',icon:'for',title:'Loops',blurb:'Make the computer repeat work so you do not have to.',
learn:['Repeat with for loops and range()','Repeat while a condition is True','Skip and stop with continue and break','Solve classic loop puzzles'],
lessons:[
{t:'for loops',s:'Do it for each item',steps:[
 L('Repeat for every item',`<p>A <b>loop</b> repeats code. A <code>for</code> loop runs once for each item in a list. Each time, the loop variable (here <code>name</code>) holds the next item.</p><p>The indented lines are the <b>body</b> of the loop. They run again and again. The unindented line after the loop runs once, at the end.</p>`+tip(`Without loops you would write the same line 100 times. With a loop, you write it once.`),R`for name in ["Ann", "Ben", "Cy"]:
    print("Hello,", name)
print("All done")
`),
 C('Print each animal',``+go(`Use a <code>for</code> loop to print every animal on its own line.`),R`animals = ["cat", "dog", "bird"]
# Print each animal using a for loop
`,[{o:'cat\ndog\nbird'},{s:/\bfor\b/,m:'Use a for loop.'}],`for animal in animals: then print(animal) indented`,R`animals = ["cat", "dog", "bird"]
for animal in animals:
    print(animal)`),
 C('Add them up',`<p>A common job for loops: keep a running total.</p>`+go(`Use a loop to add every number to <code>total</code>, then print it (it should be 10).`),R`numbers = [1, 2, 3, 4]
total = 0
# Use a loop to add each number to total
print(total)
`,[{o:'10'},{s:/\bfor\b/,m:'Use a for loop.'}],`for n in numbers: total = total + n`,R`numbers = [1, 2, 3, 4]
total = 0
for n in numbers:
    total = total + n
print(total)`),
 Q('A list has 5 items. How many times does the loop body run?',['1','4','5','6'],2,`Once for each item, so 5 times.`)
]},
{t:'range()',s:'Counting loops',steps:[
 L('Loop a number of times',`<p><code>range()</code> makes a series of numbers to loop over.</p><ul><li><code>range(5)</code> gives 0, 1, 2, 3, 4 (five numbers, starting at 0)</li><li><code>range(1, 6)</code> gives 1, 2, 3, 4, 5 (the end number is not included)</li><li><code>range(0, 10, 2)</code> gives 0, 2, 4, 6, 8 (the last number is the step size)</li></ul>`,R`for i in range(5):
    print(i)
print("---")
for i in range(1, 6):
    print(i)
print("---")
for i in range(0, 10, 2):
    print(i)
`),
 C('Count to five',``+go(`Print the numbers 1 to 5, each on its own line.`),R`# Print 1 to 5 with a for loop and range
`,[{o:'1\n2\n3\n4\n5'},{s:/range\(/,m:'Use range().'}],`for i in range(1, 6): print(i)`,R`for i in range(1, 6):
    print(i)`),
 C('Say it three times',``+go(`Print <code>Python is fun!</code> three times using <code>range(3)</code>.`),R`# Print Python is fun! three times
`,[{o:'Python is fun!\nPython is fun!\nPython is fun!'},{s:/range\(\s*3\s*\)/,m:'Use range(3).'}],`for i in range(3): print("Python is fun!")`,R`for i in range(3):
    print("Python is fun!")`),
 C('Add 1 to 10',``+go(`Add the numbers 1 to 10 with a loop and print the total (55).`),R`total = 0
# Add the numbers 1 to 10 together using a loop
print(total)
`,[{o:'55'},{s:/\bfor\b/,m:'Use a for loop.'}],`for i in range(1, 11): total = total + i`,R`total = 0
for i in range(1, 11):
    total = total + i
print(total)`),
 Q('What numbers does range(2, 5) give?',['2, 3, 4, 5','2, 3, 4','3, 4, 5','2, 5'],1,`It starts at 2 and stops before 5.`)
]},
{t:'while loops',s:'Repeat until something changes',steps:[
 L('Keep going while it is True',`<p>A <code>while</code> loop repeats as long as its condition is True. Something inside the loop must change, otherwise the condition stays True forever and the loop never ends. That is called an <b>infinite loop</b>.</p>`+tip(`If your program gets stuck, press <b>Stop</b>. The editor also stops programs that run for too long.`),R`count = 3
while count > 0:
    print(count)
    count = count - 1
print("Liftoff!")
`),
 C('Countdown',``+go(`Use a <code>while</code> loop to print 5, 4, 3, 2, 1, and then <code>Go!</code>.`),R`count = 5
# Use a while loop to print 5, 4, 3, 2, 1
print("Go!")
`,[{o:'5\n4\n3\n2\n1\nGo!'},{s:/\bwhile\b/,m:'Use a while loop.'}],`while count > 0: print(count), then count = count - 1`,R`count = 5
while count > 0:
    print(count)
    count = count - 1
print("Go!")`),
 C('Stop the endless loop',`<p>This loop never ends, because <code>n</code> never changes. Press Run to see Python stop it, then fix it.</p>`+go(`Make it print <code>1</code>, <code>2</code>, <code>3</code> and then stop.`),R`n = 1
while n <= 3:
    print(n)
`,[{o:'1\n2\n3'}],`Add n = n + 1 inside the loop, indented under print(n).`,R`n = 1
while n <= 3:
    print(n)
    n = n + 1`,{fix:true}),
 Q('What makes a while loop stop?',['After 10 rounds','When its condition becomes False','When you press Enter','It never stops'],1,`The loop checks the condition before every round. When it is False, the loop ends.`)
]},
{t:'break and continue',s:'Skip and stop',steps:[
 L('Skip one, or stop early',`<ul><li><code>continue</code> skips the rest of this round and jumps to the next one.</li><li><code>break</code> stops the whole loop right away.</li></ul>`,R`for i in range(1, 8):
    if i == 3:
        continue
    if i == 6:
        break
    print(i)
`),
 C('Skip the five',``+go(`Print the numbers 1 to 10, but skip 5 using <code>continue</code>.`),R`for i in range(1, 11):
    # Skip 5, print everything else
    print(i)
`,[{o:'1\n2\n3\n4\n6\n7\n8\n9\n10'},{s:/continue/,m:'Use continue.'}],`if i == 5: continue (before the print)`,R`for i in range(1, 11):
    if i == 5:
        continue
    print(i)`),
 C('Stop at a big number',`<p>Loop through the list. Stop (break) as soon as you meet a number bigger than 10. Numbers before that should be printed.</p>`+go(`The output should be <code>3</code> and <code>7</code>.`),R`numbers = [3, 7, 12, 5, 9]
for n in numbers:
    # Stop when n is bigger than 10, otherwise print n
    print(n)
`,[{o:'3\n7'},{s:/break/,m:'Use break.'}],`if n > 10: break (before the print)`,R`numbers = [3, 7, 12, 5, 9]
for n in numbers:
    if n > 10:
        break
    print(n)`),
 Q('What is the difference between break and continue?',['They are the same','break stops the loop, continue skips to the next round','continue stops the loop, break skips a round','break only works in while loops'],1,`<code>break</code> leaves the loop. <code>continue</code> only skips the rest of the current round.`)
]},
{t:'Loop challenges',s:'Put it all together',steps:[
 L('Break big problems into small steps',`<p>These puzzles are famous. Do not try to solve everything at once. Ask yourself: <b>what repeats?</b> and <b>what changes each time?</b> Write a tiny part, run it, and build up from there.</p>`+tip(`Stuck? Add <code>print()</code> lines inside your loop to see what the variables hold. This is how pros debug too.`),R`# Try it: what does this print?
for i in range(1, 4):
    print(i, "squared is", i * i)
`),
 C('The 3 times table',`<p>Each line looks like <code>3 x 4 = 12</code>.</p>`+go(`Print the 3 times table from <code>3 x 1 = 3</code> to <code>3 x 10 = 30</code>.`),R`# Print the 3 times table
`,[{o:times3()}],`for i in range(1, 11): print(f"3 x {i} = {3 * i}")`,R`for i in range(1, 11):
    print(f"3 x {i} = {3 * i}")`),
 C('Sum of even numbers',``+go(`Ask for a number n. Print the sum of all even numbers from 1 up to n.`),R`n = int(input("n: "))
# Add up the even numbers from 1 to n
`,[{i:['10'],o:'30'},{i:['5'],o:'6'},{i:['1'],o:'0'}],`Loop with range(1, n + 1), and only add i when i % 2 == 0.`,R`n = int(input("n: "))
total = 0
for i in range(1, n + 1):
    if i % 2 == 0:
        total = total + i
print(total)`),
 C('FizzBuzz',`<p>The most famous beginner puzzle. For the numbers 1 to 15: print <code>Fizz</code> if the number divides by 3, <code>Buzz</code> if it divides by 5, <code>FizzBuzz</code> if it divides by both, otherwise the number itself.</p>`+tip(`Check the "both" case first!`),R`# FizzBuzz for 1 to 15
`,[{o:fizz()}],`Check i % 15 == 0 first (that means both 3 and 5), then i % 3, then i % 5, then else print(i).`,R`for i in range(1, 16):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`)
]}
]});

PC.courses.push({id:'funcs',cc:'c1',icon:'def',title:'Functions',blurb:'Build your own commands and reuse your code.',
learn:['Define and call your own functions','Pass information in with parameters','Get answers back with return','Use functions with if and loops'],
lessons:[
{t:'Your own commands',s:'def and calling',steps:[
 L('Make a mini program with a name',`<p>A <b>function</b> is a named bundle of code. You write it once with <code>def</code>, then <b>call</b> it as often as you like. Python does nothing when it reads the <code>def</code>. It just learns the new command. The code runs when you call it.</p>`+words(`<b>define</b>: create the function with def.<br><b>call</b>: run it by writing its name and brackets.`),R`def say_hello():
    print("Hello!")
    print("Welcome to my program.")

say_hello()
say_hello()
`),
 C('Make a cheer',``+go(`Define a function called <code>cheer</code> that prints <code>Hip hip hooray!</code>. Then call it two times.`),R`# Define cheer, then call it twice
`,[{o:'Hip hip hooray!\nHip hip hooray!'},{s:/def\s+cheer\s*\(/,m:'Define a function called cheer with def cheer():'}],`def cheer(): then an indented print. Then write cheer() twice at the left edge.`,R`def cheer():
    print("Hip hip hooray!")

cheer()
cheer()`),
 Q('Why do programmers write functions?',['To make the code run slower','To reuse code without copying it','Because Python forces you to','To hide the code'],1,`Write once, use many times. If you need to fix something, you only fix it in one place.`)
]},
{t:'Parameters',s:'Give a function information',steps:[
 L('Functions that take input',`<p>A <b>parameter</b> is a variable in the brackets of the function. It receives a value each time you call the function. The value you pass in is called an <b>argument</b>.</p>`+snip(R`def greet(name):
    print("Hello, " + name + "!")

greet("Ada")`)+`<p>Here <code>name</code> is the parameter and <code>"Ada"</code> is the argument.</p>`,R`def greet(name):
    print("Hello, " + name + "!")

greet("Ada")
greet("Sam")
`),
 C('A greeting function',`<p>The checker will call your function with different names.</p>`+go(`Complete the function so it prints <code>Hello, NAME!</code>.`),R`def greet(name):
    # Print Hello, name!
    pass
`,[{a:'greet("Ada")',o:'Hello, Ada!'},{a:'greet("Max")',o:'Hello, Max!'}],`Replace pass with print("Hello, " + name + "!")`,R`def greet(name):
    print("Hello, " + name + "!")`),
 C('Two parameters',`<p>Separate several parameters with commas.</p>`+go(`Complete <code>add_and_show</code> so <code>add_and_show(2, 3)</code> prints <code>2 + 3 = 5</code>.`),R`def add_and_show(a, b):
    # Print something like: 2 + 3 = 5
    pass
`,[{a:'add_and_show(2, 3)',o:'2 + 3 = 5'},{a:'add_and_show(10, 5)',o:'10 + 5 = 15'}],`print(f"{a} + {b} = {a + b}")`,R`def add_and_show(a, b):
    print(f"{a} + {b} = {a + b}")`),
 Q('In  def greet(name):  what is name?',['An argument','A parameter','A string','A loop'],1,`The variable in the brackets of the <code>def</code> line is the <b>parameter</b>. The value you pass when calling it is the argument.`)
]},
{t:'return values',s:'Getting an answer back',steps:[
 L('print shows, return gives back',`<p><code>print</code> shows something on the screen for <b>people</b>. <code>return</code> hands a value back to the <b>code that called the function</b>, so it can use it, store it, or print it.</p>`+snip(R`def double(n):
    return n * 2

result = double(21)`)+tip(`When Python reaches <code>return</code>, the function ends immediately and sends the value back.`),R`def double(n):
    return n * 2

result = double(21)
print(result)
print(double(5) + 1)
`),
 C('Square it',`<p>The checker prints what your function returns.</p>`+go(`Complete <code>square</code> so it returns the number multiplied by itself.`),R`def square(n):
    # return n times n
    pass
`,[{a:'print(square(4))',o:'16'},{a:'print(square(7))',o:'49'},{a:'print(square(0))',o:'0'}],`return n * n`,R`def square(n):
    return n * n`),
 C('Even or not',`<p>Functions that answer yes/no questions usually return <code>True</code> or <code>False</code>.</p>`+go(`Complete <code>is_even</code> so it returns True for even numbers and False for odd ones.`),R`def is_even(n):
    # return True if n is even, else False
    pass
`,[{a:'print(is_even(4))',o:'True'},{a:'print(is_even(7))',o:'False'},{a:'print(is_even(0))',o:'True'}],`return n % 2 == 0`,R`def is_even(n):
    return n % 2 == 0`),
 C('Rectangle area',``+go(`Complete <code>area</code> so it returns width times height.`),R`def area(width, height):
    pass
`,[{a:'print(area(3, 4))',o:'12'},{a:'print(area(10, 2))',o:'20'}],`return width * height`,R`def area(width, height):
    return width * height`),
 Q('What does a function give back if it has no return?',['0','An empty string','None','An error'],2,`<code>None</code> is Python's way of saying "nothing here".`)
]},
{t:'Functions in action',s:'Use everything so far',steps:[
 L('Combine your skills',`<p>Functions can contain <code>if</code>, loops, lists, anything you have learned. They are where your programs start to feel real. A good function does <b>one job</b> and has a name that says which.</p>`,R`def grade(score):
    if score >= 90:
        return "A"
    elif score >= 70:
        return "B"
    else:
        return "C"

for s in [95, 80, 50]:
    print(s, grade(s))
`),
 C('Biggest of three',``+go(`Complete <code>biggest</code> so it returns the largest of three numbers.`),R`def biggest(a, b, c):
    pass
`,[{a:'print(biggest(1, 5, 3))',o:'5'},{a:'print(biggest(9, 2, 4))',o:'9'},{a:'print(biggest(3, 3, 3))',o:'3'},{a:'print(biggest(1, 2, 8))',o:'8'}],`Use if statements to compare, or the built-in max(a, b, c).`,R`def biggest(a, b, c):
    return max(a, b, c)`),
 C('Count the vowels',`<p>The vowels are a, e, i, o, u. Loop over the letters and count them.</p>`+tip(`Use <code>text.lower()</code> first so capital letters count too.`)+go(`Complete <code>count_vowels</code> so it returns how many vowels the text has.`),R`def count_vowels(text):
    pass
`,[{a:'print(count_vowels("banana"))',o:'3'},{a:'print(count_vowels("sky"))',o:'0'},{a:'print(count_vowels("Education"))',o:'5'}],`Start with count = 0, loop over text.lower(), and add 1 when the letter is in "aeiou".`,R`def count_vowels(text):
    count = 0
    for letter in text.lower():
        if letter in "aeiou":
            count = count + 1
    return count`),
 Q('What is the best name for a function that checks if a number is prime?',['f','do_it','is_prime','x'],2,`Clear names that say what the function does make code easy to read.`)
]}
]});
})();
