# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

- Sign in to gitlab.
- Go to perfectmatch project: interface.
- On the left side bar, navigate to Deploy and click on Releases.
- Press the button New release.
- Create a new tag name by using SemVer.
- Select source : develop
- Name it : release + {new tag name}
- Pick a release date and press button 'Create release'.
- On the left side bar, navigate to Build and click on Pipelines.
- Below 'Stages' press the button with hover text "release". DONT press the button with hover text "remove-storybook".
- On the left side bar, navigate to Deploy and click on Package Registry.
- Deploy succeeded if you see the new tag name.
- To update on other applications, use npm or pnpm install @perfectmatch/interface@latest
