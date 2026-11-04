---
layout: ../../layouts/CaseStudy.astro
title: Rebuilding the Room Matrix
company: TimeShareWare
years: 2022–2026
summary: I rebuilt the Room Matrix, the drag-and-drop board resort companies like Vidanta and Hyatt use to manage their rooms, and cut its load time from 30–90 seconds to 1–10 seconds.
role: Senior software engineer
stack: React, Redux, TypeScript, Axios, C# / .NET
result: 30–90s → 1–10s load times
---

## The problem

TimeShareWare's platform runs hundreds of resorts for 7–10 resort companies, including Vidanta and Hyatt. The Room Matrix is where front-desk and operations staff see every room against every night and decide who goes where.

The old version was slow and hard to use. Loading the board took **30 seconds, and up to 90 seconds** on bigger properties. Staff couldn't drag anything, room assignments regularly went wrong, and stays didn't always display correctly. Speed was the biggest reason we rebuilt it.

## What I did

Over about **two months**, I rebuilt the board in React, Redux, and TypeScript on top of the existing C# / .NET backend.

- **Made it fast.** We moved the board onto a faster data API and lazy-loaded what staff weren't looking at yet. Load times dropped to **1–10 seconds in the worst cases**.
- **Added drag-and-drop.** Staff can now assign reservations to rooms, move dates, and block rooms for maintenance directly on the board, with validation that stops overlapping stays.
- **Fixed the display bugs** that made the old board hard to trust, across thousands of rooms.

You can try a small version with sample data on the [homepage](/#now).

## The result

The Room Matrix went from the screen people waited on to one that loads in seconds, for hundreds of resorts and thousands of rooms. It's still the project I'm proudest of: dense, interactive UI where speed and correctness both matter.
