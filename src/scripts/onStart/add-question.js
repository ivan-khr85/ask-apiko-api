const _ = require('lodash');
const random_name = require('node-random-name');
const randomstring = require('randomstring');
const { Question } = require('../../models/question');
const { Answer } = require('../../models/answers');
const { Vote } = require('../../models/vote');


/**
 * Provide add activities from assets
 *  - will add activities form ../private/assets.activities.json
 *  - will append files for activities ../private/images folder
 *
 **/

const generateQuestions = (count = 1000) => new Promise(async (resolve, reject) => {
  try {
    const question = await Question.findOne({});

    if (question) {
      return resolve()
    }

    for (let index = 0; index < count; index++) {

      const question = new Question({
        createdAt: new Date(),
        title: `Question ${index + 1} of ${random_name({ first: true, gender: "male" })}`,
        description: randomstring.generate(125),
      });

      const savedQuestion = await question.save();

      for (let j = 0; j < _.random(1,50); j++) {
        const answer = new Answer({
          questionId: savedQuestion._id,
          title: `Answer of ${random_name({ first: true, gender: "male" })} ${index + 1} about ${savedQuestion.title}`,
          description: randomstring.generate(125),
          createdAt: new Date(),
        });

        const savedAnswer = await answer.save();
        for (let k = 0; k < _.random(1,10); k++) {
          const vote = new Vote({
            answerId: savedAnswer._id,
            isPositive: !!_.random(0,1),
            createdAt: new Date(),
          });

          await vote.save();
          if(index === count) {
            console.log(`[${index}] questions successfully created...`);
            //resolve();
          }
        }
      }
    }
  } catch (error) {
    reject(error);
  }
});

module.exports = { generateQuestions };

