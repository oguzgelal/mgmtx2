import Faker from 'faker';
import { Intent } from '@blueprintjs/core';

const intents = [
  Intent.SUCCESS,
  Intent.WARNING,
  Intent.PRIMARY,
  Intent.DANGER,
  Intent.NONE
]

export const getEntityCards = (n) => {
  const cards = [];
  for (let i = 0; i < n; i++) {
    cards.push(getEntityCard());
  } return cards;
}
export const getEntityCard = () => {
  const data = {};
  data.id = `entity-card-${Faker.random.number()}`;
  data.title = `${Faker.company.catchPhraseAdjective()} ${Faker.company.catchPhraseNoun()}`;
  data.tags = [];

  const tagsCount = Faker.random.number({ min: 3, max: 8 });
  for (let i = 0; i < tagsCount; i++) {
    data.tags.push({
      id: `${data.id}-${i}`,
      title: Faker.lorem.word(),
      intent: Faker.random.arrayElement(intents)
    })
  }

  return data;
}
