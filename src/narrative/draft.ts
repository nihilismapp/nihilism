export function stressTest(story: string): string {
  return `This dies in a week if nobody repeats it: ${story.slice(0, 140)}`;
}

export function collapse(story: string): string {
  return `collapsed:${story.slice(0, 40)}`;
}
