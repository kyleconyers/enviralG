CO2 Emissions Data by Country

This web app allows users to select a country from either an interactive map, or a drop-down menu when in mobile mode.

Based upon their selection, the page will output a table of metrics for that state from the years 1980-Present, showing both total CO2 emissions of that country, side by side with the country's population from that year.

The page will also generate a visual representation via D3 Bar Chart (or equivalent), to better illustrate the changing trends in populations and carbon emissions, and highlight any interesting trends.

Mission
A place where people can search, view emission data, connect with others and what they can do to combat emission using beautiful graphics and quality data in one place.

MVP
-Scope from US to World. Get as much data as we can from API calls.
-Add wedge chart that shows non-renewable energy consumption (past and predictive) and renewable consumption. Each wedge should have break down of energy type.  
-For each country, there will be a discussion forum that allows users to interact on whatever enviral content they'd like (Q: sign in users? etc.)


V2
-One interactive wedge (Reduction) will allow visualization of individual/community effort to combat emission.
-Link to different orgs to donate funds
C-alendar of events by user geographic info

Tech stack: 
-Node/Express: qq 
-Sql database/CRUD: Dicussion forum
-APIs/NPM packages for Maps including DataMaps & Topojson
-For APIs, make sure to use environment variable to conceal API keys


Differentiation notes: 
-Add Paris reduction targets to either our own API/Sql as it is not being aggregated by any agency.
-Visualization makes data more digestable

