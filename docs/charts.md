---
sidebar_position: 5
---

# Charts

Charts are two dimensional data sets made of columns and rows, like a spreadsheet. Charts provide a method of storing and referencing the large amounts of data that generally make up TTRPGs.

:::caution
Charts may not be edited directly in Quest Bound. Use a program like Excel or Google Sheets to create your data, then upload it to a chart as a .csv file.

You can upload a new file to an existing chart at any time to update its data.
:::

## Referencing Charts

There are two places you’ll likely need to reference chart data: rulebook pages and in [attribute logic](./attributes/logic).

In attribute logic, a chart node will allow attributes to scan charts and pull data from a specific cell, applying its value to its logic calculation. Read more about how this works on the [logic page](./attributes/logic#references).

Rulebook pages can display charts as a table which can easily be formatted.

![img](./img/rulebook-chart.png)

Chart components will always read directly from the chart, meaning the pages will update automatically as you update the charts in your ruleset. Read more about how this works on the rulebook page.
