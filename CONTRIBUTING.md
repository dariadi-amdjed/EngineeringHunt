
# Contributing to EngineeringHunt

Thank you for your interest in contributing to EngineeringHunt.

EngineeringHunt is an open-source directory for discovering engineering tools and technical resources.

The main way to contribute is by suggesting useful tools that are not currently listed.

## What You Can Contribute

You can contribute by:

- Adding a useful engineering tool
- Correcting inaccurate tool information
- Improving tool descriptions
- Fixing categorization
- Improving documentation
- Fixing bugs
- Improving the user interface

## Adding a Tool

Tools are stored in:

src/data/websites.ts

1. Fork the repository

Create your own fork of the EngineeringHunt repository.

2. Create a branch

Create a separate branch for your change:

git checkout -b add-tool-name
3. Add the tool

Add your tool entry to:

src/data/websites.ts

Use the existing entries as examples.

A tool entry should contain accurate information about:

Name
URL
Description
Category
Type
Purpose
Pricing
Authentication
Platform
Difficulty
Open-source status
Tags
4. Check your changes

Before submitting a pull request, make sure:

The tool URL works.
The description is clear and accurate.
The tool is related to engineering, electronics, hardware, software, or a relevant technical field.
The category is appropriate.
The information does not intentionally mislead users.
The project still builds successfully.

Run:

pnpm build
5. Commit your changes

Use a clear commit message:

git add .
git commit -m "Add [Tool Name]"
6. Push your branch
git push origin add-tool-name
7. Open a Pull Request

Open a pull request against the main EngineeringHunt repository.

Keep one tool per pull request whenever possible. This keeps submissions simple and easy to review.

Correcting Existing Tools

If you notice incorrect information:

Locate the tool in src/data/websites.ts.
Make the necessary correction.
Explain the correction in your pull request.
Run the production build.
Submit the pull request.
Pull Request Guidelines

Please keep pull requests:

Focused
Clear
Small when possible
Related to the stated purpose of the change

For tool submissions, briefly explain:

What tool you added
Why it is useful
Which engineering domain it belongs to
Before Opening a Pull Request

Please check:

 The URL is valid.
 The information is accurate.
 The category is appropriate.
 The tool is not already listed.
 The project builds successfully.
 No unrelated files were changed.
Code Contributions

Code improvements are also welcome.

For larger changes, it is recommended to open an issue or discussion first so the proposed change can be considered before significant development work begins.

Questions

If you are unsure whether a tool belongs in EngineeringHunt, you can still open an issue or pull request and explain why you think it would be useful.

Thank you for helping make engineering tool discovery easier.