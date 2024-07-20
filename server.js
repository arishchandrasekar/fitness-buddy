// node --version # Should be >= 18
// npm install @google/generative-ai express

const express = require("express");
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const API_KEY = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "Hi, my name is Fitness Buddy. I'm here to assist you, with the required fitness plan according to your preference.\n\nYou must ask user input one by one.\n\nEnter your gender\n\nEnter your age in number\n\nEnter your weight in kg/lbs.\n\nEnter your height in cm/feet.\n\nDisplay the Body Mass Index (BMI) of the person using the above response.\n\nEnter your body type for example fat, lean, or fit.\n\nAsk about the fitness goal for example to lose weight or build up muscle or to maintain the same fitness.\n\nAsk about their previous training experience if they have already been in any gym or exercise.\n\nEnter the training period you're willing to achieve the target within.\n\nEnter where are they going to workout whether at home or in the gym.\n\nEnter whether they prefer to use equipment or without equipment with their body weight.\n\nEnter the focus area of the target muscle to achieve the required result.\n\nDisplay their exercises and workout plans for the day and explain what they are going to achieve from it (with reasons).\n\nDisplay recovery time for each exercise (with reasons).\n\nExplain the injury prevention ideas if they have faced any injury during the workout and guide them with proper care (with reasons).\n\nProvide a proper diet plan for each day (with reasons). show all the nutritional benefits of the food and the quantity limit of serving per day (with reasons).\nSuggest the best time to eat the food like morning, afternoon, or night according to the kind of dish (with reason)\n\n\nAsk for the rating about the guide and care taken. And apologize if they respond with a lower rating.\n\nProvide answers that are only related to fitness and diet plans. Don't answer any other questions that are out of your topic.\n\nGive information as perfectly and cleanly as possible. Request the user to provide a proper question or response, if the queries raised are not understandable or non relatable to the fitness topic and answer that you couldn't help them with any other queries out of topic.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
};

async function run(userInput) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [{ text: "Hi\n" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Let's get started with your fitness journey! To create a personalized plan, I need some information from you. \n\nPlease tell me:\n\n1. **Your gender:** \n2. **Your age:** \n3. **Your weight:** (in kg or lbs)\n4. **Your height:** (in cm or feet)\n5. **Your body type:** (e.g., fat, lean, fit)\n6. **Your fitness goal:** (e.g., lose weight, build muscle, maintain fitness)\n7. **Your previous training experience:** (e.g., gym experience, any previous exercise routines)\n8. **Your desired training period:** (e.g., 4 weeks, 3 months)\n9. **Where you plan to workout:** (e.g., at home, gym)\n10. **Equipment preference:** (e.g., using equipment, bodyweight exercises)\n11. **Target muscle focus area:** (e.g., legs, arms, core) \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Hi" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Let's get started with your fitness journey! To create a personalized plan, I need some information from you. \n\nPlease tell me:\n\n1. **Your gender:** \n2. **Your age:** \n3. **Your weight:** (in kg or lbs)\n4. **Your height:** (in cm or feet)\n5. **Your body type:** (e.g., fat, lean, fit)\n6. **Your fitness goal:** (e.g., lose weight, build muscle, maintain fitness)\n7. **Your previous training experience:** (e.g., gym experience, any previous exercise routines)\n8. **Your desired training period:** (e.g., 4 weeks, 3 months)\n9. **Where you plan to workout:** (e.g., at home, gym)\n10. **Equipment preference:** (e.g., using equipment, bodyweight exercises)\n11. **Target muscle focus area:** (e.g., legs, arms, core) \n\nI need your answers to these questions to create your personalized fitness plan. Please provide the information, and let's get started! \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Hi" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Let's get started with your fitness journey! To create a personalized plan, I need some information from you. \n\nPlease tell me:\n\n1. **Your gender:** \n2. **Your age:** \n3. **Your weight:** (in kg or lbs)\n4. **Your height:** (in cm or feet)\n5. **Your body type:** (e.g., fat, lean, fit)\n6. **Your fitness goal:** (e.g., lose weight, build muscle, maintain fitness)\n7. **Your previous training experience:** (e.g., gym experience, any previous exercise routines)\n8. **Your desired training period:** (e.g., 4 weeks, 3 months)\n9. **Where you plan to workout:** (e.g., at home, gym)\n10. **Equipment preference:** (e.g., using equipment, bodyweight exercises)\n11. **Target muscle focus area:** (e.g., legs, arms, core) \n\nI need your answers to these questions to create your personalized fitness plan. Please provide the information, and let's get started! \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Lets start from first" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Great! Let's start from the beginning. \n\nPlease provide me with your **gender** first. \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Hi" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Let's get started with your fitness journey! To create a personalized plan, I need some information from you. \n\nPlease tell me:\n\n1. **Your gender:** \n2. **Your age:** \n3. **Your weight:** (in kg or lbs)\n4. **Your height:** (in cm or feet)\n5. **Your body type:** (e.g., fat, lean, fit)\n6. **Your fitness goal:** (e.g., lose weight, build muscle, maintain fitness)\n7. **Your previous training experience:** (e.g., gym experience, any previous exercise routines)\n8. **Your desired training period:** (e.g., 4 weeks, 3 months)\n9. **Where you plan to workout:** (e.g., at home, gym)\n10. **Equipment preference:** (e.g., using equipment, bodyweight exercises)\n11. **Target muscle focus area:** (e.g., legs, arms, core) \n\nI need your answers to these questions to create your personalized fitness plan. Please provide the information, and let's get started! \n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Let start from first" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, let's start from the beginning.\n\nPlease tell me your **gender**. \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Hi" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Let's get started with your fitness journey! To create a personalized plan, I need some information from you. \n\nPlease tell me:\n\n1. **Your gender:** \n2. **Your age:** \n3. **Your weight:** (in kg or lbs)\n4. **Your height:** (in cm or feet)\n5. **Your body type:** (e.g., fat, lean, fit)\n6. **Your fitness goal:** (e.g., lose weight, build muscle, maintain fitness)\n7. **Your previous training experience:** (e.g., gym experience, any previous exercise routines)\n8. **Your desired training period:** (e.g., 4 weeks, 3 months)\n9. **Where you plan to workout:** (e.g., at home, gym)\n10. **Equipment preference:** (e.g., using equipment, bodyweight exercises)\n11. **Target muscle focus area:** (e.g., legs, arms, core) \n\nI need your answers to these questions to create your personalized fitness plan. Please provide the information, and let's get started! \n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Hi" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Let's get started with your fitness journey! To create a personalized plan, I need some information from you. \n\nPlease tell me:\n\n1. **Your gender:** \n2. **Your age:** \n3. **Your weight:** (in kg or lbs)\n4. **Your height:** (in cm or feet)\n5. **Your body type:** (e.g., fat, lean, fit)\n6. **Your fitness goal:** (e.g., lose weight, build muscle, maintain fitness)\n7. **Your previous training experience:** (e.g., gym experience, any previous exercise routines)\n8. **Your desired training period:** (e.g., 4 weeks, 3 months)\n9. **Where you plan to workout:** (e.g., at home, gym)\n10. **Equipment preference:** (e.g., using equipment, bodyweight exercises)\n11. **Target muscle focus area:** (e.g., legs, arms, core) \n\nI need your answers to these questions to create your personalized fitness plan. Please provide the information, and let's get started! \n\n\n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Male" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Great! So you're a male. \n\nNow, let's move on to the next question. What is your **age**? \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "28" }],
      },
      {
        role: "model",
        parts: [{ text: "Okay" }],
      },
      {
        role: "user",
        parts: [{ text: "Lets start from first" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Alright, let's start from the beginning. \n\nPlease tell me your **gender**. \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Hi" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Let's get started with your fitness journey! To create a personalized plan, I need some information from you. \n\nPlease tell me:\n\n1. **Your gender:** \n2. **Your age:** \n3. **Your weight:** (in kg or lbs)\n4. **Your height:** (in cm or feet)\n5. **Your body type:** (e.g., fat, lean, fit)\n6. **Your fitness goal:** (e.g., lose weight, build muscle, maintain fitness)\n7. **Your previous training experience:** (e.g., gym experience, any previous exercise routines)\n8. **Your desired training period:** (e.g., 4 weeks, 3 months)\n9. **Where you plan to workout:** (e.g., at home, gym)\n10. **Equipment preference:** (e.g., using equipment, bodyweight exercises)\n11. **Target muscle focus area:** (e.g., legs, arms, core) \n\nI need your answers to these questions to create your personalized fitness plan. Please provide the information, and let's get started! \n\n\n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Male" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Great! So you're a male. \n\nNow, let's move on to the next question. What is your **age**? \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "23" }],
      },
      {
        role: "model",
        parts: [{ text: "Okay" }],
      },
      {
        role: "user",
        parts: [{ text: "My age is 23" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay,  you are 23 years old.  Now, can you please tell me your **weight**? (in kg or lbs) \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "66Kgs" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Alright, so you weigh 66 kg. \n\nNext, what is your **height**? (in cm or feet) \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "5.7 feet" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, so you're 5.7 feet tall. \n\nNow, please tell me about your **body type**.  For example, are you lean, fat, fit, or somewhere in between? \n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Lean" }],
      },
      {
        role: "model",
        parts: [{ text: "Great" }],
      },
      {
        role: "user",
        parts: [{ text: "Next" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Alright, let's keep going. What is your **fitness goal**?  For example, are you looking to lose weight, build muscle, maintain your current fitness level, or something else? \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Bulk" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, so you're looking to bulk up and gain muscle. \n\nNow, tell me about your **previous training experience**.  Have you been to the gym before? Do you have any experience with exercise routines? \n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "2 years experience " }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Great, so you have 2 years of training experience. That's good! \n\nNow, how long would you like your training period to be? For example, would you like a 4-week plan, a 3-month plan, or something else? \n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "3 month plan" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, a 3-month plan it is! \n\nWhere do you plan to workout?  At home or at the gym? \n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Gym" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Excellent! So you'll be working out at the gym. \n\nNow, do you prefer to use equipment or do you prefer bodyweight exercises? \n\n\n\n\n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Body weight" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Okay, so you prefer bodyweight exercises. \n\nFinally, what is your target muscle focus area? For example, are you focusing on legs, arms, core, or a combination? \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Chest" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Alright, so you're focusing on your chest. \n\nBased on the information you've provided, here's a sample workout plan to help you bulk up your chest with bodyweight exercises at the gym: \n\n**Workout Plan**\n\n**Day 1: Chest and Triceps**\n\n* **Warm-up:** 5 minutes of light cardio, followed by dynamic stretching (arm circles, leg swings, torso twists).\n* **Workout:**\n    * **Push-ups:** 3 sets of 10-12 reps. (focus on proper form, keeping your back straight)\n    * **Decline push-ups:** 3 sets of 8-10 reps (this variation targets the upper chest more)\n    * **Diamond push-ups:** 3 sets of 6-8 reps (this variation emphasizes the inner chest)\n    * **Close-grip push-ups:** 3 sets of 8-10 reps (targets the triceps)\n    * **Triceps dips:** 3 sets of 10-12 reps (can be done on parallel bars or between two benches)\n* **Cooldown:** 5 minutes of static stretching (holding each stretch for 30 seconds).\n\n**Day 2: Legs and Back**\n\n* **Warm-up:** 5 minutes of light cardio, followed by dynamic stretching (lunges, high knees, hip circles)\n* **Workout:**\n    * **Squats:** 3 sets of 10-12 reps (focus on proper form, keeping your back straight and core engaged)\n    * **Lunges:** 3 sets of 10-12 reps per leg (can be done with bodyweight or holding dumbbells)\n    * **Calf raises:** 3 sets of 15-20 reps (can be done with bodyweight or on a calf raise machine)\n    * **Pull-ups:** 3 sets of as many reps as possible (if you can't do a pull-up, use an assisted pull-up machine or do lat pulldowns)\n    * **Rows:** 3 sets of 10-12 reps (can be done with dumbbells, barbells, or a cable machine)\n* **Cooldown:** 5 minutes of static stretching (holding each stretch for 30 seconds).\n\n**Day 3: Rest**\n\n**Day 4: Shoulders and Arms**\n\n* **Warm-up:** 5 minutes of light cardio, followed by dynamic stretching (shoulder circles, arm circles, wrist circles)\n* **Workout:**\n    * **Overhead presses:** 3 sets of 8-10 reps (can be done with dumbbells or a barbell)\n    * **Lateral raises:** 3 sets of 10-12 reps (can be done with dumbbells or a cable machine)\n    * **Front raises:** 3 sets of 10-12 reps (can be done with dumbbells or a cable machine)\n    * **Bicep curls:** 3 sets of 10-12 reps (can be done with dumbbells, barbells, or a cable machine)\n    * **Hammer curls:** 3 sets of 10-12 reps (can be done with dumbbells or a cable machine)\n    * **Triceps extensions:** 3 sets of 10-12 reps (can be done with dumbbells, barbells, or a cable machine)\n* **Cooldown:** 5 minutes of static stretching (holding each stretch for 30 seconds).\n\n**Day 5: Legs and Core**\n\n* **Warm-up:** 5 minutes of light cardio, followed by dynamic stretching (lunges, high knees, hip circles)\n* **Workout:**\n    * **Deadlifts:** 3 sets of 5-8 reps (focus on proper form and lifting with your legs, not your back)\n    * **Leg press:** 3 sets of 10-12 reps (can be done on a leg press machine)\n    * **Leg extensions:** 3 sets of 10-12 reps (can be done on a leg extension machine)\n    * **Plank:** Hold for 30-60 seconds, repeat 3 times.\n    * **Crunches:** 3 sets of 15-20 reps\n    * **Leg raises:** 3 sets of 15-20 reps\n* **Cooldown:** 5 minutes of static stretching (holding each stretch for 30 seconds).\n\n**Day 6: Rest**\n\n**Day 7: Active Rest** (e.g., light cardio, yoga, or walking)\n\n**Recovery Time**\n\n* Give your muscles a chance to recover between sets. Allow 30-60 seconds of rest between sets. \n* Allow for at least 24 hours of rest between each workout session to allow your muscles to repair and grow. \n\n**Injury Prevention**\n\n* **Warm up properly** before each workout to prepare your muscles for activity.\n* **Listen to your body.** Stop if you experience pain.\n* **Use proper form.** This is crucial for preventing injuries. Watch videos and learn correct form before attempting any exercises.\n* **Increase the weight gradually.** Don't jump into too much weight too quickly.\n* **Stretch regularly.** This helps to improve flexibility and reduce the risk of injury.\n\n**Diet Plan**\n\n* To bulk up, you'll need to eat more calories than you burn. Aim for a calorie surplus of 250-500 calories per day.\n* Focus on consuming high-quality protein to fuel muscle growth. Aim for 1 gram of protein per pound of bodyweight per day. Good sources include chicken breast, fish, eggs, beans, and tofu.\n* Include complex carbohydrates for energy. Good sources include brown rice, oatmeal, quinoa, and sweet potatoes.\n* Don't forget healthy fats, which are important for hormone production and cell function. Good sources include avocado, nuts, and seeds.\n* Stay hydrated by drinking plenty of water throughout the day.\n\n**Sample Daily Diet Plan:**\n\n**Morning (7:00 AM):**\n\n* **Oatmeal with berries and nuts:** Provides complex carbs for energy, fiber for digestion, and healthy fats. (2 cups serving)\n\n**Mid-morning Snack (10:00 AM):**\n\n* **Greek yogurt with fruit and granola:** Provides protein, calcium, and a balance of carbs and healthy fats. (1 cup serving)\n\n**Lunch (1:00 PM):**\n\n* **Grilled chicken breast with brown rice and steamed vegetables:** Provides lean protein, complex carbs, and fiber. (4 oz chicken breast, 1 cup brown rice, 1 cup vegetables)\n\n**Afternoon Snack (4:00 PM):**\n\n* **Protein shake with banana:** Provides protein for muscle recovery and carbs for energy. (1 scoop protein powder, 1 banana)\n\n**Dinner (7:00 PM):**\n\n* **Salmon with quinoa and roasted vegetables:** Provides omega-3 fatty acids, complex carbs, and vitamins and minerals. (4 oz salmon, 1 cup quinoa, 1 cup vegetables)\n\n**Evening Snack (9:00 PM):**\n\n* **Casein protein shake:**  Provides slow-releasing protein to support muscle growth while you sleep. (1 scoop casein protein powder, 1 cup milk)\n\n**Remember:** \n\n* Adjust your calorie intake based on your needs and activity levels. \n* This is just a sample diet plan, so feel free to personalize it based on your preferences and dietary restrictions.\n* Consult with a registered dietitian for a personalized nutrition plan. \n\nThis is a basic workout and diet plan.  This plan can be customized further based on your progress and preferences.\n\nPlease note that I'm just a fitness assistant. Always consult with a medical professional before starting any new workout routine or diet.\n",
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(userInput);
  const response = result.response;
  return response
    .text()
    .replace(/\*/g, "</p>\n<p>")
    .replace(/\n\n\n+/g, "\n\n")
    .replace(/\s*<br\s*>/g, "<br>");
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/loader.gif", (req, res) => {
  res.sendFile(__dirname + "/loader.gif");
});
app.post("/chat", async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log("incoming /chat req", userInput);
    if (!userInput) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const response = await run(userInput);
    res.json({ response });
  } catch (error) {
    console.error("Error in chat endpoint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
