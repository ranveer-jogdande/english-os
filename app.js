/* ================= CONTENT ================= */
const WORDS = [
 {w:"implement",ipa:"/ˈɪmplɪment/",say:"IM-pli-ment",pos:"verb",lvl:"B2",meaning:"To put a plan, decision or system into action.",hi:"लागू करना",mr:"अंमलात आणणे",
  ex:["The company implemented a new marketing strategy.","We'll implement the changes after the client signs off.","It's a good idea, but it'll be hard to implement."],
  coll:["implement a strategy","implement a solution","implement a policy","fully implement"],syn:["carry out","execute","put into practice"],ant:["abandon","shelve"],
  mist:"Don't say \"implement a meeting\" or \"implement a party\". You implement plans, rules and systems, not events.",reg:"Formal and professional. In casual talk, \"put into practice\" or \"start using\" sounds lighter.",
  convo:[["A","Did they ever implement that new leave policy?"],["B","Yes, last month. Everyone can work from home on Fridays now."]],
  workplace:"Explain a change your team or college implemented."},
 {w:"hesitate",ipa:"/ˈhezɪteɪt/",say:"HEZ-i-tayt",pos:"verb",lvl:"B1",meaning:"To pause before doing or saying something because you are unsure or nervous.",hi:"हिचकिचाना, झिझकना",mr:"कचरणे, संकोच करणे",
  ex:["Don't hesitate to call me if you need anything.","She hesitated before answering the question.","I hesitated for a second and then raised my hand."],
  coll:["hesitate to ask","don't hesitate to","hesitate for a moment","without hesitating"],syn:["pause","hold back","waver"],ant:["act immediately","jump in"],
  mist:"Say \"hesitate to do something\", not \"hesitate for doing something\".",reg:"Neutral. \"Please don't hesitate to contact me\" is a standard line in professional emails.",
  convo:[["A","Why didn't you ask the interviewer about the salary?"],["B","I hesitated. I wasn't sure if it was the right moment."]],
  workplace:"Describe a moment at work or college when you hesitated to speak."},
 {w:"convey",ipa:"/kənˈveɪ/",say:"kun-VAY",pos:"verb",lvl:"B2",meaning:"To communicate an idea, feeling or message so that someone understands it.",hi:"व्यक्त करना, पहुँचाना",mr:"व्यक्त करणे, पोहोचवणे",
  ex:["It's hard to convey emotion in a short email.","Please convey my thanks to your team.","The chart conveys the main trend clearly."],
  coll:["convey a message","convey meaning","convey emotion","convey my thanks"],syn:["communicate","express","get across"],ant:["hide","conceal"],
  mist:"Don't say \"convey to him that...\" in casual chat; \"tell him that...\" is more natural. \"Convey\" suits formal or written English.",reg:"Formal / professional. In speech, \"get across\" is the natural casual version.",
  convo:[["A","Did the presentation go well?"],["B","Mostly. I just couldn't convey how urgent the problem is."]],
  workplace:"Talk about a message you had to convey to a manager or teacher."},
 {w:"reliable",ipa:"/rɪˈlaɪəbl/",say:"ri-LIE-uh-bul",pos:"adjective",lvl:"B1",meaning:"Able to be trusted to work well or do what is expected.",hi:"भरोसेमंद",mr:"विश्वासार्ह",
  ex:["He's the most reliable person on our team.","Is this source reliable?","The metro is more reliable than the bus during the monsoon."],
  coll:["reliable source","reliable information","highly reliable","reliable friend"],syn:["dependable","trustworthy","consistent"],ant:["unreliable","undependable"],
  mist:"\"Reliable on\" is wrong. A person is reliable; you rely on them.",reg:"Neutral. Works in both casual and professional English.",
  convo:[["A","Should I buy this phone?"],["B","The camera's great, but I've heard the battery isn't very reliable."]],
  workplace:"Describe a reliable colleague, classmate or tool and why you trust it."},
 {w:"eventually",ipa:"/ɪˈventʃuəli/",say:"i-VEN-choo-uh-lee",pos:"adverb",lvl:"B1",meaning:"In the end, after a long time or a lot of effort.",hi:"आखिरकार",mr:"शेवटी, कालांतराने",
  ex:["We eventually found the restaurant after 30 minutes.","Eventually, she got the job she wanted.","Keep practising and it'll eventually feel natural."],
  coll:["eventually decided","eventually became","will eventually","eventually led to"],syn:["finally","in the end","ultimately"],ant:["immediately","right away"],
  mist:"\"Eventually\" is NOT \"possibly\". In Marathi and Hindi speakers' English it is sometimes used like \"by chance\"; it means \"after time has passed\".",reg:"Neutral. Very common in storytelling.",
  convo:[["A","Did you fix the laptop?"],["B","Eventually, yes. It took me the whole evening."]],
  workplace:"Tell a short story about a problem that was eventually solved."},
 {w:"approach",ipa:"/əˈprəʊtʃ/",say:"uh-PROHCH",pos:"noun / verb",lvl:"B1",meaning:"A way of dealing with something; also, to come near.",hi:"तरीका, दृष्टिकोण",mr:"दृष्टिकोन, पद्धत",
  ex:["We need a different approach to this problem.","How would you approach a difficult client?","As the deadline approached, everyone got nervous."],
  coll:["take an approach","a new approach","approach a problem","practical approach"],syn:["method","way","strategy"],ant:[],
  mist:"Don't say \"approach to him\". As a verb: \"approach him\" (no \"to\").",reg:"Neutral and very common in interviews.",
  convo:[["A","How do you usually prepare for exams?"],["B","My approach is simple: one topic a day, then practice papers."]],
  workplace:"Explain your approach to learning a new skill."},
 {w:"clarify",ipa:"/ˈklærəfaɪ/",say:"KLAR-i-fy",pos:"verb",lvl:"B1",meaning:"To make something clearer or easier to understand.",hi:"स्पष्ट करना",mr:"स्पष्ट करणे",
  ex:["Could you clarify what you mean by 'urgent'?","Let me clarify one point.","The teacher clarified the rules before the test."],
  coll:["clarify a point","clarify the situation","just to clarify","clarify expectations"],syn:["explain","make clear","spell out"],ant:["confuse","complicate"],
  mist:"\"Clarify my doubt\" is common in Indian English. Internationally, \"clarify something\" or \"answer my question\" is clearer.",reg:"Professional. \"Just to clarify...\" is a polite way to check understanding.",
  convo:[["A","We need it by Friday."],["B","Just to clarify, do you mean this Friday or next Friday?"]],
  workplace:"Ask a manager to clarify an instruction politely."},
 {w:"prioritize",ipa:"/praɪˈɒrətaɪz/",say:"pry-OR-i-tize",pos:"verb",lvl:"B2",meaning:"To decide which things are most important and deal with them first.",hi:"प्राथमिकता देना",mr:"प्राधान्य देणे",
  ex:["I prioritize tasks by deadline.","You need to prioritize your health.","We can't do everything, so let's prioritize."],
  coll:["prioritize tasks","prioritize safety","learn to prioritize","clearly prioritize"],syn:["put first","rank","focus on"],ant:["neglect","ignore"],
  mist:"British spelling is \"prioritise\". Both are fine; be consistent.",reg:"Professional; very common in interviews.",
  convo:[["A","How do you handle three deadlines at once?"],["B","I prioritize. Whatever affects the client goes first."]],
  workplace:"Describe how you prioritize when you're busy."},
 {w:"overwhelmed",ipa:"/ˌəʊvəˈwelmd/",say:"oh-ver-WELMD",pos:"adjective",lvl:"B2",meaning:"Feeling that you have too much to deal with, so you can't cope easily.",hi:"बोझ से दबा हुआ",mr:"दडपलेला, भारावलेला",
  ex:["I felt overwhelmed during my first week at work.","Don't get overwhelmed; take one step at a time.","She was overwhelmed with emails after the holiday."],
  coll:["feel overwhelmed","overwhelmed with work","completely overwhelmed","a bit overwhelmed"],syn:["swamped","overloaded","stressed out"],ant:["calm","in control"],
  mist:"Use \"overwhelmed with/by\", not \"overwhelmed from\".",reg:"Neutral; natural in conversation.",
  convo:[["A","How's the new semester?"],["B","Honestly, I'm a bit overwhelmed. Five assignments in one week."]],
  workplace:"Talk about a time you felt overwhelmed and what you did."},
 {w:"consistent",ipa:"/kənˈsɪstənt/",say:"kun-SIS-tunt",pos:"adjective",lvl:"B1",meaning:"Always behaving or happening in the same way; steady.",hi:"लगातार एक जैसा",mr:"सातत्यपूर्ण",
  ex:["Consistent practice matters more than long sessions.","His work has been consistent all year.","Try to be consistent with your spelling."],
  coll:["consistent practice","consistent results","remain consistent","consistent with"],syn:["steady","regular","reliable"],ant:["inconsistent","irregular"],
  mist:"\"Consistent\" is an adjective. For the habit, say \"consistency\": \"Consistency is key.\"",reg:"Neutral.",
  convo:[["A","How did you improve your English?"],["B","I was consistent. Twenty minutes every single day."]],
  workplace:"Explain why consistency matters in your field."},
 {w:"assume",ipa:"/əˈsjuːm/",say:"uh-SYOOM",pos:"verb",lvl:"B1",meaning:"To think something is true without having proof.",hi:"मान लेना",mr:"गृहीत धरणे",
  ex:["I assumed the meeting was at ten.","Don't assume everyone knows the plan.","Let's assume the budget stays the same."],
  coll:["assume that","wrongly assume","safe to assume","let's assume"],syn:["suppose","presume","take for granted"],ant:["verify","check"],
  mist:"\"Assume\" is not \"imagine\" in creative sense. Use it for beliefs without proof.",reg:"Neutral.",
  convo:[["A","Why weren't you at the call?"],["B","Sorry, I assumed it was cancelled."]],
  workplace:"Describe a misunderstanding caused by an assumption."},
 {w:"struggle",ipa:"/ˈstrʌɡl/",say:"STRUG-ul",pos:"verb / noun",lvl:"B1",meaning:"To try very hard to do something that is difficult.",hi:"संघर्ष करना",mr:"धडपडणे, झगडणे",
  ex:["I struggle to find the right words when I'm nervous.","Many students struggle with maths.","It was a struggle, but we finished on time."],
  coll:["struggle with","struggle to do","a real struggle","still struggling"],syn:["find it hard","battle","have difficulty"],ant:["find it easy","breeze through"],
  mist:"Say \"struggle with something\" or \"struggle to do something\", not \"struggle for doing\".",reg:"Neutral; very natural in speech.",
  convo:[["A","Is there any part of English you find hard?"],["B","I struggle with phrasal verbs. There are too many!"]],
  workplace:"Talk about something you struggle with and how you handle it."},
 {w:"figure out",ipa:"/ˈfɪɡər aʊt/",say:"FIG-er OWT",pos:"phrasal verb",lvl:"B1",meaning:"To understand or solve something after thinking about it.",hi:"समझ लेना, पता लगाना",mr:"शोधून काढणे, उमगणे",
  ex:["I can't figure out how this app works.","We'll figure it out together.","Did you figure out why the code was failing?"],
  coll:["figure out how","figure it out","figure out why","try to figure out"],syn:["work out","solve","understand"],ant:["be confused"],
  mist:"With a pronoun it goes in the middle: \"figure it out\", not \"figure out it\".",reg:"Casual and professional both; very common.",
  convo:[["A","The printer's not working again."],["B","Give me five minutes. I'll figure it out."]],
  workplace:"Describe a problem you figured out on your own."},
 {w:"anticipate",ipa:"/ænˈtɪsɪpeɪt/",say:"an-TIS-i-payt",pos:"verb",lvl:"B2",meaning:"To expect something and prepare for it before it happens.",hi:"पहले से अनुमान लगाना",mr:"आधीच ओळखणे",
  ex:["We didn't anticipate so many people.","A good manager anticipates problems.","I anticipate some questions about the budget."],
  coll:["anticipate problems","anticipate demand","than anticipated","fully anticipate"],syn:["expect","foresee","predict"],ant:["be surprised by"],
  mist:"\"Anticipate\" is more formal than \"expect\". Don't overuse it in casual chat.",reg:"Formal / professional.",
  convo:[["A","The event was packed!"],["B","Yeah, we didn't anticipate that many people would come."]],
  workplace:"Explain how you anticipate questions before a presentation."},
 {w:"efficient",ipa:"/ɪˈfɪʃnt/",say:"i-FISH-unt",pos:"adjective",lvl:"B1",meaning:"Working well without wasting time, money or energy.",hi:"कुशल",mr:"कार्यक्षम",
  ex:["This method is more efficient.","She's very efficient; she finishes early every day.","We need a more efficient way to share files."],
  coll:["more efficient","energy-efficient","efficient way","highly efficient"],syn:["productive","effective","streamlined"],ant:["inefficient","wasteful"],
  mist:"Efficient = no waste. Effective = it works. A plan can be effective but not efficient.",reg:"Neutral/professional.",
  convo:[["A","Why do you prefer the metro?"],["B","It's just more efficient. No traffic, no parking."]],
  workplace:"Suggest a more efficient way to do a common task."},
 {w:"postpone",ipa:"/pəˈspəʊn/",say:"pohst-POHN",pos:"verb",lvl:"B1",meaning:"To move an event to a later time.",hi:"स्थगित करना, टालना",mr:"पुढे ढकलणे",
  ex:["They postponed the match because of rain.","Can we postpone the call to tomorrow?","The exam has been postponed."],
  coll:["postpone a meeting","postpone until","postpone indefinitely"],syn:["put off","delay","reschedule"],ant:["bring forward","prepone (Indian English)"],
  mist:"\"Prepone\" is Indian English. Internationally say \"bring forward\" or \"move earlier\".",reg:"Neutral; \"put off\" is more casual.",
  convo:[["A","Is the meeting still at three?"],["B","No, they postponed it to Monday."]],
  workplace:"Politely ask to postpone a meeting."},
 {w:"reluctant",ipa:"/rɪˈlʌktənt/",say:"ri-LUK-tunt",pos:"adjective",lvl:"B2",meaning:"Not willing to do something, and slow to do it.",hi:"अनिच्छुक",mr:"अनिच्छुक, नाखूष",
  ex:["He was reluctant to share his salary.","I'm reluctant to change my plans now.","She agreed, but she looked reluctant."],
  coll:["reluctant to admit","a little reluctant","reluctant to accept"],syn:["unwilling","hesitant"],ant:["eager","willing"],
  mist:"Use \"reluctant to do\", not \"reluctant for doing\".",reg:"Neutral to formal.",
  convo:[["A","Did your dad agree to the trip?"],["B","Eventually. He was reluctant at first."]],
  workplace:"Talk about a change people were reluctant to accept."},
 {w:"elaborate",ipa:"/ɪˈlæbəreɪt/",say:"i-LAB-uh-rayt",pos:"verb",lvl:"B2",meaning:"To give more details or explain more fully.",hi:"विस्तार से बताना",mr:"सविस्तर सांगणे",
  ex:["Could you elaborate on that point?","He refused to elaborate.","Let me elaborate a little."],
  coll:["elaborate on","could you elaborate","refuse to elaborate"],syn:["expand on","explain further","go into detail"],ant:["summarize"],
  mist:"As a verb it's \"elaborate on something\". The adjective (\"an elaborate plan\") is pronounced differently: i-LAB-uh-rut.",reg:"Professional, common in interviews.",
  convo:[["A","I left my last job for personal reasons."],["B","Would you like to elaborate, or shall we move on?"]],
  workplace:"Ask someone to elaborate in a meeting."},
 {w:"genuine",ipa:"/ˈdʒenjuɪn/",say:"JEN-yoo-in",pos:"adjective",lvl:"B2",meaning:"Real and true, not fake; sincere.",hi:"असली, सच्चा",mr:"खरा, अस्सल",
  ex:["She showed genuine interest in my project.","Is this a genuine leather bag?","He's a genuine person; what you see is what you get."],
  coll:["genuine interest","genuine concern","genuinely surprised"],syn:["real","authentic","sincere"],ant:["fake","fake-sounding","insincere"],
  mist:"Pronounced JEN-yoo-in, not jen-yoo-INE.",reg:"Neutral.",
  convo:[["A","Did the interviewer like you?"],["B","I think so. She seemed genuinely curious about my project."]],
  workplace:"Describe what makes feedback feel genuine."},
 {w:"outcome",ipa:"/ˈaʊtkʌm/",say:"OWT-kum",pos:"noun",lvl:"B1",meaning:"The result or effect of an action or event.",hi:"परिणाम",mr:"निकाल, परिणाम",
  ex:["We're happy with the outcome.","Nobody could predict the outcome of the election.","What's the best possible outcome here?"],
  coll:["positive outcome","the final outcome","affect the outcome","expected outcome"],syn:["result","consequence","end result"],ant:["cause"],
  mist:"\"Outcome\" is a noun; don't use it as a verb.",reg:"Neutral/professional.",
  convo:[["A","How did the negotiation go?"],["B","Better than expected. The outcome works for both sides."]],
  workplace:"Describe the outcome of a project you worked on."}
];
const WMAP = Object.fromEntries(WORDS.map(w=>[w.w,w]));
const STATUSES = ["UNKNOWN","RECOGNIZED","UNDERSTOOD","WEAK ACTIVE","ACTIVE","MASTERED"];
const SRS = [1,3,7,14,30,60];

const TOPICS = [
 {id:"ps",name:"Present Simple",g:"Present",use:"Habits, facts, routines and things that are generally true.",form:"I/you/we/they work · he/she/it works · do/does + base",
  ex:["I go to the gym three times a week.","She works in Hinjewadi.","Water boils at 100°C."],cw:"pc",cn:"Present Simple = regular/permanent. Present Continuous = happening now or temporary. \"I live in Pune\" vs \"I'm living in Pune this year.\"",
  pr:[["He ___ (not like) spicy food.",["doesn't like","does not like"]],["My classes ___ (start) at nine.",["start"]],["___ she ___ (speak) Marathi?",["does she speak","does speak"]]],
  sp:"Describe your normal weekday from morning to night.",rf:["What do you do every morning?","What does your best friend do for a living?","What don't you like doing on weekends?"]},
 {id:"pc",name:"Present Continuous",g:"Present",use:"Actions happening now, temporary situations, and fixed future plans.",form:"am/is/are + verb-ing",
  ex:["I'm reading a book on AI right now.","She's staying with her cousin this month.","We're meeting the client tomorrow."],cw:"ps",cn:"Don't use it for permanent states: say \"I know him\", not \"I am knowing him\".",
  pr:[["Right now they ___ (wait) for the bus.",["are waiting","'re waiting"]],["Look! It ___ (rain).",["is raining","'s raining"]],["I ___ (meet) Rohan tonight.",["am meeting","'m meeting"]]],
  sp:"Describe what is happening around you right now, and what you're working on this month.",rf:["What are you doing this weekend?","What are you learning these days?","What is your family doing right now?"]},
 {id:"pp",name:"Present Perfect",g:"Present",use:"Experiences in your life so far, changes up to now, and past actions with a result now. No finished time word.",form:"have/has + past participle (gone, done, seen, worked)",
  ex:["I have visited Goa three times.","She has just finished her report.","We haven't decided yet."],cw:"pa",cn:"Past Simple needs a FINISHED time: yesterday, last week, in 2022. Present Perfect connects to NOW: ever, never, already, yet, this week, so far. \"I saw that movie yesterday\" vs \"I've seen that movie.\"",
  pr:[["I ___ (never / be) to Delhi.",["have never been","'ve never been"]],["She ___ (already / submit) the form.",["has already submitted","'s already submitted"]],["___ you ___ (eat) yet?",["have you eaten","have eaten"]]],
  sp:"Talk about three things you have done many times, and one thing you have never done.",rf:["What have you done this week?","What have you done many times?","What have you never tried but want to?","What did you do yesterday?","What did you do last week?"]},
 {id:"ppc",name:"Present Perfect Continuous",g:"Present",use:"An activity that started in the past and is still continuing, often with for/since.",form:"have/has been + verb-ing",
  ex:["I have been working here since 2024.","She's been studying for three hours.","It's been raining all morning."],cw:"pc",cn:"\"I am working here since 2024\" is a very common error. With since/for + continuing action, use \"have been working\".",
  pr:[["I ___ (learn) English for two years.",["have been learning","'ve been learning"]],["They ___ (wait) since 10 a.m.",["have been waiting","'ve been waiting"]],["How long ___ you ___ (live) in Pune?",["have you been living","have been living"]]],
  sp:"Talk about something you've been doing for a long time and how it has changed you.",rf:["How long have you been learning English?","What have you been doing lately?","How long have you been living in your city?"]},
 {id:"pa",name:"Past Simple",g:"Past",use:"Finished actions at a finished time in the past.",form:"verb-ed / irregular (went, saw) · didn't + base",
  ex:["I went to Lonavala last weekend.","We didn't know about the change.","She called me yesterday."],cw:"pp",cn:"After did/didn't, use the BASE form: \"I didn't know\" (not \"didn't knew\").",
  pr:[["I ___ (not know) about it.",["didn't know","did not know"]],["We ___ (go) to Mumbai in 2023.",["went"]],["What time ___ you ___ (wake up) today?",["did you wake up","did wake up"]]],
  sp:"Tell me what you did last weekend, from start to finish.",rf:["What did you eat yesterday?","Where did you go last holiday?","What did you study in college?"]},
 {id:"pac",name:"Past Continuous",g:"Past",use:"An action in progress at a moment in the past, often interrupted by another action.",form:"was/were + verb-ing",
  ex:["I was cooking when the power went off.","They were playing cricket at 6 p.m.","What were you doing when I called?"],cw:"pa",cn:"Past Continuous = the background action. Past Simple = the short action that interrupts it.",
  pr:[["I ___ (drive) when you called.",["was driving"]],["They ___ (not listen) to the teacher.",["were not listening","weren't listening"]],["What ___ you ___ (do) at 9 last night?",["were you doing","were doing"]]],
  sp:"Describe a moment when something unexpected happened while you were doing something else.",rf:["What were you doing at 8 p.m. yesterday?","What was happening when you woke up today?"]},
 {id:"pap",name:"Past Perfect",g:"Past",use:"An action that happened before another past action.",form:"had + past participle",
  ex:["When I reached the station, the train had left.","She had never flown before that trip.","I realised I had forgotten my wallet."],cw:"pa",cn:"Use it only when you need to show which past action came first.",
  pr:[["By the time we arrived, the movie ___ (start).",["had started","'d started"]],["I ___ (never / see) snow before 2022.",["had never seen","'d never seen"]],["He was tired because he ___ (not sleep).",["hadn't slept","had not slept"]]],
  sp:"Tell a story where one thing had already happened before something else.",rf:["What had you finished before lunch yesterday?","Had you ever spoken English in public before college?"]},
 {id:"papc",name:"Past Perfect Continuous",g:"Past",use:"An activity that had been continuing up to a point in the past.",form:"had been + verb-ing",
  ex:["I had been waiting for an hour when the bus came.","She was tired because she had been working all day."],cw:"pap",cn:"Focuses on duration before a past moment.",
  pr:[["We ___ (walk) for hours before we found a taxi.",["had been walking","'d been walking"]],["His eyes were red; he ___ (cry).",["had been crying","'d been crying"]],["They ___ (study) for months before the exam.",["had been studying","'d been studying"]]],
  sp:"Describe a time you had been doing something for a long time before something changed.",rf:["How long had you been studying before your last exam?"]},
 {id:"fs",name:"Future Simple",g:"Future",use:"Predictions, promises, offers and instant decisions. Also \"going to\" for plans.",form:"will + base · am/is/are going to + base",
  ex:["I'll call you later.","I think AI will change most jobs.","I'm going to apply for that internship."],cw:"pc",cn:"\"Will\" = decision now. \"Going to\" = already planned. \"I'll help you\" vs \"I'm going to visit my aunt on Sunday.\"",
  pr:[["Don't worry, I ___ (help) you.",["will help","'ll help"]],["Look at those clouds. It ___ (rain).",["is going to rain","'s going to rain"]],["I think she ___ (not come).",["won't come","will not come"]]],
  sp:"Make three predictions about your city in 2035.",rf:["What will you do after this lesson?","What are you going to do next month?"]},
 {id:"fc",name:"Future Continuous",g:"Future",use:"An action in progress at a time in the future.",form:"will be + verb-ing",
  ex:["This time tomorrow, I'll be travelling to Nashik.","Will you be using the laptop tonight?"],cw:"fs",cn:"Focus on the action in progress, not the start or end.",
  pr:[["At 8 p.m. I ___ (watch) the match.",["will be watching","'ll be watching"]],["Don't call at 2; I ___ (sleep).",["will be sleeping","'ll be sleeping"]],["___ you ___ (work) late tonight?",["will you be working","will be working"]]],
  sp:"Describe what you'll be doing at different times tomorrow.",rf:["What will you be doing this time tomorrow?"]},
 {id:"fp",name:"Future Perfect",g:"Future",use:"An action that will be complete before a future time.",form:"will have + past participle",
  ex:["By next year, I'll have finished my degree.","They will have left by the time we arrive."],cw:"fs",cn:"Use with \"by\" + time: by Friday, by 2027.",
  pr:[["By 6 p.m. I ___ (finish) the report.",["will have finished","'ll have finished"]],["By next June, she ___ (graduate).",["will have graduated","'ll have graduated"]],["___ you ___ (read) it by Monday?",["will you have read","will have read"]]],
  sp:"Talk about what you will have achieved five years from now.",rf:["What will you have done by the end of this year?"]},
 {id:"fpc",name:"Future Perfect Continuous",g:"Future",use:"Duration of an activity up to a future point.",form:"will have been + verb-ing",
  ex:["By December, I'll have been working here for two years."],cw:"fp",cn:"Rare in speech; mainly for duration up to a future moment.",
  pr:[["By March, we ___ (live) here for five years.",["will have been living","'ll have been living"]],["Next week she ___ (teach) for a decade.",["will have been teaching","'ll have been teaching"]],["By 10, I ___ (study) for four hours.",["will have been studying","'ll have been studying"]]],
  sp:"Describe a habit you will have been doing for a long time by a future date.",rf:["By next year, how long will you have been learning English?"]},
 {id:"cond",name:"Conditionals",g:"Structures",use:"Real and unreal situations: if + condition, result.",form:"0: if + present, present · 1: if + present, will · 2: if + past, would · 3: if + had done, would have done",
  ex:["If it rains, we'll stay home.","If I had more time, I would learn Japanese.","If I had known, I would have helped."],cw:"fs",cn:"No \"will\" after \"if\": \"If it rains\" not \"If it will rain\".",
  pr:[["If I ___ (be) you, I'd take the offer.",["were","was"]],["If she studies, she ___ (pass).",["will pass","'ll pass"]],["If we had left earlier, we ___ (catch) the train.",["would have caught","'d have caught"]]],
  sp:"What would you do if you could live in any country for a year?",rf:["What will you do if it rains tomorrow?","What would you change if you were the PM for a day?"]},
 {id:"modal",name:"Modal Verbs",g:"Structures",use:"Ability, permission, advice, obligation and possibility.",form:"can/could/should/must/might/may + base",
  ex:["You should talk to your manager.","I might be late.","You must wear a helmet."],cw:"ps",cn:"No \"to\" after modals: \"I can swim\" not \"I can to swim\". Also avoid \"can able to\".",
  pr:[["You ___ see a doctor; that cough is bad. (advice)",["should"]],["I ___ swim when I was five. (ability, past)",["could"]],["It ___ rain later; take an umbrella. (possibility)",["might","may","could"]]],
  sp:"Give advice to a friend who wants to improve their English.",rf:["What should a beginner programmer learn first?","What can you do now that you couldn't do five years ago?"]},
 {id:"rep",name:"Reported Speech",g:"Structures",use:"Telling someone what another person said.",form:"said (that) + tense shift · told + person",
  ex:["She said she was tired.","He told me he would call.","They asked if I could help."],cw:"pa",cn:"\"Said\" has no object; \"told\" needs one: \"He told me\", \"He said to me\".",
  pr:[["\"I am busy.\" → She said she ___ busy.",["was"]],["\"I will come.\" → He said he ___ come.",["would"]],["\"Can you help?\" → She asked if I ___ help.",["could"]]],
  sp:"Report a conversation you had recently: what did the other person say?",rf:["What did your friend tell you yesterday?"]},
 {id:"pass",name:"Passive Voice",g:"Structures",use:"When the action matters more than who did it.",form:"be + past participle",
  ex:["The report was sent yesterday.","English is spoken in many countries.","The bridge is being repaired."],cw:"pa",cn:"Use the passive when the doer is unknown or unimportant.",
  pr:[["The email ___ (send) yesterday.",["was sent"]],["Rice ___ (grow) in Konkan.",["is grown"]],["The results ___ (announce) next week.",["will be announced"]]],
  sp:"Describe how something is made or done (e.g., tea, a mobile app, a festival).",rf:["How is chai made?","When was your college built?"]},
 {id:"q",name:"Question Formation",g:"Structures",use:"Making clear direct and indirect questions.",form:"Wh- + auxiliary + subject + verb · Can you tell me where ... is?",
  ex:["Where do you work?","What did she say?","Could you tell me where the station is?"],cw:"ps",cn:"Indirect questions keep normal word order: \"Can you tell me where the station IS?\" not \"where IS the station?\".",
  pr:[["Where ___ you ___ (live)?",["do you live","do live"]],["What time ___ the meeting ___ (start) yesterday?",["did the meeting start","did start"]],["Can you tell me where the bank ___?",["is"]]],
  sp:"Ask five good questions you would ask a new colleague.",rf:["Ask me a question about my weekend.","Ask me a question using \"have you ever\"."]}
];
const TMAP = Object.fromEntries(TOPICS.map(t=>[t.id,t]));

const PERSONAS = [
 {id:"friend",name:"Aarav, your friend",desc:"a relaxed friend from college who now works in Bengaluru; casual, jokes a bit, uses contractions and light slang",scene:"Catching up over chai after months."},
 {id:"colleague",name:"Meera, a colleague",desc:"a friendly but busy software engineer on your team",scene:"Planning a small team task together."},
 {id:"manager",name:"Mr. Kulkarni, your manager",desc:"a direct, results-focused manager who asks for specifics and deadlines",scene:"A quick one-to-one about your current work."},
 {id:"recruiter",name:"Sarah, a recruiter",desc:"an HR recruiter at a mid-size international tech company; professional, probing, asks behavioural questions",scene:"First-round job interview call."},
 {id:"customer",name:"Mr. Desai, an unhappy customer",desc:"a skeptical customer whose order arrived late; polite but impatient, pushes back",scene:"A customer support call about a delayed order."},
 {id:"client",name:"Daniel, a client from London",desc:"a British client; polite, uses British expressions, wants clarity on timelines and cost",scene:"Discussing a project update."},
 {id:"professor",name:"Dr. Rao, a professor",desc:"a thoughtful professor who asks 'why' a lot",scene:"Office hours, discussing your project idea."},
 {id:"shopkeeper",name:"A shopkeeper in London",desc:"a chatty shopkeeper at a corner shop in London",scene:"You're buying a few things and asking for directions."},
 {id:"tourist",name:"Lena, a German tourist",desc:"a tourist visiting Pune for the first time; curious about food, places and culture; her English is good but not native",scene:"She stops you to ask for recommendations."},
 {id:"stranger",name:"A stranger at an airport",desc:"a friendly traveller sitting next to you during a flight delay",scene:"Small talk while waiting at the gate."},
 {id:"entrepreneur",name:"Kabir, a startup founder",desc:"an energetic founder who talks fast and asks for your opinion on ideas",scene:"Networking event; he pitches his startup idea to you."},
 {id:"investor",name:"Priya, an angel investor",desc:"a sharp investor who challenges assumptions and asks about numbers",scene:"You're pitching a small business idea."},
 {id:"coworker",name:"Tom, an international coworker",desc:"an American coworker in Austin who joined your team remotely",scene:"First video call to get to know each other."}
];
const DEBATES = ["AI will create more jobs than it destroys.","College degrees are becoming less important.","Students should be allowed to use phones in class.","Working from home is better than working in an office.","Social media does more harm than good.","Every Indian student should learn a foreign language."];
const PRO_SCENES = [
 {id:"meeting",t:"Team meeting",d:"Give a status update and handle a follow-up question.",p:"colleague"},
 {id:"disagree",t:"Disagreeing politely",d:"Your manager suggests a deadline you think is unrealistic.",p:"manager"},
 {id:"tech",t:"Explain a technical idea",d:"Explain an idea from your field to a non-technical client.",p:"client"},
 {id:"clarify",t:"Asking for clarification",d:"The instructions you got are vague. Ask the right questions.",p:"manager"},
 {id:"negotiate",t:"Negotiation",d:"Negotiate a deadline extension or a better offer.",p:"recruiter"},
 {id:"smalltalk",t:"Professional small talk",d:"Start a call with a new international coworker.",p:"coworker"},
 {id:"problem",t:"Explaining a problem",d:"Tell a client a delivery will be delayed and why.",p:"customer"}
];
const TOPIC_LIST = ["career","college","technology","business","movies","gaming","food","travel","India","Maharashtra","AI","future","money","education","relationships","society"];
const FREE_PROMPTS = {
 career:["Where do you see yourself in five years, and what are you doing to get there?","What kind of work makes you lose track of time?"],
 college:["What is one thing college should teach that it doesn't?","Describe the best teacher you ever had."],
 technology:["Which app do you use most, and is it making your life better or worse?","Explain a piece of technology to someone from 1990."],
 business:["If you started a small business in Pune, what would it be?","Which company do you admire and why?"],
 movies:["Describe a movie that changed how you think.","Are Indian movies better at storytelling than Hollywood?"],
 gaming:["Can video games teach real skills? Give examples.","Describe a game you love to someone who has never played it."],
 food:["Describe a dish from Maharashtra to a foreigner.","Street food or restaurant food? Defend your choice."],
 travel:["Describe a trip that didn't go as planned.","Where would you go if you had one free week and no budget limit?"],
 India:["What is something about India that foreigners often misunderstand?","How has your city changed in the last ten years?"],
 Maharashtra:["What makes Maharashtra different from other states?","Describe a festival in Maharashtra and why people love it."],
 AI:["Should students use AI to do their homework?","Which job do you think AI will change the most?"],
 future:["Describe your perfect day ten years from now.","What will cities look like in 2050?"],
 money:["Is it better to save money or spend it on experiences?","What did your parents teach you about money?"],
 education:["Should exams be replaced by projects?","What would you change about the Indian education system?"],
 relationships:["What makes a good friend?","How do you handle disagreements with people close to you?"],
 society:["What is one social problem you'd like to solve?","Is life easier for young people today than it was for your parents?"]
};
const DECISION_PROMPT = "Tell me about a decision you made recently and why you made it.";
const STORY_PROMPTS = ["Tell me about a time something went wrong at the worst possible moment.","Tell me about the first time you did something on your own.","Tell me about a time you helped someone, or someone helped you, unexpectedly.","Tell me about a funny misunderstanding."];
const PRESENT_PROMPTS = ["Present a 2-minute pitch for an app that solves a problem students face.","Present your college project or work project as if to a new manager.","Present three reasons someone should visit Pune."];
const RAPID = ["What did you have for breakfast?","Describe your phone in one sentence.","What's the last thing that made you laugh?","Name a skill you want to learn and why.","What would you do with an extra hour every day?","What's one thing you'd change about your city?","Describe your best friend in two sentences.","What have you learned this week?","Why do people like cricket so much?","Tea or coffee? Why?","What did you do last Sunday?","What's a habit you want to break?","Explain your job or course in one sentence.","What will you do this evening?","Give me one piece of advice for a new student."];
const RETELL = [{id:"shorter",t:"Shorter",d:"Tell it in 3 sentences."},{id:"longer",t:"Longer",d:"Add details, feelings and dialogue."},{id:"pro",t:"More professional",d:"Tell it as if in an interview (\"Tell me about a challenge\")."},{id:"casual",t:"More casual",d:"Tell it to a close friend."},{id:"other",t:"Another perspective",d:"Tell it from another person's point of view."}];
const STORY_PARTS = [["Setup","Who, where, when."],["Context","Why it mattered."],["Sequence","First, then, after that."],["Problem","What went wrong."],["Conflict","What made it hard."],["Reaction","What you felt and did."],["Resolution","How it ended."],["Conclusion","What you learned."]];
const CONNECTORS = ["So basically,","At first,","A few minutes later,","Out of nowhere,","The thing is,","Luckily,","Unfortunately,","In the end,","Looking back,","Long story short,"];
const CIRCUM = [["refrigerator","the machine in the kitchen that keeps food cold"],["umbrella","the thing you open over your head when it rains"],["deadline","the last day or time you can finish something"],["landlord","the person who owns the flat you rent"],["receipt","the paper the shop gives you after you pay"],["traffic jam","when cars can't move because the road is full"]];
const FLUENCY_TOPICS = ["Your neighbourhood","A skill you're proud of","The best and worst parts of social media","How to make good chai","Your dream job","A place you'd love to visit","Why some people hate mornings","The last movie you watched"];

const THINK = [
 {l:1,t:"Describe objects",d:"Name it and describe it without translating.",p:["Describe the object closest to your left hand.","Describe your bag and what's inside it.","Describe a pressure cooker to someone who's never seen one.","Describe your phone without saying 'phone'."]},
 {l:2,t:"Describe actions",d:"Say what you or others are doing.",p:["Describe what you did in the last 30 minutes.","Describe how you make your bed or your tea, step by step.","Describe what people do at a railway station."]},
 {l:3,t:"Describe plans",d:"Use future forms naturally.",p:["Tell me your plan for tomorrow.","What are you going to do this weekend?","How will you spend your next holiday?"]},
 {l:4,t:"Explain experiences",d:"Past events with feeling.",p:["Describe your first day of college.","Describe a time you were really proud of yourself.","Describe the best meal you've ever had."]},
 {l:5,t:"Give opinions",d:"State, support, example.",p:["Is online learning as good as classroom learning?","Is it better to live in a big city or a small town?","Should everyone learn to code?"]},
 {l:6,t:"Explain abstract ideas",d:"Concepts, not things.",p:["What does 'success' mean to you?","Explain 'trust' to a child.","What is the difference between being busy and being productive?"]},
 {l:7,t:"Defend an argument",d:"Claim, reasons, counterargument.",p:["Convince me that reading fiction is useful.","Argue that exams should be optional.","Defend your favourite season against someone who hates it."]},
 {l:8,t:"Respond instantly",d:"No preparation at all.",p:["Why is the sky blue? Just answer.","What's the best advice you've ever received?","If you had to give a speech right now, what would it be about?","Sell me the pen nearest to you."]}
];

const SHADOW = [
 {id:"s1",title:"Weekend catch-up",lvl:"Beginner",type:"Casual conversation",rate:.82,
  text:"Hey! How was your weekend? | *Pretty* good, actually. I went to my *cousin's* place in *Nashik*. | Oh, *nice*. Did you do anything fun? | Not *really*. We just *ate* a lot and *watched* a movie. | Honestly, that *sounds* perfect.",
  tips:["Rising tone on \"How was your weekend?\" and \"Did you do anything fun?\"","Link \"Did you\" → \"didja\" in fast speech.","Stress the content words; let \"to my\" and \"in\" go quick and light."]},
 {id:"s2",title:"Morning stand-up",lvl:"Intermediate",type:"Workplace",rate:.95,
  text:"Morning, everyone. | Quick *update* from my side. | Yesterday I *finished* the login page, | and today I'm working on the *payment* flow. | I'm a bit *blocked* on the API keys, | so if anyone has *access*, | could you *share* them with me after the call?",
  tips:["Pause at each | : chunking makes you sound confident.","\"Could you\" links to \"couldja\".","Stress the new information: finished, payment, blocked."]},
 {id:"s3",title:"Tell me about yourself",lvl:"Intermediate",type:"Interview",rate:.92,
  text:"So, I'm a *final-year* engineering student from *Pune*. | Over the last *year*, | I've been working on a *small* project | that helps students *track* their study time. | What I *enjoy* most | is taking a *messy* problem | and turning it into something *simple*.",
  tips:["\"So,\" at the start buys you a calm second.","Falling tone at the end of each statement sounds certain.","Slow down slightly on the last line: it's your key message."]},
 {id:"s4",title:"Opening a presentation",lvl:"Advanced",type:"Presentation",rate:1,
  text:"Good afternoon. | Before I *start*, | let me ask you a *quick* question. | How many of you checked your *phone* | in the *first* ten minutes after waking up today? | *Most* of you. | That's *exactly* what this talk is about.",
  tips:["The pause before \"Most of you\" is the moment; hold it.","Stress \"first\" contrastively.","Keep the pace steady; don't rush the question."]},
 {id:"s5",title:"Handling a delay",lvl:"Professional",type:"Business",rate:1,
  text:"I *completely* understand your concern. | The delay was on *our* side, | and I want to be *transparent* about it. | We've *already* fixed the issue, | and your order will reach you by *Thursday*. | In the *meantime*, | is there *anything* else I can help you with?",
  tips:["Warm, falling tone on \"I completely understand\".","Stress \"our\" to take responsibility.","Rising tone on the final question invites a reply."]},
 {id:"s6",title:"You're kidding",lvl:"Native-speed",type:"Movie-style",rate:1.12,
  text:"Wait, *wait*. You're *kidding*, right? | You *quit*? Just like *that*? | I mean, *good* for you, but— | what are you gonna *do* now? | Okay, *okay*. Don't *look* at me like that. | I'm not *judging*. I'm just... *surprised*.",
  tips:["\"gonna\" is casual speech only; write \"going to\" in emails.","The broken sentence \"but—\" is natural; spoken English isn't always complete.","Rising, disbelieving tone on \"You quit?\""]},
 {id:"s7",title:"At the airport",lvl:"Beginner",type:"Travel",rate:.85,
  text:"Excuse me, is this the *line* for *check-in*? | Yes, but it's *pretty* long. | Do you know how *long* it usually takes? | Maybe *twenty* minutes. | Okay, *thanks*. I'll just *wait* here then.",
  tips:["\"Excuse me\" with a small rise sounds polite, not demanding.","\"Thanks\" is short and falling.","\"I'll just wait here then\": stress \"wait\"."]},
 {id:"s8",title:"Making a counterpoint",lvl:"Advanced",type:"Debate",rate:1,
  text:"I see your *point*, | and I *partly* agree. | But I think we're *ignoring* something. | If AI makes work *faster*, | companies won't *always* hire *fewer* people. | Sometimes they just do *more* work. | So the *real* question is: | who *gets* the extra value?",
  tips:["\"I see your point\" softens disagreement.","Contrastive stress: faster / fewer / more.","Pause before \"who gets the extra value?\""]}
];

const LISTEN = [
 {id:"l1",title:"Planning the weekend",lvl:"Slow English",rate:.8,lines:[["Riya","Are you free on Saturday? A few of us are going to Sinhagad early in the morning."],["Sam","How early is early?"],["Riya","We're leaving at five thirty, so we can reach before it gets hot."],["Sam","Five thirty? Hmm. I'll come, but only if someone picks me up."],["Riya","Fine, Kunal lives near you. I'll ask him."]],
  qs:[{k:"Main idea",q:"What are they mainly discussing?",o:["A trip to Sinhagad","A college exam","Buying a car","A birthday party"],a:0},
      {k:"Detail",q:"What time are they leaving?",o:["5:00","5:30","6:30","Before noon"],a:1},
      {k:"Speaker intention",q:"Why does Sam say \"How early is early?\"",o:["He's confused about the place","He's worried it's too early","He wants to leave earlier","He doesn't want to go"],a:1},
      {k:"Inference",q:"What will Riya probably do next?",o:["Cancel the trip","Ask Kunal to pick Sam up","Change the time","Book a taxi"],a:1}]},
 {id:"l2",title:"A deadline problem",lvl:"Clear natural English",rate:.95,lines:[["Manager","Hi Neha, quick question. Where are we with the client report?"],["Neha","Honestly, it's about seventy percent done. The data from the sales team came in late."],["Manager","Okay. The client's expecting it tomorrow at noon. Is that realistic?"],["Neha","If I can get Arjun's help with the charts, yes. Otherwise I'd need until Friday."],["Manager","Let's not push the client. I'll talk to Arjun right now."]],
  qs:[{k:"Main idea",q:"What is the conversation about?",o:["Hiring Arjun","Finishing a report on time","A client complaint","The sales team's targets"],a:1},
      {k:"Detail",q:"Why is the report late?",o:["Neha was sick","The client changed the scope","Sales data arrived late","Arjun made mistakes"],a:2},
      {k:"Tone",q:"How does the manager sound?",o:["Angry","Calm and practical","Bored","Sarcastic"],a:1},
      {k:"Vocabulary",q:"\"Let's not push the client\" means:",o:["Let's not ask the client for more time","Let's not sell more","Let's call the client now","Let's not send the report"],a:0}]},
 {id:"l3",title:"Ordering coffee in London",lvl:"Normal conversational English",rate:1.05,lines:[["Barista","Hiya, what can I get you?"],["Customer","Could I get a flat white, please? And, um, do you have oat milk?"],["Barista","We do. Is that to have in or take away?"],["Customer","Take away, please."],["Barista","Lovely. That's three eighty. Card's fine if you want to tap."],["Customer","Brilliant, thanks."]],
  qs:[{k:"Detail",q:"What milk does the customer want?",o:["Regular","Soy","Oat","No milk"],a:2},
      {k:"Meaning",q:"\"To have in or take away?\" means:",o:["Hot or cold?","Drink here or carry it out?","Small or large?","Cash or card?"],a:1},
      {k:"Detail",q:"How much does it cost?",o:["£3.18","£8.30","£3.80","£13.80"],a:2},
      {k:"Vocabulary",q:"In British casual English, \"Brilliant\" here means:",o:["Very intelligent","Great / thanks","Very bright","Expensive"],a:1}]},
 {id:"l4",title:"Startup idea feedback",lvl:"Fast English",rate:1.15,lines:[["Kabir","So the idea's basically a marketplace for home-cooked tiffins. Students order, home cooks deliver."],["Ana","I like it, but how's that different from the big delivery apps?"],["Kabir","Fair question. The apps charge cooks like thirty percent. We'd charge ten, and focus only on near-campus areas."],["Ana","Okay, but then how do you make money if you're that cheap?"],["Kabir","Volume, and a monthly subscription for students. Think of it like a mess, but online."],["Ana","Hmm. I'd want to see numbers before I believe that, to be honest."]],
  qs:[{k:"Main idea",q:"What is Kabir describing?",o:["A cooking class","A food marketplace for students","A restaurant chain","A college canteen"],a:1},
      {k:"Detail",q:"What commission would Kabir charge cooks?",o:["30%","10%","20%","Nothing"],a:1},
      {k:"Speaker intention",q:"Why does Ana ask \"how do you make money\"?",o:["She wants to invest immediately","She doubts the business model","She wants a job","She's confused about tiffins"],a:1},
      {k:"Inference",q:"How does Ana feel at the end?",o:["Fully convinced","Skeptical","Angry","Uninterested"],a:1}]},
 {id:"l5",title:"Reduced speech: making plans",lvl:"Reduced speech",rate:1.1,lines:[["Jay","Whatcha doin' later?"],["Mia","Dunno yet. Wanna grab somethin' to eat?"],["Jay","Sure, lemme finish this first. Gimme like twenty minutes?"],["Mia","Kay. Text me when you're done."]],
  qs:[{k:"Meaning",q:"\"Whatcha doin' later?\" means:",o:["What did you do?","What are you doing later?","Where are you going?","Why are you late?"],a:1},
      {k:"Meaning",q:"\"Lemme\" and \"gimme\" mean:",o:["Let me / give me","Leave me / get me","Lend me / give me","Let me / get me"],a:0},
      {k:"Detail",q:"How long does Jay need?",o:["Two minutes","About twenty minutes","Two hours","He doesn't say"],a:1}]}
];

const NATURAL = [
 {p:"Do the needful.",tags:["INDIAN ENGLISH","FORMAL"],intl:"Please take care of this. / Please do what's needed.",note:"Common in Indian offices. International colleagues may find it vague or old-fashioned; say exactly what you need."},
 {p:"Please revert by Monday.",tags:["INDIAN ENGLISH","PROFESSIONAL"],intl:"Please reply by Monday. / Please get back to me by Monday.",note:"In most countries \"revert\" means \"go back to a previous state\". \"Revert back\" is redundant everywhere."},
 {p:"Can we prepone the meeting?",tags:["INDIAN ENGLISH"],intl:"Can we bring the meeting forward? / Can we move it earlier?",note:"\"Prepone\" is logical and widely used in India, but most international speakers won't know it."},
 {p:"I have a doubt.",tags:["INDIAN ENGLISH"],intl:"I have a question.",note:"In international English, \"doubt\" suggests you don't believe something. For questions, say \"question\"."},
 {p:"What is your good name?",tags:["INDIAN ENGLISH","REGIONAL"],intl:"May I know your name? / What's your name?",note:"A polite translation of \"aapka shubh naam\". Abroad it sounds unusual."},
 {p:"I'm coming in five minutes.",tags:["GRAMMATICALLY CORRECT","CASUAL"],intl:"I'll be there in five minutes.",note:"Both are fine. \"I'll be there\" is clearer about arriving."},
 {p:"Let me get back to you on that.",tags:["VERY NATURAL","PROFESSIONAL"],intl:"(already international)",note:"A great phrase to buy time politely in meetings."},
 {p:"That's a fair point, but...",tags:["VERY NATURAL","PROFESSIONAL"],intl:"(already international)",note:"Softens disagreement. Much better than \"No, you are wrong\"."},
 {p:"He is very much intelligent.",tags:["INDIAN ENGLISH"],intl:"He's really smart. / He's very intelligent.",note:"\"Very much\" goes with verbs (\"I like it very much\"), not adjectives."},
 {p:"I am having two brothers.",tags:["INDIAN ENGLISH"],intl:"I have two brothers.",note:"\"Have\" for possession is a state, so it doesn't take -ing."},
 {p:"Could you walk me through it?",tags:["VERY NATURAL","PROFESSIONAL"],intl:"(already international)",note:"Asks someone to explain step by step. Very useful for clarification."},
 {p:"No worries.",tags:["VERY NATURAL","CASUAL"],intl:"(already international)",note:"Casual reply to thanks or apologies. In formal emails, \"Not a problem at all\" is safer."}
];
const MOVIE = [
 {p:"You're kidding, right?",reg:"Casual",m:"I can't believe it; is this a joke?",use:"Surprise among friends.",avoid:"When someone shares serious bad news."},
 {p:"I'm gonna head out.",reg:"Casual",m:"I'm going to leave now.",use:"Leaving a hangout or casual office chat.",avoid:"Writing. In emails use \"I'm going to leave\" or just \"I'm signing off\"."},
 {p:"Yeah, right.",reg:"Casual · sarcasm",m:"I don't believe that at all.",use:"Joking with friends.",avoid:"Professional settings: tone gets lost and it sounds rude."},
 {p:"It's not a big deal.",reg:"Casual",m:"It's not important; don't worry.",use:"Reassuring someone.",avoid:"When the other person thinks it IS a big deal; it can sound dismissive."},
 {p:"Bummer.",reg:"Slang",m:"That's disappointing.",use:"Small disappointments with friends.",avoid:"Serious situations or with seniors."},
 {p:"I'm down.",reg:"Slang (US)",m:"I'm interested / I'll join.",use:"Agreeing to plans with friends.",avoid:"Work. Also, in the UK it can sound like \"I'm sad\"."},
 {p:"Fair enough.",reg:"Casual / professional",m:"Okay, that's reasonable.",use:"Accepting someone's explanation.",avoid:"When you strongly disagree; it signals acceptance."},
 {p:"Wanna grab a bite?",reg:"Casual",m:"Do you want to get something to eat?",use:"Friends, close coworkers.",avoid:"Formal invitations or emails."},
 {p:"Spill the tea.",reg:"Slang",m:"Tell me the gossip.",use:"Close friends, playfully.",avoid:"Almost everywhere else."},
 {p:"I'll pass.",reg:"Casual",m:"No thank you.",use:"Declining an offer lightly.",avoid:"Declining a manager's request; say \"I'm afraid I can't this time\"."}
];
const PRO_PHRASES = [
 {g:"Disagreeing politely",items:["I see where you're coming from, but...","I'm not sure I agree. Here's my concern:","That's a fair point. Have we considered...?"]},
 {g:"Asking for clarification",items:["Just to clarify, do you mean...?","Could you walk me through that?","When you say \"urgent\", what timeline do you have in mind?"]},
 {g:"Buying time",items:["That's a good question. Let me think for a second.","Let me get back to you on that by tomorrow.","I don't have the exact number right now, but..."]},
 {g:"Giving updates",items:["Quick update from my side:","We're on track for Friday.","I'm blocked on X; I need Y to move forward."]},
 {g:"Negotiating",items:["Would you be open to...?","If we can do X, could you do Y?","I was hoping for something closer to..."]},
 {g:"Recovering when you forget a word",items:["What's the word... it's the thing that...","I don't know the exact word, but it's like...","Let me put it another way."]}
];

/* Diagnostic */
const DIAG_GRAMMAR = [
 {t:"pa",q:"I ___ to Mumbai last month.",o:["went","have gone","go","was going"],a:0},
 {t:"ppc",q:"She ___ here since 2022.",o:["is working","has been working","works","worked"],a:1},
 {t:"cond",q:"If I ___ more time, I would learn Japanese.",o:["have","had","will have","would have"],a:1},
 {t:"pac",q:"When you called, I ___ dinner.",o:["was having","had","have had","am having"],a:0},
 {t:"fp",q:"By next year, I ___ my degree.",o:["will finish","finish","will have finished","am finishing"],a:2},
 {t:"pp",q:"___ you ever ___ to Goa?",o:["Did / go","Have / been","Are / going","Do / go"],a:1},
 {t:"pass",fill:true,q:"The report ___ (send) to the client yesterday.",a:["was sent"]},
 {t:"pa",fix:true,q:"Correct this sentence: \"I didn't knew about the meeting.\"",a:["i didn't know about the meeting","i did not know about the meeting"]},
 {t:"rep",q:"She said, \"I am tired.\" → She said that she ___ tired.",o:["is","was","has been","will be"],a:1},
 {t:"q",q:"Can you tell me where ___?",o:["is the station","the station is","does the station","station is it"],a:1}
];
const DIAG_VOCAB = [
 {lvl:1,w:"frequently",o:["rarely","often","never","quickly"],a:1},
 {lvl:2,w:"postpone",o:["cancel forever","move to a later time","finish early","announce"],a:1},
 {lvl:2,w:"reliable",o:["can be trusted","very expensive","old-fashioned","easy to break"],a:0},
 {lvl:3,w:"reluctant",o:["excited","unwilling","confused","angry"],a:1},
 {lvl:4,w:"ambiguous",o:["having more than one possible meaning","very large","dishonest","completely clear"],a:0},
 {lvl:4,w:"meticulous",o:["careless","very careful about details","very fast","nervous"],a:1}
];
const DIAG_SPEED = ["What did you eat today?","Name something you're good at.","What's your plan for tomorrow?"];
const DIAG_SPEAK = [
 {k:"spontaneous",t:"Spontaneous speaking",p:"Introduce yourself: who you are, what you do, and what you enjoy.",sec:60},
 {k:"story",t:"Storytelling",p:"Tell me about a time something didn't go as planned.",sec:90},
 {k:"opinion",t:"Opinion",p:"Should college students work part-time while studying? Give reasons.",sec:60}
];

/* Quizzes */
const QUIZ_TODAY = [
 {k:"Multiple choice",tag:"pp",type:"mcq",q:"I ___ my keys. I can't find them anywhere.",o:["lost","have lost","was losing","lose"],a:1,why:"The result matters now (I can't find them), so Present Perfect."},
 {k:"Fill the blank",tag:"pa",type:"fill",q:"We ___ (watch) a great movie last night.",a:["watched"],why:"\"Last night\" is a finished time → Past Simple."},
 {k:"Fill the blank",tag:"pp",type:"fill",q:"She ___ (live) in three different cities so far.",a:["has lived","'s lived","has been living"],why:"\"So far\" connects to now → Present Perfect."},
 {k:"Error correction",tag:"pp",type:"fix",q:"I have seen him yesterday.",a:["i saw him yesterday"],why:"\"Yesterday\" is finished time, so Past Simple: I saw him yesterday."},
 {k:"Choose the better sentence",tag:"ppc",type:"mcq",q:"Which sounds correct?",o:["I am working here since 2024.","I have been working here since 2024."],a:1,why:"With \"since\" and an action that continues, use Present Perfect Continuous."},
 {k:"Definition recall",vw:"convey",type:"mcq",q:"Which word means \"to communicate an idea so someone understands it\"?",o:["convey","hesitate","implement","postpone"],a:0,why:"Convey = get a message across."},
 {k:"Sentence completion",vw:"hesitate",type:"fill",q:"Please don't ___ to contact me if you have questions.",a:["hesitate"],why:"\"Don't hesitate to...\" is a fixed professional phrase."},
 {k:"Collocation",vw:"implement",type:"mcq",q:"Which collocation is natural?",o:["implement a party","implement a strategy","implement a friend","implement a holiday"],a:1,why:"You implement plans, strategies, policies, systems."},
 {k:"Synonym recall",vw:"reliable",type:"fill",q:"Type a word that means \"dependable\" (starts with r).",a:["reliable"],why:"Reliable = dependable, trustworthy."},
 {k:"Find the mistake",vw:"eventually",type:"mcq",q:"Which sentence uses \"eventually\" correctly?",o:["Eventually it may rain, I'm not sure.","We eventually found the hotel after an hour.","I eventually met him by chance once."],a:1,why:"Eventually = in the end, after time or effort."},
 {k:"Grammar production",tag:"pp",type:"prod",q:"Write one sentence about something you have done this week (Present Perfect).",target:"present perfect, about this week",why:""},
 {k:"Vocabulary production",vw:"convey",type:"prod",q:"Use \"convey\" in a sentence about a meeting or presentation.",target:"uses 'convey' correctly in a work context",why:""},
 {k:"Translate meaning",type:"prod",q:"Say this naturally in English: \"Main kal aapko call karta hoon.\" (Hindi) / \"Mi udya tumhala call karto.\" (Marathi)",target:"natural English: I'll call you tomorrow",why:""}
];
/* ================= CORE ================= */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const dk = d => d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const today = () => dk(new Date());
const addDays = (key,n) => { const [y,m,d]=key.split("-").map(Number); return dk(new Date(y,m-1,d+n)); };
const dayDiff = (a,b) => { const p=k=>{const [y,m,d]=k.split("-").map(Number);return new Date(y,m-1,d).getTime()}; return Math.round((p(b)-p(a))/864e5); };
const norm = s => String(s||"").toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim();
const words = s => (String(s||"").match(/[A-Za-z’']+/g)||[]);
const pick = a => a[Math.floor(Math.random()*a.length)];
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a; };
const clamp = (n,a,b) => Math.max(a,Math.min(b,n));
const fmt = s => { s=Math.max(0,Math.round(s)); return Math.floor(s/60)+":"+String(s%60).padStart(2,"0"); };
const uid = () => Math.random().toString(36).slice(2,9);
const CEFR = ["A1","A2","B1","B2","C1","C2"];
const scoreToCEFR = n => n==null?null: n<25?"A1": n<45?"A2": n<65?"B1": n<82?"B2": n<94?"C1":"C2";
const hashDay = k => k.split("").reduce((a,c)=>a*31+c.charCodeAt(0)>>>0,7);

const DEF = () => ({
  v:1, created:today(), name:"Ranveer", onboarded:false, assessed:false,
  profile:{why:"",minutes:45,priority:"",confidence:3,topics:["technology","career","AI"]},
  levels:null, skills:{speaking:null,listening:null,grammar:null,vocabulary:null,interaction:null,pronunciation:null}, pron:{sessions:[],ph:{}},
  skillHist:[], prefs:{target:45,difficulty:"auto",vocabDiff:"auto",speakDiff:"auto",accent:"mixed",professional:true,reminder:"none",theme:"system",dictation:false,hideVoiceNote:false,freeTalkSec:60,thinkPrep:10},
  xp:0, days:{}, plans:{}, vocab:{}, vocabOrder:[], dayWords:{}, tense:{}, errors:[],
  wordBank:{}, daily:{}, speaking:[], conversations:[], shadowing:[], listening:[], quizzes:[], think:[], weekly:[], monthly:[], diag:null, ach:{}, updatedAt:0
});
let S = DEF();

/* ---------- Offline rule checker (always runs; AI adds depth when available) ---------- */
const IRREG = {knew:"know",went:"go",came:"come",saw:"see",took:"take",made:"make",got:"get",had:"have",gave:"give",told:"tell",thought:"think",bought:"buy",wrote:"write",ate:"eat",said:"say",did:"do",found:"find",left:"leave",felt:"feel",met:"meet",ran:"run",spoke:"speak",understood:"understand",brought:"bring",began:"begin",chose:"choose",forgot:"forget"};
const PPART = {went:"gone",came:"come",did:"done",saw:"seen",ate:"eaten",wrote:"written",took:"taken",gave:"given",spoke:"spoken",began:"begun",forgot:"forgotten",knew:"known"};
const RULES = [
 {id:"didnt-base",cat:"Grammar",pattern:"Base verb after did/didn't",re:/\b(didn't|did not|doesn't|does not|don't|do not)\s+(knew|went|came|saw|took|made|got|had|gave|told|thought|bought|wrote|ate|said|found|left|felt|met|ran|spoke|understood|brought|began|chose|forgot)\b/gi,
  fix:(m,a,b)=>a+" "+IRREG[b.toLowerCase()],why:"After do/does/did (and their negatives), use the base form of the verb."},
 {id:"since-cont",cat:"Tenses",pattern:"Present continuous with since/for",re:/\b(I am|I'm|we are|we're|they are|they're|he is|he's|she is|she's|you are|you're)\s+(\w+ing)\b([^.?!]*?)\b(since|for)\b/gi,
  fix:(m,a,b,c,d)=>{const subj=a.split(/\s|'/)[0];const map={I:"I have been",we:"we have been",they:"they have been",he:"he has been",she:"she has been",you:"you have been"};return (map[subj]||map[subj.toLowerCase()]||a)+" "+b+c+d;},why:"For an action that started in the past and continues now (with since/for), use the Present Perfect Continuous: have/has been + -ing."},
 {id:"am-agree",cat:"Grammar",pattern:"\"I am agree\"",re:/\b(I am|I'm) (agree|disagree)\b/gi,fix:(m,a,b)=>"I "+b,why:"\"Agree\" is a verb, not an adjective: \"I agree\"."},
 {id:"discuss-about",cat:"Prepositions",pattern:"\"discuss about\"",re:/\bdiscuss(ed|ing)? about\b/gi,fix:(m,a)=>"discuss"+(a||""),why:"\"Discuss\" takes a direct object: \"discuss the plan\". (You can \"talk about\" something.)"},
 {id:"more-better",cat:"Grammar",pattern:"Double comparative",re:/\bmore (better|worse|easier|bigger|faster|smaller|cheaper)\b/gi,fix:(m,a)=>a,why:"\"Better\" is already comparative; don't add \"more\"."},
 {id:"explain-me",cat:"Sentence structure",pattern:"\"explain me\"",re:/\bexplain(ed)? me\b/gi,fix:(m,a)=>"explain"+(a||"")+" to me",why:"Use \"explain something to someone\": \"Can you explain it to me?\""},
 {id:"revert-back",cat:"Naturalness",pattern:"Redundant \"back\"",re:/\b(revert|return|reply) back\b/gi,fix:(m,a)=>a,why:"\"Revert/return/reply\" already include the idea of \"back\"."},
 {id:"since-duration",cat:"Prepositions",pattern:"since vs for",re:/\bsince (\d+|two|three|four|five|six|many|several|a few) (years?|months?|days?|weeks?|hours?)\b/gi,fix:(m,a,b)=>"for "+a+" "+b,why:"Use \"for\" with a length of time, \"since\" with a starting point (since 2022, since Monday)."},
 {id:"pp-past",cat:"Tenses",pattern:"Present Perfect with finished time",re:/\b(have|has|'ve|'s) (\w+(ed|en)|been|gone|done|seen|met|had|made|taken|got)\b[^.?!]*\b(yesterday|last (week|year|month|night|weekend|sunday|monday)|ago|in 20\d\d)\b/gi,fix:null,why:"With a finished time (yesterday, last week, ago, in 2023), use the Past Simple: \"I saw it yesterday\", not \"I have seen it yesterday\"."},
 {id:"have-went",cat:"Tenses",pattern:"Past participle after have",re:/\b(have|has|had|I've|we've|they've|she's|he's) (went|came|did|saw|ate|wrote|took|gave|spoke|began|forgot|knew)\b/gi,fix:(m,a,b)=>a+" "+PPART[b.toLowerCase()],why:"After have/has/had, use the past participle (gone, done, seen), not the past simple."},
 {id:"having-doubt",cat:"Translation patterns",pattern:"\"I am having a doubt\"",re:/\b(I am|I'm) having (a )?(doubt|query|question)\b/gi,fix:()=>"I have a question",why:"\"Have\" for possession doesn't take -ing. Internationally \"question\" is clearer than \"doubt\"."},
 {id:"married-with",cat:"Prepositions",pattern:"\"married with\"",re:/\bmarried with\b/gi,fix:()=>"married to",why:"You are married TO someone."},
 {id:"can-able",cat:"Grammar",pattern:"\"can able to\"",re:/\bcan able to\b/gi,fix:()=>"can",why:"Use either \"can\" or \"am able to\", not both."},
 {id:"one-of-friend",cat:"Grammar",pattern:"\"one of my + singular\"",re:/\bone of (my|the|our|his|her) (friend|brother|sister|colleague|teacher|student|cousin)\b/gi,fix:(m,a,b)=>"one of "+a+" "+b+"s",why:"\"One of\" is followed by a plural noun."},
 {id:"uncountable",cat:"Vocabulary",pattern:"Uncountable nouns with -s",re:/\b(informations|advices|furnitures|equipments|feedbacks|knowledges|luggages)\b/gi,fix:(m,a)=>a.slice(0,-1),why:"These nouns are uncountable in English; they don't take -s."},
 {id:"he-dont",cat:"Grammar",pattern:"he/she don't",re:/\b(he|she|it) don't\b/gi,fix:(m,a)=>a+" doesn't",why:"Third person singular: he/she/it doesn't."},
 {id:"very-much-adj",cat:"Naturalness",pattern:"\"very much\" + adjective",re:/\bvery much (happy|intelligent|good|nice|important|beautiful|tired)\b/gi,fix:(m,a)=>"very "+a,why:"\"Very much\" goes with verbs; with adjectives use \"very\" or \"really\"."},
 {id:"having-possession",cat:"Grammar",pattern:"\"am having\" for possession",re:/\b(I am|I'm) having (\w+ )?(brothers?|sisters?|car|bike|laptop|phone|house|friends?)\b/gi,fix:(m,a,b,c)=>"I have "+(b||"")+c,why:"\"Have\" for possession is a state verb and isn't used in the continuous."}
];
function ruleCheck(text){
  const out=[]; const sentences = String(text||"").split(/(?<=[.?!])\s+|\n+/).filter(s=>s.trim());
  for(const s of sentences){
    for(const r of RULES){
      r.re.lastIndex=0;
      if(r.re.test(s)){
        r.re.lastIndex=0;
        const corrected = r.fix ? s.replace(r.re, r.fix) : null;
        out.push({original:s.trim(), correct:corrected?corrected.trim():"(Use the Past Simple here.)", natural:"", why:r.why, category:r.cat, pattern:r.pattern});
      }
    }
  }
  return out;
}

/* ---------- Error database ---------- */
function addError(e, src){
  if(!e || !e.original) return;
  const key = norm(e.pattern||e.why||e.correct).slice(0,60);
  let ex = S.errors.find(x=>x.key===key);
  const now = today();
  if(ex){
    ex.freq++; ex.last=now; ex.examples=[e.original,...ex.examples.filter(o=>o!==e.original)].slice(0,4);
    ex.original=e.original; ex.correct=e.correct||ex.correct; ex.natural=e.natural||ex.natural;
    if(ex.status==="Fixed"){ ex.status="Recurring"; ex.drill=0; } else if(ex.freq>=2) ex.status="Recurring";
  } else {
    S.errors.push({id:uid(), key, pattern:e.pattern||"Mistake", cat:normCat(e.category), original:e.original, correct:e.correct||"", natural:e.natural||"", why:e.why||"", freq:1, first:now, last:now, drill:0, status:"New", examples:[e.original], src:src||""});
  }
}
function normCat(c){
  const cats=["Grammar","Vocabulary","Word choice","Pronunciation","Sentence structure","Prepositions","Articles","Tenses","Naturalness","Translation patterns"];
  if(!c) return "Grammar";
  const f=cats.find(x=>x.toLowerCase()===String(c).toLowerCase()) || cats.find(x=>String(c).toLowerCase().includes(x.toLowerCase().split(" ")[0]));
  return f||"Grammar";
}

/* ---------- Daily progress, XP, streak ---------- */
function D(k=today()){ return S.days[k] ||= {speakSec:0, vocabLearned:[], gramC:0, gramT:0, listenSec:0, shadowSec:0, thinkSec:0, xp:0, blocks:[], quizC:0, quizT:0}; }
function addXP(n,label){ S.xp+=n; D().xp+=n; save(); }
function streak(){
  let n=0, k=today();
  if(!(S.days[k]&&S.days[k].xp>0)) k=addDays(k,-1);
  while(S.days[k] && S.days[k].xp>0){ n++; k=addDays(k,-1); }
  return n;
}
const activeDays = () => Object.values(S.days).filter(d=>d.xp>0).length;
const levelOf = xp => { const l=Math.floor(Math.sqrt(xp/60))+1; const cur=60*(l-1)**2, nxt=60*l**2; return {l, pct:(xp-cur)/(nxt-cur), toNext:nxt-xp}; };

/* ---------- Vocabulary state ---------- */
function V(w){ return S.vocab[w] ||= {status:"UNKNOWN", stage:0, due:null, introduced:null, prodOK:0, prodFail:0, prodDays:[], reviews:0, lastSeen:null, pressureOK:0}; }
const STAT_IDX = s => STATUSES.indexOf(s);
function setStatusAtLeast(w, s){ const v=V(w); if(STAT_IDX(v.status)<STAT_IDX(s)) v.status=s; }
function scheduleFrom(w, ok, strong){
  const v=V(w);
  if(ok){ v.stage = Math.min(SRS.length-1, v.stage + (strong?2:1)); }
  else { v.stage = Math.max(0, v.stage-2); }
  v.due = addDays(today(), ok?SRS[v.stage]:1);
  v.reviews++; v.lastSeen=today();
}
function recordProduction(w, ok, ctx){
  const v=V(w); v.lastSeen=today();
  if(ok){
    v.prodOK++; if(!v.prodDays.includes(today())) v.prodDays.push(today());
    if(ctx==="pressure") v.pressureOK++;
    if(STAT_IDX(v.status)<3) v.status="WEAK ACTIVE";
    if(v.prodDays.length>=2 && v.prodOK>=3) v.status = STAT_IDX(v.status)<4 ? "ACTIVE" : v.status;
    if(v.status==="ACTIVE" && v.stage>=3 && v.pressureOK>=1) v.status="MASTERED";
  } else {
    v.prodFail++;
    if(STAT_IDX(v.status)>=2) v.status="WEAK ACTIVE";
    else setStatusAtLeast(w,"UNDERSTOOD");
  }
}
function introduceWord(w){ const v=V(w); if(!v.introduced){ v.introduced=today(); v.due=addDays(today(),1); S.vocabOrder.push(w); } setStatusAtLeast(w,"RECOGNIZED"); }
function dueWords(){ const t=today(); return Object.entries(S.vocab).filter(([w,v])=>v.introduced && v.due && v.due<=t && v.status!=="MASTERED" && v.lastSeen!==t).map(([w])=>w); }
function todaysWords(){
  const t=today();
  if(S.dayWords[t]) return S.dayWords[t];
  const heavy = dueWords().length>8;
  const n = heavy?3:5;
  const lv = S.levels ? CEFR.indexOf(S.levels.vocabulary||"B1") : 2;
  let pool = WORDS.filter(x=>!V(x.w).introduced);
  if(lv<=1) pool.sort((a,b)=>(a.lvl>b.lvl)-(a.lvl<b.lvl));
  const first = Object.keys(S.dayWords).length===0;
  if(!first && GEM.key && Daily.failed!==t){ ensureDaily(); return []; }   // Gemini is choosing today's words
  const list = first ? ["implement","hesitate","convey","reliable","eventually"].slice(0,n) : pool.slice(0,n).map(x=>x.w);
  if(!list.length) return [];
  S.dayWords[t]=list; save(); return list;
}

/* ---------- Tense mastery ---------- */
function recordTense(id, ok){
  if(!id) return; const t = S.tense[id] ||= {c:0,t:0,hist:[]};
  t.t++; if(ok) t.c++; t.hist.push(ok?1:0); if(t.hist.length>20) t.hist.shift();
  D().gramT++; if(ok) D().gramC++;
}
function tenseMastery(id){
  const t=S.tense[id]; if(!t||!t.t) return null;
  const h=t.hist.slice(-12); const recent=h.reduce((a,b)=>a+b,0)/h.length;
  const conf=Math.min(1,t.t/8);
  return Math.round((recent*0.7 + (t.c/t.t)*0.3)*100*(0.75+0.25*conf));
}
function weakTenses(){ return TOPICS.map(t=>({id:t.id,m:tenseMastery(t.id),n:(S.tense[t.id]||{}).t||0})).filter(x=>x.m!=null && x.m<65 && x.n>=2).sort((a,b)=>a.m-b.m); }

/* ---------- Skills (rolling evidence) ---------- */
function bumpSkill(k, score, w=0.35){
  if(score==null||isNaN(score)) return;
  const cur=S.skills[k]; S.skills[k] = cur==null ? Math.round(score) : Math.round(cur*(1-w)+score*w);
  S.skillHist.push({d:today(),k,v:Math.round(score)});
}

/* ---------- Timers ---------- */
const Timer = { id:null, clear(){ clearInterval(this.id); this.id=null; } };
function countdown(sec, elId, onEnd, onTick){
  Timer.clear(); let left=sec; const t0=Date.now();
  const tick=()=>{ left = sec - Math.floor((Date.now()-t0)/1000); const el=document.getElementById(elId); if(el){ el.textContent=fmt(left); el.classList.toggle("low",left<=5); } onTick&&onTick(left); if(left<=0){ Timer.clear(); onEnd&&onEnd(); } };
  tick(); Timer.id=setInterval(tick,250);
}
/* ================= STORAGE (this browser; export/import for backup) ================= */
const LS_KEY = "englishos.v1";
const Store = { mode:"local", t:null };
function loadLocal(){ try{ const raw=localStorage.getItem(LS_KEY); if(raw) return Object.assign(DEF(), JSON.parse(raw)); }catch(e){} return null; }
function trimState(){
  const cap=(a,n)=>{ if(a&&a.length>n) a.splice(0,a.length-n); };
  cap(S.speaking,150); cap(S.conversations,40); cap(S.shadowing,150); cap(S.listening,150); cap(S.quizzes,150); cap(S.think,150); cap(S.skillHist,400); cap(S.pron.sessions,200);
  S.conversations.forEach(c=>{ if(c.msgs&&c.msgs.length>40) c.msgs=c.msgs.slice(-40); });
  const pk=Object.keys(S.plans).sort(); if(pk.length>14) pk.slice(0,pk.length-14).forEach(k=>delete S.plans[k]);
}
function save(){
  S.updatedAt = Date.now();
  clearTimeout(Store.t);
  Store.t = setTimeout(()=>{ trimState(); try{ localStorage.setItem(LS_KEY, JSON.stringify(S)); }catch(e){ toast("Couldn't save: browser storage is full or blocked."); } }, 250);
  try{ localStorage.setItem(LS_KEY, JSON.stringify(S)); }catch(e){}
}
function exportData(){
  const blob = new Blob([JSON.stringify(S,null,1)],{type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`english-os-backup-${today()}.json`; document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); },500);
}
function importData(file){
  const r=new FileReader();
  r.onload=()=>{ try{ const d=JSON.parse(r.result); if(!d||!d.v||!d.prefs) throw 0; S=Object.assign(DEF(),d); save(); applyTheme(); toast("Backup restored."); render(); }catch(e){ toast("That file isn't an English OS backup."); } };
  r.readAsText(file);
}

/* ================= AI: Google Gemini free tier, called straight from the browser ================= */
const KEY_LS = "eos.geminiKey", MODEL_LS = "eos.geminiModel";
const lsGet = k => { try{ return localStorage.getItem(k)||""; }catch(e){ return ""; } };
const lsSet = (k,v) => { try{ v?localStorage.setItem(k,v):localStorage.removeItem(k); }catch(e){} };
const GEM = {
  key: lsGet(KEY_LS),
  // tried in order; the first one that answers is remembered
  models: ["gemini-3.8-flash","gemini-3.6-flash","gemini-3.5-flash","gemini-3.5-flash-lite","gemini-2.5-flash"],
  quick:  ["gemini-3.5-flash-lite","gemini-3.1-flash-lite","gemini-3.8-flash","gemini-3.6-flash","gemini-2.5-flash"],
  working: lsGet(MODEL_LS), workingQuick: "", lastError: "", queue: Promise.resolve(), last: 0
};
const AI = { state: GEM.key ? "on" : "off", get fn(){ return GEM.key ? true : null; } };
const LEARNER = () => `The learner is ${S.name}, from Maharashtra, India (Marathi/Hindi background). Estimated level: ${S.levels?S.levels.overall:"not yet assessed"}. Accent preference: ${S.prefs.accent}. Be honest and specific; no fake praise. Respect Indian English: don't call a usage wrong if it is standard Indian English, but explain the international alternative.`;

async function geminiRaw(model, body){
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(GEM.key)}`, {method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify(body)});
  let j={}; try{ j=await r.json(); }catch(e){}
  if(!r.ok){
    const msg=(j.error&&j.error.message)||r.statusText||"error"; const st=(j.error&&j.error.status)||"";
    if(r.status===429) { const m=msg.match(/retry in ([\d.]+)s/i); throw {code:"rate_limited", message:msg, wait: m?Math.ceil(+m[1]):30}; }
    if(r.status===404 || /not found|not supported|is not available|deprecated/i.test(msg)) throw {code:"model_unavailable", message:msg};
    if(r.status===400 && /api key/i.test(msg) || st==="INVALID_ARGUMENT"&&/key/i.test(msg) || r.status===401) throw {code:"bad_key", message:"That Gemini key isn't valid. Check it in Settings."};
    if(r.status===403) throw {code:"forbidden", message:msg};
    throw {code:"http_"+r.status, message:msg};
  }
  const c=(j.candidates||[])[0];
  if(!c) throw {code:"blocked", message:(j.promptFeedback&&j.promptFeedback.blockReason)||"No answer"};
  const text=((c.content||{}).parts||[]).filter(p=>p.text && !p.thought).map(p=>p.text).join("");
  if(!text) throw {code:"empty", message:c.finishReason||"Empty answer"};
  return text;
}
async function gemini({contents, system, json=false, quick=false, maxTokens=8192}){
  if(!GEM.key) throw {code:"no_ai", message:"Add your free Gemini key in Settings."};
  const body = {contents, generationConfig:{maxOutputTokens:maxTokens, temperature: json?0.4:0.9}};
  if(json) body.generationConfig.response_mime_type="application/json";
  if(system) body.systemInstruction={parts:[{text:system}]};
  // one request at a time, at least 1.2 s apart, to stay inside free-tier limits
  const run = async () => {
    const gap = Date.now()-GEM.last; if(gap<1200) await new Promise(r=>setTimeout(r,1200-gap));
    const pref = quick ? GEM.workingQuick : GEM.working;
    const list = [...new Set([pref, ...(quick?GEM.quick:GEM.models)].filter(Boolean))];
    let lastErr=null;
    for(const m of list){
      for(let attempt=0; attempt<2; attempt++){
        try{
          GEM.last=Date.now();
          const t = await geminiRaw(m, body);
          if(quick) GEM.workingQuick=m; else if(GEM.working!==m){ GEM.working=m; lsSet(MODEL_LS,m); }
          GEM.lastError=""; AI.state="on"; return t;
        }catch(e){
          lastErr=e;
          if(e.code==="rate_limited" && attempt===0 && e.wait<=20){ toast(`Free-tier limit reached; retrying in ${e.wait}s…`); await new Promise(r=>setTimeout(r,e.wait*1000)); continue; }
          break;
        }
      }
      if(lastErr && !["model_unavailable","rate_limited","forbidden"].includes(lastErr.code)) break;
    }
    GEM.lastError = lastErr ? lastErr.message : "";
    if(lastErr && lastErr.code==="bad_key"){ AI.state="error"; paintStatus(); }
    throw lastErr || {code:"failed"};
  };
  const p = GEM.queue.then(run, run); GEM.queue = p.catch(()=>{}); return p;
}
const toContents = input => (typeof input==="string" ? [{role:"user",content:input}] : input).map(m=>({role:m.role==="assistant"?"model":"user", parts:[{text:m.content}]}));
async function aiText(input, opts={}){ return (await gemini({contents:toContents(input), quick:opts.modelTier==="quick"})).trim(); }
function parseJSON(t){ t=String(t).trim().replace(/^```(?:json)?\s*/i,"").replace(/```\s*$/,""); const a=t.indexOf("{"), b=t.lastIndexOf("}"); if(a<0||b<0) throw {code:"bad_json"}; return JSON.parse(t.slice(a,b+1)); }
async function aiJSON(prompt, tier="default"){ return parseJSON(await gemini({contents:toContents(prompt), json:true, quick:tier==="quick", system:"Reply with exactly one valid JSON object and nothing else."})); }
async function aiAudioJSON(prompt, wavBase64){
  const t = await gemini({contents:[{role:"user", parts:[{inline_data:{mime_type:"audio/wav", data:wavBase64}}, {text:prompt}]}], json:true, system:"Reply with exactly one valid JSON object and nothing else."});
  return parseJSON(t);
}
async function setKey(k){
  k=String(k||"").trim(); GEM.key=k; lsSet(KEY_LS,k); GEM.working=""; lsSet(MODEL_LS,"");
  if(!k){ AI.state="off"; paintStatus(); render(); return false; }
  try{ await gemini({contents:toContents("Reply with the single word: ready"), maxTokens:256}); AI.state="on"; toast(`Connected to ${GEM.working}.`); Daily.failed=null; setTimeout(()=>ensureDaily(),300); }
  catch(e){ AI.state = e.code==="bad_key"?"error":"on"; toast(e.code==="bad_key"?e.message:e.code==="rate_limited"?"Key saved. Google says the free limit is reached right now; try again in a minute.":"Key saved, but the test failed: "+(e.message||e.code).slice(0,120)); }
  paintStatus(); render(); return AI.state==="on";
}
function initServices(){ AI.state = GEM.key ? "on" : "off"; paintStatus(); }

/* ================= RECORDING (mic → PCM in the browser) ================= */
const Mic = { supported: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) && (window.isSecureContext!==false) };
const Speech = { get ok(){ return Mic.supported && !Voice.blocked && !!GEM.key; } };

class Recorder {
  constructor({onLevel, onSpeechStart, autoStop=false, silenceMs=1600, maxSec=300}={}){ Object.assign(this,{onLevel,onSpeechStart,autoStop,silenceMs,maxSec}); this.chunks=[]; this.frames=[]; this.hadSpeech=false; this.lastVoice=0; }
  async start(){
    this.stream = await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true, noiseSuppression:true, autoGainControl:true, channelCount:1}});
    const AC = window.AudioContext||window.webkitAudioContext; this.ctx = new AC();
    if(this.ctx.state==="suspended") await this.ctx.resume();
    this.rate = this.ctx.sampleRate; this.src = this.ctx.createMediaStreamSource(this.stream);
    this.proc = this.ctx.createScriptProcessor(4096,1,1); this.mute=this.ctx.createGain(); this.mute.gain.value=0;
    this.t0 = performance.now(); this.noise = 0.004;
    this.proc.onaudioprocess = ev => {
      const d = ev.inputBuffer.getChannelData(0); this.chunks.push(new Float32Array(d));
      // 20 ms frames for voice-activity measurement (leftover samples carry into the next buffer)
      const fl = Math.round(this.rate*0.02);
      let peak=0;
      for(let i=0;i<d.length;i++){ this.acc=(this.acc||0)+d[i]*d[i]; this.accN=(this.accN||0)+1; if(this.accN>=fl){ const rms=Math.sqrt(this.acc/this.accN); this.frames.push(rms); if(rms>peak) peak=rms; this.acc=0; this.accN=0; } }
      const level = Math.min(1, peak*6); this.onLevel && this.onLevel(level);
      const thr = Math.max(0.012, this.noise*3);
      if(peak>thr){ if(!this.hadSpeech){ this.hadSpeech=true; this.onSpeechStart&&this.onSpeechStart(); } this.lastVoice=performance.now(); }
      else this.noise = this.noise*0.95 + peak*0.05;
      const el = (performance.now()-this.t0)/1000;
      if(el>this.maxSec) this.onAuto&&this.onAuto("max");
      else if(this.autoStop && this.hadSpeech && performance.now()-this.lastVoice > this.silenceMs) this.onAuto&&this.onAuto("silence");
    };
    this.src.connect(this.proc); this.proc.connect(this.mute); this.mute.connect(this.ctx.destination);
  }
  async stop(){
    try{ this.proc&&(this.proc.onaudioprocess=null); this.src&&this.src.disconnect(); this.proc&&this.proc.disconnect(); }catch(e){}
    try{ this.stream&&this.stream.getTracks().forEach(t=>t.stop()); }catch(e){}
    try{ await this.ctx.close(); }catch(e){}
    const len=this.chunks.reduce((a,c)=>a+c.length,0); const all=new Float32Array(len); let o=0; for(const c of this.chunks){ all.set(c,o); o+=c.length; }
    return {pcm:downsample(all,this.rate,16000), metrics:vadMetrics(this.frames), seconds: len/this.rate};
  }
  cancel(){ try{ this.proc&&(this.proc.onaudioprocess=null); this.stream&&this.stream.getTracks().forEach(t=>t.stop()); this.ctx&&this.ctx.close(); }catch(e){} }
}
function downsample(buf, from, to){
  if(from===to) return buf; const ratio=from/to, n=Math.floor(buf.length/ratio), out=new Float32Array(n);
  for(let i=0;i<n;i++){ const a=Math.floor(i*ratio), b=Math.min(buf.length,Math.floor((i+1)*ratio)); let s=0; for(let j=a;j<b;j++) s+=buf[j]; out[i]=s/Math.max(1,b-a); }
  return out;
}
function wavBase64(pcm, rate=16000){
  const buf=new ArrayBuffer(44+pcm.length*2), v=new DataView(buf); const w=(o,s)=>{ for(let i=0;i<s.length;i++) v.setUint8(o+i,s.charCodeAt(i)); };
  w(0,"RIFF"); v.setUint32(4,36+pcm.length*2,true); w(8,"WAVE"); w(12,"fmt "); v.setUint32(16,16,true); v.setUint16(20,1,true); v.setUint16(22,1,true); v.setUint32(24,rate,true); v.setUint32(28,rate*2,true); v.setUint16(32,2,true); v.setUint16(34,16,true); w(36,"data"); v.setUint32(40,pcm.length*2,true);
  for(let i=0;i<pcm.length;i++){ const s=Math.max(-1,Math.min(1,pcm[i])); v.setInt16(44+i*2, s<0?s*0x8000:s*0x7fff, true); }
  const bytes=new Uint8Array(buf); let bin=""; for(let i=0;i<bytes.length;i+=0x8000) bin+=String.fromCharCode.apply(null, bytes.subarray(i,i+0x8000));
  return btoa(bin);
}
/* Measured from the audio itself: when you were speaking and where you paused */
function vadMetrics(frames){
  if(!frames.length) return null;
  const sorted=[...frames].sort((a,b)=>a-b); const floor=sorted[Math.floor(sorted.length*0.15)]||0.002;
  const thr=Math.max(0.012, floor*3.2);
  const on=frames.map(r=>r>thr);
  // bridge tiny gaps (<200 ms) between syllables, drop blips shorter than 80 ms
  const segs=[]; let st=-1;
  for(let i=0;i<=on.length;i++){ if(i<on.length&&on[i]){ if(st<0) st=i; } else if(st>=0){ segs.push([st,i]); st=-1; } }
  const merged=[]; for(const s of segs){ const l=merged[merged.length-1]; if(l && s[0]-l[1]<10) l[1]=s[1]; else merged.push([...s]); }
  const speech=merged.filter(s=>s[1]-s[0]>=4);
  if(!speech.length) return {speechSec:0, spanSec:0, pauses:0, longPauses:0, longest:0};
  const sec=f=>f*0.02; let pauses=0,longPauses=0,longest=0,speechF=0;
  for(let i=0;i<speech.length;i++){ speechF+=speech[i][1]-speech[i][0]; if(i){ const g=sec(speech[i][0]-speech[i-1][1]); if(g>=0.5) pauses++; if(g>=1.5) longPauses++; if(g>longest) longest=g; } }
  return {speechSec:+sec(speechF).toFixed(1), spanSec:+sec(speech[speech.length-1][1]-speech[0][0]).toFixed(1), leadSec:+sec(speech[0][0]).toFixed(1), pauses, longPauses, longest:+longest.toFixed(1)};
}

/* ================= VOICE (speak into any answer box) ================= */
const PRON_PROMPT = (reference, context) => `You are an expert English pronunciation assessor and an exact transcriber. ${LEARNER()}
Listen to the attached recording of the learner${context?` (task: ${context})`:""}.
${reference?`They were asked to read / shadow this exact text:\n"""${reference}"""`:"The speech is spontaneous (no script)."}
Return ONLY this JSON:
{"no_speech": boolean (true if there is no intelligible English speech),
 "transcript": "verbatim transcript INCLUDING fillers (um, uh, er), repetitions and false starts; mark cut-off words with a trailing hyphen",
 "clean_transcript": "the same without fillers and false starts",
 "fillers": integer count of filler sounds (um, uh, er, ah),
 "scores": {"overall":0-100, "accuracy":0-100 (individual sounds), "fluency":0-100 (smoothness, hesitation, pace), "prosody":0-100 (word stress, rhythm, intonation), "intelligibility":0-100 (ease of understanding for an international listener)${reference?`, "completeness":0-100 (share of the script actually spoken)`:""}},
 "word_issues": [{"word":"word as written","issue":"what was wrong, short","heard_as":"what it sounded like, simple respelling","severity":"minor|major"}],
 "sound_issues": [{"ipa":"IPA symbol of the target sound, e.g. θ","example_words":["words where it went wrong"],"heard_as":"IPA symbol it sounded like","tip":"one practical sentence on how to make the sound"}],
 ${reference?`"omitted_words": ["script words they skipped"],`:""}
 "prosody_note": "one specific sentence about stress, rhythm or intonation",
 "summary": "one or two honest, specific sentences"}
Rules: judge clarity and intelligibility; an Indian accent is not an error by itself, so flag only sounds that change or blur meaning or that international listeners commonly stumble on (e.g. v/w, θ→t, ð→d, z→j, vowel length, word stress). Max 10 word_issues, max 5 sound_issues, most important first. Do not invent issues you cannot hear. Scores must reflect the audio, not the text.`;

const Voice = {
  active:false, starting:false, busy:false, used:false, blocked:false, rec:null, target:null, segs:[], opts:{}, pending:null,
  get possible(){ return Mic.supported && !this.blocked && !!GEM.key; },
  get Rec(){ return Mic.supported; },
  get pron(){ return this.segs.length ? aggregatePron(this.segs) : null; },
  toggle(targetId){ if(this.active) this.stop(); else if(!this.busy) this.start(targetId); },
  async start(targetId, opts={}){
    if(this.active||this.starting||this.busy) return;
    if(!Mic.supported){ toast("This browser can't record audio here. Open the app over https in Chrome or Safari."); return; }
    if(!GEM.key){ toast("Add your free Gemini key in Settings to use the microphone."); go("settings"); return; }
    if(this.blocked){ toast("Microphone permission is blocked. Allow it in your browser's site settings, then reload."); return; }
    TTS.stop(); this.target=targetId; this.opts=opts; this.starting=true; paintMic();
    const rec = new Recorder({autoStop:!!opts.autoStop, silenceMs:opts.silenceMs||1600, maxSec:opts.maxSec||300,
      onLevel:l=>{ document.querySelectorAll(".lvl i").forEach(i=>i.style.transform=`scaleX(${l.toFixed(2)})`); },
      onSpeechStart:()=>{ const el=document.getElementById(this.target); if(el && el.dataset.track && !el.dataset.firstkey){ el.dataset.firstkey=String(Date.now()); const fk=TRACK[el.dataset.track]; fk&&fk(el); } }});
    rec.onAuto = () => { if(this.rec===rec) this.stop(); };
    try{ await rec.start(); this.rec=rec; this.active=true; this.recT0=Date.now(); }
    catch(e){ const n=e&&e.name; if(n==="NotAllowedError"||n==="SecurityError"){ this.blocked=true; toast("Microphone permission was denied. Allow it for this site, then reload."); } else toast(n==="NotFoundError"?"No microphone found.":"Couldn't start the microphone: "+((e&&e.message)||n)); rec.cancel(); }
    this.starting=false; paintMic(); this.tick();
  },
  tick(){ clearInterval(this.ti); this.ti=setInterval(()=>{ if(!this.active){ clearInterval(this.ti); return; } document.querySelectorAll(".rec-t").forEach(x=>x.textContent=fmt((Date.now()-this.recT0)/1000)); },250); },
  stop(){
    if(this.pending) return this.pending;
    if(!this.active||!this.rec) return Promise.resolve();
    const rec=this.rec, opts=this.opts, target=this.target; this.rec=null; this.active=false; this.busy=true; paintMic();
    this.pending = (async()=>{
      try{
        const {pcm, metrics, seconds} = await rec.stop();
        if(!metrics || metrics.speechSec<0.4){ toast("I didn't hear any speech. Check the mic and speak a little louder."); return; }
        const res = await aiAudioJSON(PRON_PROMPT(opts.reference, opts.context), wavBase64(pcm));
        if(res.no_speech || !res.transcript){ toast("I couldn't make out any English in that recording. Try again."); return; }
        res.metrics = metrics; res.seconds = seconds; res.reference = opts.reference||null;
        this.segs.push(res); this.used=true;
        const el=document.getElementById(target);
        if(el){ el.value = (el.value.trim()?el.value.trimEnd()+" ":"") + res.transcript.trim(); el.dispatchEvent(new Event("input",{bubbles:true})); }
        opts.onDone && opts.onDone(res);
      }catch(e){ toast(e.code==="rate_limited"?"Google's free limit was reached. Wait a minute and record again.":e.code==="no_ai"||e.code==="bad_key"?(e.message||"Check your Gemini key in Settings."):"Couldn't analyse the recording: "+String(e.message||e.code||e).slice(0,100)); opts.onError&&opts.onError(e); }
      finally{ this.busy=false; this.pending=null; paintMic(); }
    })();
    return this.pending;
  },
  cancel(){ if(this.rec){ this.rec.cancel(); this.rec=null; } this.active=false; clearInterval(this.ti); paintMic(); },
  finish(){ return this.active ? this.stop() : (this.pending || Promise.resolve()); },
  reset(){ this.used=false; this.segs=[]; }
};
function paintMic(){
  document.querySelectorAll("[data-a=mic]").forEach(b=>{
    const mine = Voice.target===b.dataset.v;
    b.classList.toggle("mic-on", Voice.active && mine);
    const sp=b.querySelector("span"); if(sp) sp.innerHTML = Voice.starting&&mine?"Starting…": Voice.active&&mine?`Stop <span class="rec-t mono">0:00</span><span class="lvl"><i></i></span>`: Voice.busy&&mine?'<span class="spinner"></span> Listening back…':(b.dataset.label||"Speak");
    b.disabled = (Voice.busy) || (!Voice.possible && !Voice.active);
  });
}

/* Short scripted check of one word or phrase */
async function assessOnce(reference){
  const rec=new Recorder({autoStop:true, silenceMs:900, maxSec:8});
  await rec.start();
  await new Promise(res=>{ rec.onAuto=res; setTimeout(res, 8500); });
  const {pcm, metrics} = await rec.stop();
  if(!metrics || metrics.speechSec<0.2) throw {code:"no_speech"};
  return aiAudioJSON(`You are an expert English pronunciation coach. ${LEARNER()}
The learner tried to say: "${reference}". Listen carefully to the recording.
Return ONLY JSON: {"no_speech":boolean,"heard":"what you heard, simple respelling","score":0-100,
"sounds":[{"ipa":"each target IPA sound of the word(s) in order","ok":boolean,"heard_as":"IPA you heard if not ok, else empty"}],
"stress_ok":boolean,"stress_note":"which syllable should be stressed, e.g. IM-ple-ment",
"tip":"one practical sentence on the most important fix, or what was good"}
Use a standard international (General American/British) target. Do not invent errors you can't hear.`, wavBase64(pcm));
}

/* ================= PRONUNCIATION RESULTS ================= */
function aggregatePron(segs){
  const n = segs.length; if(!n) return null;
  const wsum = segs.map(s=>Math.max(1, words(s.clean_transcript||s.transcript).length));
  const tot = wsum.reduce((a,b)=>a+b,0);
  const avg = k => { const v=segs.map((s,i)=>[s.scores&&s.scores[k],wsum[i]]).filter(([x])=>typeof x==="number"); if(!v.length) return null; return Math.round(v.reduce((a,[x,w])=>a+x*w,0)/v.reduce((a,[,w])=>a+w,0)); };
  const m = segs.map(s=>s.metrics||{});
  const span = m.reduce((a,x)=>a+(x.spanSec||0),0), speech=m.reduce((a,x)=>a+(x.speechSec||0),0);
  const wcount = segs.reduce((a,s)=>a+words(s.clean_transcript||s.transcript).length,0);
  const issues=[]; segs.forEach(s=>(s.word_issues||[]).forEach(w=>{ if(w&&w.word&&!issues.some(x=>norm(x.word)===norm(w.word))) issues.push(w); }));
  const sounds={}; segs.forEach(s=>(s.sound_issues||[]).forEach(x=>{ if(!x||!x.ipa) return; const o=sounds[x.ipa] ||= {ph:x.ipa, ex:[], heard:x.heard_as||"", tip:x.tip||"", low:0}; (x.example_words||[]).forEach(e=>{ if(!o.ex.includes(e)) o.ex.push(e); }); o.low=Math.max(o.low,(x.example_words||[]).length||1); if(!o.tip&&x.tip) o.tip=x.tip; }));
  const omitted=[]; segs.forEach(s=>(s.omitted_words||[]).forEach(w=>{ if(!omitted.includes(w)) omitted.push(w); }));
  const issueMap = Object.fromEntries(issues.map(w=>[norm(w.word), w]));
  const allWords = segs.flatMap(s=>(s.reference&&segs.length===1 ? s.reference : (s.clean_transcript||s.transcript)).split(/\s+/)).filter(Boolean);
  const list = allWords.slice(0,400).map(w=>{ const k=norm(w); const iss=issueMap[k]; const om=omitted.some(o=>norm(o)===k); return {w, e: om?"Omission":iss?(iss.severity==="major"?"major":"minor"):"None", s: om?null:iss?(iss.severity==="major"?45:68):90, issue:iss}; });
  return {
    pron: avg("overall"), accuracy: avg("accuracy"), fluency: avg("fluency"), prosody: avg("prosody"), intelligibility: avg("intelligibility"), completeness: avg("completeness"),
    wpm: span>=4 ? Math.round(wcount/(span/60)) : null, artic: speech>=3 ? Math.round(wcount/(speech/60)) : null,
    pauses: m.reduce((a,x)=>a+(x.pauses||0),0), longPauses: m.reduce((a,x)=>a+(x.longPauses||0),0), longest: Math.max(0,...m.map(x=>x.longest||0)),
    speechSec: Math.round(speech), spanSec: Math.round(span), fillers: segs.reduce((a,s)=>a+(+s.fillers||0),0),
    words: list, wordIssues: issues.slice(0,12), weakPh: Object.values(sounds).sort((a,b)=>b.low-a.low).slice(0,6), omitted,
    prosodyNote: segs.map(s=>s.prosody_note).filter(Boolean).slice(-1)[0]||"", summary: segs.map(s=>s.summary).filter(Boolean).slice(-1)[0]||"",
    weakWords: issues.slice(0,12).map(w=>({w:w.word})), nWords: wcount, verbatim: segs.map(s=>s.transcript).join(" ")
  };
}
function recordPron(p, src){
  if(!p) return;
  S.pron.sessions.push({d:today(), src, pron:p.pron, acc:p.accuracy, flu:p.fluency, pro:p.prosody, wpm:p.wpm});
  for(const x of p.weakPh){
    const o=S.pron.ph[x.ph] ||= {low:0,n:0,ex:[],heard:{},sessions:0};
    o.low+=Math.max(1,x.low); o.n+=Math.max(1,x.low); o.sessions=(o.sessions||0)+1;
    x.ex.forEach(e=>{ if(!o.ex.includes(e)) o.ex.unshift(e); }); o.ex=o.ex.slice(0,5); if(x.heard) o.heard[x.heard]=(o.heard[x.heard]||0)+1; if(x.tip) o.tip=x.tip;
    if(o.sessions>=2 || x.low>=2) addError({original:x.ex.slice(0,3).join(", "), correct:`/${x.ph}/ in “${x.ex[0]||""}”`, natural:"", why:(x.heard?`This sound came out closer to /${x.heard}/. `:"")+(x.tip||""), category:"Pronunciation", pattern:`Sound /${x.ph}/`}, src);
  }
  if(p.pron!=null) bumpSkill("pronunciation", p.pron, 0.3);
}
const scoreCls = s => s==null?"":s<60?"bad":s<80?"warn":"good";
function wordHeat(p){
  return `<div class="heat">${p.words.map(w=>{ const c = w.e==="Omission"?"om": w.e==="major"?"bad": w.e==="minor"?"warn":"good"; const t = w.e==="Omission"?"Skipped": w.issue?`${w.issue.issue||""}${w.issue.heard_as?" · sounded like “"+w.issue.heard_as+"”":""}`:"Clear"; return `<button class="hw ${c}" data-a="wordDrill" data-v="${esc(w.w)}" title="${esc(t)}">${esc(w.w)}</button>`; }).join(" ")}</div>
  <div class="row muted" style="font-size:12px;gap:12px"><span><i class="lg good"></i>clear</span><span><i class="lg warn"></i>slightly off</span><span><i class="lg bad"></i>unclear</span>${p.omitted.length?`<span><i class="lg om"></i>skipped</span>`:""}<span>Tap any word to practise it.</span></div>`;
}
function pronHTML(p, title="Your pronunciation"){
  if(!p) return "";
  const tiles=[["Overall",p.pron],["Sounds",p.accuracy],["Fluency",p.fluency],["Stress & intonation",p.prosody],["Clarity",p.intelligibility],["Completeness",p.completeness]].filter(([,v])=>v!=null);
  const rate = p.wpm ? `${p.wpm} words/min ${p.wpm<100?"(slow; relaxed conversation is about 120–160)":p.wpm>175?"(fast; slow down for clarity)":"(natural range)"}` : "Too short to measure";
  return `<div class="card tint stack">
   <div class="row between"><h3>${title}</h3><span class="chip acc">From your recording</span></div>
   ${p.summary?`<p>${esc(p.summary)}</p>`:""}
   <div class="scores">${tiles.map(([l,v])=>`<div class="score" style="background:var(--surface)"><span class="l">${l}</span><span class="n">${v}<small>/100</small></span>${pctBar(v,scoreCls(v))}</div>`).join("")}</div>
   <dl class="kv"><dt>Speaking rate</dt><dd>${rate}</dd><dt>Pauses</dt><dd>${p.pauses} over 0.5 s · ${p.longPauses} over 1.5 s${p.longest?` · longest ${p.longest} s`:""}</dd><dt>Fillers</dt><dd>${p.fillers} (um, uh, er)</dd>${p.prosodyNote?`<dt>Stress &amp; rhythm</dt><dd>${esc(p.prosodyNote)}</dd>`:""}</dl>
   ${p.weakPh.length?`<div class="stack s6"><span class="lbl">Sounds to work on</span><div class="grid g3">${p.weakPh.map(x=>`<div class="ph-card"><b class="mono">/${esc(x.ph)}/${x.heard?` <span class="muted" style="font-size:13px;font-weight:500">sounded like /${esc(x.heard)}/</span>`:""}</b>${x.tip?`<span style="font-size:13px">${esc(x.tip)}</span>`:""}<span style="font-size:13px">${x.ex.slice(0,4).map(e=>`<button class="linkbtn" data-a="wordDrill" data-v="${esc(e)}">${esc(e)}</button>`).join(", ")}</span></div>`).join("")}</div></div>`:""}
   ${p.wordIssues.length?`<div class="stack s6"><span class="lbl">Words that weren't clear</span><div class="list">${p.wordIssues.slice(0,8).map(w=>`<div class="li" style="padding:8px 2px"><button class="linkbtn" data-a="wordDrill" data-v="${esc(w.word)}"><b>${esc(w.word)}</b></button><div class="grow muted" style="font-size:13.5px">${esc(w.issue||"")}${w.heard_as?` · sounded like “${esc(w.heard_as)}”`:""}</div><span class="chip ${w.severity==="major"?"bad":"warn"}">${w.severity==="major"?"unclear":"slightly off"}</span></div>`).join("")}</div></div>`:""}
   <div class="stack s6"><span class="lbl">Word by word</span>${wordHeat(p)}</div>
   <p class="muted" style="font-size:12.5px">Speaking rate and pauses are measured from your audio. The pronunciation scores are an estimate: Gemini listens to your recording and judges it. The goal is clear, easy-to-understand speech. An Indian accent is fine.</p>
  </div>`;
}

/* ================= TEXT TO SPEECH (device voices, free) ================= */
const TTS = {
  get ok(){ return "speechSynthesis" in window; }, playing:false, run:0, voices:[],
  load(){ if("speechSynthesis" in window){ const v=speechSynthesis.getVoices(); if(v.length) this.voices=v.filter(x=>/^en/i.test(x.lang)); } },
  speak(chunks, {rate=1, onChunk, onEnd}={}){
    this.stop(); const run=++this.run; this.playing=true;
    if(!this.ok){ this.playing=false; toast("Audio playback isn't available in this browser."); onEnd&&onEnd(); return; }
    this.load(); const items=chunks.map(c=>typeof c==="string"?{text:c,voice:0}:c); let i=0;
    const pref = S.prefs.accent==="british"?/en-GB/i:S.prefs.accent==="american"?/en-US/i:S.prefs.accent==="indian"?/en-IN/i:/en-(GB|US|IN)/i;
    const good = v => /natural|neural|enhanced|premium|google|samantha|daniel|aria|jenny|guy/i.test(v.name);
    const vs=this.voices.filter(v=>pref.test(v.lang)).sort((a,b)=>good(b)-good(a)); const pool=vs.length?vs:this.voices;
    const step=()=>{ if(run!==this.run) return; if(i>=items.length){ this.playing=false; onEnd&&onEnd(); return; } const u=new SpeechSynthesisUtterance(items[i].text); const v=pool[(items[i].voice||0)%Math.max(1,pool.length)]; if(v){ u.voice=v; u.lang=v.lang; } u.rate=rate; u.pitch=items[i].pitch||1; u.onend=()=>{ i++; setTimeout(step,120); }; u.onerror=()=>{ i++; step(); }; onChunk&&onChunk(i); speechSynthesis.speak(u); };
    step();
  },
  stop(){ this.run++; this.playing=false; if("speechSynthesis" in window) try{ speechSynthesis.cancel(); }catch(e){} }
};
if("speechSynthesis" in window){ TTS.load(); try{ speechSynthesis.onvoiceschanged=()=>TTS.load(); }catch(e){} }
/* ================= LEARNING ENGINE ================= */
const SPEAK_ROTATION = ["free","story","rapid","fluency","professional","debate","interview","presentation","roleplay"];
function interestTopic(offset=0){
  const t = (S.profile.topics&&S.profile.topics.length?S.profile.topics:TOPIC_LIST);
  return t[(hashDay(today())+offset)%t.length];
}
function recurringErrors(){ return S.errors.filter(e=>e.status==="Recurring").sort((a,b)=>b.freq-a.freq||(b.last>a.last?1:-1)); }
function weakestSkill(){
  const ent = Object.entries(S.skills).filter(([k,v])=>v!=null);
  if(!ent.length) return null; ent.sort((a,b)=>a[1]-b[1]); return ent[0][0];
}
function grammarTopicToday(){
  const w = weakTenses(); if(w.length) return w[0].id;
  const rec = recurringErrors().find(e=>e.cat==="Tenses");
  if(rec){ if(/since|for/i.test(rec.pattern)) return "ppc"; if(/finished|perfect/i.test(rec.pattern)) return "pp"; }
  const untested = TOPICS.filter(t=>!S.tense[t.id] && ["pp","pa","ppc","pac","cond","fs","pc","ps"].includes(t.id));
  if(!Object.keys(S.tense).length || !S.tense.pp || (S.tense.pp.t<6)) return "pp";
  return untested.length ? untested[0].id : TOPICS[hashDay(today())%TOPICS.length].id;
}
function focusToday(){
  const f=[]; const rec=recurringErrors(); const due=dueWords();
  if(rec[0]) f.push({t:"Fix: "+rec[0].pattern, s:`Seen ${rec[0].freq} times`, r:"mistakes"});
  const gt=grammarTopicToday(), m=tenseMastery(gt);
  f.push({t:TMAP[gt].name+(gt==="pp"?" vs Past Simple":""), s: m==null?"Today's grammar":`${m}% mastery`, r:"tense", a:gt});
  const weakA = Object.values(S.vocab).filter(v=>v.status==="WEAK ACTIVE").length;
  if(weakA>=2 || due.length>=4) f.push({t:"Vocabulary retrieval", s:`${weakA} weak-active · ${due.length} due`, r:"vocabulary", a:"pressure"});
  const ws = weakestSkill();
  if(ws && f.length<3) f.push({t:({speaking:"Speaking fluency",listening:"Listening detail",grammar:"Grammar accuracy",vocabulary:"Word range",interaction:"Conversation skills"})[ws], s:`Weakest skill · ${S.skills[ws]}/100`, r: ws==="listening"?"listening":"speaking"});
  if(f.length<3) f.push({t:"Speaking fluency", s:"Daily speaking", r:"speaking"});
  if(f.length<3) f.push({t:"5 new words", s:"Learn → use → recall", r:"vocabulary"});
  return f.slice(0,3);
}
function buildPlan(force){
  const t=today();
  if(S.plans[t] && !force) return S.plans[t];
  const target = S.prefs.target||45;
  const due = dueWords().length, rec = recurringErrors().length, gt=grammarTopicToday();
  const n = activeDays();
  const mode = (() => { const ws=weakestSkill(); if(ws==="interaction") return "conversation"; return SPEAK_ROTATION[n % SPEAK_ROTATION.length]; })();
  const modeName = SPEAK_MODES.find(m=>m.id===mode).t;
  let blocks = [];
  if(rec>=1) blocks.push({k:"mistakes",t:"Fix recurring mistakes",d:recurringErrors()[0].pattern,w:4,r:"mistakes",pri:1});
  if(due>0) blocks.push({k:"review",t:"Review due words",d:`${due} word${due>1?"s":""} due`,w:due>6?6:4,r:"vocabulary",a:"review",pri:2});
  blocks.push({k:"vocab",t:"Daily vocabulary",d:`${todaysWords().length||5} new words: learn, use, recall`,w:8,r:"vocabulary",a:"today",pri:4});
  blocks.push({k:"tense",t:"Tense Lab",d:TMAP[gt].name+(gt==="pp"?" vs Past Simple":""),w:7,r:"tense",a:gt,pri:5});
  blocks.push({k:"speaking",t:"Speaking",d:modeName,w:10,r:"speaking",a:mode,pri:3});
  const ws = weakestSkill();
  blocks.push({k:"shadow",t:"Shadowing",d:"Rhythm, stress, linking",w: ws==="speaking"?7:6,r:"shadowing",pri:7});
  blocks.push({k:"listen",t:"Listening",d:"Listen → answer → reveal",w: ws==="listening"?8:6,r:"listening",pri: ws==="listening"?3:6});
  if(mode!=="conversation") blocks.push({k:"convo",t:"Real conversation",d:(PERSONAS.find(p=>p.daily)||PERSONAS[(hashDay(t))%PERSONAS.length]).name,w:10,r:"speaking",a:"conversation",pri:3});
  if(n%2===1) blocks.push({k:"think",t:"Think in English",d:"Timed thought → English",w:5,r:"think",pri:6});
  else blocks.push({k:"quiz",t:"Today's quiz",d:"Grammar, vocab, production",w:6,r:"quizzes",a:"today",pri:6});
  // fit to target: drop lowest priority blocks first, never speaking
  let total = blocks.reduce((a,b)=>a+b.w,0);
  const sorted=[...blocks].sort((a,b)=>b.pri-a.pri);
  for(const b of sorted){ if(total<=target+4) break; if(b.k==="speaking"||b.k==="vocab") continue; blocks=blocks.filter(x=>x!==b); total-=b.w; }
  if(total < target-6){ const sp=blocks.find(b=>b.k==="speaking"); sp.w += Math.min(10,target-total); total=blocks.reduce((a,b)=>a+b.w,0); }
  const order=["mistakes","review","vocab","tense","speaking","shadow","listen","convo","think","quiz"];
  blocks.sort((a,b)=>order.indexOf(a.k)-order.indexOf(b.k));
  blocks.push({k:"wrap",t:"Daily review",d:"Wins, mistakes, next steps",w:3,r:"today",a:"review"});
  S.plans[t]={blocks, total:blocks.reduce((a,b)=>a+b.w,0), mode};
  save(); return S.plans[t];
}
function completeBlock(k){
  const d=D(); if(!d.blocks.includes(k)){ d.blocks.push(k); save(); }
  if(ui.session) paintSession();
}
function nextBlock(){ const p=buildPlan(); return p.blocks.find(b=>!D().blocks.includes(b.k)); }

/* ---------- Analysis of a speaking/production sample ---------- */
const FILLERS = /\b(um+|uh+|erm|hmm+|like,|you know|basically|actually|i mean)\b/gi;
function measure(text, inputMode){
  const w = words(text).length;
  const m = {words:w, inputMode};
  m.selfCorrections = (text.match(/\b(i mean|sorry,|no wait|i meant|rather,)\b/gi)||[]).length;
  m.abandoned = (text.match(/(\.\.\.|…|—\s|-\s*$)/gm)||[]).length;
  const tk = words(text).map(x=>x.toLowerCase()); const rep=tk.filter((x,i)=>i>0&&x===tk[i-1]).length; m.repetitions=rep;
  if(inputMode==="voice") m.fillers = (text.match(FILLERS)||[]).length;
  const uniq = new Set(tk.filter(x=>x.length>2)); m.ttr = tk.length? uniq.size/Math.max(1,tk.filter(x=>x.length>2).length):0;
  return m;
}
async function analyze({task, text, mode, inputMode, sec, target, latency, convo}){
  const m = measure(text, inputMode); m.durationSec=sec; m.latencyMs=latency;
  const pron = Voice.pron; if(pron){ m.pron=pron; m.inputMode="voice"; inputMode="voice"; m.fillers=pron.fillers; }
  const rules = ruleCheck(convo ? convo.filter(x=>x.role==="user").map(x=>x.content).join("\n") : text);
  let rep = {source:"offline", scores:{}, measured:m, mistakes:rules.slice(0,6), summary:"", strengths:[], fix_next:[], better:"", cefr:null};
  if(AI.fn){
    try{
      const transcript = convo ? convo.map(x=>(x.role==="user"?"LEARNER":"PARTNER")+": "+x.content).join("\n") : text;
      const j = await aiJSON(`You are an expert English speaking coach and CEFR assessor. ${LEARNER()}
Task given to the learner: "${task}" (mode: ${mode}).
Input method: ${pron?`SPOKEN. The transcript is verbatim from the recording (fillers like 'um' kept). Measured from the audio waveform: ${pron.wpm||"n/a"} words/min, ${pron.pauses} pauses over 0.5 s, ${pron.longPauses} over 1.5 s, longest ${pron.longest} s, ${pron.fillers} fillers. Listening estimate: fluency ${pron.fluency}/100, pronunciation ${pron.pron}/100${pron.prosody!=null?", prosody "+pron.prosody+"/100":""}. Use these when scoring fluency.`:inputMode==="voice"?"spoken via dictation (transcript only; no audio timing).":"TYPED (not spoken). Typed text cannot show pauses, hesitation, fillers or pronunciation."}
Time spent: ${sec?Math.round(sec)+" s":"unknown"}. Words: ${m.words}.
${convo?"This was a role-play conversation. Assess the LEARNER lines only; use PARTNER lines as context for interaction (responding to questions, follow-ups, clarifying).":""}
--- TRANSCRIPT ---
${transcript}
--- END ---
Return ONLY JSON:
{"scores":{"fluency":number|null,"grammar":number|null,"vocabulary":number|null,"coherence":number|null,"naturalness":number|null,"interaction":number|null},
 "evidence_note":"one sentence on what the evidence can and cannot show",
 "summary":"2 specific sentences of honest feedback, referencing what they actually wrote",
 "strengths":["max 2 specific strengths"],
 "fix_next":["max 2 concrete things to do differently next time"],
 "mistakes":[{"original":"exact learner sentence or phrase","correct":"minimal correct version","natural":"how a fluent speaker would say it","why":"short rule","category":"Grammar|Vocabulary|Word choice|Sentence structure|Prepositions|Articles|Tenses|Naturalness|Translation patterns","pattern":"short generic name of the error type, e.g. 'Base verb after didn't'"}],
 "better_version":"a natural rewrite of their answer at one CEFR level above theirs, under 90 words",
 "cefr_estimate":"A1|A2|B1|B2|C1|C2|null"}
Rules: scores are 0-100. Use null for any score the evidence cannot support (fluency must be null for typed input; interaction null unless it was a conversation; use null for everything if under 25 words). Max 5 mistakes, only important ones (communication-breaking or repeated first). Don't flag standard Indian English as an error unless it would confuse international listeners; then put it under Naturalness and say so.`);
      rep = {source:"ai", scores:j.scores||{}, measured:m, mistakes:(j.mistakes||[]).filter(x=>x&&x.original).slice(0,5), summary:j.summary||"", note:j.evidence_note||"", strengths:j.strengths||[], fix_next:j.fix_next||[], better:j.better_version||"", cefr:j.cefr_estimate&&j.cefr_estimate!=="null"?j.cefr_estimate:null};
      // merge rule hits the AI missed
      for(const r of rules){ if(!rep.mistakes.some(x=>norm(x.original)===norm(r.original))) rep.mistakes.push(r); }
      rep.mistakes = rep.mistakes.slice(0,6);
    }catch(e){ rep.aiError = e && e.code==="rate_limited" ? "The coach is busy right now; showing the offline check." : "The AI coach didn't respond; showing the offline check."; }
  }
  if(rep.source==="offline"){
    if(m.words>=25){
      rep.scores.grammar = clamp(Math.round(100 - (rules.length/Math.max(1,m.words/25))*14), 30, 95);
      rep.scores.vocabulary = m.words>=40 ? clamp(Math.round(m.ttr*100), 30, 90) : null;
    }
    rep.note = "Offline estimate: rule-based grammar check and word variety only. Coherence, naturalness and fluency need the AI coach.";
    rep.summary = rules.length ? `The checker found ${rules.length} pattern${rules.length>1?"s":""} worth fixing. ${m.words<40?"Try to say more next time; longer answers give better evidence.":""}` : (m.words<25?"Too short to assess. Aim for at least 40 words.":"No common error patterns found by the offline checker. That doesn't mean it's error-free.");
  }
  if(pron){ if(pron.pron!=null) rep.scores.pronunciation = pron.pron; if(rep.scores.fluency==null) rep.scores.fluency = pron.fluency; recordPron(pron, mode); }
  for(const x of rep.mistakes) addError(x, mode);
  return rep;
}
function applyReport(rep, kind){
  const s=rep.scores||{};
  const vals=[s.fluency,s.grammar,s.vocabulary,s.coherence,s.naturalness].filter(v=>typeof v==="number");
  if(vals.length) bumpSkill("speaking", vals.reduce((a,b)=>a+b,0)/vals.length, 0.3);
  if(typeof s.grammar==="number") bumpSkill("grammar", s.grammar, 0.2);
  if(typeof s.vocabulary==="number") bumpSkill("vocabulary", s.vocabulary, 0.2);
  if(typeof s.interaction==="number") bumpSkill("interaction", s.interaction, 0.35);
}

/* ---------- Evaluate one produced sentence (vocab, tense, drills) ---------- */
async function evalSentence({text, target, word, mustAvoid, context}){
  const t = String(text||"").trim();
  const res = {ok:false, score:0, feedback:"", corrected:"", natural:"", mistakes:[], source:"offline"};
  if(words(t).length<3){ res.feedback="Write a full sentence (at least 4 words)."; return res; }
  const rules = ruleCheck(t);
  if(AI.fn){
    try{
      const j = await aiJSON(`You are a strict but supportive English coach. ${LEARNER()}
The learner was asked: ${target}${word?` (target word: "${word}")`:""}${mustAvoid?` They must NOT use the word "${mustAvoid}".`:""}${context?` Context: ${context}.`:""}
Their answer: """${t}"""
Return ONLY JSON: {"ok":boolean (true only if it fulfils the task AND is grammatically acceptable${word?" AND uses the target word with the right meaning":""}),"score":0-100,"feedback":"1-2 specific sentences, no fake praise","corrected":"minimal correction or same sentence if correct","natural":"how a fluent speaker would say it","mistakes":[{"original","correct","natural","why","category","pattern"}]}`, "quick");
      Object.assign(res, j, {source:"ai"});
      res.mistakes = (j.mistakes||[]).filter(x=>x&&x.original&&norm(x.original)!==norm(x.correct));
      for(const r of rules){ if(!res.mistakes.some(x=>norm(x.original)===norm(r.original))) res.mistakes.push(r); }
      res.mistakes.forEach(x=>addError(x, "production"));
      return res;
    }catch(e){ res.aiNote="AI check unavailable; used offline check."; }
  }
  // offline heuristic
  const lw = norm(t);
  let ok = true; const notes=[];
  if(word){ const forms = wordForms(word); if(!forms.some(f=>new RegExp("\\b"+f+"\\b").test(lw))){ ok=false; notes.push(`It doesn't use "${word}".`); } }
  if(mustAvoid){ const forms=wordForms(mustAvoid); if(forms.some(f=>new RegExp("\\b"+f+"\\b").test(lw))){ ok=false; notes.push(`You used "${mustAvoid}". Explain it without the word.`); } }
  if(rules.length){ ok=false; notes.push(rules[0].why); res.corrected=rules[0].correct; }
  res.mistakes=rules; rules.forEach(x=>addError(x,"production"));
  res.ok=ok; res.score = ok?70:40;
  res.feedback = ok ? "Looks acceptable to the offline checker. Meaning and naturalness can't be checked offline." : notes.join(" ");
  return res;
}
function wordForms(w){
  w=w.toLowerCase();
  if(w.includes(" ")){ const [a,...r]=w.split(" "); return [a,a+"s",a+"d",a+"ed",a+"ing",a.replace(/e$/,"")+"ing"].map(x=>x+" "+r.join(" ")).concat([a+" it "+r.join(" "),a+"d it "+r.join(" ")]); }
  const base=w.replace(/e$/,"");
  return [w,w+"s",w+"d",w+"ed",base+"ing",w+"ly",base+"ed",w.replace(/y$/,"ies"),w.replace(/y$/,"ied"),w.replace(/le$/,"ly"),w.replace(/t$/,"tion")];
}
function checkTyped(ans, accepted){
  const a = norm(ans).replace(/\bi m\b/g,"i'm");
  return accepted.some(x=>{ const n=norm(x); return a===n || a.replace(/'/g,"")===n.replace(/'/g,""); });
}

/* ---------- Achievements ---------- */
const ACH = [
 {id:"baseline",t:"Baseline set",d:"Complete your first diagnostic.",chk:()=>S.assessed},
 {id:"firstconvo",t:"First conversation",d:"Finish a real conversation and get coached.",chk:()=>S.conversations.length>=1},
 {id:"streak7",t:"7-day streak",d:"Practise seven days in a row.",chk:()=>streak()>=7,prog:()=>[streak(),7]},
 {id:"words25",t:"25 words activated",d:"Reach ACTIVE on 25 words.",chk:()=>activeCount()>=25,prog:()=>[activeCount(),25]},
 {id:"words100",t:"100 words activated",d:"Reach ACTIVE on 100 words.",chk:()=>activeCount()>=100,prog:()=>[activeCount(),100]},
 {id:"speech5",t:"First 5-minute speech",d:"Speak on one topic for 5 minutes.",chk:()=>S.speaking.some(s=>s.sec>=300&&s.words>=200)},
 {id:"nofiller",t:"No-pause challenge",d:"Speak 60s+ in a fluency challenge with no pause longer than 1.5 seconds (measured from audio).",chk:()=>S.speaking.some(s=>s.mode==="fluency"&&s.sec>=60&&s.longPauses===0)},
 {id:"clear80",t:"Clear speaker",d:"Score 80+ pronunciation on a 60-second speaking task.",chk:()=>S.speaking.some(s=>s.sec>=60&&s.pronScore>=80)},
 {id:"tense",t:"Tense master",d:"Five grammar topics at 85%+ with solid evidence.",chk:()=>TOPICS.filter(t=>(tenseMastery(t.id)||0)>=85&&(S.tense[t.id]||{}).t>=8).length>=5,prog:()=>[TOPICS.filter(t=>(tenseMastery(t.id)||0)>=85&&(S.tense[t.id]||{}).t>=8).length,5]},
 {id:"convo10",t:"10 conversations",d:"Complete ten coached conversations.",chk:()=>S.conversations.length>=10,prog:()=>[S.conversations.length,10]},
 {id:"debate",t:"First debate",d:"Hold your ground in a debate.",chk:()=>S.conversations.some(c=>c.mode==="debate")},
 {id:"fixed5",t:"Five mistakes fixed",d:"Drill five recurring mistakes to Fixed.",chk:()=>S.errors.filter(e=>e.status==="Fixed").length>=5,prog:()=>[S.errors.filter(e=>e.status==="Fixed").length,5]},
 {id:"min100",t:"100 speaking minutes",d:"Total time in speaking tasks.",chk:()=>totalSpeakMin()>=100,prog:()=>[totalSpeakMin(),100]},
 {id:"min1000",t:"1000 speaking minutes",d:"Serious volume.",chk:()=>totalSpeakMin()>=1000,prog:()=>[totalSpeakMin(),1000]},
 {id:"b2",t:"B2 speaking",d:"Reach a B2 speaking estimate on a reassessment.",chk:()=>S.levels&&CEFR.indexOf(S.levels.speaking)>=3&&(S.weekly.length+S.monthly.length)>=1}
];
const activeCount = () => Object.values(S.vocab).filter(v=>v.status==="ACTIVE"||v.status==="MASTERED").length;
const totalSpeakMin = () => Math.round(Object.values(S.days).reduce((a,d)=>a+(d.speakSec||0),0)/60);
function checkAch(){
  let got=[];
  for(const a of ACH){ if(!S.ach[a.id] && a.chk()){ S.ach[a.id]=today(); got.push(a.t); } }
  if(got.length){ save(); toast("Achievement unlocked: "+got.join(", ")); }
}
/* ================= DAILY CONTENT ENGINE =================
   Every day Gemini writes fresh material for this learner: new words, prompts, a listening clip,
   a shadowing passage and grammar items. Everything is cached for the day, so it costs 2 requests a day.
   Without a key (or if Google is unavailable) the built-in library is used instead. */
const Daily = { running:false, failed:null, msg:"" };
const dp = () => (S.daily && S.daily[today()]) || null;

function hydrateContent(){
  // generated words live in S.wordBank and join the built-in library
  for(const w of Object.values(S.wordBank||{})) if(!WMAP[w.w]){ WORDS.push(w); WMAP[w.w]=w; }
  // generated clips/passages from recent days join the lists (newest first)
  for(let i=LISTEN.length-1;i>=0;i--) if(LISTEN[i].daily) LISTEN.splice(i,1);
  for(let i=SHADOW.length-1;i>=0;i--) if(SHADOW[i].daily) SHADOW.splice(i,1);
  for(let i=PERSONAS.length-1;i>=0;i--) if(PERSONAS[i].daily) PERSONAS.splice(i,1);
  const tp=dp(); if(tp&&tp.roleplay) PERSONAS.unshift({id:"daily", daily:true, name:tp.roleplay.name, desc:tp.roleplay.desc||"a realistic person", scene:tp.roleplay.scene});
  Object.keys(S.daily||{}).sort().forEach(d=>{ const p=S.daily[d]; if(p.listening) LISTEN.unshift(p.listening); if(p.shadowing) SHADOW.unshift(p.shadowing); });
}
const LVL_LABEL = () => { const l=S.levels?S.levels.overall:"B1"; return {A1:"Beginner",A2:"Beginner",B1:"Intermediate",B2:"Advanced",C1:"Professional",C2:"Native-speed"}[l]||"Intermediate"; };
function profileBrief(){
  const rec = recurringErrors().slice(0,5).map(e=>e.pattern).join("; ");
  const weakW = Object.entries(S.vocab).filter(([w,v])=>v.status==="WEAK ACTIVE").map(([w])=>w).slice(0,8).join(", ");
  return `Learner: ${S.name}, from Maharashtra, India (Marathi/Hindi). CEFR estimate: ${S.levels?`overall ${S.levels.overall}, speaking ${S.levels.speaking}, vocabulary ${S.levels.vocabulary}, weakest ${S.levels.weakest}`:"not assessed yet (assume B1)"}.
Goal: ${S.profile.why||"confident speaking"}. Main priority: ${S.profile.priority||"speaking"}. Interests: ${(S.profile.topics||[]).join(", ")||"technology, career"}. Professional focus: ${S.prefs.professional?"yes":"no"}. Variety: ${S.prefs.accent}.
Recurring mistakes: ${rec||"none yet"}. Words they understand but struggle to use: ${weakW||"none yet"}.`;
}

async function genWords(n){
  const known = [...new Set([...WORDS.map(w=>w.w), ...Object.keys(S.vocab)])].slice(-500);
  const lvl = S.prefs.vocabDiff!=="auto" ? S.prefs.vocabDiff : (S.levels?S.levels.vocabulary:"B1");
  const j = await aiJSON(`You choose daily vocabulary for an English speaking coach app. ${profileBrief()}
Pick exactly ${n} NEW high-value words or phrasal verbs for today, around level ${lvl} (one may be a level above). They must be useful in real spoken conversation and, where relevant, at work; connect at least two to the learner's interests. No rare or literary words. Mix parts of speech.
Do NOT use any of these (already learned): ${known.join(", ")}.
Return ONLY JSON: {"words":[{"w":"lowercase word or phrase","ipa":"/IPA/","say":"simple respelling with stressed syllable in CAPS","pos":"part of speech","lvl":"CEFR level","meaning":"simple one-sentence meaning","hi":"Hindi meaning in Devanagari","mr":"Marathi meaning in Devanagari","ex":["3 natural example sentences, at least one about Indian life or the learner's interests"],"coll":["3-4 common collocations"],"syn":["2-3 synonyms"],"ant":["0-2 opposites"],"mist":"one common mistake Indian learners make with it, and the fix","reg":"formal/casual usage note","convo":[["A","short line"],["B","short reply using the word"]],"workplace":"a speaking task: 'Describe/Explain ... ' that makes them use the word","wrong":["2 sentences that use the word INCORRECTLY (wrong meaning or wrong grammar) for a recognition quiz"]}]}`);
  const out=[];
  for(const x of (j.words||[])){
    if(!x||!x.w||!x.meaning||!Array.isArray(x.ex)||x.ex.length<2) continue;
    const w = String(x.w).toLowerCase().trim(); if(WMAP[w]||out.some(o=>o.w===w)) continue;
    const item = {w, ipa:x.ipa||"", say:x.say||"", pos:x.pos||"", lvl:x.lvl||lvl, meaning:x.meaning, hi:x.hi||"", mr:x.mr||"", ex:x.ex.slice(0,3), coll:(x.coll||[]).slice(0,4), syn:(x.syn||[]).slice(0,3), ant:(x.ant||[]).slice(0,2), mist:x.mist||"", reg:x.reg||"", convo:(Array.isArray(x.convo)?x.convo:[]).filter(c=>Array.isArray(c)&&c.length===2).slice(0,4), workplace:x.workplace||`Use “${w}” to describe something from your week.`, wrong:(x.wrong||[]).slice(0,2), gen:today()};
    out.push(item);
  }
  if(out.length<Math.min(3,n)) throw {code:"bad_words"};
  S.wordBank ||= {}; out.forEach(w=>{ S.wordBank[w.w]=w; WORDS.push(w); WMAP[w.w]=w; });
  return out.map(w=>w.w);
}

async function genPack(){
  const gt = grammarTopicToday(), T=TMAP[gt];
  const interests = (S.profile.topics&&S.profile.topics.length?S.profile.topics:["career","technology","AI"]).slice(0,5);
  const recentTasks = S.speaking.slice(-15).map(s=>s.task).filter(Boolean).join(" | ").slice(0,1500);
  const recentClips = LISTEN.map(l=>l.title).concat(SHADOW.map(s=>s.title)).join(", ");
  const j = await aiJSON(`You write today's practice material for an English speaking & fluency coach app. ${profileBrief()}
Today's grammar focus: ${T.name} (${T.use}).
Make everything fresh, specific and interesting (Indian context welcome: Pune, Mumbai, college, startups, IT jobs, cricket, festivals, food), at the learner's level. Avoid repeating these recent tasks: ${recentTasks||"none"}. Avoid these existing clip titles: ${recentClips}.
Return ONLY JSON:
{"free_prompts":[{"topic":"one of: ${interests.join(", ")}","prompt":"an open speaking question that needs 1-2 minutes to answer"}] (one per topic listed),
 "story_prompt":"Tell me about a time ... (personal story prompt)",
 "debate_motion":"a debatable statement",
 "presentation_topic":"a 2-minute presentation task",
 "fluency_topic":"a short everyday topic for a non-stop speaking challenge",
 "rapid":["8 quick, varied everyday questions answerable in one or two sentences; at least 2 must naturally need ${T.name}"],
 "think":{"1":"describe an object prompt","2":"describe an action prompt","3":"plans prompt","4":"experience prompt","5":"opinion prompt","6":"abstract idea prompt","7":"argument to defend","8":"instant-response question"},
 "grammar":{"items":[{"q":"a sentence with ___ and the base verb in brackets, e.g. 'I ___ (visit) Goa twice.'","a":["all acceptable answers, including contractions"],"why":"short reason"}] (exactly 6, all practising ${T.name}; at least 2 should contrast it with ${TMAP[T.cw]?TMAP[T.cw].name:"a similar tense"}), "speaking":"a personal speaking question that needs ${T.name}"},
 "listening":{"title":"short title","situation":"one line","lines":[["Speaker name","line"]] (6-9 lines, 2 speakers, natural spoken English with contractions; include at least one idiom or phrasal verb),
   "qs":[{"k":"Main idea|Detail|Speaker intention|Tone|Inference|Vocabulary","q":"question","o":["4 options"],"a":index_of_correct}] (exactly 4, different k values)},
 "shadowing":{"title":"short title","type":"Casual conversation|Workplace|Interview|Presentation|Travel|Business|Debate|Movie-style","text":"40-70 words of natural speech split into breath groups with ' | ' and the stressed words wrapped in *asterisks*","tips":["3 short tips on rhythm, linking, stress or intonation for THIS passage"]},
 "translate":{"hi":"a short everyday Hindi sentence in Roman script","mr":"the same in Marathi Roman script","en":"its natural English"},
 "roleplay":{"name":"a person's name and role","desc":"their personality","scene":"the situation in one sentence"}}`);
  const p = {date:today(), gt};
  if(Array.isArray(j.free_prompts)) p.free_prompts = j.free_prompts.filter(x=>x&&x.prompt).slice(0,6);
  ["story_prompt","debate_motion","presentation_topic","fluency_topic"].forEach(k=>{ if(typeof j[k]==="string" && j[k].length>8) p[k]=j[k]; });
  if(Array.isArray(j.rapid)) p.rapid = j.rapid.filter(x=>typeof x==="string").slice(0,10);
  if(j.think && typeof j.think==="object") p.think = j.think;
  if(j.grammar && Array.isArray(j.grammar.items)){ p.grammar = {id:gt, items:j.grammar.items.filter(x=>x&&x.q&&/_{2,}/.test(x.q)&&Array.isArray(x.a)&&x.a.length).slice(0,6).map(x=>[x.q,x.a.map(String),x.why||""]), speaking:j.grammar.speaking||""}; if(!p.grammar.items.length) delete p.grammar; }
  const L=j.listening;
  if(L && Array.isArray(L.lines) && L.lines.length>=4 && Array.isArray(L.qs) && L.qs.length>=3){
    const qs=L.qs.filter(q=>q&&q.q&&Array.isArray(q.o)&&q.o.length>=3&&Number.isInteger(+q.a)&&+q.a<q.o.length).map(q=>({k:q.k||"Detail",q:q.q,o:q.o,a:+q.a}));
    const lines=L.lines.filter(l=>Array.isArray(l)&&l.length===2);
    if(qs.length>=3 && lines.length>=4) p.listening = {id:"dl-"+today(), daily:true, title:"Today · "+(L.title||"New clip"), lvl:LVL_LABEL(), rate:{Beginner:.85,Intermediate:.95,Advanced:1.02,Professional:1.05,"Native-speed":1.12}[LVL_LABEL()]||.95, lines, qs};
  }
  const Sh=j.shadowing;
  if(Sh && typeof Sh.text==="string" && Sh.text.length>30){
    let text=Sh.text.trim(); if(!text.includes("|")) text=text.split(/(?<=[.?!,])\s+/).join(" | ");
    p.shadowing = {id:"ds-"+today(), daily:true, title:"Today · "+(Sh.title||"New passage"), lvl:LVL_LABEL(), type:Sh.type||"Casual conversation", rate:.95, text, tips:(Sh.tips||[]).slice(0,3)};
  }
  if(j.translate && j.translate.en) p.translate=j.translate;
  if(j.roleplay && j.roleplay.name && j.roleplay.scene) p.roleplay=j.roleplay;
  return p;
}

async function ensureDaily(force){
  const t=today();
  if(Daily.running || !GEM.key) return;
  if(!force && Daily.failed===t) return;
  const needWords = !S.dayWords[t] && Object.keys(S.dayWords).length>0;
  const needPack = !dp();
  if(!needWords && !needPack) return;
  Daily.running=true; Daily.msg=""; repaintForDaily();
  try{
    if(needWords){ const n = dueWords().length>8 ? 3 : 5; S.dayWords[t] = await genWords(n); save(); repaintForDaily(); }
    if(needPack){ const p=await genPack(); if(!p.listening && !p.shadowing && !(p.free_prompts&&p.free_prompts.length)) throw {code:"bad_pack"}; S.daily ||= {}; S.daily[t]=p; const ks=Object.keys(S.daily).sort(); ks.slice(0,Math.max(0,ks.length-3)).forEach(k=>delete S.daily[k]); hydrateContent(); if(!D().blocks.length) buildPlan(true); save(); }
  }catch(e){
    Daily.failed=t; Daily.msg = e.code==="rate_limited"?"Google's free limit is reached right now; using the built-in library today.":"Couldn't create today's new content; using the built-in library.";
    if(needWords && !S.dayWords[t]){ const pool=WORDS.filter(x=>!V(x.w).introduced); S.dayWords[t]=pool.slice(0,5).map(x=>x.w); save(); }
  }
  Daily.running=false; repaintForDaily();
}
function repaintForDaily(){
  // only redraw screens that show daily content and don't hold typing in progress
  const a=document.activeElement; const typing = a && /TEXTAREA|INPUT/.test(a.tagName) && a.value;
  if(!typing && !Voice.active && !Voice.busy && (["home","today"].includes(ui.route) || (ui.route==="vocabulary" && (!ui.v||ui.v.tab==="today") && !(ui.v&&ui.v.fb)) || (["shadowing","listening"].includes(ui.route) && !ui.sh && !ui.ls))) render();
}
const dailyChip = () => Daily.running ? `<span class="chip acc"><span class="spinner" style="width:12px;height:12px;border-width:2px"></span> Writing today's content…</span>` : dp() ? `<span class="chip good">Fresh today</span>` : "";

/* Grammar items: today's generated ones first, then the built-in set */
function prItems(id){ const p=dp(); const gen = p&&p.grammar&&p.grammar.id===id ? p.grammar.items.map(([q,a])=>[q,a]) : []; return [...gen, ...TMAP[id].pr]; }

/* Today's quiz: built from today's words, today's grammar and your own mistakes */
function buildTodayQuiz(){
  const ws = todaysWords().map(w=>WMAP[w]).filter(Boolean); const gt=grammarTopicToday(), T=TMAP[gt]; const p=dp();
  if(ws.length<3) return QUIZ_TODAY.map(q=>({...q}));
  const qs=[];
  // grammar: 4 from today's items + 1 from a recurring mistake (or the built-in contrast question)
  shuffle(prItems(gt)).slice(0,4).forEach(([q,a])=>qs.push({k:"Fill the blank",tag:gt,type:"fill",q,a,why:T.name}));
  const rec = recurringErrors().find(e=>e.cat!=="Pronunciation" && e.correct && norm(e.correct)!==norm(e.original));
  if(rec){ const o=shuffle([rec.original, rec.correct]); qs.push({k:"Choose the better sentence",type:"mcq",q:"Which is correct?",o,a:o.indexOf(rec.correct),why:rec.why}); }
  else qs.push({...QUIZ_TODAY[4]});
  // vocabulary: different recall methods per word
  const others = WORDS.filter(x=>!ws.includes(x));
  ws.slice(0,5).forEach((w,i)=>{
    const m=i%4;
    if(m===0){ const o=shuffle([w.w, ...shuffle(others).slice(0,3).map(x=>x.w)]); qs.push({k:"Definition recall",vw:w.w,type:"mcq",q:`Which word means “${w.meaning}”?`,o,a:o.indexOf(w.w),why:w.meaning}); }
    else if(m===1){ const re=new RegExp("\\b("+wordForms(w.w).map(f=>f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\\b","i"); const ex=w.ex.find(e=>re.test(e))||w.ex[0]; const ans=(ex.match(re)||[w.w])[0]; qs.push({k:"Sentence completion",vw:w.w,type:"fill",q:ex.replace(re,"_____"),a:[ans,w.w],why:w.meaning}); }
    else if(m===2 && w.coll.length){ const c=w.coll[0]; const o=shuffle([c, ...shuffle(others.filter(x=>x.coll.length)).slice(0,3).map(x=>x.coll[0])]); qs.push({k:"Collocation",vw:w.w,type:"mcq",q:`Which phrase uses “${w.w}” naturally?`,o,a:o.indexOf(c),why:`Common: ${w.coll.join(", ")}`}); }
    else if(w.syn.length){ qs.push({k:"Synonym recall",vw:w.w,type:"fill",q:`Type today's word that is close in meaning to “${w.syn[0]}” (starts with “${w.w[0]}”).`,a:[w.w],why:w.meaning}); }
    else { const o=shuffle([w.w, ...shuffle(others).slice(0,3).map(x=>x.w)]); qs.push({k:"Definition recall",vw:w.w,type:"mcq",q:`Which word means “${w.meaning}”?`,o,a:o.indexOf(w.w),why:w.meaning}); }
  });
  // production
  qs.push({k:"Grammar production",tag:gt,type:"prod",q:(p&&p.grammar&&p.grammar.speaking)||`Write two sentences about your week using ${T.name}.`,target:T.name+" used correctly",why:""});
  qs.push({k:"Vocabulary production",vw:ws[1].w,type:"prod",q:ws[1].workplace,target:`uses '${ws[1].w}' correctly`,why:""});
  if(p&&p.translate) qs.push({k:"Translate meaning",type:"prod",q:`Say this naturally in English: “${p.translate.hi}” (Hindi) / “${p.translate.mr}” (Marathi)`,target:`natural English, e.g. ${p.translate.en}`,why:""});
  else qs.push({...QUIZ_TODAY[12]});
  return qs;
}
/* ================= SHELL ================= */
const P = {
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 today:'<rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4M8 14l2.5 2.5L16 12"/>',
 speaking:'<rect x="9" y="2.5" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3.5"/>',
 vocabulary:'<path d="M4 19.5V5a2 2 0 0 1 2-2h13v15H6.5A2.5 2.5 0 0 0 4 20.5 2.5 2.5 0 0 0 6.5 23H19"/><path d="M8.5 7.5h6M8.5 11h4"/>',
 grammar:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
 tense:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
 shadowing:'<path d="M3 12h2l2-6 3 12 3-9 2 5 2-2h4"/>',
 listening:'<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2.5" y="14" width="5" height="7" rx="2"/><rect x="16.5" y="14" width="5" height="7" rx="2"/>',
 think:'<path d="M9 18h6M10 21.5h4M12 2.5a6.5 6.5 0 0 0-4 11.6c.7.6 1 1.4 1 2.4h6c0-1 .3-1.8 1-2.4a6.5 6.5 0 0 0-4-11.6z"/>',
 quizzes:'<path d="M9 11.5 11.5 14 20 5.5"/><path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11"/>',
 mistakes:'<path d="M12 3 2 20.5h20z"/><path d="M12 10v4.5M12 17.5v.5"/>',
 progress:'<path d="M3 21h18M6 17V11M11 17V6M16 17v-4M21 17V8"/>',
 achievements:'<circle cx="12" cy="9" r="6"/><path d="m8.5 13.5-1.5 8 5-2.5 5 2.5-1.5-8"/>',
 settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
 more:'<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',
 play:'<path d="M7 4.5v15l12-7.5z"/>', pause:'<path d="M7 4.5h3.5v15H7zM13.5 4.5H17v15h-3.5z"/>', replay:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>', back:'<path d="M19 12H5M11 18l-6-6 6-6"/>', check:'<path d="M5 12.5 10 17.5 19.5 7"/>', x:'<path d="M6 6l12 12M18 6 6 18"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.5v.5"/>', spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
 flame:'<path d="M12 22a7 7 0 0 0 7-7c0-4-3-6.5-4-10-2 2-2.5 4-2.5 5.5C11 9 9.5 7.5 9 6c-2.5 2.5-4 5.5-4 9a7 7 0 0 0 7 7z"/>',
 bolt:'<path d="M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z"/>', chat:'<path d="M21 12a8.5 8.5 0 0 1-12.5 7.5L3 21l1.5-5.5A8.5 8.5 0 1 1 21 12z"/>',
 book:'<path d="M2.5 5.5A2 2 0 0 1 4.5 4H10a2 2 0 0 1 2 2v14a1.5 1.5 0 0 0-1.5-1.5h-8zM21.5 5.5A2 2 0 0 0 19.5 4H14a2 2 0 0 0-2 2v14a1.5 1.5 0 0 1 1.5-1.5h8z"/>',
 mic:'<rect x="9" y="2.5" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3.5"/>', slow:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5h-4"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>', refresh:'<path d="M20 11a8 8 0 0 0-14.9-3M4 13a8 8 0 0 0 14.9 3"/><path d="M4 4v4h4M20 20v-4h-4"/>',
 story:'<path d="M4 6h16M4 12h10M4 18h13"/>', star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'
};
const ic = (n, cls="") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}" aria-hidden="true">${P[n]||""}</svg>`;

const NAV = [
 ["Daily",[["home","Home"],["today","Today"]]],
 ["Practice",[["speaking","Speaking"],["vocabulary","Vocabulary"],["grammar","Grammar"],["tense","Tense Lab"],["shadowing","Shadowing"],["listening","Listening"],["think","Think in English"],["quizzes","Quizzes"]]],
 ["You",[["mistakes","Mistakes"],["progress","Progress"],["achievements","Achievements"],["settings","Settings"]]]
];
const TITLES = Object.fromEntries(NAV.flatMap(g=>g[1]));

const ui = { route:"home", arg:null, v:{}, sp:null, tl:null, sh:null, ls:null, th:null, qz:null, mk:{f:"all"}, gr:{tab:"daily"}, ob:null, dg:null, modal:null, session:false, more:false, pr:{} };

function go(r, a){
  Timer.clear(); TTS.stop(); Voice.cancel(); Voice.reset();
  ui.route=r; ui.arg=a??null; ui.more=false;
  // reset module sub-states so a nav click lands on the module's start
  if(r==="speaking") ui.sp = a ? startSpeakMode(a) : null;
  if(r==="tense") ui.tl = a ? {id:a, step:0, ans:{}} : null;
  if(r==="vocabulary") ui.v = {tab: a||ui.v.tab||"today", i:ui.v.i||0};
  if(r==="shadowing") ui.sh = null;
  if(r==="listening") ui.ls = null;
  if(r==="think") ui.th = null;
  if(r==="quizzes") ui.qz = a ? startQuiz(a) : null;
  if(r==="today" && a==="review") ui.modal = "review";
  render(); window.scrollTo({top:0});
}
function render(){
  const root=$("#root");
  if(!S.onboarded){ root.innerHTML = ""; renderLayer(); return; }
  const r=ui.route; const view = VIEWS[r]||VIEWS.home;
  const badges = { vocabulary: dueWords().length||0, mistakes: recurringErrors().length||0 };
  root.innerHTML = `<div class="app">
   <aside class="side" aria-label="Main navigation">
    <div class="brand"><div class="brand-mark">EO</div><div><b>ENGLISH OS</b><small>Speaking &amp; fluency coach</small></div></div>
    <nav class="nav">${NAV.map(([g,items])=>`<div class="nav-group">${g}</div>`+items.map(([id,l])=>`<button data-a="nav" data-v="${id}" class="${r===id?"on":""}">${ic(id)}<span>${l}</span>${badges[id]?`<span class="badge">${badges[id]}</span>`:""}</button>`).join("")).join("")}</nav>
    <div class="side-foot" id="statusbox">${statusHTML()}</div>
   </aside>
   <div style="min-width:0">
    <header class="topbar"><div class="brand"><div class="brand-mark">EO</div><div><b>ENGLISH OS</b></div></div><div class="row" style="gap:6px"><span class="chip warm">${ic("flame")}${streak()}</span><span class="chip acc">${S.xp} XP</span></div></header>
    <main class="main"><div class="wrap fade-in" id="view">${ui.session?sessionBarHTML():""}${view()}</div></main>
   </div>
  </div>
  <nav class="bottom" aria-label="Quick navigation">${[["home","Home"],["today","Today"],["speaking","Speak"],["vocabulary","Words"],["more","More"]].map(([id,l])=>`<button data-a="${id==="more"?"more":"nav"}" data-v="${id}" class="${(r===id||(id==="more"&&!["home","today","speaking","vocabulary"].includes(r)))?"on":""}">${ic(id)}<span>${l}</span></button>`).join("")}</nav>`;
  renderLayer();
  if(VIEWS[r] && VIEWS[r].after) VIEWS[r].after();
  const hook = AFTER[r]; hook && hook();
}
const AFTER = {};
function renderLayer(){
  const L=$("#layer"); let h="";
  if(!S.onboarded) h = onboardingHTML();
  else if(ui.dg) h = diagHTML();
  else if(ui.more) h = `<div class="overlay" data-a="closeMore"><div class="modal" data-stop="1"><div class="row between"><h3>All sections</h3><button class="btn ghost sm" data-a="closeMore">${ic("x")}</button></div><div class="sheet-list">${NAV.flatMap(g=>g[1]).map(([id,l])=>`<button data-a="nav" data-v="${id}">${ic(id)}${l}</button>`).join("")}</div></div></div>`;
  if(ui.modal && S.onboarded && !ui.dg) h += modalHTML();
  L.innerHTML = h;
  if(ui.dg && DG_AFTER) DG_AFTER();
}
function statusHTML(){
  const ai = AI.state==="on"?`<span><i class="status-dot on"></i>AI coach on (Gemini, free)</span>`: AI.state==="error"?`<span><i class="status-dot off"></i>Gemini key not working</span>`:`<span><i class="status-dot off"></i>Add your free AI key</span>`;
  const sp = !Mic.supported?`<span><i class="status-dot off"></i>Microphone not available here</span>`:Voice.blocked?`<span><i class="status-dot off"></i>Microphone blocked</span>`:`<span><i class="status-dot on"></i>Microphone ready</span>`;
  const st = `<span><i class="status-dot on"></i>Saved in this browser</span>`;
  const lv=levelOf(S.xp);
  return `<div class="row between"><span class="chip warm">${ic("flame")} ${streak()} day streak</span><span class="chip">Lv ${lv.l}</span></div><div class="bar" title="${lv.toNext} XP to next level"><i style="width:${Math.round(lv.pct*100)}%"></i></div>${ai}${sp}${st}`;
}
function paintStatus(){ const b=$("#statusbox"); if(b) b.innerHTML=statusHTML(); }
let toastT;
function toast(msg){ let t=$(".toast"); if(!t){ t=document.createElement("div"); t.className="toast"; t.setAttribute("role","status"); document.body.appendChild(t);} t.textContent=msg; clearTimeout(toastT); toastT=setTimeout(()=>t.remove(),3600); }

/* ---------- guided session ---------- */
function sessionBarHTML(){
  const p=buildPlan(); const done=D().blocks; const nb=nextBlock();
  return `<div class="session-bar" id="sessbar"><b>Today's session</b><div class="steps">${p.blocks.map(b=>`<i class="${done.includes(b.k)?"d":(nb&&nb.k===b.k?"c":"")}"></i>`).join("")}</div>${nb?`<button class="btn sm" data-a="sessNext">Next: ${esc(nb.t)} ${ic("arrow")}</button>`:`<button class="btn sm" data-a="finishDay">Finish day</button>`}<button class="btn sm ghost" style="color:inherit" data-a="sessEnd" aria-label="Exit session">${ic("x")}</button></div>`;
}
function paintSession(){ const b=$("#sessbar"); if(b) b.outerHTML = sessionBarHTML(); }

/* ---------- event delegation ---------- */
const A = {};
const NO_WAIT = ["mic","chatVoice","shRec","wdRec","nav","more","closeMore","closeModal","spMenu","tlBack","shBack","lsBack","thBack","qzBack","dgExit","sessEnd","say","saySlow","hideVNote","dictOn","chatSay","shPlay","shReplay","shRate","shChunk"];
document.addEventListener("click", e=>{
  const stop = e.target.closest("[data-stop]");
  const t = e.target.closest("[data-a]");
  if(!t) return;
  if(stop && !stop.contains(t)) return;
  if(t.classList.contains("overlay") && e.target!==t) return;
  const name=t.dataset.a, fn = A[name]; if(!fn) return; e.preventDefault();
  if((Voice.active||Voice.pending) && !NO_WAIT.includes(name)){ Voice.finish().then(()=>fn(t.dataset.v, t, e)); return; }
  fn(t.dataset.v, t, e);
});
document.addEventListener("keydown", e=>{
  if(e.key==="Escape"){ if(ui.modal){ ui.modal=null; renderLayer(); } else if(ui.more){ ui.more=false; renderLayer(); } }
  if(e.key==="Enter" && !e.shiftKey && e.target.dataset && e.target.dataset.enter){ e.preventDefault(); const fn=A[e.target.dataset.enter]; if(!fn) return; const v=e.target.dataset.v, el=e.target; if(Voice.active||Voice.pending) Voice.finish().then(()=>fn(v,el)); else fn(v,el); }
});
document.addEventListener("input", e=>{
  const el=e.target; if(el.dataset && el.dataset.track && !el.dataset.firstkey){ el.dataset.firstkey=String(Date.now()); const fk=TRACK[el.dataset.track]; fk&&fk(el); }
  if(el.dataset && el.dataset.wc){ const c=document.getElementById(el.dataset.wc); if(c) c.textContent = words(el.value).length+" words"; }
});
const TRACK = {};
A.nav = v => go(v);
A.more = () => { ui.more=true; renderLayer(); };
A.closeMore = () => { ui.more=false; renderLayer(); };
A.closeModal = () => { ui.modal=null; renderLayer(); };
A.mic = (v) => Voice.toggle(v);
A.sessStart = () => { ui.session=true; buildPlan(); const nb=nextBlock(); if(nb) go(nb.r, nb.a); else { go("today"); } };
A.sessNext = () => { const nb=nextBlock(); if(nb){ if(nb.k==="wrap"){ completeBlock("wrap"); ui.modal="review"; go("today"); ui.modal="review"; renderLayer(); } else go(nb.r, nb.a); } };
A.sessEnd = () => { ui.session=false; render(); };
A.finishDay = () => { completeBlock("wrap"); ui.session=false; ui.modal="review"; go("today"); ui.modal="review"; renderLayer(); };

const pageHead = (title, sub, right="") => `<div class="page-head"><div><div class="eyebrow">${esc(TITLES[ui.route]||"")}</div><h1>${title}</h1>${sub?`<p class="sub">${sub}</p>`:""}</div>${right?`<div class="row">${right}</div>`:""}</div>`;
const micBtn = (target, label="Speak") => `<button class="btn sm ${Voice.active&&Voice.target===target?"mic-on":""}" data-a="mic" data-v="${target}" data-label="${label}" title="${Voice.possible?"Speak: tap again to stop. Your recording is transcribed and checked for pronunciation":"Microphone not available"}" ${Voice.possible&&!Voice.busy?"":"disabled"}>${ic("mic")}<span>${Voice.active&&Voice.target===target?"Stop":label}</span></button>`;
const inputMode = () => (Voice.used || S.prefs.dictation) ? "voice" : "typed";
const inputNote = () => {
  if(Voice.possible) return `<p class="muted" style="font-size:13px;margin:0">Tap <b>Speak</b>, talk, then tap <b>Stop</b>. Your words appear in the box, and your pronunciation is checked.</p>`;
  if(S.prefs.hideVoiceNote && GEM.key) return "";
  const why = !GEM.key ? `Speaking needs your free Gemini key: it turns your recording into text and checks your pronunciation. <button class="linkbtn" data-a="nav" data-v="settings">Add it in Settings</button> (2 minutes, no card).`
    : !Mic.supported ? "This browser can't record audio on this page. Open the app's https link in Chrome or Safari."
    : "Microphone permission was denied. Tap the lock icon in the address bar → Microphone → Allow, then reload.";
  return `<div class="note warn" id="vnote">${ic("mic")}<span>${why}</span>${GEM.key?`<button class="btn sm ghost" style="margin-left:auto" data-a="hideVNote">Got it</button>`:""}</div>`;
};
A.dictOn = () => { S.prefs.dictation=true; save(); toast("Dictation mode on: answers are analysed as spoken transcripts."); render(); };
A.hideVNote = () => { S.prefs.hideVoiceNote=true; save(); const n=$("#vnote"); if(n) n.remove(); };
const emptyHTML = (icon, title, body, cta="") => `<div class="empty">${ic(icon)}<h3>${title}</h3><p style="max-width:44ch">${body}</p>${cta}</div>`;
const statusChip = s => { const c={UNKNOWN:"",RECOGNIZED:"line",UNDERSTOOD:"acc","WEAK ACTIVE":"warn",ACTIVE:"good",MASTERED:"warm"}[s]||""; return `<span class="chip ${c}">${s}</span>`; };
const pctBar = (p, cls="") => `<div class="bar ${cls}"><i style="width:${clamp(p||0,0,100)}%"></i></div>`;
const ring = (frac, label, sub, route, color="var(--accent)") => { const r=32, c=2*Math.PI*r, f=clamp(frac,0,1); return `<button class="ring-cell" data-a="nav" data-v="${route}"><div class="ring"><svg viewBox="0 0 76 76"><circle cx="38" cy="38" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="7"/><circle cx="38" cy="38" r="${r}" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-f)}" style="transition:stroke-dashoffset .8s"/></svg><div class="val">${Math.round(f*100)}%</div></div><small>${label}</small><em>${sub}</em></button>`; };
/* Word drill modal: hear a word, say it, see each sound */
ui.wd = null;
A.wordDrill = w => { const clean=String(w).replace(/[^A-Za-z'’ -]/g,"").trim(); if(!clean) return; ui.wd={w:clean, res:null, busy:false, err:null}; ui.modal="word"; renderLayer(); };
function wordDrillHTML(){
  const d=ui.wd, r=d.res;
  return `<div class="overlay" data-a="closeModal"><div class="modal" data-stop="1">
   <div class="row between"><div><div class="eyebrow">Pronunciation drill</div><h2 style="font-size:32px">${esc(d.w)}</h2></div><button class="btn ghost sm" data-a="closeModal" aria-label="Close">${ic("x")}</button></div>
   <div class="row"><button class="btn" data-a="say" data-v="${esc(d.w)}">${ic("play")} Hear it</button><button class="btn" data-a="saySlow" data-v="${esc(d.w)}">${ic("slow")} Slowly</button>
    ${Speech.ok?`<button class="btn primary" data-a="wdRec" ${d.busy?"disabled":""}>${d.busy==="rec"?'<span class="spinner"></span> Listening… say it now':d.busy?'<span class="spinner"></span> Checking':`${ic("mic")} Say it`}</button>`:""}</div>
   ${!Speech.ok?`<div class="note">${ic("info")}<span>${GEM.key?"The microphone isn't available in this browser.":"Add your free Gemini key in Settings to get feedback on how you say it."}</span></div>`:""}
   ${d.err?`<div class="note warn">${ic("info")}<span>${esc(d.err)}</span></div>`:""}
   ${r?`<div class="stack"><div class="row between"><span class="lbl">Heard: “${esc(r.heard||"")}”</span><span class="chip ${scoreCls(r.score)}">${Math.round(r.score||0)}/100</span></div>
     <div class="ph-row">${(r.sounds||[]).map(p=>`<div class="ph ${p.ok?"good":"bad"}"><b class="mono">${esc(p.ipa)}</b>${!p.ok&&p.heard_as?`<small>heard /${esc(p.heard_as)}/</small>`:`<span>${p.ok?"✓":"✗"}</span>`}</div>`).join("")}</div>
     ${r.stress_note?`<p style="font-size:14px"><b>Stress:</b> ${esc(r.stress_note)} ${r.stress_ok===false?`<span class="chip warn">check stress</span>`:""}</p>`:""}
     ${r.tip?`<div class="note acc">${ic("info")}<span>${esc(r.tip)}</span></div>`:""}
     <p class="muted" style="font-size:12.5px">Gemini's judgement of your recording. Say it 3 times: slowly, normal, then inside a sentence.</p></div>`:""}
  </div></div>`;
}
A.saySlow = w => TTS.speak([w],{rate:.7});
A.wdRec = async () => {
  const d=ui.wd; if(d.busy) return; d.busy="rec"; d.err=null; renderLayer();
  setTimeout(()=>{ if(d.busy==="rec"){ d.busy="check"; renderLayer(); } }, 2500);
  try{ const r = await assessOnce(d.w); if(r.no_speech) throw {code:"no_speech"}; d.res=r; S.pron.sessions.push({d:today(),src:"word",pron:r.score}); addXP(2); save(); }
  catch(e){ d.err = e.code==="no_speech" ? "I didn't catch anything. Tap Say it and speak right away." : e.code==="rate_limited" ? "Google's free limit was reached. Wait a minute and try again." : e.name==="NotAllowedError" ? "Microphone permission was denied." : "Couldn't check that: "+String(e.message||e.code||e).slice(0,100); }
  d.busy=false; renderLayer();
};
/* ================= HOME / TODAY / ONBOARDING / DIAGNOSTIC ================= */
const VIEWS = {};
function greeting(){ const h=new Date().getHours(); return h<5?"Good evening":h<12?"Good morning":h<17?"Good afternoon":"Good evening"; }

function keySetupHTML(compact){
  return `<section class="card stack" id="keysetup" style="border-color:var(--accent-line)">
   <div class="row between"><h3>${compact?"Gemini key":"Turn on the AI coach and microphone (free)"}</h3><span class="chip good">Free · no card</span></div>
   ${compact?"":`<p class="muted">English OS uses Google's free Gemini tier to understand your speech, check pronunciation and play conversation partners. It runs from your own free key, so nobody pays anything.</p>`}
   <ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:4px">
    <li>Open <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a> and sign in with your Google account.</li>
    <li>Tap <b>Create API key</b> and copy it (it starts with <span class="mono">AIza</span>).</li>
    <li>Paste it here.</li></ol>
   <div class="row" style="flex-wrap:nowrap"><input type="text" id="keyin" placeholder="AIza…" autocomplete="off" spellcheck="false" value="${esc(GEM.key)}" data-enter="saveKey"><button class="btn primary" data-a="saveKey">${ui.keyBusy?'<span class="spinner"></span>':"Save"}</button></div>
   <p class="muted" style="font-size:12.5px">The key stays in this browser only. On the free tier, Google may use what you send to improve its products, so don't share private details in practice sessions.</p>
  </section>`;
}
A.saveKey = async () => { const v=(($("#keyin")||{}).value||"").trim(); if(!v){ await setKey(""); return; } ui.keyBusy=true; render(); await setKey(v); ui.keyBusy=false; render(); };
VIEWS.home = () => {
  const d=D(), plan=buildPlan(), f=focusToday(), lv=S.levels;
  const vt = todaysWords(); const vDone = vt.filter(w=>STAT_IDX(V(w).status)>=3).length;
  const spMin = Math.round(d.speakSec/60), spGoal = Math.max(5, (plan.blocks.find(b=>b.k==="speaking")||{w:10}).w);
  const done = d.blocks.length, total=plan.blocks.length;
  const levelBlock = lv ? `<div class="level-big">${lv.overall}${lv.target?`<span class="arrow">→</span>${lv.target}`:""}</div><p class="muted">Estimated overall. Weakest: <b style="color:var(--ink)">${esc(lv.weakest)}</b> (${lv[lv.weakestKey]}). ${lv.provisional?"Provisional until your first weekly check.":""}</p>`
    : `<div class="level-big" style="font-size:30px">Assessment required</div><p class="muted">Your level is never guessed. A 12-minute diagnostic measures speaking, grammar, vocabulary, listening and response speed.</p><button class="btn dark" data-a="startDiag">Take the diagnostic ${ic("arrow")}</button>`;
  return `
  <div class="hero">
    <section class="hero-main">
      <svg class="hero-wave" width="260" height="260" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".6">${P.shadowing}</svg>
      <div><div class="eyebrow">${new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long"})}</div><h1 style="margin-top:6px">${greeting()}, ${esc(S.name)}.</h1></div>
      <div><div class="row" style="margin-bottom:10px;gap:8px"><span class="eyebrow">Today's focus</span>${dailyChip()}</div><div class="focus-list">${f.map((x,i)=>`<div class="focus-item"><i>${i+1}</i><span>${esc(x.t)} <small>· ${esc(x.s)}</small></span></div>`).join("")}</div></div>
      <div class="row"><button class="btn primary lg" data-a="sessStart">${done?"CONTINUE TODAY'S SESSION":"START TODAY'S SESSION"} ${ic("arrow")}</button><span style="color:color-mix(in srgb,var(--bg) 65%,transparent);font-size:13px">${plan.total} min · ${done}/${total} steps done</span></div>
    </section>
    <section class="card level-card">
      <div class="row between"><span class="eyebrow">Current level</span>${lv?`<button class="btn sm ghost" data-a="nav" data-v="progress">Details</button>`:""}</div>
      ${levelBlock}
      <div class="stats-strip">
        <div class="stat"><b>${streak()}</b><span>day streak</span></div>
        <div class="stat"><b>${S.xp}</b><span>XP · Lv ${levelOf(S.xp).l}</span></div>
        <div class="stat"><b>${activeCount()}</b><span>words active</span></div>
      </div>
    </section>
  </div>
  <section class="card">
    <div class="row between" style="margin-bottom:8px"><h3>Today's progress</h3><span class="muted" style="font-size:13px">Daily goal ${S.prefs.target} min</span></div>
    <div class="rings">
      ${ring(d.speakSec/60/spGoal,"Speaking",`${spMin}/${spGoal} min`,"speaking")}
      ${ring(vt.length?vDone/vt.length:0,"Vocabulary",vt.length?`${vDone}/${vt.length} used`:"choosing…","vocabulary","var(--warm)")}
      ${ring(d.gramT?d.gramC/Math.max(10,d.gramT):0,"Grammar",`${d.gramC}/${Math.max(10,d.gramT)}`,"tense")}
      ${ring(d.listenSec/360,"Listening",`${Math.round(d.listenSec/60)}/6 min`,"listening","var(--good)")}
      ${ring(d.shadowSec/300,"Shadowing",`${Math.round(d.shadowSec/60)}/5 min`,"shadowing","var(--ink-2)")}
    </div>
  </section>
  <div class="cta-row">
    <button class="cta" data-a="nav" data-v="speaking"><div class="ic">${ic("speaking")}</div><b>Speak</b><span>Conversation, free talk, debate</span></button>
    <button class="cta" data-a="nav" data-v="vocabulary"><div class="ic">${ic("vocabulary")}</div><b>Learn</b><span>${vt.length?`Today's ${vt.length} new words`:"Today's new words"}</span></button>
    <button class="cta" data-a="goQuiz" data-v="today"><div class="ic">${ic("quizzes")}</div><b>Practice</b><span>13-question mixed quiz</span></button>
    <button class="cta" data-a="goVocab" data-v="review"><div class="ic">${ic("replay")}</div><b>Review</b><span>${dueWords().length} words due · ${recurringErrors().length} recurring mistakes</span></button>
  </div>
  ${!GEM.key?keySetupHTML():""}`;
};
A.goQuiz = v => go("quizzes", v);
A.goVocab = v => go("vocabulary", v);

VIEWS.today = () => {
  const p=buildPlan(), d=D();
  return `${pageHead(`Today · ${p.total} minutes`, "Built from your recent mistakes, weak tenses, due words and weakest skill. It changes as you do.", `${dailyChip()}<button class="btn sm" data-a="regenPlan">${ic("refresh")} Rebuild plan</button>`)}
  <div class="stack s6">${p.blocks.map((b,i)=>{ const dn=d.blocks.includes(b.k); return `<div class="plan-item ${dn?"done":""}"><span class="num">${i+1}</span><div class="ic ${dn?"done":"acc"}">${dn?ic("check"):ic(b.r==="today"?"star":b.r)}</div><div class="grow" style="flex:1;min-width:0"><div class="t" style="font-weight:650">${esc(b.t)}</div><div class="muted" style="font-size:13px">${esc(b.d)}</div></div><span class="min">${b.w} min</span><button class="btn sm ${dn?"ghost":""}" data-a="planGo" data-v="${i}">${dn?"Again":"Start"}</button></div>`; }).join("")}</div>
  <div class="row"><button class="btn primary lg" data-a="sessStart">${d.blocks.length?"Continue guided session":"Start guided session"} ${ic("arrow")}</button><button class="btn" data-a="openReview">See daily review</button></div>
  <div class="note">${ic("info")}<span>Why this plan: ${planWhy()}</span></div>
  ${dailyHTML()}`;
};
function dailyHTML(){
  const p=dp();
  if(!GEM.key) return `<div class="note">${ic("info")}<span>Add your free Gemini key in Settings and every day gets new words, prompts, a listening clip, a shadowing passage and grammar practice written for you. Until then the built-in library is used.</span></div>`;
  if(Daily.running) return `<div class="note acc"><span class="spinner"></span><span>Writing today's words, prompts, listening clip and shadowing passage for you…</span></div>`;
  if(!p) return `<div class="note warn">${ic("info")}<span>${esc(Daily.msg||"Today's new content isn't ready.")}</span><button class="btn sm" style="margin-left:auto" data-a="dailyRetry">Try again</button></div>`;
  const ws=todaysWords();
  return `<section class="card stack"><div class="row between"><h3>New for you today</h3><span class="chip good">Written for you today</span></div>
   <dl class="kv">
    <dt>Words</dt><dd>${ws.map(w=>`<b>${esc(w)}</b>`).join(", ")||"—"}</dd>
    ${p.free_prompts&&p.free_prompts[0]?`<dt>Speaking</dt><dd>${esc(p.free_prompts[0].prompt)}</dd>`:""}
    ${p.grammar?`<dt>Grammar</dt><dd>${p.grammar.items.length} new ${esc(TMAP[p.grammar.id].name)} items</dd>`:""}
    ${p.listening?`<dt>Listening</dt><dd><button class="linkbtn" data-a="goListen" data-v="${p.listening.id}">${esc(p.listening.title.replace("Today · ",""))}</button></dd>`:""}
    ${p.shadowing?`<dt>Shadowing</dt><dd><button class="linkbtn" data-a="goShadow" data-v="${p.shadowing.id}">${esc(p.shadowing.title.replace("Today · ",""))}</button></dd>`:""}
    ${p.debate_motion?`<dt>Debate</dt><dd>${esc(p.debate_motion)}</dd>`:""}
    ${p.roleplay?`<dt>Role-play</dt><dd>${esc(p.roleplay.name)}: ${esc(p.roleplay.scene)}</dd>`:""}
   </dl></section>`;
}
A.dailyRetry = () => { Daily.failed=null; ensureDaily(true); render(); };
A.goListen = id => { go("listening"); A.lsOpen(id); };
A.goShadow = id => { go("shadowing"); A.shOpen(id); };
function planWhy(){
  const r=[]; const rec=recurringErrors(); const w=weakTenses(); const due=dueWords().length; const ws=weakestSkill();
  if(rec.length) r.push(`${rec.length} recurring mistake${rec.length>1?"s":""} come first`);
  if(due) r.push(`${due} word${due>1?"s are":" is"} due for review`);
  if(w.length) r.push(`${TMAP[w[0].id].name} is your weakest grammar area (${w[0].m}%)`);
  if(ws) r.push(`${ws} is your lowest skill score`);
  if(!r.length) r.push("no history yet, so it starts with the standard first-day mix and speaking is always included");
  return r.join("; ")+".";
}
A.regenPlan = () => { buildPlan(true); render(); toast("Plan rebuilt from your latest data."); };
A.planGo = i => { const b=buildPlan().blocks[+i]; if(b.k==="wrap"){ completeBlock("wrap"); ui.modal="review"; renderLayer(); return; } go(b.r,b.a); };
A.openReview = () => { ui.modal="review"; renderLayer(); };

function modalHTML(){
  if(ui.modal==="review") return reviewModal();
  if(ui.modal==="word") return wordDrillHTML();
  if(typeof ui.modal==="string" && ui.modal.startsWith("<")) return ui.modal;
  return "";
}
function reviewModal(){
  const d=D(), t=today();
  const errs = S.errors.filter(e=>e.last===t).sort((a,b)=>b.freq-a.freq).slice(0,3);
  const vt = todaysWords();
  const sp = S.speaking.filter(s=>s.d===t);
  const wins=[];
  if(d.speakSec>0) wins.push(`${Math.round(d.speakSec/60)} min of speaking practice${sp.length?` across ${sp.length} task${sp.length>1?"s":""}`:""}`);
  const act=vt.filter(w=>STAT_IDX(V(w).status)>=3); if(act.length) wins.push(`Used ${act.map(w=>`"${w}"`).join(", ")} in your own sentences`);
  if(d.gramT) wins.push(`Grammar: ${d.gramC}/${d.gramT} correct`);
  if(d.listenSec) wins.push(`${Math.round(d.listenSec/60)} min of listening`);
  const nextDue = Object.values(S.vocab).filter(v=>v.due&&v.due>t).map(v=>v.due).sort()[0];
  const nb = nextBlock();
  return `<div class="overlay" data-a="closeModal"><div class="modal" data-stop="1">
    <div class="row between"><div><div class="eyebrow">Daily review · ${new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short"})}</div><h2>How today went</h2></div><button class="btn ghost sm" data-a="closeModal" aria-label="Close">${ic("x")}</button></div>
    <div><h4 style="margin-bottom:6px">Today's wins</h4>${wins.length?`<ul style="margin:0;padding-left:18px">${wins.map(w=>`<li>${esc(w)}</li>`).join("")}</ul>`:`<p class="muted">Nothing logged yet today. Start with one speaking task; it's the highest-value step.</p>`}</div>
    <div><h4 style="margin-bottom:6px">Top mistakes</h4>${errs.length?errs.map(e=>`<div style="font-size:14px;margin-bottom:6px"><span class="fix-o" style="color:var(--bad)">${esc(e.original)}</span> → <span style="color:var(--good);font-weight:600">${esc(e.correct)}</span></div>`).join(""):`<p class="muted">No mistakes recorded today.</p>`}</div>
    <dl class="kv">
      <dt>Vocabulary</dt><dd>${vt.map(w=>`${esc(w)} ${statusChip(V(w).status)}`).join(" ")}</dd>
      <dt>Grammar</dt><dd>${esc(TMAP[grammarTopicToday()].name)} · ${tenseMastery(grammarTopicToday())??"not tested"}${tenseMastery(grammarTopicToday())!=null?"%":""}</dd>
      <dt>Speaking</dt><dd>${sp.length?sp.map(s=>esc(s.modeName)).join(", "):"Not done yet"}</dd>
      <dt>Next review</dt><dd>${dueWords().length?`${dueWords().length} words due now`:nextDue?new Date(nextDue).toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"}):"Nothing scheduled"}</dd>
      <dt>Next session</dt><dd>${nb&&nb.k!=="wrap"?`Finish: ${esc(nb.t)}`:"Tomorrow: your plan will adapt to today's mistakes."}</dd>
    </dl>
    <button class="btn primary" data-a="closeModal">Done</button>
  </div></div>`;
}

/* ---------- onboarding ---------- */
const OB_Q = [
 {k:"why",q:"Why do you want to improve your English?",o:["Job interviews","Career growth at work","Higher studies abroad","Confidence in daily conversations","Moving or travelling abroad"]},
 {k:"minutes",q:"How much time can you practise most days?",o:[["15","15 min"],["30","30 min"],["45","45 min"],["60","60 min"]]},
 {k:"priority",q:"What's your main priority?",o:["Speaking confidently","Vocabulary that I can actually use","Grammar accuracy","Understanding fast speech","Professional communication"]},
 {k:"confidence",q:"How confident do you feel speaking English right now?",o:[["1","1 · I avoid it"],["2","2 · Only when I must"],["3","3 · Okay with friends"],["4","4 · Mostly comfortable"],["5","5 · Confident, want polish"]]},
 {k:"topics",multi:true,q:"Pick topics you enjoy talking about.",o:TOPIC_LIST}
];
function onboardingHTML(){
  const o = ui.ob ||= {step:-1, a:{topics:[...S.profile.topics]}};
  if(o.step<0) return `<div class="full"><div class="inner" style="padding-top:6vh">
    <div class="brand"><div class="brand-mark">EO</div><div><b>ENGLISH OS</b><small>Your Personal English Speaking &amp; Fluency Coach</small></div></div>
    <h1 style="font-size:clamp(30px,5vw,44px)">Hi ${esc(S.name)}. Let's get you speaking English comfortably, not just knowing it.</h1>
    <p class="muted" style="font-size:16px;max-width:56ch">Five quick questions, then a short diagnostic so every lesson is built on evidence about you. Your level is never guessed.</p>
    <div class="field" style="max-width:320px"><label for="obname">What should I call you?</label><input id="obname" type="text" value="${esc(S.name)}"></div>
    <div class="row"><button class="btn primary lg" data-a="obNext">Get started ${ic("arrow")}</button></div>
    <div class="grid g3" style="margin-top:10px">${[["speaking","Speaking first","Every day includes speaking, with honest feedback."],["vocabulary","Active vocabulary","Words count as learned only when you use them."],["mistakes","Mistakes remembered","Your recurring errors come back until they're fixed."]].map(([i,t,d])=>`<div class="card tint"><div class="ic acc" style="margin-bottom:10px">${ic(i)}</div><h4>${t}</h4><p class="muted" style="font-size:13.5px">${d}</p></div>`).join("")}</div>
  </div></div>`;
  const q = OB_Q[o.step];
  const opts = q.o.map(x=>Array.isArray(x)?x:[x,x]);
  return `<div class="full"><div class="inner" style="padding-top:5vh">
    <div class="ob-progress">${OB_Q.map((_,i)=>`<i class="${i<=o.step?"on":""}"></i>`).join("")}</div>
    <div class="eyebrow">Question ${o.step+1} of ${OB_Q.length}</div>
    <h2 style="font-size:28px">${esc(q.q)}</h2>
    ${q.multi?`<div class="pillset">${opts.map(([v,l])=>`<button class="pill ${o.a.topics.includes(v)?"on":""}" data-a="obToggle" data-v="${v}">${esc(l)}</button>`).join("")}</div>`
     :`<div class="opt-list">${opts.map(([v,l],i)=>`<button class="opt ${String(o.a[q.k])===v?"sel":""}" data-a="obPick" data-v="${esc(v)}"><span class="k">${String.fromCharCode(65+i)}</span><span>${esc(l)}</span></button>`).join("")}</div>`}
    <div class="row between"><button class="btn ghost" data-a="obBack">${ic("back")} Back</button>${q.multi?`<button class="btn primary lg" data-a="obFinish" ${o.a.topics.length?"":"disabled"}>Start diagnostic ${ic("arrow")}</button>`:""}</div>
  </div></div>`;
}
A.obNext = () => { const n=$("#obname"); if(n&&n.value.trim()) S.name=n.value.trim().slice(0,30); ui.ob.step=0; renderLayer(); };
A.obBack = () => { ui.ob.step--; renderLayer(); };
A.obPick = v => { const q=OB_Q[ui.ob.step]; ui.ob.a[q.k]=v; setTimeout(()=>{ ui.ob.step++; renderLayer(); }, 160); renderLayer(); };
A.obToggle = v => { const t=ui.ob.a.topics; const i=t.indexOf(v); i>=0?t.splice(i,1):t.push(v); renderLayer(); };
A.obFinish = () => {
  const a=ui.ob.a;
  S.profile={why:a.why||"",minutes:+a.minutes||45,priority:a.priority||"",confidence:+a.confidence||3,topics:a.topics};
  S.prefs.target = +a.minutes||45; S.onboarded=true; save();
  ui.ob=null; startDiag(); render();
};

/* ---------- diagnostic ---------- */
let DG_AFTER=null;
function startDiag(kind="initial"){ ui.dg={kind, step:0, gi:0, g:[], vi:0, vo:[], ls:{played:false,ans:{}}, spd:[], si:0, sp:[], conv:[], convStep:0, busy:false}; }
A.startDiag = () => { startDiag(); render(); };
const DG_STEPS = ["intro","grammar","vocab","listen","speed","speak","convo","result"];
function diagHTML(){
  const g=ui.dg; const st=DG_STEPS[g.step]; DG_AFTER=null;
  const top = `<div class="row between"><div class="eyebrow">${g.kind==="initial"?"Diagnostic":g.kind==="weekly"?"Weekly check":"Monthly benchmark"} · step ${Math.max(1,g.step)} of ${DG_STEPS.length-2}</div>${st!=="result"?`<button class="btn ghost sm" data-a="dgExit">Save &amp; exit</button>`:""}</div><div class="ob-progress">${DG_STEPS.slice(1,-1).map((_,i)=>`<i class="${i<g.step?"on":""}"></i>`).join("")}</div>`;
  let body="";
  if(st==="intro") body = `<h1>Let's measure where you are.</h1><p class="muted" style="font-size:16px">About 12 minutes, in six short parts: grammar and tenses, vocabulary, listening, response speed, three speaking tasks, and a short conversation.</p>
    <div class="note">${ic("info")}<span>${Speech.ok?"Speak your answers: tap Speak, allow the microphone, and tap Stop when you finish. Your recording is checked for pronunciation, and your speaking rate and pauses are measured.":!GEM.key?"Add your free Gemini key in Settings first so you can speak your answers; until then they're typed.":"The microphone isn't available here, so speaking tasks are typed."} ${AI.state==="on"?"The AI coach will analyse your answers.":"Without the AI key, analysis is limited to the offline checker."}</span></div>
    <button class="btn primary lg" data-a="dgNext">Begin ${ic("arrow")}</button>${g.kind==="initial"?`<button class="btn ghost" data-a="dgSkip">Skip for now (level stays "Assessment required")</button>`:""}`;
  if(st==="grammar"){ const q=DIAG_GRAMMAR[g.gi];
    body = `<div class="eyebrow">Grammar &amp; tenses · ${g.gi+1}/${DIAG_GRAMMAR.length}</div><h2>${esc(q.q)}</h2>${q.o?`<div class="opt-list">${q.o.map((o,i)=>`<button class="opt" data-a="dgG" data-v="${i}"><span class="k">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`).join("")}</div>`:`<input id="dgfill" type="text" placeholder="Type your answer" data-enter="dgGT" autocomplete="off"><button class="btn primary" data-a="dgGT">Submit</button>`}<p class="muted" style="font-size:13px">No feedback during the diagnostic. You'll see everything at the end.</p>`;
    DG_AFTER=()=>{ const f=$("#dgfill"); f&&f.focus(); }; }
  if(st==="vocab"){ const q=DIAG_VOCAB[g.vi];
    body = `<div class="eyebrow">Vocabulary · ${g.vi+1}/${DIAG_VOCAB.length}</div><h2>What does <span style="color:var(--accent)">${esc(q.w)}</span> mean?</h2><div class="opt-list">${q.o.map((o,i)=>`<button class="opt" data-a="dgV" data-v="${i}"><span class="k">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`).join("")}<button class="opt" data-a="dgV" data-v="-1"><span class="k">?</span><span>I don't know this word</span></button></div>`; }
  if(st==="listen"){ const c=LISTEN.find(x=>x.id==="l2");
    body = `<div class="eyebrow">Listening</div><h2>${g.ls.played?"Answer from what you heard.":"Listen to a short workplace conversation."}</h2>
     <div class="row"><button class="btn ${g.ls.played?"":"primary"}" data-a="dgPlay">${ic("play")} ${g.ls.played?"Play again":"Play"}</button><span class="muted" style="font-size:13px">${TTS.ok?"The transcript is hidden until the end.":"Audio isn't available in this browser, so the transcript is shown instead."}</span></div>
     ${!TTS.ok?`<div class="transcript card tint">${c.lines.map(([s,t])=>`<div><b>${esc(s)}</b> ${esc(t)}</div>`).join("")}</div>`:""}
     ${(g.ls.played||!TTS.ok)?c.qs.map((q,qi)=>`<div class="stack s6"><div style="font-weight:650">${qi+1}. ${esc(q.q)}</div><div class="opt-list">${q.o.map((o,i)=>`<button class="opt ${g.ls.ans[qi]===i?"sel":""}" data-a="dgL" data-v="${qi}:${i}"><span class="k">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`).join("")}</div></div>`).join("")+`<button class="btn primary" data-a="dgNext" ${Object.keys(g.ls.ans).length===c.qs.length?"":"disabled"}>Continue ${ic("arrow")}</button>`:""}`; }
  if(st==="speed"){ const i=g.spd.length;
    body = i<DIAG_SPEED.length ? `<div class="eyebrow">Response speed · ${i+1}/${DIAG_SPEED.length}</div><h2>${esc(DIAG_SPEED[i])}</h2><p class="muted">Start typing your answer as soon as you can. The clock measures how long you take to begin.</p><textarea id="dgspd" data-track="dgspd" placeholder="Answer in one sentence…" style="min-height:80px" data-enter="dgSpd"></textarea><div class="row">${micBtn("dgspd")}<button class="btn primary" data-a="dgSpd">Next</button></div>` : "";
    DG_AFTER=()=>{ const el=$("#dgspd"); if(el){ el.dataset.shown=String(Date.now()); el.focus(); } }; }
  if(st==="speak"){ const t=DIAG_SPEAK[g.si];
    body = `<div class="eyebrow">Speaking · ${g.si+1}/${DIAG_SPEAK.length} · ${esc(t.t)}</div><h2>${esc(t.p)}</h2><div class="row between"><span class="muted" style="font-size:13px">Aim for about ${t.sec} seconds of speech (${Math.round(t.sec*1.6)}+ words). Keep going even if you make mistakes.</span><span class="timer" id="dgtimer">${fmt(t.sec)}</span></div>
     ${inputNote()}<textarea id="dgsp" style="min-height:170px" placeholder="Speak or type…" data-track="dgsp" data-wc="dgwc"></textarea><div class="row between"><div class="row">${micBtn("dgsp")}<span class="muted mono" id="dgwc">0 words</span></div><button class="btn primary" data-a="dgSp">${g.si<DIAG_SPEAK.length-1?"Next task":"Continue"} ${ic("arrow")}</button></div>`;
    DG_AFTER=()=>{ const el=$("#dgsp"); el&&el.focus(); g.spStart=Date.now(); countdown(t.sec,"dgtimer"); }; }
  if(st==="convo"){
    const turns = g.conv;
    body = `<div class="eyebrow">Conversation</div><h2>A short chat. Reply naturally.</h2><div class="chat" id="dgchat">${turns.map(m=>`<div class="msg ${m.role==="user"?"me":"them"}">${m.role!=="user"?'<span class="who">Coach</span>':""}${esc(m.content)}</div>`).join("")}${g.busy?`<div class="msg them typing"><span></span><span></span><span></span></div>`:""}</div>
     ${g.convStep<2 && !g.busy?`<div class="compose"><textarea id="dgc" placeholder="Your reply…" data-enter="dgC"></textarea>${micBtn("dgc")}<button class="btn primary" data-a="dgC">Send</button></div>`:""}${g.convStep>=2&&!g.busy?`<button class="btn primary lg" data-a="dgFinish">See my profile ${ic("arrow")}</button>`:""}`;
    DG_AFTER=()=>{ if(!g.conv.length && !g.busy) dgConvOpen(); const c=$("#dgchat"); if(c) c.scrollTop=c.scrollHeight; const t=$("#dgc"); t&&t.focus(); }; }
  if(st==="result") body = diagResultHTML();
  return `<div class="full"><div class="inner">${top}${body}</div></div>`;
}
A.dgExit = () => { Timer.clear(); ui.dg=null; render(); };
A.dgSkip = () => { ui.dg=null; render(); };
A.dgNext = () => { Timer.clear(); TTS.stop(); ui.dg.step++; renderLayer(); };
A.dgG = v => { const g=ui.dg, q=DIAG_GRAMMAR[g.gi]; g.g.push({t:q.t, ok:+v===q.a}); dgGAdv(); };
A.dgGT = () => { const g=ui.dg, q=DIAG_GRAMMAR[g.gi]; const val=($("#dgfill")||{}).value||""; if(!val.trim()) return; g.g.push({t:q.t, ok:checkTyped(val,q.a)}); dgGAdv(); };
function dgGAdv(){ const g=ui.dg; g.gi++; if(g.gi>=DIAG_GRAMMAR.length) g.step++; renderLayer(); }
A.dgV = v => { const g=ui.dg, q=DIAG_VOCAB[g.vi]; g.vo.push({lvl:q.lvl, ok:+v===q.a}); g.vi++; if(g.vi>=DIAG_VOCAB.length) g.step++; renderLayer(); };
A.dgPlay = () => { const c=LISTEN.find(x=>x.id==="l2"); TTS.speak(c.lines.map(([s,t],i)=>({text:t, voice:i%2, pitch:i%2?1.1:.95})), {rate:c.rate, onEnd:()=>{ ui.dg.ls.played=true; renderLayer(); }}); ui.dg.ls.played = ui.dg.ls.played || false; setTimeout(()=>{ if(ui.dg){ ui.dg.ls.played=true; renderLayer(); } }, 1500); };
A.dgL = v => { const [q,i]=v.split(":").map(Number); ui.dg.ls.ans[q]=i; renderLayer(); };
A.dgSpd = () => { const el=$("#dgspd"); if(!el||!el.value.trim()) return; const shown=+el.dataset.shown, fk=+(el.dataset.firstkey||Date.now()); ui.dg.spd.push({ms:fk-shown, text:el.value.trim()}); if(ui.dg.spd.length>=DIAG_SPEED.length) ui.dg.step++; renderLayer(); };
A.dgSp = () => { const g=ui.dg, el=$("#dgsp"); const txt=(el&&el.value||"").trim(); if(words(txt).length<5){ toast("Say a bit more, at least a couple of sentences."); return; } Timer.clear(); g.sp.push({k:DIAG_SPEAK[g.si].k, task:DIAG_SPEAK[g.si].p, text:txt, sec:(Date.now()-g.spStart)/1000, voice:inputMode()==="voice", pron:Voice.pron}); if(Voice.active) Voice.stop(); Voice.reset(); g.si++; if(g.si>=DIAG_SPEAK.length) g.step++; renderLayer(); };
async function dgConvOpen(){
  const g=ui.dg; const intro=(g.sp[0]||{}).text||"";
  g.busy=true; renderLayer();
  let line="So, tell me a bit more. What does a normal day look like for you?";
  if(AI.fn){ try{ line = (await aiText(`You are a friendly conversation partner (not a teacher). The learner introduced themselves like this: """${intro}""". Ask ONE natural, specific follow-up question about something they said, in under 25 words. Output only the question.`)).trim(); }catch(e){} }
  g.conv.push({role:"assistant",content:line}); g.busy=false; renderLayer();
}
A.dgC = async () => {
  const g=ui.dg, el=$("#dgc"); const t=(el&&el.value||"").trim(); if(!t) return;
  g.conv.push({role:"user",content:t}); g.convStep++; g.busy = g.convStep<2; renderLayer();
  if(g.convStep<2){
    let line = "Interesting. And why is that important to you?";
    if(AI.fn){ try{ line=(await aiText([{role:"user",content:"You are a friendly conversation partner, not a teacher. Keep replies under 30 words. React briefly to what the learner says, then ask one follow-up question that pushes them to explain or give an example. Never correct their English. Start now."},{role:"assistant",content:g.conv[0].content},...g.conv.slice(1)])).trim(); }catch(e){} }
    g.conv.push({role:"assistant",content:line}); g.busy=false; renderLayer();
  }
};
A.dgFinish = async () => {
  const g=ui.dg; g.step=DG_STEPS.indexOf("result"); g.busy=true; renderLayer();
  // objective parts
  const gramPct = Math.round(g.g.filter(x=>x.ok).length/Math.max(1,g.g.length)*100);
  g.g.forEach(x=>recordTense(x.t,x.ok));
  let vScore=0; g.vo.forEach(x=>{ if(x.ok) vScore+= x.lvl; }); const vMax=g.vo.reduce((a,x)=>a+x.lvl,0);
  const vocabPct = Math.round(vScore/Math.max(1,vMax)*100);
  const lc=LISTEN.find(x=>x.id==="l2"); const lPct = Math.round(lc.qs.filter((q,i)=>g.ls.ans[i]===q.a).length/lc.qs.length*100);
  const speedMs = g.spd.length? Math.round(g.spd.reduce((a,x)=>a+x.ms,0)/g.spd.length):null;
  const allText = g.sp.map(s=>`[${s.k}] ${s.text}`).join("\n\n");
  const prons = g.sp.map(s=>s.pron).filter(Boolean); prons.forEach(p=>recordPron(p,"diagnostic"));
  const pronAvg = prons.length ? {pron:Math.round(prons.reduce((a,p)=>a+p.pron,0)/prons.length), fluency:Math.round(prons.reduce((a,p)=>a+p.fluency,0)/prons.length), wpm:Math.round(prons.filter(p=>p.wpm).reduce((a,p)=>a+p.wpm,0)/Math.max(1,prons.filter(p=>p.wpm).length))||null, weakPh:[...new Map(prons.flatMap(p=>p.weakPh).map(x=>[x.ph,x])).values()].sort((a,b)=>b.low-a.low).slice(0,4)} : null;
  const convText = g.conv.map(m=>(m.role==="user"?"LEARNER":"PARTNER")+": "+m.content).join("\n");
  let ai=null;
  if(AI.fn){
    try{ ai = await aiJSON(`You are a CEFR speaking assessor. ${LEARNER()}
Input was ${g.sp.some(s=>s.voice)?"partly spoken via speech-to-text":"TYPED, not spoken (so you cannot judge pronunciation, pauses or real fluency)"}.
Three speaking tasks:
${allText}
Short conversation:
${convText}
${pronAvg?`From the recording: pronunciation (AI listening estimate) ${pronAvg.pron}/100, fluency ${pronAvg.fluency}/100, speaking rate ${pronAvg.wpm||"n/a"} wpm.\n`:""}Objective results: grammar items ${gramPct}%, vocabulary recognition ${vocabPct}%, listening ${lPct}%, average time to start answering ${speedMs?Math.round(speedMs/100)/10+"s":"n/a"}.
Return ONLY JSON: {"speaking":"A1..C2","interaction":"A1..C2","grammar_production":"A1..C2","vocabulary_production":"A1..C2","speaking_score":0-100,"interaction_score":0-100,"summary":"3 honest sentences about this learner's current English, citing evidence","strengths":["max 3"],"priorities":["exactly 3 concrete training priorities, most important first"],"mistakes":[{"original","correct","natural","why","category","pattern"}] (max 6, most important)}`); }catch(e){ ai=null; }
  }
  const rules = ruleCheck(allText+"\n"+g.conv.filter(m=>m.role==="user").map(m=>m.content).join("\n"));
  const mistakes = ai&&ai.mistakes ? ai.mistakes.filter(x=>x&&x.original) : rules;
  mistakes.forEach(m=>addError(m,"diagnostic"));
  const gLevel = scoreToCEFR(gramPct*0.9+5);
  const vLevel = scoreToCEFR(vocabPct*0.9+5);
  const lLevel = scoreToCEFR(lPct*0.85+5);
  const toIdx = l => CEFR.indexOf(l);
  const mix = (a,b) => a&&b ? CEFR[Math.round((toIdx(a)+toIdx(b))/2)] : (a||b);
  const totalWords = g.sp.reduce((a,s)=>a+words(s.text).length,0);
  const offlineSpeak = scoreToCEFR(clamp(30 + Math.min(40,totalWords/6) - rules.length*4, 15, 75));
  const levels = {
    speaking: ai?ai.speaking:offlineSpeak,
    interaction: ai?ai.interaction:(g.conv.filter(m=>m.role==="user").length?offlineSpeak:null),
    grammar: ai?mix(gLevel, ai.grammar_production):gLevel,
    vocabulary: ai?mix(vLevel, ai.vocabulary_production):vLevel,
    listening: lLevel
  };
  const keys=["speaking","listening","grammar","vocabulary","interaction"].filter(k=>levels[k]);
  const idxs=keys.map(k=>toIdx(levels[k])).sort((a,b)=>a-b);
  const median = CEFR[idxs[Math.floor((idxs.length-1)/2)]];
  const wk = keys.reduce((a,k)=>toIdx(levels[k])<toIdx(levels[a])?k:a, keys[0]);
  const prev = S.levels;
  S.levels = Object.assign(levels, {overall:median, target:CEFR[Math.min(5,toIdx(median)+1)], weakestKey:wk, weakest:wk[0].toUpperCase()+wk.slice(1), provisional:g.kind==="initial", date:today(), source:ai?"ai":"offline"});
  bumpSkill("grammar", gramPct, g.kind==="initial"?1:0.5); bumpSkill("vocabulary", vocabPct, g.kind==="initial"?1:0.5); bumpSkill("listening", lPct, g.kind==="initial"?1:0.5);
  bumpSkill("speaking", ai?ai.speaking_score:clamp(30+totalWords/8-rules.length*5,20,70), g.kind==="initial"?1:0.5);
  if(ai&&ai.interaction_score!=null) bumpSkill("interaction", ai.interaction_score, g.kind==="initial"?1:0.5);
  const record = {pronAvg, d:today(), kind:g.kind, gramPct, vocabPct, lPct, speedMs, words:totalWords, levels:{...levels}, summary:ai?ai.summary:"", strengths:ai?ai.strengths:[], priorities:ai?ai.priorities:defaultPriorities(gramPct,vocabPct,lPct,rules), skills:{...S.skills}, activeDays:activeDays(), source:ai?"ai":"offline"};
  if(g.kind==="initial"){ S.diag=record; S.assessed=true; }
  else if(g.kind==="weekly") S.weekly.push(record); else S.monthly.push(record);
  g.result=record; g.prevLevels=prev; g.busy=false;
  addXP(60); D().speakSec += g.sp.reduce((a,s)=>a+Math.min(s.sec,240),0);
  buildPlan(true); checkAch(); save(); renderLayer();
};
function defaultPriorities(gp,vp,lp,rules){ const p=[]; if(rules.length) p.push("Fix "+rules[0].pattern.toLowerCase()); p.push("Speak every day for at least 10 minutes with longer answers"); if(gp<70) p.push("Tense control: Present Perfect vs Past Simple"); if(vp<70) p.push("Activate B1–B2 vocabulary by using new words in speech"); if(lp<75) p.push("Listening for detail at natural speed"); return p.slice(0,3); }
function diagResultHTML(){
  const g=ui.dg; if(g.busy||!g.result) return `<div class="empty"><span class="spinner"></span><h3>Building your English profile…</h3><p>${AI.state==="on"?"The coach is reading your answers.":"Scoring your answers."}</p></div>`;
  const r=g.result, L=S.levels;
  const cell=(k,l)=>`<div class="c ${L.weakestKey===k?"weakest":""}"><span>${l}</span><b>${L[k]||"—"}</b><div class="cefr-scale">${CEFR.map((c,i)=>`<i class="${L[k]&&i<=CEFR.indexOf(L[k])?"on":""}"></i>`).join("")}</div></div>`;
  return `<div class="eyebrow">Personal English profile</div><h1>Overall ${L.overall}. Weakest area: ${L.weakest}.</h1>
  <div class="cefr">${cell("speaking","Speaking")}${cell("listening","Listening")}${cell("grammar","Grammar")}${cell("vocabulary","Vocabulary")}${cell("interaction","Interaction")}</div>
  ${r.summary?`<p style="font-size:16px">${esc(r.summary)}</p>`:""}
  <dl class="kv"><dt>Grammar items</dt><dd>${r.gramPct}%</dd><dt>Vocabulary</dt><dd>${r.vocabPct}% (weighted by word level)</dd><dt>Listening</dt><dd>${r.lPct}% (one clip, low confidence)</dd><dt>Start speed</dt><dd>${r.speedMs?(r.speedMs/1000).toFixed(1)+" s average to begin answering":"n/a"}</dd><dt>Pronunciation</dt><dd>${r.pronAvg?`<b>${r.pronAvg.pron}/100</b> · fluency ${r.pronAvg.fluency}/100${r.pronAvg.wpm?` · ${r.pronAvg.wpm} words/min`:""}${r.pronAvg.weakPh.length?`<br><span class="muted">Sounds to work on: ${r.pronAvg.weakPh.map(x=>"/"+esc(x.ph)+"/").join(" ")}</span>`:""}`:`<span class="muted">Not measured: answers were typed.</span>`}</dd></dl>
  ${r.strengths&&r.strengths.length?`<div><h4>Strengths</h4><ul>${r.strengths.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></div>`:""}
  <div class="card tint"><h4 style="margin-bottom:8px">Your training priorities</h4><ol style="margin:0;padding-left:20px">${r.priorities.map(s=>`<li>${esc(s)}</li>`).join("")}</ol></div>
  <div class="note">${ic("info")}<span>${L.provisional?"This is a provisional estimate from one session. It will firm up after a week of practice and your first weekly check.":"Compared with your last assessment on the Progress page."} ${r.source==="offline"?"Speaking levels were estimated offline from length and error patterns, so treat them as rough.":""}</span></div>
  <button class="btn primary lg" data-a="dgDone">Go to my dashboard ${ic("arrow")}</button>`;
}
A.dgDone = () => { ui.dg=null; go("home"); };
/* ================= VOCABULARY ================= */
VIEWS.vocabulary = () => {
  const v = ui.v ||= {tab:"today", i:0};
  const due = dueWords();
  const tabs = [["today","Today's words"],["review",`Review${due.length?` (${due.length})`:""}`],["pressure","Retrieval under pressure"],["bank","Word bank"]];
  const body = {today:vocabToday, review:vocabReview, pressure:vocabPressure, bank:vocabBank}[v.tab]();
  return `${pageHead("Vocabulary", "Five words a day. A word only counts once you can produce it: learn → use → recall → review → activate.")}
  <div class="tabs" role="tablist">${tabs.map(([k,l])=>`<button class="${v.tab===k?"on":""}" data-a="vTab" data-v="${k}">${l}</button>`).join("")}</div>${body}`;
};
A.vTab = k => { ui.v={tab:k,i:0}; Timer.clear(); render(); };

function vocabToday(){
  const list = todaysWords(); const v=ui.v;
  if(!list.length) return `<section class="card">${Daily.running||(GEM.key&&Daily.failed!==today())?emptyHTML("vocabulary","Choosing today's words for you…","Picking 5 useful words for your level and interests that you haven't learned yet.",'<span class="spinner"></span>'):emptyHTML("vocabulary","No new words today","You've learned every word in the built-in library. Add your free Gemini key in Settings to get 5 new words every day.",`<button class="btn primary" data-a="nav" data-v="settings">Add key</button>`)}</section>`;
  const w = WMAP[list[v.i]]; if(!w) return emptyHTML("vocabulary","No words today","You've introduced every word in the library. New words arrive as the library grows.");
  introduceWord(w.w); save();
  const st = V(w.w);
  const fb = v.fb && v.fb.w===w.w ? v.fb : null;
  return `<div class="word-dots">${list.map((x,i)=>`<button class="${i===v.i?"on":""} ${STAT_IDX(V(x).status)>=3&&i!==v.i?"dn":""}" data-a="vGo" data-v="${i}">${STAT_IDX(V(x).status)>=3?"✓ ":""}${esc(x)}</button>`).join("")}</div>
  <section class="card stack s18 fade-in">
    <div class="row between">
      <div class="word-head"><span class="word-title">${esc(w.w)}</span><span class="ipa">${esc(w.ipa)} · ${esc(w.say)}</span><button class="btn sm ghost" data-a="say" data-v="${esc(w.w)}" aria-label="Hear it">${ic("play")}</button>${Speech.ok?`<button class="btn sm" data-a="wordDrill" data-v="${esc(w.w)}">${ic("mic")} Check my pronunciation</button>`:""}</div>
      <div class="stack s6" style="min-width:180px">${statusChip(st.status)}<div class="status-track">${STATUSES.slice(1).map((s,i)=>`<i class="${STAT_IDX(st.status)>i?"on":""}"></i>`).join("")}</div></div>
    </div>
    <div><span class="chip line">${esc(w.pos)}</span> <span class="chip line">${esc(w.lvl)}</span></div>
    <p style="font-size:18px;font-weight:550;max-width:60ch">${esc(w.meaning)}</p>
    <p class="muted">हिंदी: ${esc(w.hi)} · मराठी: ${esc(w.mr)}</p>
    <div class="wsec">
      <div><h4>Natural examples</h4><div class="ex-list">${w.ex.map(e=>`<div class="ex">${esc(e)}</div>`).join("")}</div></div>
      <div class="stack"><div><h4>Collocations</h4><div class="pillset">${w.coll.map(c=>`<span class="chip">${esc(c)}</span>`).join("")}</div></div>
        <div><h4>Synonyms</h4><p>${esc(w.syn.join(", "))}</p></div>${w.ant.length?`<div><h4>Opposites</h4><p>${esc(w.ant.join(", "))}</p></div>`:""}</div>
      <div><h4>Common mistake</h4><p>${esc(w.mist)}</p></div>
      <div><h4>Formal or casual?</h4><p>${esc(w.reg)}</p></div>
    </div>
    <div><h4 class="eyebrow" style="margin-bottom:6px">Example conversation</h4><div class="convo">${w.convo.map(([s,t])=>`<div><b>${s}</b> ${esc(t)}</div>`).join("")}</div></div>
    <div class="divider"></div>
    <div class="stack">
      <div class="row between"><h3>Your turn</h3><span class="muted" style="font-size:13px">Step ${Math.min(2,(v.step||0))+1} of 2</span></div>
      ${(v.step||0)===0 ? `<p>Quick check first. Which sentence uses <b>${esc(w.w)}</b> correctly?</p>${recogOptions(w)}`:
       `<p>${(v.step||0)===1?`Write or say your own sentence with <b>${esc(w.w)}</b>. Make it about your life.`:`One more, in a different situation: ${esc(w.workplace)}`}</p>
       ${inputNote()}<textarea id="vprod" placeholder="Your sentence with “${esc(w.w)}”…" style="min-height:90px"></textarea>
       <div class="row">${micBtn("vprod")}<button class="btn primary" data-a="vCheck">${v.busy?'<span class="spinner"></span> Checking':"Check my sentence"}</button></div>`}
      ${fb?feedbackHTML(fb):""}
      ${fb&&fb.ok?`<div class="row"><button class="btn" data-a="vMore">Use it once more</button>${v.i<list.length-1?`<button class="btn primary" data-a="vGo" data-v="${v.i+1}">Next word ${ic("arrow")}</button>`:`<button class="btn primary" data-a="vFinish">Finish today's words ${ic("check")}</button>`}</div>`:""}
    </div>
  </section>`;
}
function recogOptions(w){
  const ui_v=ui.v; const key="ro_"+w.w;
  ui_v[key] ||= shuffle([{t:w.ex[0],ok:true}, ...WRONG_USES(w)]);
  return `<div class="opt-list">${ui_v[key].map((o,i)=>`<button class="opt ${ui_v.rp===i?(o.ok?"right":"wrong"):""}" data-a="vRecog" data-v="${i}"><span class="k">${String.fromCharCode(65+i)}</span><span>${esc(o.t)}</span></button>`).join("")}</div>`;
}
function WRONG_USES(w){
  if(w.wrong && w.wrong.length>=2) return w.wrong.slice(0,2).map(t=>({t,ok:false}));
  const bad = {
    implement:["We implemented a birthday party for Riya.","Please implement me the answer."],
    hesitate:["I hesitated for calling him.","Don't hesitate me if you need help."],
    convey:["Please convey to the market and buy milk.","He conveyed the bus to office."],
    reliable:["She is very reliable on her father.","This road is reliable for cars to sleep."],
    eventually:["Eventually it may rain, I'm not sure.","I eventually met him by chance once only."],
    approach:["Please approach to the manager.","My approach is very tall."],
    clarify:["Please clarify me.","The water is very clarify."],
    prioritize:["I prioritize the cake to eat.","He is very prioritize."],
    overwhelmed:["I am overwhelmed from my friend.","The overwhelmed is big."],
    consistent:["Consistent is the key.","He consistent his practice."],
    assume:["Please assume me the answer.","I assumed my shirt."],
    struggle:["I struggle for learning English.","The struggle me is hard."],
    "figure out":["I figured out it.","Please figure me out the bill."],
    anticipate:["I anticipated in the meeting.","She anticipated the chair."],
    efficient:["He works very efficient.","The efficient of the plan is good."],
    postpone:["Let's postpone the meeting earlier.","I postponed my lunch yesterday ago."],
    reluctant:["I was reluctant for going.","She reluctant the offer."],
    elaborate:["Can you elaborate me?","He elaborated the room."],
    genuine:["He genuined the bag.","This is genuine fake leather."],
    outcome:["We outcomed the problem.","The outcome of me is good."]
  }[w.w]||["(wrong use)","(wrong use)"];
  return bad.map(t=>({t,ok:false}));
}
A.vGo = i => { ui.v.i=+i; ui.v.step=0; ui.v.fb=null; ui.v.rp=null; render(); };
A.say = w => TTS.speak([w],{rate:.85});
A.vRecog = i => {
  const v=ui.v, w=WMAP[todaysWords()[v.i]], o=v["ro_"+w.w][+i]; v.rp=+i;
  if(o.ok){ setStatusAtLeast(w.w,"UNDERSTOOD"); addXP(3); save(); render(); setTimeout(()=>{ v.step=1; v.rp=null; render(); const t=$("#vprod"); t&&t.focus(); }, 650); }
  else { render(); toast("Not quite. Look at the examples again and try once more."); }
};
A.vCheck = async () => {
  const v=ui.v, w=WMAP[todaysWords()[v.i]], el=$("#vprod"); const text=(el&&el.value||"").trim();
  if(!text) return; v.busy=true; render(); $("#vprod").value=text;
  const r = await evalSentence({text, target: v.step===1?`Write a sentence using "${w.w}" correctly`:`Use "${w.w}" in this situation: ${w.workplace}`, word:w.w});
  v.busy=false; recordProduction(w.w, r.ok, "today"); if(r.ok){ addXP(8); D().vocabLearned.includes(w.w)||D().vocabLearned.push(w.w); if(v.step===1) v.step=2; } save();
  v.fb={w:w.w, ...r, text}; render(); const t=$("#vprod"); if(t&&!r.ok) t.value=text;
  if(todaysWords().every(x=>STAT_IDX(V(x).status)>=3)) completeBlock("vocab");
  checkAch();
};
A.vMore = () => { ui.v.fb=null; render(); const t=$("#vprod"); t&&t.focus(); };
A.vFinish = () => { completeBlock("vocab"); toast("Today's words are in your review queue. First review: tomorrow."); ui.v.tab="pressure"; ui.v.i=0; render(); };
function feedbackHTML(fb){
  return `<div class="note ${fb.ok?"good":"warn"} pop">${ic(fb.ok?"check":"info")}<div class="stack s6"><b>${fb.ok?"That works.":"Not yet."}</b><span>${esc(fb.feedback||"")}</span>
  ${fb.corrected&&norm(fb.corrected)!==norm(fb.text)?`<span><b>Corrected:</b> ${esc(fb.corrected)}</span>`:""}
  ${fb.natural&&norm(fb.natural)!==norm(fb.text)&&norm(fb.natural)!==norm(fb.corrected)?`<span><b>More natural:</b> ${esc(fb.natural)}</span>`:""}
  ${fb.source==="offline"?`<span class="muted" style="font-size:12.5px">Checked offline: grammar patterns and word use only.</span>`:""}</div></div>`;
}

/* ---------- review (spaced repetition with varied methods) ---------- */
function reviewMethod(w){
  const s=STAT_IDX(V(w).status);
  const methods = s<=1?["recognition","definition"]: s===2?["definition","completion","synonym"]: ["completion","synonym","opposite","scenario","speaking"];
  const m = methods[(V(w).reviews + w.length)%methods.length];
  if(m==="opposite" && !WMAP[w].ant.length) return "scenario";
  return m;
}
function vocabReview(){
  const v=ui.v; v.q ||= dueWords();
  if(!v.q.length) return `<section class="card">${emptyHTML("check","Nothing due right now", `Reviews follow a 1 → 3 → 7 → 14 → 30 day schedule that tightens when you miss and stretches when you succeed. ${nextDueText()}`, `<button class="btn" data-a="vTab" data-v="pressure">Practise retrieval anyway</button>`)}</section>`;
  if(v.ri==null) v.ri=0;
  if(v.ri>=v.q.length){ completeBlock("review"); return `<section class="card">${emptyHTML("check","Review complete",`${v.q.length} word${v.q.length>1?"s":""} reviewed. Their next dates have been adjusted to how you did.`, `<button class="btn primary" data-a="vTab" data-v="today">Back to today's words</button>`)}</section>`; }
  const w = v.q[v.ri], W=WMAP[w], m = v.m ||= reviewMethod(w);
  let prompt="", input="";
  if(m==="recognition"){ v.opts ||= shuffle([W.meaning, ...shuffle(WORDS.filter(x=>x.w!==w)).slice(0,3).map(x=>x.meaning)]); prompt=`What does <b>${esc(w)}</b> mean?`; input=`<div class="opt-list">${v.opts.map((o,i)=>`<button class="opt ${v.pick===i?(o===W.meaning?"right":"wrong"):""}" data-a="rvPick" data-v="${i}"><span class="k">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`).join("")}</div>`; }
  else if(m==="definition"){ prompt=`Which word means: <i>${esc(W.meaning)}</i>`; input=`<input id="rvin" type="text" placeholder="Type the word" data-enter="rvType" autocomplete="off">`; }
  else if(m==="completion"){ const ex=W.ex[(V(w).reviews)%W.ex.length]; const re=new RegExp("\\b("+wordForms(w).map(f=>f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\\b","i"); prompt=`Complete the sentence: <i>${esc(ex.replace(re,"_____"))}</i>`; input=`<input id="rvin" type="text" placeholder="Missing word" data-enter="rvType" autocomplete="off">`; v.ans = (ex.match(re)||[w])[0]; }
  else if(m==="synonym"){ prompt=`Type a word from your list that is close in meaning to <b>${esc(W.syn[0])}</b>.`; input=`<input id="rvin" type="text" data-enter="rvType" autocomplete="off">`; }
  else if(m==="opposite"){ prompt=`Which of your words is the opposite of <b>${esc(W.ant[0])}</b>?`; input=`<input id="rvin" type="text" data-enter="rvType" autocomplete="off">`; }
  else { prompt = m==="speaking" ? `Say or write two sentences about your week using <b>${esc(w)}</b>.` : `Situation: ${esc(W.workplace)} Use <b>${esc(w)}</b>.`; input=`${inputNote()}<textarea id="rvin" style="min-height:90px"></textarea><div class="row">${micBtn("rvin")}</div>`; }
  return `<section class="card stack s18 fade-in">
    <div class="row between"><span class="eyebrow">${v.ri+1} of ${v.q.length} · ${m}</span>${statusChip(V(w).status)}</div>
    <h2 style="font-weight:600">${prompt}</h2>${input}
    ${v.fb?feedbackHTML(v.fb):""}
    <div class="row">${v.fb?`<button class="btn primary" data-a="rvNext">Next ${ic("arrow")}</button>`: m==="recognition"?"":`<button class="btn primary" data-a="${["scenario","speaking"].includes(m)?"rvProd":"rvType"}">${v.busy?'<span class="spinner"></span> Checking':"Check"}</button><button class="btn ghost" data-a="rvGiveUp">I don't remember</button>`}</div>
  </section>`;
}
function nextDueText(){ const n=Object.values(S.vocab).filter(v=>v.due&&v.due>today()).map(v=>v.due).sort()[0]; return n?`Next review: ${new Date(n).toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"short"})}.`:"Learn today's words to start your queue."; }
function rvResolve(ok, strong, fbText){ const v=ui.v, w=v.q[v.ri]; scheduleFrom(w, ok, strong); if(!ok && STAT_IDX(V(w).status)>=3) V(w).status="WEAK ACTIVE"; if(ok && STAT_IDX(V(w).status)<2) setStatusAtLeast(w,"UNDERSTOOD"); if(ok) addXP(4); save(); v.fb = v.fb || {ok, feedback:fbText, text:""}; render(); }
A.rvPick = i => { const v=ui.v; if(v.fb) return; v.pick=+i; const W=WMAP[v.q[v.ri]]; const ok=v.opts[+i]===W.meaning; rvResolve(ok,false, ok?"Correct. Recognition is the first step; you'll be asked to produce it next time.":`It means: ${W.meaning}`); };
A.rvType = () => { const v=ui.v; if(v.fb) return; const w=v.q[v.ri], el=$("#rvin"); const a=(el&&el.value||"").trim(); if(!a) return; const acc = v.m==="completion" ? [v.ans, w] : wordForms(w); const ok = checkTyped(a, acc); rvResolve(ok, ok && v.m!=="definition", ok?"Correct, and from memory.":`The answer was “${v.m==="completion"?v.ans:w}”. It'll come back sooner.`); };
A.rvProd = async () => { const v=ui.v; if(v.fb) return; const w=v.q[v.ri], el=$("#rvin"); const t=(el&&el.value||"").trim(); if(!t) return; v.busy=true; render(); $("#rvin").value=t; const r=await evalSentence({text:t, target:v.m==="speaking"?`Two sentences about their week using "${w}"`:`Use "${w}" in this situation: ${WMAP[w].workplace}`, word:w}); v.busy=false; recordProduction(w, r.ok, "review"); v.fb={...r,text:t}; rvResolve(r.ok, r.ok); };
A.rvGiveUp = () => { const v=ui.v; const w=v.q[v.ri]; rvResolve(false,false,`It was “${w}”: ${WMAP[w].meaning}`); };
A.rvNext = () => { const v=ui.v; v.ri++; v.m=null; v.opts=null; v.pick=null; v.fb=null; v.ans=null; render(); const i=$("#rvin"); i&&i.focus(); };

/* ---------- retrieval under pressure ---------- */
const PRESS_ROUNDS = [
 {k:"use",t:w=>`Use <b>${esc(w.toUpperCase())}</b> in a sentence.`,prep:3},
 {k:"work",t:w=>`Use <b>${esc(w.toUpperCase())}</b> in a workplace situation.`,prep:3},
 {k:"explain",t:w=>`Explain <b>${esc(w.toUpperCase())}</b> without saying the word.`,prep:5}
];
function vocabPressure(){
  const v=ui.v; const p = v.p;
  const pool = Object.keys(S.vocab).filter(w=>V(w).introduced && WMAP[w]);
  if(!pool.length) return `<section class="card">${emptyHTML("bolt","Learn a word first","Retrieval practice uses words you've already met. Start with today's five.",`<button class="btn primary" data-a="vTab" data-v="today">Today's words</button>`)}</section>`;
  if(!p) return `<section class="card stack s18"><div><h2>Retrieval under pressure</h2><p class="muted" style="margin-top:6px;max-width:62ch">Knowing a word isn't the same as finding it mid-sentence. You get 3 seconds to start typing, then 25 seconds to finish. Three rounds per word: use it, use it at work, explain it without saying it.</p></div>
    <div class="grid g3">${PRESS_ROUNDS.map((r,i)=>`<div class="card tint"><div class="eyebrow">Round ${i+1}</div><p style="margin-top:6px">${r.t("word")}</p></div>`).join("")}</div>
    <div class="row"><button class="btn primary lg" data-a="prStart">${ic("bolt")} Start · ${Math.min(3,pool.length)} words</button><span class="muted" style="font-size:13px">Weak-active words are picked first.</span></div></section>`;
  if(p.done) return `<section class="card stack s18"><h2>Round complete</h2><div class="list">${p.log.map(l=>`<div class="li"><div class="ic ${l.ok?"done":""}">${ic(l.ok?"check":"x")}</div><div class="grow"><b>${esc(l.w)}</b> · ${esc(l.k)}<div class="muted" style="font-size:13px">${esc(l.text||"(no answer)")}</div></div><span class="mono muted">${l.lat!=null?(l.lat/1000).toFixed(1)+"s":"miss"}</span></div>`).join("")}</div><p class="muted">Latency is the time until your first keystroke. A miss means nothing within the prep window: that word goes back into tomorrow's tasks.</p><button class="btn primary" data-a="prStart">Go again</button></section>`;
  const w=p.words[p.wi], r=PRESS_ROUNDS[p.ri];
  return `<section class="card stack s18 fade-in">
   <div class="row between"><span class="eyebrow">Word ${p.wi+1}/${p.words.length} · round ${p.ri+1}/3</span><span class="timer big" id="prtimer">${fmt(r.prep)}</span></div>
   <h2 style="font-size:26px;font-weight:600">${r.t(w)}</h2>
   <p class="muted" id="prphase">${p.phase==="answer"?"Keep going, finish your sentence.":"Start typing before the clock hits zero."}</p>
   <textarea id="prin" data-track="pr" style="min-height:90px" placeholder="Go…" ${p.fb?"disabled":""}></textarea>
   ${p.fb?feedbackHTML(p.fb):""}
   <div class="row">${p.fb?`<button class="btn primary" data-a="prNext">Next ${ic("arrow")}</button>`:`<button class="btn primary" data-a="prSubmit">${p.busy?'<span class="spinner"></span> Checking':"Submit"}</button>`}</div>
  </section>`;
}
TRACK.pr = el => { const p=ui.v.p; if(!p||p.phase!=="prep") return; p.lat=Date.now()-p.t0; p.phase="answer"; const ph=$("#prphase"); if(ph) ph.textContent="Keep going, finish your sentence."; countdown(25,"prtimer",()=>A.prSubmit()); };
AFTER.vocabulary = () => {
  const p=ui.v&&ui.v.p; if(ui.v.tab!=="pressure"||!p||p.done||p.fb||p.busy) return;
  const el=$("#prin"); if(el){ el.focus(); }
  p.phase="prep"; p.t0=Date.now(); p.lat=null;
  countdown(PRESS_ROUNDS[p.ri].prep,"prtimer",()=>{ if(p.phase==="prep"){ p.miss=true; p.log.push({w:p.words[p.wi],k:PRESS_ROUNDS[p.ri].k,ok:false,lat:null,text:""}); recordProduction(p.words[p.wi],false,"pressure"); save(); p.fb={ok:false,feedback:"Time's up before you started. That's a retrieval miss; it's useful data, not failure. Try saying the first few words that come, then build the sentence.",text:""}; render(); } });
};
A.prStart = () => {
  const pool = Object.keys(S.vocab).filter(w=>V(w).introduced && WMAP[w]);
  const sorted = pool.sort((a,b)=>(V(a).status==="WEAK ACTIVE"?-1:0)-(V(b).status==="WEAK ACTIVE"?-1:0) || STAT_IDX(V(a).status)-STAT_IDX(V(b).status));
  ui.v.p = {words:sorted.slice(0,3), wi:0, ri:0, log:[], phase:"prep"}; render();
};
A.prSubmit = async () => {
  const p=ui.v.p; if(!p||p.fb||p.busy) return; Timer.clear();
  const el=$("#prin"); const t=(el&&el.value||"").trim(); const w=p.words[p.wi], r=PRESS_ROUNDS[p.ri];
  if(!t){ p.fb={ok:false,feedback:"No answer submitted.",text:""}; p.log.push({w,k:r.k,ok:false,lat:p.lat,text:""}); recordProduction(w,false,"pressure"); save(); render(); return; }
  p.busy=true; render(); $("#prin").value=t;
  const res = await evalSentence({text:t, word: r.k==="explain"?null:w, mustAvoid: r.k==="explain"?w:null, target: r.k==="use"?`Use "${w}" in a sentence`: r.k==="work"?`Use "${w}" in a workplace situation`:`Explain the meaning of "${w}" without using the word itself (circumlocution)`});
  p.busy=false; p.fb={...res,text:t}; const fast = p.lat!=null && p.lat<3000;
  p.log.push({w,k:r.k,ok:res.ok,lat:p.lat,text:t}); recordProduction(w, res.ok && fast, "pressure"); if(res.ok) addXP(fast?6:4);
  D().speakSec += 20; save(); render(); const x=$("#prin"); if(x) x.value=t;
};
A.prNext = () => { const p=ui.v.p; p.fb=null; p.ri++; if(p.ri>=3){ p.ri=0; p.wi++; } if(p.wi>=p.words.length){ p.done=true; checkAch(); } render(); };

/* ---------- word bank ---------- */
function vocabBank(){
  const v=ui.v; const f=v.f||"all";
  const list = WORDS.filter(w=>V(w.w).introduced).map(w=>({...w, s:V(w.w)}));
  if(!list.length) return `<section class="card">${emptyHTML("book","Your word bank is empty","Words appear here after you meet them in Today's words.",`<button class="btn primary" data-a="vTab" data-v="today">Start today's words</button>`)}</section>`;
  const counts = Object.fromEntries(STATUSES.map(s=>[s,list.filter(x=>x.s.status===s).length]));
  const shown = f==="all"?list:list.filter(x=>x.s.status===f);
  return `<div class="pillset"><button class="pill ${f==="all"?"on":""}" data-a="vbF" data-v="all">All ${list.length}</button>${STATUSES.slice(1).map(s=>`<button class="pill ${f===s?"on":""}" data-a="vbF" data-v="${s}">${s.toLowerCase()} ${counts[s]}</button>`).join("")}</div>
  <section class="card"><div class="scroll-x"><table class="t"><thead><tr><th>Word</th><th>Status</th><th>Produced</th><th>Next review</th></tr></thead><tbody>${shown.map(x=>`<tr><td><b>${esc(x.w)}</b><div class="muted" style="font-size:12.5px">${esc(x.meaning)}</div></td><td>${statusChip(x.s.status)}</td><td class="mono">${x.s.prodOK}✓ ${x.s.prodFail}✗</td><td class="mono">${x.s.due||"—"}</td></tr>`).join("")}</tbody></table></div></section>
  <div class="note">${ic("info")}<span>MASTERED needs: successful production on 2+ days, a fast success under time pressure, and a review interval of 14+ days. Multiple choice alone never upgrades a word past UNDERSTOOD.</span></div>`;
}
A.vbF = f => { ui.v.f=f; render(); };
/* ================= GRAMMAR ================= */
VIEWS.grammar = () => {
  const g=ui.gr ||= {tab:"daily"};
  const tabs=[["daily","Daily dose"],["natural","Natural English"],["movie","Movie English"],["pro","Professional phrases"],["check","Sentence checker"]];
  const body={daily:grDaily,natural:grNatural,movie:grMovie,pro:grPro,check:grCheck}[g.tab]();
  return `${pageHead("Grammar","Short and daily. Every concept ends with you saying something real with it.")}<div class="tabs">${tabs.map(([k,l])=>`<button class="${g.tab===k?"on":""}" data-a="grTab" data-v="${k}">${l}</button>`).join("")}</div>${body}`;
};
A.grTab = k => { ui.gr={tab:k}; render(); };
function grDaily(){
  const id=grammarTopicToday(), t=TMAP[id], g=ui.gr; g.ans ||= {};
  const items = prItems(id).slice(0,3);
  const all = items.every((_,i)=>g.ans[i]);
  return `<section class="card stack s18"><div class="row between"><div><div class="eyebrow">Today's concept</div><h2>${esc(t.name)}${id==="pp"?" vs Past Simple":""}</h2></div><span class="chip">${tenseMastery(id)==null?"Not tested yet":tenseMastery(id)+"% mastery"}</span></div>
   <p style="max-width:62ch">${esc(t.use)}</p><p class="mono muted">${esc(t.form)}</p>
   <div class="ex-list">${t.ex.map(e=>`<div class="ex">${esc(e)}</div>`).join("")}</div>
   <div class="note acc">${ic("info")}<span>${esc(t.cn)}</span></div>
   <h3>Three quick ones</h3>
   ${items.map(([q,acc],i)=>{ const a=g.ans[i]; return `<div class="stack s6"><div style="font-weight:600">${i+1}. ${esc(q)}</div>${a?`<div class="note ${a.ok?"good":"warn"}">${ic(a.ok?"check":"x")}<span>${a.ok?"Correct":"Answer: "+esc(acc[0])} · you wrote “${esc(a.v)}”</span></div>`:`<div class="row"><input type="text" id="gd${i}" style="max-width:360px" data-enter="gdCheck" data-v="${i}" autocomplete="off"><button class="btn sm" data-a="gdCheck" data-v="${i}">Check</button></div>`}</div>`; }).join("")}
   ${all?`<div class="row"><button class="btn primary" data-a="goTense" data-v="${id}">Now say it: full lesson &amp; speaking task ${ic("arrow")}</button></div>`:""}
  </section>`;
}
A.gdCheck = i => { const id=grammarTopicToday(); const [q,acc]=prItems(id)[+i]; const el=$("#gd"+i); const v=(el&&el.value||"").trim(); if(!v) return; const ok=checkTyped(v,acc); ui.gr.ans[+i]={ok,v}; recordTense(id,ok); if(ok) addXP(2); save(); render(); };
A.goTense = id => go("tense", id);
function grNatural(){
  return `<div class="note">${ic("info")}<span>Indian English is a real, established variety. These notes aren't about \"wrong\" English; they show what international listeners expect so you can choose.</span></div>
  <div class="grid g2">${NATURAL.map(n=>`<div class="card stack s6"><div class="row" style="gap:6px">${n.tags.map(t=>`<span class="chip ${t==="INDIAN ENGLISH"?"warm":t.includes("NATURAL")?"good":t==="PROFESSIONAL"?"acc":""}">${t}</span>`).join("")}</div><h3>“${esc(n.p)}”</h3><p><b>International:</b> ${esc(n.intl)}</p><p class="muted" style="font-size:14px">${esc(n.note)}</p><button class="btn sm ghost" style="align-self:flex-start" data-a="say" data-v="${esc(n.intl.includes("already")?n.p:n.intl.split(" / ")[0])}">${ic("play")} Hear it</button></div>`).join("")}</div>`;
}
function grMovie(){
  return `<p class="muted">Contractions, slang, tone and sarcasm from films and series. Each one says when NOT to use it.</p>
  <div class="grid g2">${MOVIE.map(m=>`<div class="card stack s6"><div class="row between"><h3>“${esc(m.p)}”</h3><span class="chip ${/Slang/.test(m.reg)?"warn":"line"}">${esc(m.reg)}</span></div><p>${esc(m.m)}</p><dl class="kv" style="grid-template-columns:70px 1fr"><dt>Use</dt><dd>${esc(m.use)}</dd><dt>Avoid</dt><dd>${esc(m.avoid)}</dd></dl><button class="btn sm ghost" style="align-self:flex-start" data-a="say" data-v="${esc(m.p)}">${ic("play")} Hear the tone</button></div>`).join("")}</div>`;
}
function grPro(){
  return `<div class="grid g2">${PRO_PHRASES.map(g=>`<div class="card stack"><h3>${esc(g.g)}</h3><div class="ex-list">${g.items.map(i=>`<div class="ex">${esc(i)}</div>`).join("")}</div></div>`).join("")}</div>
  <div class="row"><button class="btn primary" data-a="goSpeak" data-v="professional">Practise these in a professional role-play ${ic("arrow")}</button></div>`;
}
A.goSpeak = m => go("speaking", m);
function grCheck(){
  const g=ui.gr;
  return `<section class="card stack"><h3>Check any sentence</h3><p class="muted">Paste something you said or wrote. You'll get a correction, a natural version and its register (formal, casual, Indian English…).</p>
  <textarea id="grc" placeholder="e.g. I am having a doubt regarding the project, please revert back.">${esc(g.last||"")}</textarea>
  <div class="row"><button class="btn primary" data-a="grCheckGo">${g.busy?'<span class="spinner"></span> Checking':"Check"}</button></div>
  ${g.res?grCheckRes(g.res):""}</section>`;
}
function grCheckRes(r){
  return `<div class="stack">${r.labels&&r.labels.length?`<div class="row" style="gap:6px">${r.labels.map(l=>`<span class="chip ${l==="INDIAN ENGLISH"?"warm":/NATURAL/.test(l)?"good":""}">${esc(l)}</span>`).join("")}</div>`:""}
   ${r.correct?`<div class="fix"><dt>Original</dt><dd>${esc(r.original)}</dd><dt style="color:var(--good)">Correct</dt><dd class="c">${esc(r.correct)}</dd>${r.natural?`<dt>Natural</dt><dd>${esc(r.natural)}</dd>`:""}${r.why?`<dt>Why</dt><dd>${esc(r.why)}</dd>`:""}</div>`:""}
   ${r.note?`<p class="muted">${esc(r.note)}</p>`:""}</div>`;
}
A.grCheckGo = async () => {
  const g=ui.gr, t=($("#grc")||{}).value||""; if(!t.trim()) return; g.last=t; g.busy=true; render();
  if(AI.fn){
    try{ const j=await aiJSON(`${LEARNER()} Analyse this learner sentence: """${t}"""
Return ONLY JSON {"labels":[any of "GRAMMATICALLY CORRECT","NATURAL","VERY NATURAL","CASUAL","FORMAL","PROFESSIONAL","REGIONAL","INDIAN ENGLISH"],"correct":"minimal corrected version","natural":"how a fluent international speaker would say it","why":"short explanation","note":"one sentence on register / Indian English if relevant","mistakes":[{"original","correct","natural","why","category","pattern"}]}`,"quick");
      g.res={...j, original:t}; (j.mistakes||[]).filter(m=>m&&m.original&&norm(m.original)!==norm(m.correct)).forEach(m=>addError(m,"checker")); }
    catch(e){ g.res=null; }
  }
  if(!g.res || !AI.fn){ const r=ruleCheck(t); r.forEach(x=>addError(x,"checker")); g.res = r.length ? {original:t, correct:r.map(x=>x.correct).join(" "), why:r.map(x=>x.why).join(" "), labels:[], note:"Offline check: common patterns only."} : {original:t, labels:[], note:"The offline checker found none of the common error patterns. Naturalness and register need the AI coach."}; }
  g.busy=false; save(); render();
};

/* ================= TENSE LAB ================= */
const LESSON_STEPS = ["Explanation","Examples","Contrast","Controlled practice","Sentence production","Speaking task","Rapid fire","Schedule review"];
VIEWS.tense = () => ui.tl ? tenseLesson() : tenseDash();
function tenseDash(){
  const groups=["Present","Past","Future","Structures"]; const weak=weakTenses();
  return `${pageHead("Tense Lab","Mastery is tracked from every answer you give anywhere in the app. Weak areas surface here automatically.")}
  ${weak.length?`<div class="note warn">${ic("mistakes")}<span><b>Weak:</b> ${weak.slice(0,3).map(w=>`${esc(TMAP[w.id].name)} (${w.m}%)`).join(", ")}. Start with the first one.</span><button class="btn sm" style="margin-left:auto" data-a="tlOpen" data-v="${weak[0].id}">Fix now</button></div>`:`<div class="note">${ic("info")}<span>Topics show "Not tested" until there's evidence. Each lesson runs 8 steps: explanation → examples → contrast → practice → production → speaking → rapid fire → review.</span></div>`}
  ${groups.map(g=>`<div class="stack"><h3>${g}</h3><div class="tense-grid">${TOPICS.filter(t=>t.g===g).map(t=>{ const m=tenseMastery(t.id), n=(S.tense[t.id]||{}).t||0, isW=weak.some(w=>w.id===t.id); return `<button class="tense-tile ${isW?"weak":""}" data-a="tlOpen" data-v="${t.id}"><div class="row between"><b>${esc(t.name)}</b>${isW?`<span class="chip bad">Weak</span>`:m!=null&&m>=85?`<span class="chip good">Strong</span>`:""}</div><div class="pct">${m==null?`<span class="muted" style="font-size:14px;font-family:var(--f-body);font-weight:600">Not tested</span>`:m+"%"}</div>${pctBar(m||0, m==null?"":m<65?"bad":m<85?"warn":"good")}<span class="muted" style="font-size:12px">${n} answer${n===1?"":"s"}</span></button>`; }).join("")}</div></div>`).join("")}`;
}
A.tlOpen = id => { ui.tl={id, step:0, ans:{}}; render(); window.scrollTo({top:0}); };
A.tlBack = () => { Timer.clear(); ui.tl=null; render(); };
A.tlStep = d => { const t=ui.tl; t.step=clamp(t.step+(+d),0,7); t.fb=null; Timer.clear(); render(); window.scrollTo({top:0}); };
function tenseLesson(){
  const L=ui.tl, t=TMAP[L.id], c=TMAP[t.cw];
  const head = `<div class="row between"><button class="btn ghost sm" data-a="tlBack">${ic("back")} All topics</button><span class="chip">${tenseMastery(t.id)==null?"Not tested":tenseMastery(t.id)+"% mastery"}</span></div>
   <div><div class="eyebrow">Step ${L.step+1} of 8 · ${LESSON_STEPS[L.step]}</div><h1>${esc(t.name)}${c?` <span class="muted" style="font-weight:500">vs ${esc(c.name)}</span>`:""}</h1></div>
   <div class="stepper">${LESSON_STEPS.map((s,i)=>`<span class="${i<L.step?"d":i===L.step?"c":""}" title="${s}"></span>`).join("")}</div>`;
  let body="";
  const nav = (nextLabel="Next step", disabled=false) => `<div class="row between"><button class="btn ghost" data-a="tlStep" data-v="-1" ${L.step?"":"disabled"}>${ic("back")} Back</button><button class="btn primary" data-a="tlStep" data-v="1" ${disabled?"disabled":""}>${nextLabel} ${ic("arrow")}</button></div>`;
  if(L.step===0) body = `<section class="card stack s18"><p style="font-size:18px;max-width:60ch">${esc(t.use)}</p><div class="card tint"><div class="eyebrow">Form</div><p class="mono" style="margin-top:6px">${esc(t.form)}</p></div>${nav()}</section>`;
  if(L.step===1) body = `<section class="card stack s18"><div class="ex-list">${t.ex.map(e=>`<div class="ex row between"><span>${esc(e)}</span><button class="btn sm ghost" data-a="say" data-v="${esc(e)}" aria-label="Hear it">${ic("play")}</button></div>`).join("")}</div><p class="muted">Read each one aloud twice. Notice the verb form.</p>${nav()}</section>`;
  if(L.step===2) body = `<section class="card stack s18"><div class="grid g2"><div class="card tint"><div class="eyebrow">${esc(t.name)}</div><p style="margin-top:6px">${esc(t.use)}</p><div class="ex" style="margin-top:10px">${esc(t.ex[0])}</div></div>${c?`<div class="card tint"><div class="eyebrow">${esc(c.name)}</div><p style="margin-top:6px">${esc(c.use)}</p><div class="ex" style="margin-top:10px">${esc(c.ex[0])}</div></div>`:""}</div><div class="note acc">${ic("info")}<span>${esc(t.cn)}</span></div>${t.id==="pp"?`<div class="scroll-x"><table class="t"><thead><tr><th>Question</th><th>Tense</th><th>Why</th></tr></thead><tbody><tr><td>What did you do yesterday?</td><td>Past Simple</td><td>Finished time</td></tr><tr><td>What have you done many times?</td><td>Present Perfect</td><td>Life experience up to now</td></tr><tr><td>What have you done this week?</td><td>Present Perfect</td><td>This week isn't finished</td></tr><tr><td>What did you do last week?</td><td>Past Simple</td><td>Finished time</td></tr></tbody></table></div>`:""}${nav()}</section>`;
  if(L.step===3){ const items3=prItems(t.id).slice(0,3); const done=items3.every((_,i)=>L.ans[i]);
    body = `<section class="card stack s18">${items3.map(([q,acc],i)=>{ const a=L.ans[i]; return `<div class="stack s6"><div style="font-weight:600">${i+1}. ${esc(q)}</div>${a?`<div class="note ${a.ok?"good":"warn"}">${ic(a.ok?"check":"x")}<span>${a.ok?"Correct.":"Answer: "+esc(acc[0])+"."} You wrote “${esc(a.v)}”.</span></div>`:`<div class="row"><input type="text" id="tp${i}" style="max-width:380px" data-enter="tpCheck" data-v="${i}" autocomplete="off"><button class="btn sm" data-a="tpCheck" data-v="${i}">Check</button></div>`}</div>`; }).join("")}${nav("Next step",!done)}</section>`; }
  if(L.step===4) body = `<section class="card stack s18"><p>Write <b>two sentences of your own</b> using ${esc(t.name)}${c?`, and one using ${esc(c.name)} to show the difference`:""}.</p><textarea id="tprod" placeholder="1. …&#10;2. …&#10;3. …">${esc(L.prodText||"")}</textarea><div class="row"><button class="btn" data-a="tprodCheck">${L.busy?'<span class="spinner"></span> Checking':"Check my sentences"}</button></div>${L.fb?feedbackHTML(L.fb):""}${nav("Next step",!L.fb)}</section>`;
  if(L.step===5) body = `<section class="card stack s18"><div class="eyebrow">Speaking task · 60 seconds</div><h2>${esc(t.sp)}</h2>${inputNote()}<div class="row between"><span class="muted" style="font-size:13px">Use the tense naturally; don't force it into every sentence.</span><span class="timer" id="tstimer">1:00</span></div><textarea id="tspeak" data-track="ts" style="min-height:150px" data-wc="tswc">${esc(L.spText||"")}</textarea><div class="row between"><div class="row">${micBtn("tspeak")}<span class="mono muted" id="tswc">0 words</span></div><button class="btn" data-a="tspeakGo">${L.busy?'<span class="spinner"></span> Analysing':"Get feedback"}</button></div>${L.rep?reportHTML(L.rep,true):""}${nav("Next step",!L.rep)}</section>`;
  if(L.step===6){ const rf=L.rf ||= {qs:shuffle([...prItems(t.id).slice(3).concat(prItems(t.id).slice(0,1)).map(([q,a])=>({q,a})), ...TOPICS.filter(x=>x.id===t.cw).flatMap(x=>x.pr.map(([q,a])=>({q,a,t:x.id})))]).slice(0,6), i:0, score:0, log:[]};
    if(rf.i>=rf.qs.length) body = `<section class="card stack s18"><h2>${rf.score}/${rf.qs.length} in rapid fire</h2><div class="list">${rf.log.map(l=>`<div class="li"><div class="ic ${l.ok?"done":""}">${ic(l.ok?"check":"x")}</div><div class="grow">${esc(l.q)}<div class="muted" style="font-size:13px">${l.ok?"":`Answer: ${esc(l.a)} · `}you: ${esc(l.v||"(time out)")}</div></div></div>`).join("")}</div>${nav("Finish")}</section>`;
    else { const q=rf.qs[rf.i]; body = `<section class="card stack s18"><div class="row between"><span class="eyebrow">${rf.i+1}/${rf.qs.length}</span><span class="timer" id="rftimer">0:08</span></div><h2>${esc(q.q)}</h2><input type="text" id="rfin" data-enter="rfGo" autocomplete="off"><button class="btn primary" data-a="rfGo">Submit</button></section>`; } }
  if(L.step===7){ const m=tenseMastery(t.id); body = `<section class="card stack s18"><h2>Lesson complete</h2><p>Current mastery: <b>${m==null?"—":m+"%"}</b>. ${m!=null&&m<65?"Still weak: it'll come back in tomorrow's plan and in your speaking prompts.":m!=null&&m<85?"Getting there. It'll appear in reviews this week.":"Strong. It'll appear in spaced reviews so it stays that way."}</p><div class="row"><button class="btn primary" data-a="tlFinish">Back to Tense Lab</button><button class="btn" data-a="goSpeak" data-v="free">Use it in free talk</button></div></section>`; }
  return head+body;
}
A.tpCheck = i => { const L=ui.tl, t=TMAP[L.id]; const el=$("#tp"+i); const v=(el&&el.value||"").trim(); if(!v) return; const ok=checkTyped(v,prItems(t.id)[+i][1]); L.ans[+i]={ok,v}; recordTense(t.id,ok); if(ok) addXP(2); save(); render(); };
A.tprodCheck = async () => { const L=ui.tl, t=TMAP[L.id]; const v=($("#tprod")||{}).value||""; if(words(v).length<6) { toast("Write at least two full sentences."); return; } L.prodText=v; L.busy=true; render();
  const r=await evalSentence({text:v, target:`Two sentences using ${t.name} correctly${TMAP[t.cw]?` and one using ${TMAP[t.cw].name}`:""}`});
  L.busy=false; L.fb={...r,text:v}; recordTense(t.id, r.ok); if(r.ok) addXP(6); save(); render(); };
TRACK.ts = () => { if(ui.tl) { ui.tl.t0=Date.now(); countdown(60,"tstimer"); } };
A.tspeakGo = async () => { const L=ui.tl, t=TMAP[L.id]; const v=($("#tspeak")||{}).value||""; if(words(v).length<10){ toast("Say a little more first: at least two or three sentences."); return; } Timer.clear(); L.spText=v; L.busy=true; render();
  const sec = L.t0?(Date.now()-L.t0)/1000:60;
  const rep = await analyze({task:t.sp+` (target grammar: ${t.name})`, text:v, mode:"tense", inputMode:inputMode(), sec});
  Voice.reset(); L.busy=false; L.rep=rep; applyReport(rep); logSpeaking({mode:"tense",modeName:"Tense speaking",task:t.sp,text:v,sec,rep}); recordTense(t.id, (rep.scores.grammar||60)>=65); completeBlock("tense"); save(); render(); };
AFTER.tense = () => { const L=ui.tl; if(!L||L.step!==6) return; const rf=L.rf; if(!rf||rf.i>=rf.qs.length) return; const el=$("#rfin"); el&&el.focus(); countdown(8,"rftimer",()=>A.rfGo(true)); };
A.rfGo = (timeout) => { const L=ui.tl, rf=L.rf; if(!rf) return; const q=rf.qs[rf.i]; if(!q) return; Timer.clear(); const v=timeout===true?"":(($("#rfin")||{}).value||"").trim(); const ok=!!v && checkTyped(v,q.a); if(ok) rf.score++; rf.log.push({q:q.q,a:q.a[0],v,ok}); recordTense(q.t||L.id, ok); rf.i++; save(); render(); };
A.tlFinish = () => { completeBlock("tense"); addXP(10); ui.tl=null; checkAch(); render(); };
/* ================= SPEAKING LAB ================= */
const SPEAK_MODES = [
 {id:"conversation",t:"Real conversation",d:"The AI becomes a real person: friend, manager, recruiter, customer. No corrections until the end.",chat:true,feature:true},
 {id:"free",t:"Free talk",d:"A topic from your interests. The duration grows as you improve."},
 {id:"rapid",t:"Rapid response",d:"Five quick questions, 15 seconds each. Speed of starting is measured."},
 {id:"story",t:"Storytelling",d:"Setup → problem → resolution, then retell it five ways."},
 {id:"interview",t:"Interview",d:"HR, behavioural or technical interview with a recruiter.",chat:true},
 {id:"debate",t:"Debate",d:"Pick a side. Your partner argues the other one, and doesn't give up easily.",chat:true},
 {id:"professional",t:"Professional",d:"Meetings, disagreeing politely, explaining problems, negotiating.",chat:true},
 {id:"presentation",t:"Presentation",d:"Two-minute structured talk: hook, three points, close."},
 {id:"roleplay",t:"Roleplay",d:"Shopkeeper, tourist, stranger at the airport, unhappy customer.",chat:true},
 {id:"fluency",t:"Fluency challenge",d:"30 s to 3 min without stopping. When a word is missing, talk around it."}
];
const SPMAP = Object.fromEntries(SPEAK_MODES.map(m=>[m.id,m]));
function startSpeakMode(id){
  const m=SPMAP[id]; if(!m) return null;
  return {mode:id, phase:"setup", dur: id==="free"?S.prefs.freeTalkSec: id==="presentation"?120: id==="fluency"?60: 90, topic: interestTopic(), msgs:[], ri:0, rlog:[]};
}
VIEWS.speaking = () => {
  const s=ui.sp;
  if(!s) return speakMenu();
  const m=SPMAP[s.mode];
  const back = `<button class="btn ghost sm" data-a="spMenu">${ic("back")} Speaking Lab</button>`;
  if(s.phase==="report") return back+speakReport();
  if(s.phase==="coach") return back+coachView();
  if(m.chat && s.phase==="chat") return back+chatView();
  if(s.phase==="task") return back+speakTask();
  return back+speakSetup();
};
A.spMenu = () => { Timer.clear(); TTS.stop(); ui.sp=null; render(); };
A.spMode = id => { ui.sp=startSpeakMode(id); render(); window.scrollTo({top:0}); };
function speakMenu(){
  const total=totalSpeakMin(); const sess=S.speaking.length;
  return `${pageHead("Speaking Lab","The centre of English OS. Prompt → speak → analyse → retry.", `<span class="chip">${total} min total</span><span class="chip">${sess} sessions</span>`)}
  ${inputNote()}
  <div class="mode-grid">${SPEAK_MODES.map(m=>`<button class="mode ${m.feature?"feature":""}" data-a="spMode" data-v="${m.id}"><div class="row between"><div class="ic ${m.feature?"acc":""}">${ic(m.chat?"chat":m.id==="rapid"||m.id==="fluency"?"bolt":m.id==="story"?"story":"speaking")}</div>${m.chat&&AI.state!=="on"?`<span class="chip warn">scripted offline</span>`:""}</div><b>${m.t}</b><span>${m.d}</span></button>`).join("")}</div>
  ${S.speaking.length?`<section class="card"><h3 style="margin-bottom:6px">Recent sessions</h3><div class="list">${S.speaking.slice(-5).reverse().map(x=>`<div class="li"><div class="ic">${ic("speaking")}</div><div class="grow"><b>${esc(x.modeName)}</b><div class="muted" style="font-size:13px">${esc((x.task||"").slice(0,90))}</div></div><span class="mono muted" style="font-size:12.5px">${x.d} · ${x.words}w${x.scores&&x.scores.grammar!=null?` · G${x.scores.grammar}`:""}</span></div>`).join("")}</div></section>`:""}`;
}

/* ---------- setup screens ---------- */
function speakSetup(){
  const s=ui.sp, m=SPMAP[s.mode];
  let inner="";
  if(s.mode==="free"){
    const topics = S.profile.topics.length?S.profile.topics:TOPIC_LIST;
    const dpf = dp()&&dp().free_prompts ? (dp().free_prompts.find(x=>x.topic===s.topic)||(s.topicPicked?null:dp().free_prompts[0])) : null;
    s.prompt ||= dpf ? dpf.prompt : (!S.daily||!Object.keys(S.daily).length)&&!S.speaking.some(x=>x.task===DECISION_PROMPT) ? DECISION_PROMPT : pick(FREE_PROMPTS[s.topic]||FREE_PROMPTS.career);
    inner = `<div class="field"><span class="lbl">Topic</span><div class="pillset">${TOPIC_LIST.map(t=>`<button class="pill ${s.topic===t?"on":""}" data-a="spTopic" data-v="${t}">${t}${topics.includes(t)?" ·":""}</button>`).join("")}</div></div>
     ${durPick(s,[30,60,90,120,180,300])}<div class="card tint"><div class="eyebrow">Your prompt</div><h3 style="margin-top:6px">${esc(s.prompt)}</h3><button class="btn sm ghost" data-a="spNewPrompt" style="margin-top:8px">${ic("refresh")} Different prompt</button></div>`;
  }
  if(s.mode==="story"){
    s.prompt ||= (dp()&&dp().story_prompt) || pick(STORY_PROMPTS);
    inner = `<div class="card tint stack"><div class="eyebrow">Story structure</div><div class="grid g4">${STORY_PARTS.map(([a,b],i)=>`<div><b>${i+1}. ${a}</b><div class="muted" style="font-size:13px">${b}</div></div>`).join("")}</div><div class="eyebrow" style="margin-top:6px">Connectors to try</div><div class="pillset">${CONNECTORS.map(c=>`<span class="chip">${esc(c)}</span>`).join("")}</div></div>${durPick(s,[60,90,120,180])}<div class="card tint"><div class="eyebrow">${s.retell?"Retell: "+esc(RETELL.find(r=>r.id===s.retell).t):"Your story"}</div><h3 style="margin-top:6px">${esc(s.retell?RETELL.find(r=>r.id===s.retell).d+" Same story as before.":s.prompt)}</h3></div>`;
  }
  if(s.mode==="presentation"){ s.prompt ||= (dp()&&dp().presentation_topic) || pick(PRESENT_PROMPTS); inner = `<div class="card tint stack s6"><div class="eyebrow">Structure</div><p><b>Hook</b> (a question or surprising fact) → <b>Point 1, 2, 3</b> with signposting (“First…”, “The second reason…”, “Finally…”) → <b>Close</b> (one-line summary + call to action).</p></div>${durPick(s,[60,120,180,300])}<div class="card tint"><div class="eyebrow">Your presentation</div><h3 style="margin-top:6px">${esc(s.prompt)}</h3><button class="btn sm ghost" data-a="spNewPrompt" style="margin-top:8px">${ic("refresh")} Different topic</button></div>`; }
  if(s.mode==="fluency"){ s.prompt ||= (dp()&&dp().fluency_topic) || pick(FLUENCY_TOPICS); const c=pick(CIRCUM);
    inner = `<div class="card tint stack s6"><div class="eyebrow">The one rule</div><p>Don't stop because you don't know a word. Talk around it. Forgot <b>“${esc(c[0])}”</b>? Say <i>“${esc(c[1])}.”</i></p><div class="pillset">${["What's the word… it's the thing that…","It's a kind of…","Let me put it another way."].map(x=>`<span class="chip">${esc(x)}</span>`).join("")}</div></div>${durPick(s,[30,60,90,120,180])}<div class="card tint"><div class="eyebrow">Topic</div><h3 style="margin-top:6px">${esc(s.prompt)}</h3><button class="btn sm ghost" data-a="spNewPrompt" style="margin-top:8px">${ic("refresh")} Different topic</button></div>`; }
  if(s.mode==="rapid"){ inner = `<p>Five questions. Each appears with a 15-second clock. Start answering immediately; the time until your first keystroke${Voice.possible?" or word":""} is your response speed.</p><div class="card tint"><p class="muted">Tip: start with a short reaction (“Honestly…”, “Good question…”, “Hmm, I'd say…”) to buy a second without going silent.</p></div>`; }
  if(m.chat){
    if(s.mode==="conversation"||s.mode==="roleplay"){
      const list = s.mode==="roleplay"?PERSONAS.filter(p=>["daily","shopkeeper","tourist","stranger","customer","client","entrepreneur","investor"].includes(p.id)):PERSONAS;
      s.persona ||= (list.find(p=>p.id==="daily")||list[hashDay(today())%list.length]).id;
      inner = `<div class="field"><span class="lbl">Who are you talking to?</span><div class="grid g3">${list.map(p=>`<button class="opt ${s.persona===p.id?"sel":""}" data-a="spPersona" data-v="${p.id}"><span><b>${esc(p.name)}</b><br><span class="muted" style="font-size:13px">${esc(p.scene)}</span></span></button>`).join("")}</div></div>`;
    }
    if(s.mode==="interview"){ s.itype ||= "hr"; inner = `<div class="field"><span class="lbl">Interview type</span><div class="pillset">${[["hr","HR / general"],["behavioural","Behavioural (STAR)"],["technical","Technical (explain your work)"]].map(([k,l])=>`<button class="pill ${s.itype===k?"on":""}" data-a="spIType" data-v="${k}">${l}</button>`).join("")}</div></div><div class="field"><label for="sprole">Role you're interviewing for</label><input type="text" id="sprole" value="${esc(s.role||"Junior software engineer")}"></div>`; }
    if(s.mode==="debate"){ s.motion ||= (dp()&&dp().debate_motion) || pick(DEBATES); s.side ||= "for"; inner = `<div class="card tint"><div class="eyebrow">Motion</div><h3 style="margin-top:6px">${esc(s.motion)}</h3><button class="btn sm ghost" data-a="spMotion" style="margin-top:8px">${ic("refresh")} Different motion</button></div><div class="field"><span class="lbl">Your side</span><div class="pillset"><button class="pill ${s.side==="for"?"on":""}" data-a="spSide" data-v="for">For</button><button class="pill ${s.side==="against"?"on":""}" data-a="spSide" data-v="against">Against</button></div></div>`; }
    if(s.mode==="professional"){ s.scene ||= PRO_SCENES[0].id; inner = `<div class="grid g2">${PRO_SCENES.map(p=>`<button class="opt ${s.scene===p.id?"sel":""}" data-a="spScene" data-v="${p.id}"><span><b>${esc(p.t)}</b><br><span class="muted" style="font-size:13px">${esc(p.d)}</span></span></button>`).join("")}</div>`; }
    inner += AI.state!=="on" ? `<div class="note warn">${ic("info")}<span>The AI partner isn't connected in this view, so replies are scripted and won't react to what you say. You still get offline grammar feedback at the end.</span></div>` : `<div class="note">${ic("info")}<span>Your partner won't correct you during the conversation. After at least 4 replies, end it to enter Coach mode.</span></div>`;
  }
  return `<section class="card stack s18"><div><div class="eyebrow">Speaking · ${esc(m.t)}</div><h1>${esc(m.t)}</h1><p class="muted" style="margin-top:6px">${esc(m.d)}</p></div>${inner}
   <div class="row"><button class="btn primary lg" data-a="${m.chat?"spChatStart":"spGo"}">${m.chat?"Start conversation":"Start speaking"} ${ic("arrow")}</button></div></section>`;
}
function durPick(s, opts){ return `<div class="field"><span class="lbl">Duration</span><div class="pillset">${opts.map(o=>`<button class="pill ${s.dur===o?"on":""}" data-a="spDur" data-v="${o}">${o<60?o+" sec":o/60+" min"}</button>`).join("")}</div></div>`; }
A.spTopic = t => { const s=ui.sp; s.topic=t; s.topicPicked=true; const g=dp()&&dp().free_prompts&&dp().free_prompts.find(x=>x.topic===t); s.prompt = g&&s.prompt!==g.prompt ? g.prompt : pick(FREE_PROMPTS[t]); render(); };
A.spNewPrompt = () => { const s=ui.sp; s.prompt = s.mode==="free"?pick(FREE_PROMPTS[s.topic]):s.mode==="presentation"?pick(PRESENT_PROMPTS):s.mode==="fluency"?pick(FLUENCY_TOPICS):pick(STORY_PROMPTS); render(); };
A.spDur = d => { ui.sp.dur=+d; render(); };
A.spPersona = p => { ui.sp.persona=p; render(); };
A.spIType = k => { const r=$("#sprole"); if(r) ui.sp.role=r.value; ui.sp.itype=k; render(); };
A.spMotion = () => { ui.sp.motion=pick(DEBATES.filter(d=>d!==ui.sp.motion)); render(); };
A.spSide = v => { ui.sp.side=v; render(); };
A.spScene = v => { ui.sp.scene=v; render(); };

/* ---------- monologue task ---------- */
A.spGo = () => { const s=ui.sp; Voice.reset(); s.phase="task"; s.t0=null; s.lat=null; s.shown=Date.now(); if(s.mode==="rapid"){ s.rq = dp()&&dp().rapid&&dp().rapid.length>=5 ? shuffle(dp().rapid).slice(0,5) : shuffle(RAPID).slice(0,5); s.ri=0; s.rlog=[]; } render(); };
function speakTask(){
  const s=ui.sp, m=SPMAP[s.mode];
  if(s.mode==="rapid"){
    const q=s.rq[s.ri];
    return `<section class="card stack s18"><div class="row between"><span class="eyebrow">Rapid response · ${s.ri+1}/5</span><span class="timer big" id="sptimer">0:15</span></div><h1>${esc(q)}</h1>${inputNote()}<textarea id="spin" data-track="sp" style="min-height:110px" data-enter="rpNext" placeholder="Answer now…"></textarea><div class="row">${micBtn("spin")}<button class="btn primary" data-a="rpNext">${s.ri<4?"Next question":"Finish"} ${ic("arrow")}</button></div></section>`;
  }
  const prompt = s.retell ? `${RETELL.find(r=>r.id===s.retell).d} (Retell your story: “${s.prompt}”)` : s.prompt;
  return `<section class="card stack s18"><div class="row between"><span class="eyebrow">${esc(m.t)} · target ${s.dur<60?s.dur+" sec":s.dur/60+" min"}</span><span class="timer big" id="sptimer">${fmt(s.dur)}</span></div>
   <h2 style="font-size:24px">${esc(prompt)}</h2>
   ${inputNote()}
   <p class="muted" id="sphint" style="font-size:13.5px">The clock starts when you start. Keep going until it ends${s.mode==="fluency"?". No stopping: talk around missing words":""}.</p>
   <textarea id="spin" data-track="sp" style="min-height:220px" data-wc="spwc" placeholder="${Voice.possible?"Tap Speak, or type…":"Type as if you're speaking: don't edit, keep going…"}">${esc(s.draft||"")}</textarea>
   <div class="row between"><div class="row">${micBtn("spin")}<span class="mono muted" id="spwc">0 words · target ~${Math.round(s.dur*1.8)}</span></div><button class="btn primary" data-a="spFinish">${s.busy?'<span class="spinner"></span> Analysing':"Finish & analyse"}</button></div>
  </section>`;
}
TRACK.sp = el => {
  const s=ui.sp; if(!s) return; s.t0=Date.now(); s.lat=s.t0-(s.shown||s.t0);
  if(s.mode==="rapid") return;
  countdown(s.dur,"sptimer",()=>{ const h=$("#sphint"); if(h) h.innerHTML="<b>Time.</b> Finish your sentence, then tap Finish."; });
};
AFTER.speaking = () => {
  const s=ui.sp; if(!s) return;
  if(s.phase==="task"){ const el=$("#spin"); if(el){ el.focus(); s.shown=Date.now(); }
    if(s.mode==="rapid"){ countdown(15,"sptimer",()=>A.rpNext(true)); } }
  if(s.phase==="chat"){ const c=$("#chatbox"); if(c) c.scrollTop=c.scrollHeight; const t=$("#chatin"); t&&!s.busy&&t.focus(); if(!s.msgs.length && !s.busy) partnerOpen(); }
};
A.rpNext = (timeout) => {
  const s=ui.sp; const el=$("#spin"); const v=(el&&el.value||"").trim(); const fk=el&&el.dataset.firstkey?+el.dataset.firstkey:null;
  s.rlog.push({q:s.rq[s.ri], a:v, lat: fk?fk-s.shown:null});
  Timer.clear(); s.ri++;
  if(s.ri>=5){ const text=s.rlog.map(r=>r.a).filter(Boolean).join("\n"); s.draft=text; finishMonologue(text, s.rlog.reduce((a,r)=>a+(r.lat?15:15),0)); return; }
  render();
};
A.spFinish = () => { const s=ui.sp; const el=$("#spin"); const v=(el&&el.value||"").trim(); if(words(v).length<8){ toast("Keep talking: say at least a few sentences before finishing."); return; } s.draft=v; finishMonologue(v, s.t0?(Date.now()-s.t0)/1000:s.dur); };
async function finishMonologue(text, sec){
  const s=ui.sp; Timer.clear(); if(Voice.active) await Voice.stop(); s.busy=true; render();
  const task = s.mode==="rapid" ? "Rapid response: "+s.rlog.map(r=>r.q).join(" / ") : (s.retell?RETELL.find(r=>r.id===s.retell).d+" Story: "+s.prompt:s.prompt);
  const rep = await analyze({task, text, mode:s.mode, inputMode:inputMode(), sec, latency:s.lat});
  if(s.mode==="rapid"){ const lats=s.rlog.map(r=>r.lat).filter(x=>x!=null); rep.measured.latencies=s.rlog; rep.measured.avgLat = lats.length?Math.round(lats.reduce((a,b)=>a+b,0)/lats.length):null; rep.measured.missed=s.rlog.filter(r=>!r.a).length; }
  applyReport(rep); logSpeaking({mode:s.mode, modeName:SPMAP[s.mode].t+(s.retell?" (retell)":""), task, text, sec, rep});
  if(s.mode==="free"){ const sc=rep.scores; const ok=(sc.grammar||0)>=65 && rep.measured.words>=s.dur*1.2; if(ok){ const steps=[30,60,90,120,180,300]; const i=steps.indexOf(S.prefs.freeTalkSec); if(i>=0&&i<steps.length-1&&s.dur>=S.prefs.freeTalkSec){ S.prefs.freeTalkSec=steps[i+1]; rep.levelUp=steps[i+1]; } } }
  Voice.reset(); s.busy=false; s.rep=rep; s.phase="report"; save(); render(); window.scrollTo({top:0});
}
function logSpeaking({mode, modeName, task, text, sec, rep}){
  const m=rep.measured||{};
  S.speaking.push({d:today(), mode, modeName, task, words:m.words||words(text).length, sec:Math.round(sec||0), scores:rep.scores, inputMode:m.inputMode, fillers:m.fillers, longPauses:m.pron?m.pron.longPauses:null, pronScore:m.pron?m.pron.pron:null, source:rep.source});
  D().speakSec += Math.min(sec||0, 600); addXP(15);
  completeBlock(SPMAP[mode]&&SPMAP[mode].chat?"convo":"speaking");
  if(mode==="conversation"||!(SPMAP[mode]&&SPMAP[mode].chat)) completeBlock("speaking");
  checkAch();
}

/* ---------- report ---------- */
const SCORE_KEYS = [["fluency","Fluency"],["grammar","Grammar"],["vocabulary","Vocabulary"],["coherence","Coherence"],["naturalness","Naturalness"],["interaction","Interaction"]];
function reportHTML(rep, compact){
  const sc=rep.scores||{}, m=rep.measured||{};
  const scoreCells = SCORE_KEYS.filter(([k])=>k!=="interaction"||sc.interaction!=null).map(([k,l])=>{ const v=sc[k]; return v==null?`<div class="score na"><span class="l">${l}</span><span class="n">Not measured</span><span class="muted" style="font-size:12px">${k==="fluency"&&m.inputMode!=="voice"?"Typed input can't show fluency":"Not enough evidence"}</span></div>`:`<div class="score"><span class="l">${l}${k==="fluency"&&m.pron?" · audio":""}</span><span class="n">${v}<small>/100</small></span>${pctBar(v, v<55?"bad":v<70?"warn":"good")}</div>`; }).join("");
  const meas = [
    ["Words", m.words], m.durationSec?["Time", fmt(m.durationSec)]:null, m.latencyMs!=null?["Time to start",(m.latencyMs/1000).toFixed(1)+" s"]:null,
    m.avgLat!=null?["Avg. response start",(m.avgLat/1000).toFixed(1)+" s"]:null, m.missed!=null?["Unanswered", m.missed]:null,
    ["Self-corrections", m.selfCorrections], ["Repeated words", m.repetitions], ["Abandoned sentences", m.abandoned],
    ["Fillers", m.pron?m.pron.fillers+" (um, uh, er)":m.inputMode==="voice"?m.fillers+" (dictation often drops them)":"Not measured (typed)"],
    ["Pauses / hesitation", m.pron?`${m.pron.pauses} over 0.5 s · ${m.pron.longPauses} over 1.5 s`:"Not measured (no audio)"], ["Speaking rate", m.pron&&m.pron.wpm?m.pron.wpm+" words/min":"Not measured"], ["Pronunciation", m.pron&&m.pron.pron!=null?m.pron.pron+"/100 (details below)":"Not measured (no audio)"]
  ].filter(Boolean);
  return `<div class="stack s18 fade-in">
   ${rep.aiError?`<div class="note warn">${ic("info")}<span>${esc(rep.aiError)}</span></div>`:""}
   ${rep.summary?`<p style="font-size:16px;max-width:70ch">${esc(rep.summary)}</p>`:""}
   <div class="scores">${scoreCells}</div>
   ${rep.note?`<p class="muted" style="font-size:13px">${esc(rep.note)}</p>`:""}
   ${m.pron?pronHTML(m.pron):""}
   ${compact?"":`<details><summary class="lbl" style="cursor:pointer">What was measured</summary><dl class="kv" style="margin-top:10px">${meas.map(([a,b])=>`<dt>${a}</dt><dd class="tab-nums">${esc(b)}</dd>`).join("")}</dl></details>`}
   ${(rep.strengths||[]).length||(rep.fix_next||[]).length?`<div class="grid g2">${rep.strengths&&rep.strengths.length?`<div class="card tint"><h4>What worked</h4><ul style="margin:6px 0 0;padding-left:18px">${rep.strengths.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></div>`:""}${rep.fix_next&&rep.fix_next.length?`<div class="card tint"><h4>Do differently next time</h4><ul style="margin:6px 0 0;padding-left:18px">${rep.fix_next.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></div>`:""}</div>`:""}
   ${rep.mistakes&&rep.mistakes.length?`<div class="stack"><h3>Corrections (${rep.mistakes.length})</h3>${rep.mistakes.map((x,i)=>fixCard(x,i)).join("")}</div>`:`<div class="note">${ic("check")}<span>No important mistakes flagged${rep.source==="offline"?" by the offline checker":""}.</span></div>`}
   ${rep.better?`<div class="card tint"><div class="eyebrow">A stronger version (one level up)</div><p style="margin-top:6px">${esc(rep.better)}</p><button class="btn sm ghost" style="margin-top:8px" data-a="say" data-v="${esc(rep.better)}">${ic("play")} Listen</button></div>`:""}
  </div>`;
}
function fixCard(x,i){
  const err = S.errors.find(e=>e.key===norm(x.pattern||x.why||x.correct).slice(0,60));
  return `<div class="stack s6"><dl class="fix"><dt style="color:var(--bad)">Original</dt><dd class="o">${esc(x.original)}</dd><dt style="color:var(--good)">Correct</dt><dd class="c">${esc(x.correct)}</dd>${x.natural&&norm(x.natural)!==norm(x.correct)?`<dt>Natural</dt><dd>${esc(x.natural)}</dd>`:""}<dt>Why</dt><dd>${esc(x.why)}</dd></dl>
   ${err?`<div class="row" style="gap:6px"><span class="chip ${err.freq>1?"bad":""}">${err.freq>1?`Seen ${err.freq}×`:"First time"}</span><span class="chip line">${esc(err.cat)}</span><button class="btn sm" data-a="drillOpen" data-v="${err.id}">Practise: write 2 new examples</button></div>`:""}
   ${ui.drill&&err&&ui.drill.id===err.id?drillHTML(err):""}</div>`;
}
function speakReport(){
  const s=ui.sp, rep=s.rep, m=SPMAP[s.mode];
  return `<section class="card stack s18"><div><div class="eyebrow">Report · ${esc(m.t)}${s.retell?" · retell":""}</div><h1>${rep.source==="ai"?"Coach feedback":"Offline feedback"}</h1></div>
   ${rep.levelUp?`<div class="note good">${ic("star")}<span>Free-talk target increased to ${rep.levelUp<60?rep.levelUp+" seconds":rep.levelUp/60+" minutes"}. Your answers are long and accurate enough to stretch.</span></div>`:""}
   ${reportHTML(rep)}
   <div class="divider"></div>
   ${s.mode==="story"?`<div class="stack"><h3>Now retell it</h3><div class="pillset">${RETELL.map(r=>`<button class="pill" data-a="spRetell" data-v="${r.id}">${r.t}</button>`).join("")}</div></div>`:""}
   <div class="row"><button class="btn primary" data-a="spRetry">${ic("replay")} Retry same prompt</button><button class="btn" data-a="spNext">New prompt</button><button class="btn ghost" data-a="spMenu">Other mode</button>${ui.session?`<button class="btn dark" data-a="sessNext">Continue session ${ic("arrow")}</button>`:""}</div>
  </section>`;
}
A.spRetry = () => { const s=ui.sp; Voice.reset(); s.phase="task"; s.rep=null; s.t0=null; s.draft=""; if(s.mode==="rapid"){ s.ri=0; s.rlog=[]; } render(); };
A.spNext = () => { const s=ui.sp; s.prompt=null; s.retell=null; s.phase="setup"; s.rep=null; s.draft=""; render(); };
A.spRetell = id => { const s=ui.sp; Voice.reset(); s.retell=id; s.dur = id==="shorter"?30:id==="longer"?180:90; s.phase="task"; s.rep=null; s.draft=""; render(); };

/* ---------- drill (shared with Mistakes) ---------- */
function drillHTML(err){
  const d=ui.drill;
  return `<div class="card tint stack fade-in"><div class="eyebrow">Fix it for good</div><p>Write <b>two new sentences</b> that use the correct pattern: <span class="c" style="color:var(--good);font-weight:600">${esc(err.correct)}</span></p><p class="muted" style="font-size:13px">${esc(err.why)}</p>
   <input type="text" id="dr1" placeholder="New sentence 1" value="${esc(d.v1||"")}"><input type="text" id="dr2" placeholder="New sentence 2" value="${esc(d.v2||"")}">
   <div class="row"><button class="btn primary sm" data-a="drillCheck" data-v="${err.id}">${d.busy?'<span class="spinner"></span> Checking':"Check both"}</button><button class="btn ghost sm" data-a="drillClose">Close</button></div>
   ${d.fb?`<div class="note ${d.fb.ok?"good":"warn"}">${ic(d.fb.ok?"check":"info")}<span>${esc(d.fb.msg)}</span></div>`:""}</div>`;
}
A.drillOpen = id => { ui.drill={id}; render(); const i=$("#dr1"); i&&i.focus(); };
A.drillClose = () => { ui.drill=null; render(); };
A.drillCheck = async id => {
  const err=S.errors.find(e=>e.id===id); const d=ui.drill; d.v1=($("#dr1")||{}).value||""; d.v2=($("#dr2")||{}).value||"";
  if(words(d.v1).length<3||words(d.v2).length<3){ toast("Write two complete sentences."); return; }
  d.busy=true; render();
  const tgt = `Write a new, original sentence that correctly uses this pattern: "${err.correct}" (rule: ${err.why}). It must not copy the example.`;
  const [a,b] = await Promise.all([evalSentence({text:d.v1,target:tgt}), evalSentence({text:d.v2,target:tgt})]);
  const ok=a.ok&&b.ok; d.busy=false;
  if(ok){ err.drill++; err.status = err.drill>=3?"Fixed":"Improving"; addXP(10); }
  d.fb={ok, msg: ok ? (err.status==="Fixed"?"Both correct. Three successful drills: marked Fixed. It'll still be watched in your speaking.":`Both correct. ${3-err.drill} more successful drill${3-err.drill>1?"s":""} (ideally on another day) to mark it Fixed.`) : [a,b].filter(x=>!x.ok).map(x=>x.feedback+(x.corrected?` → ${x.corrected}`:"")).join(" · ")};
  save(); checkAch(); render();
};

/* ---------- conversation ---------- */
function convoConfig(){
  const s=ui.sp;
  if(s.mode==="conversation"||s.mode==="roleplay"){ const p=PERSONAS.find(x=>x.id===s.persona)||PERSONAS[0]; return {name:p.name, desc:p.desc, scene:p.scene}; }
  if(s.mode==="interview"){ const r=s.role||"Junior software engineer"; const t={hr:"general HR questions (tell me about yourself, strengths, why this company, salary expectations)",behavioural:"behavioural questions; push for STAR-structured answers with specifics",technical:"ask them to explain projects and technical decisions clearly to a semi-technical interviewer"}[s.itype]; return {name:"Sarah, a recruiter", desc:`a recruiter interviewing the learner for a ${r} role; ask ${t}; one question at a time; ask follow-ups when answers are vague`, scene:`Interview for ${r}.`}; }
  if(s.mode==="debate"){ return {name:"Your debate opponent", desc:`a sharp, fair debater arguing ${s.side==="for"?"AGAINST":"FOR"} the motion "${s.motion}". Challenge the learner's reasons, ask for evidence, concede small points occasionally, never give up your side`, scene:`Debate: ${s.motion}. Learner is ${s.side.toUpperCase()}.`}; }
  if(s.mode==="professional"){ const sc=PRO_SCENES.find(x=>x.id===s.scene)||PRO_SCENES[0]; const p=PERSONAS.find(x=>x.id===sc.p); return {name:p.name, desc:p.desc, scene:`${sc.t}: ${sc.d}`}; }
}
A.spChatStart = () => { const s=ui.sp; const r=$("#sprole"); if(r) s.role=r.value; s.cfg=convoConfig(); s.phase="chat"; s.msgs=[]; s.t0=Date.now(); render(); };
function partnerSystem(){
  const c=ui.sp.cfg;
  return `You are role-playing ${c.name}: ${c.desc}. Scenario: ${c.scene}
You are talking with ${S.name}, an English learner from Maharashtra, India (level about ${S.levels?S.levels.overall:"B1"}). Stay fully in character as a real person. You are NOT a teacher: never correct their English, never comment on their language.
Speak like a real person in a live spoken conversation: 1–3 short sentences, contractions, natural reactions. Ask follow-up questions, refer back to details they mentioned earlier, disagree sometimes, and occasionally (about 1 in 5 turns) either ask them to clarify something vague or ask an unexpected question / shift the topic naturally. No emojis, no stage directions, no lists.`;
}
const SCRIPT = ["Okay. Can you tell me a bit more about that?","Hmm, why do you think so?","Sorry, I didn't quite catch that. What do you mean exactly?","Interesting. Can you give me an example?","I'm not sure I agree, to be honest. What about the other side of it?","Totally different question: what did you do last weekend?","And how did that make you feel?","Right. So what would you do differently next time?"];
async function partnerOpen(){
  const s=ui.sp; s.busy=true; render();
  let line = `Hi! ${s.cfg.scene.split(".")[0]}. So, how are things with you?`;
  if(AI.fn){ try{ line=(await aiText(partnerSystem()+"\n\nOpen the conversation with your first line now.")).trim(); }catch(e){ s.offlineNote=true; } }
  s.msgs.push({role:"assistant",content:line}); s.busy=false; render(); chatAfterReply(line);
}
function chatListen(){
  const s=ui.sp; if(!s||!s.voiceMode||s.phase!=="chat"||s.busy) return;
  Voice.start("chatin",{autoStop:true, silenceMs:1700, maxSec:90, context:"spoken reply in a conversation with "+(s.cfg?s.cfg.name:"a partner"), onDone:()=>{ if(ui.sp===s && s.voiceMode && !s.busy) A.chatSend(); }, onError:()=>{ if(ui.sp===s && s.voiceMode){ s.voiceMode=false; render(); } }});
}
function chatAfterReply(line){
  const s=ui.sp; if(!s||!s.voiceMode) return;
  TTS.speak([line],{rate:1, onEnd:()=>{ if(ui.sp===s && s.phase==="chat" && s.voiceMode) chatListen(); }});
}
A.chatVoice = async () => { const s=ui.sp; s.voiceMode=!s.voiceMode; if(s.voiceMode){ render(); const last=[...s.msgs].reverse().find(m=>m.role==="assistant"); if(last&&!s.busy) chatAfterReply(last.content); else chatListen(); } else { clearTimeout(s.vt); TTS.stop(); if(Voice.active) await Voice.stop(); render(); } };
function chatView(){
  const s=ui.sp, c=s.cfg; const userTurns=s.msgs.filter(m=>m.role==="user").length;
  return `<section class="card stack"><div class="row between"><div><div class="eyebrow">${esc(SPMAP[s.mode].t)} · ${esc(c.scene)}</div><h2>${esc(c.name)}</h2></div><div class="row"><span class="chip">${userTurns} repl${userTurns===1?"y":"ies"}</span><button class="btn ${userTurns>=4?"dark":""} sm" data-a="chatEnd" ${userTurns>=2?"":"disabled"}>End &amp; get coaching</button></div></div>
   ${AI.state!=="on"||s.offlineNote?`<div class="note warn">${ic("info")}<span>Scripted partner: replies don't react to your content.</span></div>`:""}
   <div class="chat" id="chatbox" aria-live="polite">${s.msgs.map(m=>`<div class="msg ${m.role==="user"?"me":"them"}">${m.role!=="user"?`<span class="who">${esc(c.name.split(",")[0])}</span>`:""}${esc(m.content)}</div>`).join("")}${s.busy?`<div class="msg them typing" aria-label="typing"><span></span><span></span><span></span></div>`:""}</div>
   <div class="compose"><textarea id="chatin" placeholder="${Voice.possible?"Speak or type your reply…":"Type your reply as you'd say it…"}" data-enter="chatSend" ${s.busy?"disabled":""}></textarea>${micBtn("chatin")}<button class="btn primary" data-a="chatSend" ${s.busy?"disabled":""}>Send</button></div>
   <div class="row between"><span class="muted" style="font-size:12.5px">${s.voiceMode?(Voice.active?`<b style="color:var(--bad)">● Listening</b> <span class="lvl"><i></i></span> Talk, then pause; it sends after a short silence.`:Voice.busy?"Understanding your reply…":"Your partner is speaking…"):"Enter to send · Shift+Enter for a new line"}</span>${Voice.possible?`<button class="btn sm ${s.voiceMode?"dark":""}" data-a="chatVoice">${ic("speaking")} ${s.voiceMode?"Voice mode on":"Voice mode"}</button>`:""}${s.msgs.some(m=>m.role==="assistant")?`<button class="btn sm ghost" data-a="chatSay">${ic("play")} Hear last line</button>`:""}</div>
  </section>`;
}
A.chatSay = () => { const s=ui.sp; const last=[...s.msgs].reverse().find(m=>m.role==="assistant"); if(last) TTS.speak([last.content],{rate:1}); };
A.chatSend = async () => {
  const s=ui.sp; if(s.busy) return; clearTimeout(s.vt); const el=$("#chatin"); const t=(el&&el.value||"").trim(); if(!t) return;
  if(Voice.active) await Voice.stop();
  s.msgs.push({role:"user",content:t}); s.busy=true; render();
  let line=null;
  if(AI.fn){ try{ line=(await aiText([{role:"user",content:partnerSystem()+"\n\nOpen the conversation with your first line now."}, ...s.msgs])).trim(); }catch(e){ s.offlineNote=true; } }
  if(!line){ line = SCRIPT[(s.msgs.length/2|0)%SCRIPT.length]; }
  s.msgs.push({role:"assistant",content:line}); s.busy=false; render(); chatAfterReply(line);
};
A.chatEnd = async () => {
  const s=ui.sp; s.voiceMode=false; clearTimeout(s.vt); TTS.stop(); if(Voice.active) await Voice.stop(); s.phase="coach"; s.busy=true; render();
  const sec=(Date.now()-s.t0)/1000; const userText=s.msgs.filter(m=>m.role==="user").map(m=>m.content).join("\n");
  const rep = await analyze({task:`${SPMAP[s.mode].t} with ${s.cfg.name}. ${s.cfg.scene}`, text:userText, mode:s.mode, inputMode:inputMode(), sec, convo:s.msgs});
  applyReport(rep);
  S.conversations.push({d:today(), mode:s.mode, partner:s.cfg.name, scene:s.cfg.scene, msgs:s.msgs.slice(-30), scores:rep.scores});
  logSpeaking({mode:s.mode, modeName:SPMAP[s.mode].t, task:s.cfg.scene, text:userText, sec, rep});
  Voice.reset(); s.rep=rep; s.busy=false; save(); render(); window.scrollTo({top:0});
};
function coachView(){
  const s=ui.sp;
  if(s.busy) return `<section class="card">${emptyHTML("chat","Coach mode","Reading the conversation and collecting the mistakes that matter…",'<span class="spinner"></span>')}</section>`;
  return `<section class="card stack s18"><div><div class="eyebrow">Coach mode · ${esc(s.cfg.name)}</div><h1>How the conversation went</h1></div>${reportHTML(s.rep)}
   <details><summary class="lbl" style="cursor:pointer">Transcript (${s.msgs.length} lines)</summary><div class="chat" style="margin-top:10px;max-height:none">${s.msgs.map(m=>`<div class="msg ${m.role==="user"?"me":"them"}">${esc(m.content)}</div>`).join("")}</div></details>
   <div class="row"><button class="btn primary" data-a="chatAgain">${ic("replay")} Same partner again</button><button class="btn" data-a="spNext">Change partner</button>${ui.session?`<button class="btn dark" data-a="sessNext">Continue session ${ic("arrow")}</button>`:""}</div></section>`;
}
A.chatAgain = () => { const s=ui.sp; Voice.reset(); s.phase="chat"; s.msgs=[]; s.rep=null; s.t0=Date.now(); render(); };
/* ================= SHADOWING ================= */
const shChunks = p => p.text.split("|").map(x=>x.trim()).filter(Boolean);
const shPlain = s => s.replace(/\*/g,"");
VIEWS.shadowing = () => {
  const s=ui.sh;
  if(!s){
    const f=ui.shf||"all"; const lv=["all","Beginner","Intermediate","Advanced","Professional","Native-speed"];
    const list = SHADOW.filter(p=>f==="all"||p.lvl===f);
    return `${pageHead("Shadowing","Listen → repeat at the same time → compare → retry. The goal is clear, natural delivery, not a different accent.")}
    ${!TTS.ok?`<div class="note warn">${ic("info")}<span>Audio playback isn't available in this browser, so shadowing works as read-aloud practice only.</span></div>`:`<div class="note">${ic("info")}<span>${Speech.ok?`Model audio uses your device's best English voice (${({british:"British",american:"American",indian:"Indian",mixed:"mixed"})[S.prefs.accent]||"mixed"} preference).`:"Model audio uses your device's built-in voice."} The goal is clear, natural delivery, not a different accent.</span></div>`}
    <div class="pillset">${lv.map(l=>`<button class="pill ${f===l?"on":""}" data-a="shF" data-v="${l}">${l==="all"?"All levels":l}</button>`).join("")}</div>
    <div class="mode-grid">${list.map(p=>{ const n=S.shadowing.filter(x=>x.id===p.id).length; return `<button class="mode" data-a="shOpen" data-v="${p.id}"><div class="row between"><span class="chip line">${p.lvl}</span>${n?`<span class="chip good">${n}× done</span>`:""}</div><b>${esc(p.title)}</b><span>${esc(p.type)} · ${shChunks(p).length} chunks</span></button>`; }).join("")}</div>`;
  }
  const p=SHADOW.find(x=>x.id===s.id); const ch=shChunks(p);
  const passage = ch.map((c,i)=>`<span class="s ${s.now===i?"now":""}" id="shc${i}">${esc(c).replace(/\*([^*]+)\*/g,"<strong>$1</strong>")}</span><span class="pz">/</span>`).join(" ");
  return `<button class="btn ghost sm" data-a="shBack">${ic("back")} All passages</button>
  <section class="card stack s18">
    <div class="row between"><div><div class="eyebrow">${esc(p.lvl)} · ${esc(p.type)}</div><h1>${esc(p.title)}</h1></div><span class="chip">Round ${s.round||1}</span></div>
    <div class="passage">${passage}</div>
    <p class="muted" style="font-size:13px"><b style="color:var(--ink)">Underlined</b> = stressed word. <b style="color:var(--accent)">/</b> = pause. Speak with the voice, a fraction behind it.</p>
    <div class="controls">
      <button class="btn primary" data-a="shPlay">${ic(s.playing?"pause":"play")} ${s.playing?"Pause":"Play"}</button>
      <button class="btn" data-a="shReplay">${ic("replay")} Replay</button>
      <button class="btn ${s.rate==="slow"?"dark":""}" data-a="shRate" data-v="slow">${ic("slow")} Slow</button>
      <button class="btn ${s.rate!=="slow"?"dark":""}" data-a="shRate" data-v="normal">Normal</button>
      <button class="btn ${s.chunk?"dark":""}" data-a="shChunk">Chunk by chunk</button>
    </div>
    <div class="card tint stack"><h4>Focus for this passage</h4><ul style="margin:0;padding-left:18px">${p.tips.map(t=>`<li>${esc(t)}</li>`).join("")}</ul></div>
    <div class="stack"><h3>Record &amp; compare</h3>
      ${Speech.ok?`<p class="muted">Tap Record, shadow the whole passage, then tap Stop. Your recording is checked against this exact text: sounds, skipped words, stress and rhythm, plus your measured pauses.</p>
        <textarea id="shrec" style="min-height:70px" placeholder="What the recognizer heard appears here…" readonly></textarea>
        <div class="row"><button class="btn ${Voice.active?"mic-on":"primary"}" data-a="shRec">${Voice.busy?'<span class="spinner"></span> Listening back…':`${ic("mic")} ${Voice.active?'Stop &amp; check <span class="rec-t mono">0:00</span><span class="lvl"><i></i></span>':s.pron?"Record again":"Record"}`}</button></div>
        ${s.pron?pronHTML(s.pron,"Your shadowing"):""}`
       : !GEM.key?`<div class="note">${ic("info")}<span>Add your free Gemini key in Settings to record and get feedback on your shadowing.</span></div>`
       :`<div class="note">${ic("info")}<span>Recording isn't available, so rate yourself honestly instead.</span></div>`}
      <div class="stack s6"><span class="lbl">Self-check this round</span>${["Rhythm: I kept up with the voice","Stress: I hit the underlined words","Linking: I joined words smoothly","Pauses: I paused at the slashes"].map((l,i)=>`<label class="row" style="gap:8px;font-size:14.5px"><input type="checkbox" id="shk${i}" ${s.checks&&s.checks[i]?"checked":""}> ${l}</label>`).join("")}</div>
    </div>
    <div class="row"><button class="btn primary" data-a="shDone">${ic("check")} Log round &amp; retry</button><button class="btn" data-a="shNext">Next passage ${ic("arrow")}</button></div>
  </section>`;
};
A.shF = f => { ui.shf=f; render(); };
A.shOpen = id => { ui.sh={id, rate:"slow", round:1, t0:Date.now()}; render(); window.scrollTo({top:0}); };
A.shBack = () => { TTS.stop(); ui.sh=null; render(); };
function shPaintNow(i){ document.querySelectorAll(".passage .s").forEach((el,j)=>el.classList.toggle("now",j===i)); }
function shStart(from=0){
  const s=ui.sh, p=SHADOW.find(x=>x.id===s.id); const ch=shChunks(p).map(shPlain);
  const rate = (s.rate==="slow"?0.72:1)*p.rate;
  const seq = s.chunk ? [ch[from]] : ch.slice(from);
  s.playing=true; s.cur=from; render();
  TTS.speak(seq, {rate, onChunk:i=>{ s.cur=from+i; shPaintNow(from+i); }, onEnd:()=>{ s.playing=false; if(s.chunk){ s.cur=(from+1)%ch.length; } shPaintNow(-1); render(); }});
}
A.shPlay = () => { const s=ui.sh; if(s.playing){ TTS.stop(); s.playing=false; render(); return; } shStart(s.chunk?(s.cur||0):0); };
A.shReplay = () => { TTS.stop(); shStart(ui.sh.chunk?Math.max(0,(ui.sh.cur||1)-1):0); };
A.shRate = r => { ui.sh.rate=r; if(ui.sh.playing){ TTS.stop(); shStart(0); } else render(); };
A.shChunk = () => { ui.sh.chunk=!ui.sh.chunk; ui.sh.cur=0; TTS.stop(); ui.sh.playing=false; render(); };
A.shRec = async () => {
  const s=ui.sh, p=SHADOW.find(x=>x.id===s.id);
  if(Voice.busy) return;
  if(Voice.active){ const pr=Voice.stop(); render(); await pr; s.pron=Voice.pron; if(!s.pron) toast("I didn't hear enough. Record again, a little closer to the mic."); else { recordPron(s.pron,"shadowing"); addXP(5); save(); } Voice.reset(); render(); return; }
  TTS.stop(); s.playing=false; Voice.reset(); s.pron=null; render();
  await Voice.start("shrec",{context:"shadowing practice", reference: shPlain(p.text.replace(/\|/g," ")).replace(/\s+/g," ").trim()}); render();
};
A.shCompare = () => { const s=ui.sh, p=SHADOW.find(x=>x.id===s.id); const tgt=words(shPlain(p.text.replace(/\|/g," "))).map(w=>w.toLowerCase()); const got=words(($("#shrec")||{}).value||"").map(w=>w.toLowerCase()); if(!got.length){ toast("Record yourself first."); return; } let hit=0; const bag=[...got]; tgt.forEach(w=>{ const i=bag.indexOf(w); if(i>=0){hit++; bag.splice(i,1);} }); s.cmp=Math.round(hit/tgt.length*100); render(); };
A.shDone = () => {
  const s=ui.sh; const checks=[0,1,2,3].map(i=>!!($("#shk"+i)||{}).checked); const sec=Math.min(600,(Date.now()-s.t0)/1000);
  S.shadowing.push({d:today(), id:s.id, round:s.round, self:checks.filter(Boolean).length, cmp:s.cmp??null, pron:s.pron?s.pron.pron:null, sec:Math.round(sec)});
  D().shadowSec += sec; addXP(8); completeBlock("shadow");
  s.round++; s.t0=Date.now(); s.cmp=null; s.checks=null; s.pron=null; Voice.reset(); save(); toast(`Round logged · ${checks.filter(Boolean).length}/4 self-check`); render();
};
A.shNext = () => { const s=ui.sh; const i=SHADOW.findIndex(x=>x.id===s.id); A.shOpen(SHADOW[(i+1)%SHADOW.length].id); };

/* ================= LISTENING ================= */
VIEWS.listening = () => {
  const s=ui.ls;
  if(!s) return `${pageHead("Listening","Listen → answer → reveal → analyse. The transcript stays hidden until you've answered.")}
   ${!TTS.ok?`<div class="note warn">${ic("info")}<span>Audio isn't available in this browser; clips will show as text.</span></div>`:""}
   <div class="mode-grid">${LISTEN.map(c=>{ const best=S.listening.filter(x=>x.id===c.id).map(x=>x.pct); return `<button class="mode" data-a="lsOpen" data-v="${c.id}"><div class="row between"><span class="chip line">${esc(c.lvl)}</span>${best.length?`<span class="chip ${Math.max(...best)>=75?"good":"warn"}">best ${Math.max(...best)}%</span>`:""}</div><b>${esc(c.title)}</b><span>${c.lines.length} lines · ${c.qs.length} questions · ${[...new Set(c.qs.map(q=>q.k))].join(", ").toLowerCase()}</span></button>`; }).join("")}</div>
   <div class="note">${ic("info")}<span>Clips use your device's English voices, two per conversation. Switch the variety in Settings (American, British, Indian) to hear other accents; Chrome on Android and Edge have the most natural ones.</span></div>`;
  const c=LISTEN.find(x=>x.id===s.id);
  const revealed=s.phase==="reveal";
  return `<button class="btn ghost sm" data-a="lsBack">${ic("back")} All clips</button>
  <section class="card stack s18"><div class="row between"><div><div class="eyebrow">${esc(c.lvl)}</div><h1>${esc(c.title)}</h1></div><span class="chip">Plays: ${s.plays}</span></div>
   <div class="controls"><button class="btn primary" data-a="lsPlay">${ic(s.playing?"pause":"play")} ${s.playing?"Stop":s.plays?"Play again":"Play"}</button><button class="btn ${s.slow?"dark":""}" data-a="lsSlow">${ic("slow")} Slower</button></div>
   ${!TTS.ok&&!revealed?`<div class="card tint transcript">${c.lines.map(([a,b])=>`<div><b>${esc(a)}</b> ${esc(b)}</div>`).join("")}</div>`:""}
   ${(s.plays||!TTS.ok)?`<div class="stack s18">${c.qs.map((q,qi)=>{ const a=s.ans[qi]; return `<div class="stack s6"><div><span class="chip line">${esc(q.k)}</span> <b style="margin-left:4px">${esc(q.q)}</b></div><div class="opt-list">${q.o.map((o,i)=>{ let cls=""; if(revealed){ cls = i===q.a?"right": a===i?"wrong":"dim"; } else if(a===i) cls="sel"; return `<button class="opt ${cls}" data-a="lsAns" data-v="${qi}:${i}" ${revealed?"disabled":""}><span class="k">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`; }).join("")}</div></div>`; }).join("")}</div>`:`<p class="muted">Play the clip first. You can replay it as many times as you need; replays are counted, not penalised.</p>`}
   ${!revealed&&(s.plays||!TTS.ok)?`<button class="btn primary" data-a="lsReveal" ${Object.keys(s.ans).length===c.qs.length?"":"disabled"}>Check answers &amp; reveal transcript</button>`:""}
   ${revealed?`<div class="note ${s.pct>=75?"good":"warn"}">${ic("info")}<span><b>${s.pct}%</b> · ${s.plays} play${s.plays>1?"s":""}. ${lsAnalysis(c,s)}</span></div><div class="card tint transcript"><div class="eyebrow" style="margin-bottom:6px">Transcript</div>${c.lines.map(([a,b],i)=>`<div class="row between" style="flex-wrap:nowrap;align-items:flex-start"><span><b>${esc(a)}</b> ${esc(b)}</span><button class="btn sm ghost" data-a="lsLine" data-v="${i}" aria-label="Replay line">${ic("play")}</button></div>`).join("")}</div><div class="row"><button class="btn" data-a="lsRetry">${ic("replay")} Try again</button><button class="btn primary" data-a="lsNext">Next clip ${ic("arrow")}</button></div>`:""}
  </section>`;
};
function lsAnalysis(c,s){ const miss=c.qs.filter((q,i)=>s.ans[i]!==q.a).map(q=>q.k.toLowerCase()); return miss.length?`Missed: ${[...new Set(miss)].join(", ")}. Replay the transcript lines for those questions and listen for the exact words.`:"Every question right. Next time try it with a single play."; }
A.lsOpen = id => { ui.ls={id, plays:0, ans:{}, phase:"listen", t0:Date.now()}; render(); window.scrollTo({top:0}); };
A.lsBack = () => { TTS.stop(); ui.ls=null; render(); };
A.lsPlay = () => { const s=ui.ls, c=LISTEN.find(x=>x.id===s.id); if(s.playing){ TTS.stop(); s.playing=false; render(); return; } s.playing=true; s.plays++; render(); TTS.speak(c.lines.map(([sp,t],i)=>({text:t, voice:i%2?1:0, pitch:i%2?1.12:.94})), {rate:c.rate*(s.slow?.8:1), onEnd:()=>{ s.playing=false; render(); }}); };
A.lsSlow = () => { ui.ls.slow=!ui.ls.slow; render(); };
A.lsAns = v => { const [q,i]=v.split(":").map(Number); ui.ls.ans[q]=i; render(); };
A.lsLine = i => { const c=LISTEN.find(x=>x.id===ui.ls.id); TTS.speak([c.lines[+i][1]],{rate:c.rate*.9}); };
A.lsReveal = () => { const s=ui.ls, c=LISTEN.find(x=>x.id===s.id); TTS.stop(); s.playing=false; const right=c.qs.filter((q,i)=>s.ans[i]===q.a).length; s.pct=Math.round(right/c.qs.length*100); s.phase="reveal";
  const sec=Math.min(600,(Date.now()-s.t0)/1000); S.listening.push({d:today(), id:c.id, pct:s.pct, plays:s.plays, sec:Math.round(sec)}); D().listenSec+=sec;
  bumpSkill("listening", clamp(s.pct - (s.plays>2?(s.plays-2)*5:0), 0, 100), 0.25); addXP(10); completeBlock("listen"); save(); render(); };
A.lsRetry = () => A.lsOpen(ui.ls.id);
A.lsNext = () => { const i=LISTEN.findIndex(x=>x.id===ui.ls.id); A.lsOpen(LISTEN[(i+1)%LISTEN.length].id); };

/* ================= THINK IN ENGLISH ================= */
VIEWS.think = () => {
  const s=ui.th;
  const unlocked = Math.max(1, ...S.think.filter(x=>x.ok).map(x=>Math.min(8,x.l+1)), 1);
  if(!s) return `${pageHead("Think in English","Thought → English, without the Marathi/Hindi → translation step. Shorter prep time forces direct retrieval.")}
   <div class="field"><span class="lbl">Prep time before you must start</span><div class="pillset">${[10,5,3,1].map(n=>`<button class="pill ${S.prefs.thinkPrep===n?"on":""}" data-a="thPrep" data-v="${n}">${n} sec</button>`).join("")}</div></div>
   <div class="list card" style="padding:6px 20px">${THINK.map(t=>{ const lock=t.l>unlocked; const done=S.think.filter(x=>x.l===t.l&&x.ok).length; return `<div class="li"><div class="ic ${done?"done":lock?"":"acc"}">${done?ic("check"):`<b class="mono">${t.l}</b>`}</div><div class="grow"><b>Level ${t.l} · ${esc(t.t)}</b><div class="muted" style="font-size:13px">${esc(t.d)}${done?` · ${done} done`:""}</div></div><button class="btn sm ${lock?"ghost":""}" data-a="thGo" data-v="${t.l}" ${lock?"disabled":""}>${lock?"Locked":"Start"}</button></div>`; }).join("")}</div>
   <p class="muted" style="font-size:13px">A level unlocks when you complete the one before it with an acceptable answer.</p>`;
  const t=THINK[s.l-1];
  return `<button class="btn ghost sm" data-a="thBack">${ic("back")} All levels</button>
   <section class="card stack s18"><div class="row between"><span class="eyebrow">Level ${t.l} · ${esc(t.t)} · ${s.n+1}/3</span><span class="timer big" id="thtimer">${fmt(S.prefs.thinkPrep)}</span></div>
    <h1 style="font-size:clamp(24px,3vw,30px)">${esc(s.prompt)}</h1>
    <p class="muted" id="thhint">${s.fb?"":"Start typing before the clock ends. Don't plan the whole sentence; start and keep going."}</p>
    <textarea id="thin" data-track="th" style="min-height:120px" ${s.fb?"disabled":""}>${esc(s.text||"")}</textarea>
    ${s.fb?`<div class="note ${s.fb.ok?"good":"warn"}">${ic("info")}<span>${s.lat!=null?`Started in <b>${(s.lat/1000).toFixed(1)} s</b>. `:"<b>No start within the prep time.</b> "}${esc(s.fb.feedback||"")}${s.fb.natural&&norm(s.fb.natural)!==norm(s.text)?` <br><b>Natural:</b> ${esc(s.fb.natural)}`:""}</span></div>`:""}
    <div class="row">${s.fb?`<button class="btn primary" data-a="thNext">${s.n<2?"Next prompt":"Finish level"} ${ic("arrow")}</button>`:`${micBtn("thin")}<button class="btn primary" data-a="thSubmit">${s.busy?'<span class="spinner"></span> Checking':"Submit"}</button>`}</div>
   </section>`;
};
A.thPrep = n => { S.prefs.thinkPrep=+n; save(); render(); };
A.thGo = l => { const t=THINK[+l-1]; const tp=dp()&&dp().think&&dp().think[String(l)]; ui.th={l:+l, n:0, prompts:[...(tp?[tp]:[]), ...shuffle(t.p)].slice(0,3)}; ui.th.prompt=ui.th.prompts[0]; render(); window.scrollTo({top:0}); };
A.thBack = () => { Timer.clear(); ui.th=null; render(); };
AFTER.think = () => { const s=ui.th; if(!s||s.fb||s.busy) return; const el=$("#thin"); el&&el.focus(); s.t0=Date.now(); s.lat=null; s.phase="prep";
  countdown(S.prefs.thinkPrep,"thtimer",()=>{ if(s.phase==="prep"){ const h=$("#thhint"); if(h) h.innerHTML="<b>Time's up.</b> Start anyway: say anything true."; } }); };
TRACK.th = () => { const s=ui.th; if(!s||s.phase!=="prep") return; s.lat=Date.now()-s.t0; s.phase="answer"; Timer.clear(); const t=$("#thtimer"); if(t){ t.textContent="✓"; t.classList.remove("low"); } };
A.thSubmit = async () => { const s=ui.th; const v=($("#thin")||{}).value||""; if(words(v).length<3){ toast("Say at least one full sentence."); return; } Timer.clear(); s.text=v.trim(); s.busy=true; render();
  const r=await evalSentence({text:s.text, target:`Respond in English to: "${s.prompt}" (Think-in-English level ${s.l}: ${THINK[s.l-1].t}). Judge whether it answers the prompt with understandable, mostly correct English; minor errors are acceptable at this stage.`});
  const ok = r.ok || (r.source==="offline" && !r.mistakes.length && words(s.text).length>=8);
  s.busy=false; s.fb={...r, ok}; S.think.push({d:today(), l:s.l, lat:s.lat, ok, words:words(s.text).length}); D().thinkSec+=30; D().speakSec+=30; if(ok) addXP(6); completeBlock("think"); save(); render(); };
A.thNext = () => { const s=ui.th; s.n++; if(s.n>=3){ toast("Level complete."); ui.th=null; render(); return; } s.prompt=s.prompts[s.n]; s.fb=null; s.text=""; render(); };

/* ================= QUIZZES ================= */
function startQuiz(kind){
  let qs=[];
  if(kind==="today"){ qs=buildTodayQuiz(); }
  if(kind==="rapid"){ qs = shuffle(TOPICS.flatMap(t=>t.pr.map(([q,a])=>({k:"Rapid-fire",tag:t.id,type:"fill",q,a,why:t.name}))) ).slice(0,10).map(q=>({...q,timed:8})); }
  if(kind==="mistakes"){ qs = recurringErrors().concat(S.errors.filter(e=>e.status!=="Recurring"&&e.status!=="Fixed")).slice(0,8).map(e=>({k:"Error correction",type:"fixerr",q:`Correct this: “${e.original}”`,a:[e.correct],err:e.id,why:e.why})); }
  if(kind==="tenses"){ const weak=weakTenses().map(w=>w.id); const ids = weak.length?weak:["pp","pa","ppc","pac","cond","fs"]; qs = shuffle(TOPICS.filter(t=>ids.includes(t.id)).flatMap(t=>t.pr.map(([q,a])=>({k:t.name,tag:t.id,type:"fill",q,a,why:t.cn})))).slice(0,8); }
  if(kind==="vocab"){ const known = WORDS.filter(w=>V(w.w).introduced); const pool = known.length>=3?known:WORDS.slice(0,5); qs = shuffle(pool).slice(0,6).map((w,i)=> i%3===0 ? {k:"Definition recall",vw:w.w,type:"mcq",q:`Which word means “${w.meaning}”?`,o:shuffle([w.w,...shuffle(WORDS.filter(x=>x.w!==w.w)).slice(0,3).map(x=>x.w)]),a:null,ans:w.w,why:w.meaning} : i%3===1 ? {k:"Scenario response",vw:w.w,type:"prod",q:`${w.workplace} Use “${w.w}”.`,target:`uses '${w.w}' correctly`,why:""} : {k:"Sentence completion",vw:w.w,type:"fill",q:w.ex[1].replace(new RegExp("\\b("+wordForms(w.w).join("|")+")\\b","i"),"_____"),a:[(w.ex[1].match(new RegExp("\\b("+wordForms(w.w).join("|")+")\\b","i"))||[w.w])[0]],why:w.meaning}); qs.forEach(q=>{ if(q.type==="mcq"&&q.ans){ q.a=q.o.indexOf(q.ans); } }); }
  if(!qs.length) return {kind, empty:true};
  return {kind, qs, i:0, res:[], t0:Date.now()};
}
const QUIZ_KINDS = [["today","Today's quiz","5 grammar · 5 vocabulary · 3 production","quizzes"],["rapid","Rapid-fire tenses","10 blanks, 8 seconds each","bolt"],["tenses","Weak-tense mix","Targets your lowest tense scores","tense"],["vocab","Your words","Recall, completion, scenarios","vocabulary"],["mistakes","Your mistakes","Rewrite your own past errors","mistakes"]];
VIEWS.quizzes = () => {
  const q=ui.qz;
  if(!q) return `${pageHead("Quizzes","Mostly production, not just multiple choice. Every answer updates your tense and vocabulary mastery.")}
   <div class="mode-grid">${QUIZ_KINDS.map(([k,t,d,i])=>`<button class="mode" data-a="qzStart" data-v="${k}"><div class="ic">${ic(i)}</div><b>${t}</b><span>${d}</span></button>`).join("")}</div>
   ${S.quizzes.length?`<section class="card"><h3 style="margin-bottom:6px">History</h3><div class="list">${S.quizzes.slice(-6).reverse().map(x=>`<div class="li"><div class="grow"><b>${esc((QUIZ_KINDS.find(k=>k[0]===x.kind)||[,x.kind])[1])}</b><div class="muted" style="font-size:13px">${x.d}</div></div><span class="mono">${x.c}/${x.t}</span></div>`).join("")}</div></section>`:""}`;
  const back=`<button class="btn ghost sm" data-a="qzBack">${ic("back")} All quizzes</button>`;
  if(q.empty) return back+`<section class="card">${emptyHTML("check","Nothing to quiz yet", q.kind==="mistakes"?"Your mistake list is empty. Mistakes from speaking and writing will appear here so you can rewrite them.":"Not enough data yet.")}</section>`;
  if(q.i>=q.qs.length){ const c=q.res.filter(r=>r.ok).length;
    return back+`<section class="card stack s18"><div class="eyebrow">Result</div><h1>${c} / ${q.qs.length}</h1>${pctBar(c/q.qs.length*100, c/q.qs.length<.6?"bad":c/q.qs.length<.8?"warn":"good")}
     <div class="list">${q.qs.map((x,i)=>{ const r=q.res[i]; return `<div class="li"><div class="ic ${r.ok?"done":""}">${ic(r.ok?"check":"x")}</div><div class="grow"><span class="eyebrow">${esc(x.k)}</span><div>${esc(x.q)}</div><div class="muted" style="font-size:13px">You: ${esc(r.v||"—")}${!r.ok&&r.right?` · Answer: ${esc(r.right)}`:""}</div></div></div>`; }).join("")}</div>
     <div class="row"><button class="btn primary" data-a="qzStart" data-v="${q.kind}">${ic("replay")} Retake</button><button class="btn" data-a="qzBack">Other quizzes</button>${ui.session?`<button class="btn dark" data-a="sessNext">Continue session ${ic("arrow")}</button>`:""}</div></section>`; }
  const x=q.qs[q.i], r=q.res[q.i];
  let input="";
  if(x.type==="mcq") input=`<div class="opt-list">${x.o.map((o,i)=>{ let cls=""; if(r){ cls=i===x.a?"right":r.pick===i?"wrong":"dim"; } return `<button class="opt ${cls}" data-a="qzPick" data-v="${i}" ${r?"disabled":""}><span class="k">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`; }).join("")}</div>`;
  else if(x.type==="prod") input=`${inputNote()}<textarea id="qzin" style="min-height:90px" ${r?"disabled":""}>${esc(r?r.v:"")}</textarea>${r?"":`<div class="row">${micBtn("qzin")}</div>`}`;
  else input=`<input type="text" id="qzin" data-enter="qzSubmit" autocomplete="off" value="${esc(r?r.v:"")}" ${r?"disabled":""}>`;
  return back+`<section class="card stack s18">
    <div class="row between"><span class="eyebrow">${q.i+1}/${q.qs.length} · ${esc(x.k)}</span>${x.timed&&!r?`<span class="timer" id="qztimer">0:0${x.timed}</span>`:""}</div>
    <div class="bar"><i style="width:${q.i/q.qs.length*100}%"></i></div>
    <h2 style="font-weight:600">${esc(x.q)}</h2>${input}
    ${r?(x.type==="prod"&&r.fb?feedbackHTML(r.fb):`<div class="note ${r.ok?"good":"warn"}">${ic(r.ok?"check":"x")}<span>${r.ok?"Correct.":"Not quite."} ${r.right&&!r.ok?`Answer: <b>${esc(r.right)}</b>. `:""}${esc(x.why||"")}</span></div>`):""}
    <div class="row">${r?`<button class="btn primary" data-a="qzNext">${q.i<q.qs.length-1?"Next":"See result"} ${ic("arrow")}</button>`: x.type==="mcq"?"":`<button class="btn primary" data-a="qzSubmit">${q.busy?'<span class="spinner"></span> Checking':"Submit"}</button>`}</div>
  </section>`;
};
A.qzStart = k => { ui.qz=startQuiz(k); render(); window.scrollTo({top:0}); };
A.qzBack = () => { Timer.clear(); ui.qz=null; render(); };
AFTER.quizzes = () => { const q=ui.qz; if(!q||q.empty||q.i>=q.qs.length) return; const x=q.qs[q.i]; if(q.res[q.i]) return; const el=$("#qzin"); el&&el.focus(); if(x.timed) countdown(x.timed,"qztimer",()=>A.qzSubmit(true)); };
function qzRecord(x, ok, v, right, extra={}){
  const q=ui.qz; q.res[q.i]={ok, v, right, ...extra};
  if(x.tag) recordTense(x.tag, ok);
  if(x.vw){ if(x.type==="prod") recordProduction(x.vw, ok, "quiz"); else if(ok) setStatusAtLeast(x.vw,"UNDERSTOOD"); }
  if(x.err && ok){ const e=S.errors.find(e=>e.id===x.err); if(e){ e.drill=Math.min(3,e.drill+1); e.status=e.drill>=3?"Fixed":"Improving"; } }
  D().quizT++; if(ok){ D().quizC++; addXP(3); } save(); render();
}
A.qzPick = i => { const q=ui.qz, x=q.qs[q.i]; if(q.res[q.i]) return; qzRecord(x, +i===x.a, x.o[+i], x.o[x.a], {pick:+i}); };
A.qzSubmit = async (timeout) => {
  const q=ui.qz, x=q.qs[q.i]; if(q.res[q.i]||q.busy) return; Timer.clear();
  const v=timeout===true?(($("#qzin")||{}).value||"").trim():(($("#qzin")||{}).value||"").trim();
  if(!v && timeout!==true) return;
  if(x.type==="prod"){ q.busy=true; render(); const el=$("#qzin"); if(el) el.value=v; const fb=await evalSentence({text:v, target:`${x.q} (expected: ${x.target})`, word:x.vw||null}); q.busy=false; qzRecord(x, fb.ok, v, null, {fb:{...fb,text:v}}); return; }
  if(x.type==="fixerr"){ let ok=checkTyped(v,x.a); if(!ok && AI.fn && v){ q.busy=true; render(); const fb=await evalSentence({text:v, target:`Correct version of: "${x.q}". Expected something like "${x.a[0]}"`}); q.busy=false; ok=fb.ok; } qzRecord(x, ok, v, x.a[0]); return; }
  qzRecord(x, !!v && checkTyped(v,x.a), v, x.a[0]);
};
A.qzNext = () => { const q=ui.qz; q.i++; if(q.i>=q.qs.length){ const c=q.res.filter(r=>r.ok).length; S.quizzes.push({d:today(), kind:q.kind, c, t:q.qs.length}); const tg=q.qs.map((x,i)=>[x,q.res[i]]).filter(([x])=>x.tag); if(tg.length>=3) bumpSkill("grammar", tg.filter(([,r])=>r.ok).length/tg.length*100, 0.15); if(q.kind==="today") completeBlock("quiz"); addXP(10); checkAch(); save(); } render(); window.scrollTo({top:0}); };
/* ================= MISTAKES ================= */
VIEWS.mistakes = () => {
  const f=ui.mk.f||"all", st=ui.mk.s||"open";
  const cats=[...new Set(S.errors.map(e=>e.cat))];
  let list=S.errors.slice();
  if(f!=="all") list=list.filter(e=>e.cat===f);
  if(st==="open") list=list.filter(e=>e.status!=="Fixed"); else if(st==="fixed") list=list.filter(e=>e.status==="Fixed");
  list.sort((a,b)=>(a.status==="Recurring"?-1:0)-(b.status==="Recurring"?-1:0) || b.freq-a.freq || (b.last>a.last?1:-1));
  const rec=recurringErrors().length;
  return `${pageHead("Mistakes","Your personal error database. Collected quietly during practice, then brought back until each one is fixed.", S.errors.length?`<button class="btn sm" data-a="goQuiz" data-v="mistakes">${ic("quizzes")} Rewrite quiz</button>`:"")}
  ${!S.errors.length?`<section class="card">${emptyHTML("mistakes","No mistakes recorded yet","Speak, write sentences or take the diagnostic. Important mistakes are saved here with the correction, the rule and how often they happen.",`<button class="btn primary" data-a="nav" data-v="speaking">Go speak</button>`)}</section>`:`
  <div class="grid g4">${[["Total",S.errors.length],["Recurring",rec],["Improving",S.errors.filter(e=>e.status==="Improving").length],["Fixed",S.errors.filter(e=>e.status==="Fixed").length]].map(([l,n])=>`<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("")}</div>
  <div class="row"><div class="tabs">${[["open","Open"],["fixed","Fixed"],["all","All"]].map(([k,l])=>`<button class="${st===k?"on":""}" data-a="mkS" data-v="${k}">${l}</button>`).join("")}</div>
   <select id="mkcat" style="max-width:220px" aria-label="Category"><option value="all">All categories</option>${cats.map(c=>`<option ${f===c?"selected":""}>${esc(c)}</option>`).join("")}</select></div>
  ${list.length?`<div class="stack">${list.map(e=>`<section class="card stack s6"><div class="row between"><div class="row" style="gap:6px"><span class="chip ${e.status==="Recurring"?"bad":e.status==="Fixed"?"good":e.status==="Improving"?"acc":""}">${e.status}</span><span class="chip line">${esc(e.cat)}</span><b style="margin-left:4px">${esc(e.pattern)}</b></div><span class="mono muted" style="font-size:12.5px">×${e.freq} · last ${e.last}</span></div>
    <dl class="fix" style="border:none;padding:6px 0"><dt style="color:var(--bad)">Error</dt><dd class="o">${esc(e.original)}</dd><dt style="color:var(--good)">Correct</dt><dd class="c">${esc(e.correct)}</dd>${e.natural&&norm(e.natural)!==norm(e.correct)?`<dt>Natural</dt><dd>${esc(e.natural)}</dd>`:""}<dt>Why</dt><dd>${esc(e.why)}</dd></dl>
    <div class="row between"><div class="stack s6" style="flex:1;min-width:160px"><span class="muted" style="font-size:12px">Drill progress ${e.drill}/3</span>${pctBar(e.drill/3*100,"good")}</div>${e.status!=="Fixed"?`<button class="btn sm" data-a="drillOpen" data-v="${e.id}">Practise: 2 new examples</button>`:""}</div>
    ${ui.drill&&ui.drill.id===e.id?drillHTML(e):""}</section>`).join("")}</div>`:`<section class="card">${emptyHTML("check","Nothing here",st==="fixed"?"No fixed mistakes yet. Three successful drills fix one.":"No open mistakes in this filter.")}</section>`}`}`;
};
A.mkS = s => { ui.mk.s=s; render(); };
document.addEventListener("change", e=>{ if(e.target.id==="mkcat"){ ui.mk.f=e.target.value; render(); } if(e.target.dataset && e.target.dataset.set){ A.setPref(e.target.dataset.set, e.target.value); } });

/* ================= PROGRESS ================= */
VIEWS.progress = () => {
  const L=S.levels; const ad=activeDays();
  const days=[...Array(14)].map((_,i)=>addDays(today(),i-13));
  const mins=days.map(k=>{ const d=S.days[k]||{}; return Math.round(((d.speakSec||0)+(d.listenSec||0)+(d.shadowSec||0)+(d.thinkSec||0))/60 + (d.gramT||0)*0.4 + (d.quizT||0)*0.4); });
  const mx=Math.max(10,...mins);
  const W=640,H=170,pl=28,pb=22,bw=(W-pl)/14;
  const ticks=[0,Math.round(mx/2),mx];
  const chart=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Practice minutes, last 14 days">${ticks.map(t=>{ const y=H-pb-(t/mx)*(H-pb-10); return `<line x1="${pl}" x2="${W}" y1="${y}" y2="${y}" stroke="var(--line)" stroke-width="1"/><text x="${pl-6}" y="${y+3}" text-anchor="end">${t}</text>`; }).join("")}${mins.map((m,i)=>{ const h=(m/mx)*(H-pb-10); const x=pl+i*bw+bw*.18; return `<rect x="${x}" y="${H-pb-h}" width="${bw*.64}" height="${Math.max(h,m?2:0)}" rx="3" fill="${i===13?"var(--accent)":"var(--accent-line)"}"/><text x="${x+bw*.32}" y="${H-6}" text-anchor="middle">${days[i].slice(8)}</text>`; }).join("")}</svg>`;
  const sk=[["speaking","Speaking"],["listening","Listening"],["grammar","Grammar"],["vocabulary","Vocabulary"],["interaction","Interaction"]];
  const skAll=[...sk,["pronunciation","Pronunciation"]];
  const phList=Object.entries(S.pron.ph).sort((a,b)=>b[1].low-a[1].low).slice(0,8);
  const wkDue = ad - (S.weekly.length?S.weekly[S.weekly.length-1].activeDays:(S.diag?S.diag.activeDays:0));
  const moDue = ad - (S.monthly.length?S.monthly[S.monthly.length-1].activeDays:(S.diag?S.diag.activeDays:0));
  const baseline = S.diag; const lastCheck = S.weekly[S.weekly.length-1]||S.monthly[S.monthly.length-1];
  const cmp = (k) => { if(!baseline||!lastCheck) return ""; const a=baseline.levels[k], b=lastCheck.levels[k]; if(!a||!b) return ""; const d=CEFR.indexOf(b)-CEFR.indexOf(a); return d>0?`<span class="chip good">Improved</span>`:d<0?`<span class="chip bad">Dropped</span>`:`<span class="chip">Stable</span>`; };
  const totals=[["Speaking min",totalSpeakMin()],["Conversations",S.conversations.length],["Words active",activeCount()],["Words met",Object.values(S.vocab).filter(v=>v.introduced).length],["Quiz accuracy",(()=>{ const c=S.quizzes.reduce((a,q)=>a+q.c,0), t=S.quizzes.reduce((a,q)=>a+q.t,0); return t?Math.round(c/t*100)+"%":"—"; })()],["Shadowing min",Math.round(Object.values(S.days).reduce((a,d)=>a+(d.shadowSec||0),0)/60)],["Active days",ad],["Mistakes fixed",S.errors.filter(e=>e.status==="Fixed").length]];
  return `${pageHead("Progress","Measured, not promised. Levels use several kinds of evidence and the weakest skill is always shown.")}
  <section class="card stack"><div class="row between"><h3>CEFR estimate</h3>${L?`<span class="chip">${L.provisional?"Provisional":"Updated"} · ${L.date}</span>`:""}</div>
   ${L?`<div class="cefr">${sk.map(([k,l])=>`<div class="c ${L.weakestKey===k?"weakest":""}"><span>${l}</span><b>${L[k]||"—"}</b><div class="cefr-scale">${CEFR.map((c,i)=>`<i class="${L[k]&&i<=CEFR.indexOf(L[k])?"on":""}"></i>`).join("")}</div>${cmp(k)}</div>`).join("")}</div><p class="muted" style="font-size:13.5px">Overall <b style="color:var(--ink)">${L.overall}</b>, but your weakest area is <b style="color:var(--bad)">${esc(L.weakest)}</b>. Pronunciation isn't estimated because no audio analysis is available here.</p>`
    :emptyHTML("progress","Assessment required","Your CEFR level appears after the diagnostic. It isn't guessed from a single quiz.",`<button class="btn primary" data-a="startDiag">Take the diagnostic</button>`)}
  </section>
  <div class="grid g2">
   <section class="card stack"><h3>Skill evidence <span class="muted" style="font-weight:500;font-size:13px">rolling score from all practice</span></h3>${skAll.map(([k,l])=>`<div class="stack s6"><div class="row between"><span style="font-weight:600">${l}</span><span class="mono">${S.skills[k]??"—"}</span></div>${pctBar(S.skills[k]||0, S.skills[k]==null?"":S.skills[k]<55?"bad":S.skills[k]<70?"warn":"good")}</div>`).join("")}</section>
   <section class="card stack"><h3>Practice, last 14 days</h3><div class="chart">${chart}</div><p class="muted" style="font-size:12.5px">Approximate minutes of speaking, listening, shadowing and thinking, plus time on grammar items.</p></section>
  </div>
  ${S.pron.sessions.length?`<section class="card stack"><div class="row between"><h3>Pronunciation</h3><span class="chip">${S.pron.sessions.length} scored attempts</span></div><div class="grid g2"><div class="stack s6"><span class="lbl">Recent scores</span><div class="spark">${S.pron.sessions.slice(-30).map(x=>`<i class="${scoreCls(x.pron)}" style="height:${Math.max(6,x.pron||0)}%" title="${x.d} · ${x.src}: ${x.pron}"></i>`).join("")}</div></div><div class="stack s6"><span class="lbl">Your recurring weak sounds</span>${phList.length?phList.map(([k,o])=>`<div class="row between"><span><b class="mono">/${esc(k)}/</b> <span class="muted" style="font-size:13px">e.g. ${o.ex.slice(0,3).map(e=>`<button class="linkbtn" data-a="wordDrill" data-v="${esc(e)}">${esc(e)}</button>`).join(", ")}</span></span><span class="mono muted">${o.low}×</span></div>`).join(""):`<span class="muted">None yet.</span>`}</div></div></section>`:""}
  <div class="grid g4">${totals.map(([l,n])=>`<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("")}</div>
  <div class="grid g2">
   <section class="card stack"><div class="row between"><h3>Weekly check</h3><span class="chip ${wkDue>=7?"warn":""}">${S.assessed?Math.min(7,Math.max(0,wkDue))+"/7 active days":"after diagnostic"}</span></div><p class="muted">Every 7 active days: speaking, vocabulary, grammar, tenses, listening and conversation, compared with last time. Next week's priorities are rebuilt from the result.</p>${pctBar(Math.min(100,Math.max(0,wkDue)/7*100))}<button class="btn ${wkDue>=7?"primary":""}" data-a="runCheck" data-v="weekly" ${S.assessed?"":"disabled"}>${wkDue>=7?"Run weekly check":"Run early"}</button></section>
   <section class="card stack"><div class="row between"><h3>Monthly benchmark</h3><span class="chip">${S.assessed?Math.min(30,Math.max(0,moDue))+"/30 active days":"after diagnostic"}</span></div><p class="muted">A serious Day 1 vs Day 30 comparison. If progress is slow, it says why and the plan changes strategy.</p>${pctBar(Math.min(100,Math.max(0,moDue)/30*100))}<button class="btn" data-a="runCheck" data-v="monthly" ${S.assessed&&moDue>=30?"":"disabled"}>${moDue>=30?"Run benchmark":"Unlocks at 30 active days"}</button></section>
  </div>
  ${[...S.weekly,...S.monthly].length||S.diag?`<section class="card"><h3 style="margin-bottom:6px">Assessment history</h3><div class="scroll-x"><table class="t"><thead><tr><th>Date</th><th>Type</th><th>Overall inputs</th><th>Speaking</th><th>Listening</th><th>Grammar</th><th>Vocab</th></tr></thead><tbody>${[S.diag,...S.weekly,...S.monthly].filter(Boolean).sort((a,b)=>a.d>b.d?1:-1).map(r=>`<tr><td class="mono">${r.d}</td><td>${r.kind}</td><td class="mono">G ${r.gramPct}% · V ${r.vocabPct}% · L ${r.lPct}%</td><td>${r.levels.speaking||"—"}</td><td>${r.levels.listening||"—"}</td><td>${r.levels.grammar||"—"}</td><td>${r.levels.vocabulary||"—"}</td></tr>`).join("")}</tbody></table></div>${lastCheck&&lastCheck.priorities?`<div class="card tint" style="margin-top:12px"><h4>Current priorities</h4><ol style="margin:6px 0 0;padding-left:20px">${lastCheck.priorities.map(p=>`<li>${esc(p)}</li>`).join("")}</ol></div>`:""}</section>`:""}`;
};
A.runCheck = k => { startDiag(k); render(); };

/* ================= ACHIEVEMENTS ================= */
VIEWS.achievements = () => {
  checkAch(); const got=ACH.filter(a=>S.ach[a.id]).length;
  return `${pageHead("Achievements",`${got} of ${ACH.length} earned. Each one marks a real skill milestone, not just time spent.`)}
  <div class="ach-grid">${ACH.map(a=>{ const g=S.ach[a.id]; const pr=a.prog?a.prog():null; return `<div class="ach ${g?"got":"locked"}"><div class="medal">${g?ic("star"):ic("target")}</div><div class="stack s6" style="min-width:0;flex:1"><b>${esc(a.t)}</b><span class="muted" style="font-size:13px">${esc(a.d)}</span>${g?`<span class="chip warm" style="align-self:flex-start">Earned ${g}</span>`:pr?`<div class="stack s6"><span class="mono muted" style="font-size:12px">${Math.min(pr[0],pr[1])}/${pr[1]}</span>${pctBar(pr[0]/pr[1]*100)}</div>`:""}</div></div>`; }).join("")}</div>`;
};

/* ================= SETTINGS ================= */
VIEWS.settings = () => {
  const p=S.prefs;
  const sel=(k,opts)=>`<select data-set="${k}" id="set-${k}">${opts.map(([v,l])=>`<option value="${v}" ${String(p[k])===String(v)?"selected":""}>${l}</option>`).join("")}</select>`;
  return `${pageHead("Settings","Sensible defaults are already set. Change only what matters to you.")}
  <section class="card stack s18"><h3>Profile</h3>
   <div class="grid g2"><div class="field"><label for="set-name">Name</label><input type="text" id="set-name" value="${esc(S.name)}" data-enter="saveName"></div><div class="field"><span class="lbl">Main goal</span><p style="padding-top:8px">${esc(S.profile.why||"Not set")} · priority: ${esc(S.profile.priority||"—")}</p></div></div>
   <div class="field"><span class="lbl">Topics of interest</span><div class="pillset">${TOPIC_LIST.map(t=>`<button class="pill ${S.profile.topics.includes(t)?"on":""}" data-a="setTopic" data-v="${t}">${t}</button>`).join("")}</div></div>
  </section>
  ${keySetupHTML(true)}
  <section class="card stack s18"><h3>Learning</h3><div class="grid g3">
   <div class="field"><label for="set-target">Daily target</label>${sel("target",[[15,"15 min"],[30,"30 min"],[45,"45 min"],[60,"60 min"],[90,"90 min"]])}</div>
   <div class="field"><label for="set-difficulty">Difficulty</label>${sel("difficulty",[["auto","Adaptive (recommended)"],["easier","A bit easier"],["harder","A bit harder"]])}</div>
   <div class="field"><label for="set-accent">English variety</label>${sel("accent",[["mixed","Mixed / international"],["british","British"],["american","American"],["indian","Indian English"]])}</div>
   <div class="field"><label for="set-vocabDiff">Vocabulary difficulty</label>${sel("vocabDiff",[["auto","Adaptive"],["B1","B1 core"],["B2","B2 professional"],["C1","C1 advanced"]])}</div>
   <div class="field"><label for="set-speakDiff">Speaking difficulty</label>${sel("speakDiff",[["auto","Adaptive"],["gentle","Gentle partners"],["pressure","High pressure"]])}</div>
   <div class="field"><label for="set-professional">Professional focus</label>${sel("professional",[["true","On"],["false","Off"]])}</div>
   <div class="field"><label for="set-reminder">Reminders</label>${sel("reminder",[["none","None"],["evening","Evening"],["morning","Morning"]])}<span class="muted" style="font-size:12px">Saved as a preference. This page can't send notifications by itself.</span></div>
   <div class="field"><label for="set-dictation">How you answer speaking tasks</label>${sel("dictation",[["false","Typing"],["true","Keyboard voice dictation"]])}<span class="muted" style="font-size:12px">With dictation, answers are analysed as speech transcripts (fluency on; pronunciation still can't be measured).</span></div>
   <div class="field"><label for="set-theme">Appearance</label>${sel("theme",[["system","Match system"],["light","Light"],["dark","Dark"]])}</div>
  </div></section>
  <section class="card stack"><h3>Status</h3>
   <dl class="kv"><dt>AI coach</dt><dd>${GEM.key?(AI.state==="error"?"The saved key isn't working. Paste a new one above.":`Gemini free tier${GEM.working?" · "+esc(GEM.working):""}.${GEM.lastError?` Last error: ${esc(GEM.lastError.slice(0,120))}`:""}`):"No key yet: scripted partners and the offline checker only."}</dd><dt>Speech</dt><dd>Recording happens in your browser. Speaking rate and pauses are measured on your device; Gemini transcribes and judges pronunciation.</dd><dt>Microphone</dt><dd>${Voice.blocked?"Permission denied. Allow the microphone for this site in your browser settings, then reload.":"Permission is asked the first time you tap Speak."}</dd><dt>Storage</dt><dd>Saved in this browser. Download a backup now and then, or to move to another device.</dd></dl>
  </section>
  <section class="card stack"><h3>Data</h3><p class="muted">All learner data is kept as one structured record (profile, vocabulary, tense mastery, error database, sessions, assessments) so it can move to a server database later.</p>
   <div class="row"><button class="btn" data-a="exportData">Download backup</button><label class="btn" for="importfile" style="cursor:pointer">Restore backup<input type="file" id="importfile" accept="application/json,.json" hidden></label><button class="btn" data-a="redoDiag">Retake diagnostic</button>${GEM.key?`<button class="btn ghost" data-a="forgetKey">Remove AI key from this device</button>`:""}<button class="btn" data-a="askReset" style="color:var(--bad)">Reset all progress</button></div>
   ${ui.confirmReset?`<div class="note warn">${ic("mistakes")}<span>This deletes every word, mistake, session and assessment. It can't be undone.</span><button class="btn sm" data-a="doReset" style="background:var(--bad);color:#fff;border-color:var(--bad)">Delete everything</button><button class="btn sm ghost" data-a="noReset">Cancel</button></div>`:""}
  </section>`;
};
A.setPref = (k,v) => { if(k==="target") v=+v; if(k==="professional"||k==="dictation") v=(v==="true"); if(k==="dictation") S.prefs.hideVoiceNote=false; S.prefs[k]=v; if(k==="target") buildPlan(true); if(k==="theme") applyTheme(); save(); toast("Saved"); render(); };
A.saveName = () => { const v=($("#set-name")||{}).value; if(v&&v.trim()){ S.name=v.trim().slice(0,30); save(); toast("Saved"); render(); } };
document.addEventListener("focusout", e=>{ if(e.target.id==="set-name") A.saveName(); });
A.setTopic = t => { const a=S.profile.topics; const i=a.indexOf(t); i>=0?a.splice(i,1):a.push(t); save(); render(); };
A.exportData = () => exportData();
A.forgetKey = async () => { await setKey(""); toast("Key removed from this device."); };
document.addEventListener("change", e=>{ if(e.target.id==="importfile" && e.target.files[0]) importData(e.target.files[0]); });
A.redoDiag = () => { startDiag("initial"); render(); };
A.askReset = () => { ui.confirmReset=true; render(); };
A.noReset = () => { ui.confirmReset=false; render(); };
A.doReset = () => { const name=S.name; S=DEF(); S.name=name; ui.confirmReset=false; save(); ui.route="home"; render(); };
function applyTheme(){ const t=S.prefs.theme; if(t==="light"||t==="dark") document.documentElement.setAttribute("data-theme",t); else document.documentElement.removeAttribute("data-theme"); }

/* ================= BOOT ================= */
(function boot(){
  const local = loadLocal(); if(local) S=local;
  S.wordBank ||= {}; S.daily ||= {}; hydrateContent();
  applyTheme();
  const h = (location.hash||"").replace("#",""); if(h && VIEWS[h]) ui.route=h;
  render();
  // timer-triggered submits must wait for an in-progress recording to be transcribed
  ["rpNext","prSubmit","rfGo","qzSubmit","thSubmit","spFinish"].forEach(k=>{ const f=A[k]; if(f) A[k]=(...a)=>(Voice.active||Voice.pending)?Voice.finish().then(()=>f(...a)):f(...a); });
  initServices();
  checkAch();
  setTimeout(()=>ensureDaily(), 600);
  // a new day while the app is open
  setInterval(()=>{ if(GEM.key && !dp() && !Daily.running) ensureDaily(); }, 5*60*1000);
})();
