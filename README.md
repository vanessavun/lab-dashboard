# Laboratory Dashboard

This project was built with React and Tailwind.
Features: Light and dark mode. Color themes. Responsive site. Navigation bar. Top header with access to profile, notifications, chat, and a cart.

## Vision

I'm a Clinical Laboratory Scientist in the biotech and healthcare industry. At my last biotech laboratory, the workflow was very manual where the techs used a whiteboard and handwritten cards to keep track of their batch status. Inspired from a previous biotech lab's autopipeline dashboard, I started learning how to code to create my own laboratory dashboard. While it is not perfect and fully built out the way I want it, I learned enough skills to have a mock laboratory dashboard that I wish my last job had.

## Lessons learned

Syncfusion was very easy to use to make React components; however there are limitations on what it can do. I want to be able to customize the kanban board more.

Tailwind was also very easy to use to quickly design the dashboard but code readability is low.

### Genlab Summary Page

Ideally the front page should have an overview of the laboratory such as how many pending samples are going through the wetlab and how many are currently being analyzed after being sequenced (the last step).

Also there should be an overview of inventory, which samples need to be repeated, library prepped or tp extract. Every laboratory has different needs so this section should be made based on the laboratory.

### Samples and Kanban Pages

The laboratory data are all fake for a mock view. Future feature: a timed data so the batch status can change and automatically moves to the next kanban task.

## Future Features

Timed data

Improved and automated kanban page

Expanded individual sample ID page for current status, location, a button option to re-extract/fail/re-test sample, and other needed information based on laboratory needs.

## Credit

[JavaScript Mastery](https://www.youtube.com/watch?v=jx5hdo50a2M&ab_channel=JavaScriptMastery)
