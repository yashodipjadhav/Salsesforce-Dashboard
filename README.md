Salesforce Analytics Dashboard - Project Overview
This project is a high-fidelity, React-based reproduction of a Salesforce Sales Rep Dashboard. It features a glassmorphism UI, interactive charts driven by dynamic JSON data, and a layout that mirrors the official Salesforce design.

## Key Features
Global Platform Header: Includes the gold star logo, a functional search bar with internal icon placement, and a profile section with a yellow notification indicator.

Dynamic Analytics Grid: A 3-column responsive grid containing diverse data visualizations:

My Pipeline: Segmented stacked bars with custom glass-striped textures for the "Negotiation" stage.

My Activities: A donut chart featuring rounded segments and translucent data bubbles.

My Top Accounts: Horizontal bars with thick rounded edges and slanted-line patterns.

Team Leaderboard: An overlapping layout featuring profile avatars anchored to segmented progress bars.

JSON-Driven Architecture: All chart values, colors, and labels are stored in external JSON files for easy updates without modifying component code.

Salesforce UI Fidelity: Matches specific Salesforce blue gradients, typography, and icon positioning.

## Project Structure
src/components/: Modular React components for each chart and layout section (e.g., PipelineChart, DonutChart, GlobalHeader).

src/api/: JSON data files containing the dynamic values for all dashboard metrics.

src/styles/dashboard.css: Centralized styling using Flexbox and CSS Grid to manage the complex Salesforce layout.

## Getting Started
Install Dependencies: Run npm install to install React and ApexCharts.

Configuration: To change dashboard data, update the respective .json files in the src/api folder.

Run Project: Use npm run dev to start the Vite development server.