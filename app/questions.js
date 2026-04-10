window.QUESTIONS_DB = {
  "version": "2.0",
  "types": [
    "numerical",
    "numerical_bosa",
    "sjt"
  ],
  "sources": [
    "BOSA_Num",
    "BOSA_SJT",
    "Baneth24",
    "NUM5"
  ],
  "questions": [
    {
      "id": "baneth24_ch6_s01_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 1 Q1",
      "set_id": "baneth24_ch6_set01",
      "figures": [
        "images/baneth24_ch6_set01_fig1.png",
        "images/baneth24_ch6_set01_fig2.png"
      ],
      "question": "Which of these countries had the second- highest total carrying capacity of oil pipelines operated in 2017?",
      "options": [
        {
          "letter": "A",
          "text": "Czechia"
        },
        {
          "letter": "B",
          "text": "Latvia"
        },
        {
          "letter": "C",
          "text": "Norway"
        },
        {
          "letter": "D",
          "text": "Romania"
        },
        {
          "letter": "E",
          "text": "Cannot say"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe need to calculate the total carrying capacity of oil \npipelines operated in each country by multiplying \nthe carrying capacity per kilometer of the country \nby the number of kilometers of oil pipelines oper-\nated in the respective country. We can then rank the \ncountries.\nCalculation\nWe know that:\nCarrying capacity per km of oil pipelines, tonnes per \nday:\n= (Total carrying capacity of oil pipelines, tonnes per \nday) / (Length of oil pipelines, in km)\nHence:\nTotal carrying capacity of oil pipelines, tonnes per day:\n= (Carrying capacity per km of oil pipelines, tonnes per \nday) * (Length of oil pipelines, in km)\nCzechia: \n77.88 * (6.42 * 100)\n= 77.88 * 642\n≈ 50 000\nLatvia:\n45.56 * (4.17 * 100)\n= 45.56 * 417\n≈ 19 000\nNorway:\n286.49 * (12.88 * 100)\n= 286.49 * 1 288\n≈ 369 000\nRomania:\n121.14 * (31.12 * 100)\n= 121.14 * 3 112\n≈ 377 000\nTherefore, Norway had the second-highest total \ncarrying capacity of oil pipelines operated in 2017.\nPotential Shortcuts / Pitfalls\nCzechia and Latvia are clearly much lower than \nNorway and Romania in both length of pipelines \nand carrying capacity per kilometer, therefore \nneither of them can be correct. You can’t tell whether \nNorway or Romania is correct without doing the \ncalculations above, but you only need to calculate \nfor those two countries − and if you haven’t got time \neven for that, then you have a 50/50 chance with a \nguess."
    },
    {
      "id": "baneth24_ch6_s01_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 1 Q2",
      "set_id": "baneth24_ch6_set01",
      "figures": [
        "images/baneth24_ch6_set01_fig1.png",
        "images/baneth24_ch6_set01_fig2.png"
      ],
      "question": "Based on the data for 2019, and assuming that the total lengths of oil pipelines operated do not change, by how many thousand tonnes per day must Latvia increase its total carrying capacity of oil pipelines operated to match the carrying capacity per kilometer of oil pipelines operated in Czechia?",
      "options": [
        {
          "letter": "A",
          "text": "3.03"
        },
        {
          "letter": "B",
          "text": "7.40"
        },
        {
          "letter": "C",
          "text": "21.83"
        },
        {
          "letter": "D",
          "text": "77.88"
        },
        {
          "letter": "E",
          "text": "7 400"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe need to calculate the total carrying capacity of \noil pipelines operated in Latvia in 2019 and then \ndetermine the required total carrying capacity of oil \npipelines operated in Latvia to match the per kilom-\neter figure of Czechia and then find the difference.\nCalculation\nWe know that:\nTotal carrying capacity of oil pipelines, thousand \ntonnes per day:\n= (Carrying capacity per km of oil pipelines, thousand \ntonnes per day) * (Length of oil pipelines, in km)\nTotal carrying capacity of oil pipelines operated (in \nthousand tonnes per day) in Latvia in 2019:\n(56.05 / 1 000) * (3.39 * 100)\n= 0.05605 * 339\n≈ 19.00\nTotal carrying capacity of oil pipelines operated \n(in thousand tonnes per day) required in Latvia to \nmatch the per kilometer figure of Czechia:\n(77.88 / 1 000) * (3.39 * 100)\n= 0.07788 * 339\n≈ 26.40\nIncrease required in the total carrying capacity of oil \npipelines operated (in thousand tonnes per day) in \nLatvia to match the per kilometer figure of Czechia:\n26.40 – 19.00\n= 7.40\n\n192\nnumerical reasoning mixed questions test\nPotential Shortcuts / Pitfalls\nLatvia needs to enhance the carrying capacity per \nkilometer of oil pipelines by replacing or upgrading \nthe existing pipelines, not by adding to the length of \noil pipelines. We could have multiplied the differ-\nence of the per kilometer figures of Latvia and \nCzechia with the length of oil pipelines in Latvia as \na shortcut calculation method. Also, make sure to \nread the figures for the correct year and be careful \nwith the order of magnitude of the answer required."
    },
    {
      "id": "baneth24_ch6_s01_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 1 Q3",
      "set_id": "baneth24_ch6_set01",
      "figures": [
        "images/baneth24_ch6_set01_fig1.png",
        "images/baneth24_ch6_set01_fig2.png"
      ],
      "question": "If the total length of oil pipelines operated in Norway, and their carrying capacity per kilometer, continue to increase at the same rates as they did between 2015 and 2019, what is the best estimate for the total carrying capacity of oil pipelines operated ( thousand tonnes per day) in Norway in 2023",
      "options": [
        {
          "letter": "A",
          "text": "0.602"
        },
        {
          "letter": "B",
          "text": "18.97"
        },
        {
          "letter": "C",
          "text": "70.6"
        },
        {
          "letter": "D",
          "text": "602"
        },
        {
          "letter": "E",
          "text": "602 000"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nUse the respective increases in the length of oil pipe-\nlines and the carrying capacity per kilometer of oil \npipelines between 2015 and 2019 to estimate the \nfigures for 2023 and then use those figures to estimate \nthe total carrying capacity of oil pipelines for 2023.\nCalculation\nIncrease in length of oil pipelines operated (in kilo-\nmeters) in Norway between 2015 and 2019 (i.e., in 4 \nyears):\n(15.71 – 12.45) * 100\n= 3.26 *100\n= 326\nIncrease in carrying capacity per kilometer of oil \npipelines operated (in thousand tonnes per day) in \nNorway between 2015 and 2019 (i.e., in 4 years):\n(306.81 – 296.39) / 1 000\n= 10.42 / 1 000\n= 0.01042\nThe estimated length of oil pipelines operated (in \nkilometers) in Norway in 2023:\n(Length of oil pipelines in 2019) + (Estimated increase \nin length of oil pipelines from 2019 to 2023)\n= (15.71 * 100) + 326\n= 1 571 + 326\n= 1 897\nThe estimated carrying capacity per kilometer of oil \npipelines operated (in thousand tonnes per day) in \nNorway in 2023:\n(Carrying capacity per km of oil pipelines in 2019) + \n(Estimated increase in carrying capacity per km of oil \npipelines from 2019 to 2023)\n= (306.81 / 1 000) + 0.01042\n= 0.30681 + 0.01042\n= 0.31723\nWe know that:\nTotal carrying capacity of oil pipelines, thousand \ntonnes per day:\n= (Carrying capacity per km of oil pipelines, thousand \ntonnes per day) * (Length of oil pipelines, in km)\nTherefore, the estimated total carrying capacity of oil \npipelines operated (in thousand tonnes per day) in \nNorway for 2023 is: \n0.31723 * 1 897\n≈ 602\nPotential Shortcuts / Pitfalls\nYou may have spotted that the answer options are \nvery spread apart. This is a clue that estimating \ncould be possible. If you round down the figures for \n2019 for Norway, the carrying capacity per kilom-\neter is about 300 tonnes per day and there are 1500 \nkilometers of pipelines. Multiply those together \nand you get 450,000 tonnes per day. A quick look \nat the figures shows that while Norway’s carrying \ncapacity per kilometer isn’t increasing much, the \ntotal length of pipelines is increasing by around a \nquarter in 4 years. This means we are looking for \nan answer which adds something like 25% to the \n450,000, and a bit more on top to compensate for the \nrounding down. The only possible correct answer \noption is D. \nOf course, you still have to be careful with the order \nof magnitude and notice that the figures in the \nanswer options are in thousand tonnes per day. If you \nmiss this, you will mistakenly choose answer option \nE."
    },
    {
      "id": "baneth24_ch6_s02_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 2 Q1",
      "set_id": "baneth24_ch6_set02",
      "figures": [
        "images/baneth24_ch6_set02_fig1.png",
        "images/baneth24_ch6_set02_fig2.png"
      ],
      "question": "What was the change in the difference (in millions) between the populations of Poland and the United Kingdom from 2015 to 2018?",
      "options": [
        {
          "letter": "A",
          "text": "–27.1"
        },
        {
          "letter": "B",
          "text": "–1.2"
        },
        {
          "letter": "C",
          "text": "No change"
        },
        {
          "letter": "D",
          "text": "+1.2"
        },
        {
          "letter": "E",
          "text": "+28.3"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe need first to estimate the populations of Poland \nand the United Kingdom in 2015 and 2018. We can \nthen work out the difference in population between \nthe two countries for those years, and find the \nchange in the difference.\n\n193\nnumerical reasoning mixed questions test\nCalculation\nWe know that:\nSettlement area per capita (in sq km per capita):\n= Total settlement area (in sq km)/ total population\nHence:\nTotal population:\n= Total settlement area (in sq km) / Settlement area per \ncapita (in sq km per capita)\nTotal population (in millions) of Poland in 2015:\n23 699 / 623.9 ≈ 38.0\nTotal population (in millions) of United Kingdom in \n2015:\n28 035 / 430.5 ≈ 65.1\nDifference (in millions) in the total populations of \nPoland and United Kingdom in 2015:\n65.1 – 38.0 = 27.1\nTotal population (in millions) of Poland in 2018:\n24 068 / 633.7 ≈ 38.0\nTotal population (in millions) of United Kingdom in \n2018:\n28 294 / 426.9 ≈ 66.3\nDifference (in millions) in the total populations of \nPoland and United Kingdom in 2018:\n66.3 – 38.0 = 28.3\nThe change in the difference (in millions) of the total \npopulations of Poland and United Kingdom from \n2015 to 2018:\n28.3 – 27.1 = 1.2\nPotential Shortcuts / Pitfalls\nNote that the difference between the two popula-\ntions has increased. Therefore, the change in the \ndifference must be positive, meaning either answer \nD or E. \nInstead of first converting the settlement area from \nsquare meters per capita to square kilometers per \ncapita by multiplying with a factor of 1 000 000 \nand then converting the total populations back to \nmillions by dividing by 1 000 000, we can simply use \nthe figures as they are to save time. The results will \nbe correct."
    },
    {
      "id": "baneth24_ch6_s02_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 2 Q2",
      "set_id": "baneth24_ch6_set02",
      "figures": [
        "images/baneth24_ch6_set02_fig1.png",
        "images/baneth24_ch6_set02_fig2.png"
      ],
      "question": "In 2018, the total land area of Belgium was 30 650 square kilometers while its total settlement area as a percentage of its total land area was 3 times as much as that of Poland in 2012. What was the approximate total land area (in square kilometers) of Poland in 2012?",
      "options": [
        {
          "letter": "A",
          "text": "1 630"
        },
        {
          "letter": "B",
          "text": "22 600"
        },
        {
          "letter": "C",
          "text": "91 950"
        },
        {
          "letter": "D",
          "text": "104 180"
        },
        {
          "letter": "E",
          "text": "314 000"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must first determine the total settled area of \nBelgium in 2018 as a percentage of its total land area \nto determine a similar percentage for Poland in 2012 \nbased on the given relationship. We can then use \nthis percentage to calculate the total land area of \nPoland in 2012.\nCalculation\nWe know that:\nTotal settlement area as % of the total land area:\n= (Total settlement area /Total land area) *100% \nApproximate total settlement area as a percentage of \nthe total land area in Belgium in 2018:\n(6 650 / 30 650) * (100%)\n≈ 0.217 * 100%\n= 21.7%\nIn 2018, Belgium’s total settlement area as a \npercentage of its total land area was 3 times as much \nas that of Poland in 2012. Therefore, Poland’s total \nsettlement area as a percentage of its total land area \nin 2012 was:\n= 21.7% / 3\n≈ 7.2%\nHence, Poland’s total land area (in square kilom-\neters) in 2012 was:\n= Total settlement area in 2012/Total settlement area in \n2012 as % of total land area\n= 22 606 / 7.2%\n= 22 606 / (7.2 / 100)\n= 22 606 / 0.072\n≈ 314 000\nPotential Shortcuts / Pitfalls\nThe answer options have significantly varying \nvalues. Therefore, approximate calculations could \nhave saved time and still given us the correct \nanswer. Option A is less than, and option B the same \nas, the settlement area of Poland in 2012, so neither \ncan possibly be the total land area. Option C is three \ntimes the total land area of Belgium. We already \nknow that the percentage of Belgium’s settlement \nwas three times the percentage of Poland and not \nthe total land area. Hence, it is also incorrect. Option \nD would result if the percentage of the settlement \n\n194\nnumerical reasoning mixed questions test\narea in Belgium was equal to that of Poland, which \nis not the case. Option E is therefore correct.\nNote that the given total land area and settlement \nareas are both in square kilometers, hence no unit \nconversions are required."
    },
    {
      "id": "baneth24_ch6_s02_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 2 Q3",
      "set_id": "baneth24_ch6_set02",
      "figures": [
        "images/baneth24_ch6_set02_fig1.png",
        "images/baneth24_ch6_set02_fig2.png"
      ],
      "question": "Based on the change in settlement area per capita and total settlement area of Belgium from 2012 to 2015, and assuming a linear rate of growth in population, what is the best estimate of its total population (in millions) in 2014?",
      "options": [
        {
          "letter": "A",
          "text": "0.16"
        },
        {
          "letter": "B",
          "text": "11.11"
        },
        {
          "letter": "C",
          "text": "11.16"
        },
        {
          "letter": "D",
          "text": "11.22"
        },
        {
          "letter": "E",
          "text": "11.27"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must calculate the total populations of Belgium \nin 2012 and 2015 to estimate the total population of \nBelgium in 2014.\nCalculation\nWe know that:\nTotal population: \n= Total settlement area (in sq km)/ Settlement area per \ncapita (in sq km per capita)\nHence:\nTotal population in millions:\n= Total settlement area (in sq km)/ Settlement area per \ncapita (in sq meters per capita)\nTotal population (in millions) of Belgium in 2012:\n5 973 / 537.8\n≈ 11.11\nTotal population (in millions) of Belgium in 2015:\n6 557 / 581.6\n≈ 11.27\nTotal change in Belgium’s total population (in \nmillions) from 2012 to 2015:\n11.27 – 11.11\n= 0.16\nAssuming linear rate of growth, annual change in \nBelgium’s total population (in millions) from 2012 to \n2015:\n= 0.16 / 3\n≈ 0.0533\nEstimated change in Belgium’s total population (in \nmillions) from 2012 to 2014:\n0.0533 * 2\n≈ 0.11\nThe best estimate of Belgium’s total population (in \nmillions) in 2014:\n(Belgium’s total population in 2012) \n+ (Estimated change in Belgium’s total population (in \nmillions) from 2012 to 2014)\n= 11.11 + 0.11\n= 11.22\nPotential Shortcuts / Pitfalls\nIt is important to account for the difference in units \nwhen finding the exact population. \nHere we have four very similar and therefore plau-\nsible options to choose from: B, C, D and E. However, \nour very first calculation tells us that B is the popu-\nlation in 2012, so that will not be right. Our second \ncalculation shows that E is the population in 2015, so \nthat will not be right. This leaves only options C and \nD. You may have noticed the approximately equal \ngaps between the values in options B, C, D and E. \nThis probably means that option C is the estimate for \n2013 and option D is the likely estimate for 2014."
    },
    {
      "id": "baneth24_ch6_s03_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 3 Q1",
      "set_id": "baneth24_ch6_set03",
      "figures": [
        "images/baneth24_ch6_set03_fig1.png",
        "images/baneth24_ch6_set03_fig2.png",
        "images/baneth24_ch6_set03_fig3.png"
      ],
      "question": "What was the difference in the number of national air transport passengers in Dec-202 between Germany and Austria?",
      "options": [
        {
          "letter": "A",
          "text": "18 314"
        },
        {
          "letter": "B",
          "text": "721 254"
        },
        {
          "letter": "C",
          "text": "745 633"
        },
        {
          "letter": "D",
          "text": "763 947"
        },
        {
          "letter": "E",
          "text": "899 775"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must estimate the number of national air \ntransport passengers in Germany and Austria in \nDec-2022 by multiplying the total number of passen-\ngers by the relevant percentages. Then we can find \nthe difference between the two.\nCalculation\nWe know that:\nNumber of national air transport passengers:\n= Total passengers * Percentage of national air \ntransport passengers\nAs we can see, a bar graph has been provided \ninstead of exact figures for air transport passengers \nby country. It is an indication that we will have to \nemploy estimation and mental arithmetic. We can \nread an approximate number for total air transport \npassengers in Dec-2022 from the bar graph. Austria \nhad approximately 2 million and Germany had \naround 11 million.\nSimilarly, we can round off the percentages of \nnational air transport passengers in Dec-2022. \nAustria’s percentage was almost 1% and Germany’s \nwas around 7%.\nNational air transport passengers (in millions) in \nGermany in Dec-2022:\n\n195\nnumerical reasoning mixed questions test\n11 * 7%\n= (10 + 1) * 7% = 10 * 7% + 1 * 7%\n= 0.7 + 0.07 ≈ 0.77\nNational air transport passengers (in millions) in \nAustria in Dec-2022:\n2 * 1% ≈ 0.02\nThe difference in the number of national air trans-\nport passengers in Dec-2022 between Germany and \nAustria:\n(0.77 – 0.02) * 1 000 000\n= 0.75 * 1 000 000\n≈ 750 000\nOption C is the closest in value. Hence, it must be \ncorrect.\nPotential Shortcuts / Pitfalls\nYou must be careful to read the data for the relevant \nperiod. If the figures for an incorrect period are used, \nthe result may match one of the incorrect options. \nAlthough our result was off by around 5 500 passen-\ngers, the correct result was comfortably close to our \napproximation. The net result was that we saved \ntime and still got the correct answer."
    },
    {
      "id": "baneth24_ch6_s03_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 3 Q2",
      "set_id": "baneth24_ch6_set03",
      "figures": [
        "images/baneth24_ch6_set03_fig1.png",
        "images/baneth24_ch6_set03_fig2.png",
        "images/baneth24_ch6_set03_fig3.png"
      ],
      "question": "What was the change in the number of all international air transport passengers in Spain from Feb-2023 to Apr-2023?",
      "options": [
        {
          "letter": "A",
          "text": "Decreased by 5 456 321"
        },
        {
          "letter": "B",
          "text": "Decreased by 560 044"
        },
        {
          "letter": "C",
          "text": "Increased by 2 120 027"
        },
        {
          "letter": "D",
          "text": "Increased by 3 336 294"
        },
        {
          "letter": "E",
          "text": "Increased by 5 456 321"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must first determine the combined interna-\ntional air transport passenger percentages in Spain \nfor Feb-2023 and Apr-2023 and then use them to \ncalculate the number of international air transport \npassengers in both periods. We can then find the \ndifference to determine the change.\nCalculation\nWe know that:\nNumber of national air transport passengers:\n= Total passengers * Percentage of national air \ntransport passengers\nThe combined international air transport passenger \npercentages in Spain for Feb-2023:\n45.8% + 32.1% = 77.9% ≈ 80%\nThe combined international air transport passenger \npercentages in Spain for Apr-2023:\n48.0% + 32.5% = 80.5% ≈ 80%\nAs we can see, the combined percentage of interna-\ntional air transport passengers has changed mini-\nmally and can be assumed to have remained constant \nat approximately 80%. Therefore, the change in the \nnumber of all international air transport passengers \nis simply 80% of the change in the number of all \nair transport passengers in Spain from Feb-2023 to \nApr-2023.\nTotal number of air transport passengers in Spain \nin Feb-2023 was approximately 13 million and in \nApr-2023 it was around 20 million.\nApproximate change (in millions) in the number of \nall international air transport passengers in Spain \nfrom Feb-2023 to Apr-2023:\n= 80% * (20 - 13)\n= (80 / 100) * 7 ≈ 5.5\nOption E is the closest in value. Hence, it must be \ncorrect.\nPotential Shortcuts / Pitfalls\nIt was an efficient shortcut to assume a constant \nrounded percentage of international air transport \npassengers for both periods. It simplified our calcu-\nlations significantly.\nIt is vital to read the values for the correct periods. \nHad figures for Dec-2022 been read instead of \nFeb-2023, the result would have matched with \nanother option. You must also note that the number \nof total and international air transport passengers \nin Apr-2023 was greater than the those in Feb-2023, \nhence the change must be an increase, eliminating \nanswer options A and B."
    },
    {
      "id": "baneth24_ch6_s03_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 3 Q3",
      "set_id": "baneth24_ch6_set03",
      "figures": [
        "images/baneth24_ch6_set03_fig1.png",
        "images/baneth24_ch6_set03_fig2.png",
        "images/baneth24_ch6_set03_fig3.png"
      ],
      "question": "Based on the change in settlement area per capita and total settlement area of Belgium from 2012 to 2015, and assuming a linear rate of growth in population, what is the best estimate of its total population (in millions) in 2014?",
      "options": [
        {
          "letter": "A",
          "text": "0.16"
        },
        {
          "letter": "B",
          "text": "11.11"
        },
        {
          "letter": "C",
          "text": "11.16"
        },
        {
          "letter": "D",
          "text": "11.22"
        },
        {
          "letter": "E",
          "text": "11.27"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must estimate a percentage for international \n(Extra EU-27) air transport passengers in Germany \nin Dec-2023 as well as the total number of air trans-\nport passengers.\nCalculation\nChange in percentage of international (Extra EU-27) \nair transport passengers in Germany in 2 months \nfrom Feb-2023 to Apr-2023:\n43.0% – 45.4% = –2.4%\n\n196\nnumerical reasoning mixed questions test\nTherefore, assuming a linear model, the change in \nthe percentage in the next 8 months will be four \ntimes that of the previous 2 months:\n4 * –2.4% = –9.6%\nHence, the approximate percentage of international \n(Extra EU-27) air transport passengers in Germany \nin Dec-2023 will be:\n43.0% – 9.6% = 33.4% ≈ 35%\nFrom the bar graph, the total number of air transport \npassengers in Germany in Feb-2023 was approxi-\nmately 10 million and in Apr-2023 it was around 15 \nmillion.\nChange in the total number (in millions) of air \ntransport passengers in Germany in 2 months from \nFeb-2023 to Apr-2023:\n15 – 10 = 5\nTherefore, assuming a linear model, the change in \nthe total in the next 8 months will be four times that \nof the previous 2 months:\n4 * 5 = 20\nHence, the approximate total number (in millions) \nof air transport passengers in Germany in Dec-2023 \nwill be:\n15 + 20 = 35\nThe anticipated number (in millions) of international \n(Extra EU-27) air transport passengers in Germany \nin Dec-2023:\n35 * 35% = 35 * (35 / 100) = 12.25\nOption D is the closest in value. Hence, it must be \ncorrect.\nPotential Shortcuts / Pitfalls\nDespite the falling percentage of international (Extra \nEU-27) air transport passengers in Germany, the \nsignificant increase in the total number of air trans-\nport passengers in Germany will cause the number \nof that type of passengers to increase. Therefore, do \nnot mark option A as correct in haste.\nAn alternative method of calculation would have been \nto calculate the number of international (Extra EU-27) \nair transport passengers in Feb-2023 and in Apr-2023 \nand then base the prediction on those two figures.\nThe projected total passenger numbers for Dec-2023 \n(35 million), when compared with the same month in \n2022 (11 million), will probably seem very unlikely in \nreal-world terms. However, you must always work \nonly with the data provided and the assumptions \ngiven in the question text and not import any other \nknowledge or reasoning."
    },
    {
      "id": "baneth24_ch6_s04_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 4 Q1",
      "set_id": "baneth24_ch6_set04",
      "figures": [
        "images/baneth24_ch6_set04_fig1.png"
      ],
      "question": "What was the difference in the average spee (in m/s) of the athletes in the 1st and 10th fin positions, in the last 5 km of the race walk?",
      "options": [
        {
          "letter": "A",
          "text": "0.09"
        },
        {
          "letter": "B",
          "text": "0.30"
        },
        {
          "letter": "C",
          "text": "0.43"
        },
        {
          "letter": "D",
          "text": "3.70"
        },
        {
          "letter": "E",
          "text": "4.00"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must calculate the difference between the 15 \nkm and the 20 km times and then use the speed, \ndistance and time formula to calculate the average \nspeeds of each athlete. Then we can find the differ-\nence in average speeds.\nCalculation\nTime taken (in seconds) by Maria Perez (athlete in \n1st place) for the last 5 km:\n1:26:51 – 1:06:04\n= 26:51 – 06:04 = (26 * 60 + 51) – (6 * 60 + 4)\n= 1 611 – 364 = 1 247\nTime taken (in seconds) by Olena Sobchuk (athlete in \n10th place) for the last 5 km:\n1:28:50 – 1:06:17\n= 28:50 – 06:17 = (28 * 60 + 50) – (6 * 60 + 17)\n= 1 730 – 377 = 1 353\nSpeed = Distance / Time\nAverage speed (in m/s) of Maria Perez in the last 5 \nkm:\n(5 * 1 000) / 1 247 ≈ 4.00\nAverage speed (in m/s) of Olena Sobchuk in the last \n5 km:\n(5 * 1 000) / 1 353 ≈ 3.70\nThe difference in the average speeds (in m/s) of \nathletes in 1st and 10th positions in the last 5 km of \nthe race walk:\n4.00 – 3.70 = 0.30\nPotential Shortcuts / Pitfalls\nThe units required are m/s. Therefore, the numbers \nmust be converted from km to m and from hours, \nminutes, seconds to seconds. You must also first \ndetermine the average speeds of each athlete and \nthen subtract them. You cannot divide the distance \nby the difference in times to find the difference in \naverage speeds.\n\n197\nnumerical reasoning mixed questions test\nAs you may have noticed, we ignored 1 hour from \neach of the 15 km and 20 km times when subtracting. \nThis saves valuable time in the test.\nIf you have no time to do proper calculations and \nneed to make a guess, just think about the answer \noptions. A, B and C are obviously of a different \norder of magnitude to D and E, so which group will \ninclude the correct answer? E is a round number so \nyou can do a quick bit of mental arithmetic. A differ-\nence of 4 metres per second is 240 metres per minute, \nor nearly 1 km every 4 minutes. However, we know \nthat the difference in the time the two athletes took \nto cover 20 km was only 2 minutes. D and E cannot \npossibly be right."
    },
    {
      "id": "baneth24_ch6_s04_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 4 Q2",
      "set_id": "baneth24_ch6_set04",
      "figures": [
        "images/baneth24_ch6_set04_fig1.png"
      ],
      "question": "Assuming that athletes ran at constant spee between the noted times, how far behind Antonella Palmisano was Zhenxia Ma (in meters) when Ma was at the 19 km mark?",
      "options": [
        {
          "letter": "A",
          "text": "46"
        },
        {
          "letter": "B",
          "text": "eds i nal ds"
        },
        {
          "letter": "C",
          "text": "152"
        },
        {
          "letter": "D",
          "text": "184"
        },
        {
          "letter": "E",
          "text": ""
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must first determine the time difference for \nPalmisano and Ma to reach the 19 km mark. Then \nwe can work out the distance covered by Palmisano \nin that amount of time.\nCalculation\nDifference between times (in seconds) when \nPalmisano and Ma reached the 19 km mark:\n1:24:02 – 1:23:16\n= 24:02 – 23:16 = (24 * 60 + 2) – (23 * 60 + 16)\n= 1 442 – 1 396 = 46\nTime required (in seconds) by Palmisano to cover the \nfinal 1 km:\n1:27:26 – 1:23:16\n= 27:26 – 23:16 = (27 * 60 + 26) – (23 * 60 + 16)\n= 1 646 – 1 396 = 250\nAverage speed (in m/s) of Palmisano for the final 1 \nkm:\n1 000 / 250 = 4\nWe know that: \nDistance = Speed * Time\nDistance covered by Palmisano (in meters) in 46 \nseconds after passing the 19 km mark (i.e., the \ndistance between Antonella Palmisano and Zhenxia \nMa (in meters) when Ma was at the 19 km mark):\n4 * 46 = 184\nPotential Shortcuts / Pitfalls\nBe careful to read the data for the relevant times. \nRemember also that the distance between the \nathletes is required when Ma is at the 19 km mark, \nnot when Palmisano is at that point.\nBe careful not to use Ma’s average speed to calculate \nthe distance. It is convenient to carry out calcula-\ntions in meters and seconds. Again, we can ignore \nthe complete hour from time difference calculations.\nIn case you need to make an educated guess, you \ncan do a bit of mental arithmetic. The difference in \ntimes for the two athletes to reach the 19 km mark \nwas around 45 seconds. The athletes, in general, took \naround an hour and a half to cover 20 km. That is \naround 10 km in 45 minutes and around (10/60) km \nin 45 seconds. Hence, the distance between the two \nathletes will be around 165 m. Options C and D are \ngood guesses."
    },
    {
      "id": "baneth24_ch6_s04_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 4 Q3",
      "set_id": "baneth24_ch6_set04",
      "figures": [
        "images/baneth24_ch6_set04_fig1.png"
      ],
      "question": "If the times of the other athletes stayed the same, by how many seconds would Ana Cabecinha have missed a shared 1st place had she covered the 20 km distance 2% faster than she did?",
      "options": [
        {
          "letter": "A",
          "text": "2"
        },
        {
          "letter": "B",
          "text": ""
        },
        {
          "letter": "C",
          "text": "11"
        },
        {
          "letter": "D",
          "text": "22"
        },
        {
          "letter": "E",
          "text": ""
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must calculate Cabecinha’s average speed for \nthe 20 km race walk and then find the average speed \nwhich is 2% faster. Then, use the faster speed to \ncalculate the time it would take her to cover 20 km. \nFinally, find the difference in time with the athlete \nin 1st place.\nCalculation\nCabecinha’s average speed (in m/s) in the 20 km race \nwalk:\n(20 * 1 000) / (1:28:49)\n= 20 000 / ((60 + 28) * 60 + 49)\n= 20 000 / 5 329 ≈ 3.753\nAverage speed (in m/s) that is 2% faster than her \nactual speed:\n3.753 * (100% + 2%)\n= 3.753 * 1.02 ≈ 3.83\nTime = Distance / Speed\nTime required (in seconds) by Cabecinha to complete \n20 km race walk at a 2% faster speed:\n(20 * 1 000) / 3.83\n≈ 5 222\n\n198\nnumerical reasoning mixed questions test\nTime taken (in seconds) by Maria Perez (1st place) to \ncomplete the 20 km race walk:\n1:26:51\n= ((60 + 26) * 60 + 51)\n= 5 211\nNumber of seconds by which Ana Cabecinha would \nhave missed a shared 1st position had she covered \nthe 20 km distance 2% faster:\n5 222 – 5 211 = 11\nPotential Shortcuts / Pitfalls\nIt is important to convert the complete times \n(including the hours) to seconds for calculation since \nthese are not time difference calculations. Be careful \nnot to increase Cabecinha’s race walk time by 2%. \nThat would actually make her slower.\nCabecinha’s time was around an hour and a half \nto complete the race walk and the time difference \nbetween her and Perez was almost 120 seconds. To \nincrease her speed by 2%, she must cut her total \ntime by around 2% as well. 2% of 90 minutes is 1.8 \nminutes ≈ 110 seconds. If we subtract 110 seconds \nfrom the existing time difference of the two athletes, \nwe get 120 – 110=10 seconds. Option C would be the \nbest guess."
    },
    {
      "id": "baneth24_ch6_s05_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 5 Q1",
      "set_id": "baneth24_ch6_set05",
      "figures": [
        "images/baneth24_ch6_set05_fig1.png",
        "images/baneth24_ch6_set05_fig2.png",
        "images/baneth24_ch6_set05_fig3.png"
      ],
      "question": "What was the number of monthly active X (formerly Twitter) users as a percentage of monthly active Facebook users in the first quarter of 2016 (Q1 ’16)?",
      "options": [
        {
          "letter": "A",
          "text": "18.8%"
        },
        {
          "letter": "B",
          "text": "25.0%"
        },
        {
          "letter": "C",
          "text": "31.1%"
        },
        {
          "letter": "D",
          "text": "187.8%"
        },
        {
          "letter": "E",
          "text": "532.2%"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must estimate the number of monthly active \nusers of X as well as Facebook in Q1 ’16 from the \ngraphs and then calculate the former as a percentage \nof the latter.\nCalculation\nAs we can see, graphs have been provided instead of \nexact figures for monthly active users of two social \nmedia platforms. It is an indication that we will have \nto use estimation and mental arithmetic. \nWe can read approximate numbers for monthly \nactive users of X and Facebook in Q1 ’16 from the \nrespective graphs. X had approximately 310 million \nmonthly active users. Facebook had approximately \n1 600 million monthly active users in Q4 ’15 and \napproximately 1 700 million in Q2 ’16. The inter-\nmediate point (Q1 ’16) between these two points is \naround 1 650 million.\nWe know that five times 310 is 1 550. Alternatively, \n310 is one-fifth, or 20%, of 1 550. Hence, 310 as a \npercentage of 1 650 should be less than 20%. Option \nA is the obvious choice.\nPotential Shortcuts / Pitfalls\nThe graphs provide data with a different time range. \nYou must be careful to read the data for the relevant \nperiod only.\nIt is critical to note, from the question, which number \nis required as a percentage of the other. If the values \nare swapped by mistake, you will end up choosing \nan incorrect option, having a percentage higher than \n500%, as correct.\nAs you can see, we did not calculate the exact \npercentage required in the question, but only esti-\nmated a range for the target value to save precious \ntime."
    },
    {
      "id": "baneth24_ch6_s05_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 5 Q2",
      "set_id": "baneth24_ch6_set05",
      "figures": [
        "images/baneth24_ch6_set05_fig1.png",
        "images/baneth24_ch6_set05_fig2.png",
        "images/baneth24_ch6_set05_fig3.png"
      ],
      "question": "What was the number of male Facebook use in the age range 25-44 in January 2023?",
      "options": [
        {
          "letter": "A",
          "text": "368 million"
        },
        {
          "letter": "B",
          "text": "526 million ers"
        },
        {
          "letter": "C",
          "text": "622 million"
        },
        {
          "letter": "D",
          "text": "852 million"
        },
        {
          "letter": "E",
          "text": "1 474 million"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must first determine the number of Facebook \nmonthly active users in January 2023, which falls \nin Q1 ’23. Then, we must add up the percentages of \nmale users in the age ranges 25-34 and 35-44. Finally, \nwe can calculate the number of male Facebook users \nin the age range 25-44 in January 2023.\nCalculation\nFacebook had approximately 2 970 million monthly \nactive users in Q4 ’22 and approximately 3 030 \nmillion in Q2 ’23. The intermediate point (Q1 ’23) \nbetween these two points is around 3 000 million.\nFrom the age and gender distribution graph, we can \nsee that there were 17.6% male Facebook users in the \nage range 25-34 and 10.9% in the age range 35-44. \nTogether, there were 17.6% + 10.9% = 28.5% (approx-\nimately 30%) monthly active male Facebook users in \nthe age range 25-44 in January 2023.\nApproximate number (in millions) of male Facebook \nusers in the age range 25-44 in January 2023:\n= 3 000 * 30%\n= 3 000 * 0.30\n= 900\nOption D is the closest in value. Hence, it must be \ncorrect.\n\n199\nnumerical reasoning mixed questions test\nPotential Shortcuts / Pitfalls\nIt was efficient to assume a rounded percentage \nof male Facebook users in the given age range. It \nsimplified our calculation significantly.\nIt is vital to read the values for the correct period. \nSimilarly, to read the percentages for the correct age \ngroups and gender from the distribution graph. In \ncase of an error, the incorrect options might match \nyour answer. It is easy to confuse the age range 25-44 \nwith 25-34. Therefore, care must be taken in reading \nthe correct percentages."
    },
    {
      "id": "baneth24_ch6_s05_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 5 Q3",
      "set_id": "baneth24_ch6_set05",
      "figures": [
        "images/baneth24_ch6_set05_fig1.png",
        "images/baneth24_ch6_set05_fig2.png",
        "images/baneth24_ch6_set05_fig3.png"
      ],
      "question": "Based on the monthly active users’ growth rate trend from Q1 ’13 to Q1 ’15, what was the difference (in millions) between the projected and the actual number of monthly active users of X (formerly Twitter) in Q1 ‘17?",
      "options": [
        {
          "letter": "A",
          "text": "23"
        },
        {
          "letter": "B",
          "text": ""
        },
        {
          "letter": "C",
          "text": "98"
        },
        {
          "letter": "D",
          "text": "204"
        },
        {
          "letter": "E",
          "text": ""
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must estimate the number of monthly active \nusers of X in Q1 ’13 and Q1 ’15 and find the change \nbetween them. We must use this difference to calcu-\nlate the projected number of monthly active users \nin Q1 ’17. The difference between the projected and \nactual number of monthly active users in Q1 ’17 will \nbe our solution.\nCalculation\nThe approximate number of monthly active users of \nX in Q1 ’13 was 200 million and in Q1 ’15 was around \n300 million. Therefore, the increase in two years was \n300 – 200 = 100 million.\nThe projected monthly active users of X in Q1 ‘17, \nbased on the trend from Q1 ’13 to Q1 15, was:\n(Number of monthly active users in Q1 ’15) + (Change \nin two years in monthly active users from Q1 ’13 to Q1 \n’15)\n= 300 million + 100 million\n= 400 million\nFrom the graph, the approximate number of the \nactual monthly active users of X in Q1 ’17 was 325 \nmillion.\nThe difference (in millions) between the projected \nand the actual number of monthly active users of X \n(formerly Twitter) in Q1 ’17 was:\n400 – 325 = 75\nOption B is the closest in value. Hence, it must be \ncorrect.\nPotential Shortcuts / Pitfalls\nAlthough we could have calculated the annual \nchange (increase) in the number of monthly active \nusers of X to calculate the projected number for Q1 \n’17, it was quicker and convenient to just add the \nfigure for two years directly to the number in Q1 ‘15.\nMake sure that you read the data for X and not \nFacebook.\nAs can be seen from the graph of X, the number of \nmonthly active users was increasing almost linearly \nup until Q1 ’15 after which the number almost stag-\nnated between 300 million and 350 million. Hence, \nall projections based on the data before Q1 ’15 would \nhave proven incorrect."
    },
    {
      "id": "baneth24_ch6_s06_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 6 Q1",
      "set_id": "baneth24_ch6_set06",
      "figures": [
        "images/baneth24_ch6_set06_fig1.png"
      ],
      "question": "If ‘ICT, media, computers, business and financial services’ accounted for approximately 49% of all services imported by the European Union in 2014, what was th total value of services imported (in millions of euros) that year?",
      "options": [
        {
          "letter": "A",
          "text": "301 507"
        },
        {
          "letter": "B",
          "text": "313 813"
        },
        {
          "letter": "C",
          "text": "369 031"
        },
        {
          "letter": "D",
          "text": "615 320"
        },
        {
          "letter": "E",
          "text": "753 124"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nUse the given percentage of the noted category to \nconstruct an equation for the sum of all services \nimported in 2014. This will allow us to calculate the \ntotal value of services imported by the European \nUnion in 2014.\nCalculation\nLet X be the total value of services imported (in \nmillions of euros) by the European Union in 2014.\nTherefore, the value of services imported in the \n‘ICT…’ category in 2014 must be:\n= 49% * X \n= 0.49X\nThe sum of all services imported in 2014 was:\nX = 19 429 + 15 384 + 27 282 + 3 901 + 158 618 + 0.49X \n+ 87 421 + 1 778\nX = 313 813 + 0.49X\nX – 0.49X = 313 813\n0.51X = 313 813\nX = 313 813 / 0.51\nX ≈ 615 320\nPotential Shortcuts / Pitfalls\nThe question refers to the year 2014 only. Therefore, \nyou must take care only to use data from that year. \nIncorrect options for 49% of 2016’s total and 2016’s \ntotal itself have been provided. The sum of all \namounts other than the mentioned category has also \nbeen provided as an incorrect option.\n\n200\nnumerical reasoning mixed questions test\nSince the percentage of the category is 49% (approx-\nimately 50%), the sum of all other services almost \nequals that of ‘ICT…’ alone. Hence, we can simply \ndouble the sum of all other services imported to \nmake a guess."
    },
    {
      "id": "baneth24_ch6_s06_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 6 Q2",
      "set_id": "baneth24_ch6_set06",
      "figures": [
        "images/baneth24_ch6_set06_fig1.png"
      ],
      "question": "If the services imported related to ‘Construction, wood, glass, stone, basic metals, housing, electrical appliances, he furniture’ and ‘Government, military and other’ stayed the same as a percentage of the respective total services imported in 2014 and 2018, what was the value of services imported in the ‘Government, military and other’ category in 2018 (in millions of euros)?",
      "options": [
        {
          "letter": "A",
          "text": "645"
        },
        {
          "letter": "B",
          "text": "2 095"
        },
        {
          "letter": "C",
          "text": "2 423"
        },
        {
          "letter": "D",
          "text": "3 873"
        },
        {
          "letter": "E",
          "text": "9 892"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must construct an equation such that the factor \nof increase in the ‘Construction…’ category from \n2014 to 2018 is applied to the ‘Government…’ cate-\ngory since the percentages of both these categories \nhave remained constant.\nCalculation\nLet G be the value of services imported in the \n‘Government…’ category in 2018 (in millions of \neuros).\nHence:\nG = (Services imported in the Construction category in \n2018 / Services imported in the Construction category \nin 2014) * Government services imported in 2014 \nG = (37 174 / 27 282) * 1 778\nG ≈ 1.363 * 1 778\nG = 2 423\nPotential Shortcuts / Pitfalls\nEach of the two mentioned categories represented \nthe same respective fraction of the total services \nimported in 2014 and 2018. Hence, they both \nincreased by the same factor between those years \nalong with the totals. However, it is unnecessary to \ncalculate the exact percentage of the total that each \ncategory represents.\nA quick glance at the import figures of the \n‘Construction…’ category tells us that the increase \nfrom 2014 to 2016 was approximately 5 000 and was \nalmost the same from 2016 to 2018. We should expect \na similar trend from the ‘Government…’ category. \nThe increase from 2014 to 2016 was around 300. \nAnother increase of 300 should bring the 2018 figure \ninto the vicinity of 2 400. Hence, option C would be a \ngood guess to make."
    },
    {
      "id": "baneth24_ch6_s06_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 6 Q3",
      "set_id": "baneth24_ch6_set06",
      "figures": [
        "images/baneth24_ch6_set06_fig1.png"
      ],
      "question": "What additional value (in millions of euros) of ‘Health, pharmaceuticals, education, cultural, sport’ services should have been imported by the European Union in 2018, as compared to 2016, to match the percentage increase of ‘Transport equipment and services, travel, postal services’ imported from 2016 to 2018?",
      "options": [
        {
          "letter": "A",
          "text": "13 494"
        },
        {
          "letter": "B",
          "text": "17 158"
        },
        {
          "letter": "C",
          "text": "21 341"
        },
        {
          "letter": "D",
          "text": "24 402"
        },
        {
          "letter": "E",
          "text": "166 518"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must make an equation to apply the factor \nincrease of the ‘Transport…’ category from 2016 \nto 2018, to the ‘Health…’ category in order to find \nthe additional value of imports required in the \n‘Health…’ category.\nCalculation\nLet H, be the additional value of services imported \n(in millions of euros) in the ‘Health…’ category \nin 2018 to match the percentage increase in the \n‘Transport…’ category imported from 2016 to 2018.\nTherefore:\nH = (((Services imported in the Transport category in \n2018) / (Services imported in the Transport category in \n2016)) * (Health services imported in 2016)) – (Health \nservices imported in 2016)\nH = (189 749 / 165 437) * 145 177 – 145 177\nH ≈ 1.147 * 145 177 – 145 177\nH ≈ 166 518 – 145 177 \nH = 21 341\nPotential Shortcuts / Pitfalls\nThe additional value of imports in 2018 in ‘Health…’ \nservices is required and not the revised value of \nimports in the ‘Health…’ services in 2018.\nIt is very important to use the amounts of 2016 and \n2018 for the noted categories only. If incorrect figures \nare used, you might choose one of the incorrect \noptions.\nThe increase in the imports of ‘Transport…’ was \naround 24 000 from 2016 to 2018. Since the 2016 \nimports of ‘Health…’ were about 12% lower, a corre-\nsponding increase of 12% lower is required. (100 – \n12%) = 88% of 24 000 is around 21 000. Hence, option \nC would be the best guess."
    },
    {
      "id": "baneth24_ch6_s07_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 7 Q1",
      "set_id": "baneth24_ch6_set07",
      "figures": [
        "images/baneth24_ch6_set07_fig1.png"
      ],
      "question": "In 2017, what would have been the approximate price (in euros) of a particular product in Ireland that had a price of €50 in Hungary?",
      "options": [
        {
          "letter": "A",
          "text": "25.04"
        },
        {
          "letter": "B",
          "text": "99.85"
        },
        {
          "letter": "C",
          "text": "109.42"
        },
        {
          "letter": "D",
          "text": "131.60"
        },
        {
          "letter": "E",
          "text": "200.00"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nUse the comparative price levels of Hungary and \nIreland in 2017 to calculate the equivalent price in \nIreland.\n\n201\nnumerical reasoning mixed questions test\nCalculation\nThe comparative price level in Hungary in 2017 was \n65.9. This means that if something had an average \nprice of €100.0 in the EU, it would be priced at €65.9 \nin Hungary. Similarly, the comparative price level in \nIreland in 2017 was 131.6. This means that if some-\nthing had an average price of Euros €100.0 in the EU, \nit would be priced at €131.6 in Ireland.\nTherefore, the EU average price (in Euros) of the €50 \nproduct in Hungary would be:\n(EU average price level / Hungary comparative price \nlevel) * (Product price in Hungary)\n= (100 / 65.9) * 50\n≈ 75.87\nThe price (in euros) of the same product in Ireland \nwould be:\n= (Ireland comparative price level / EU average price \nlevel) * (EU average product price)\n(131.6 /100) * 75.87\n≈ 99.85\nPotential Shortcuts / Pitfalls\nThe shortcut method of calculating the equivalent \nprice would be:\n(Ireland comparative price level / Hungary comparative \nprice level) * (Product price in Hungary)\n= (131.6 / 65.9) * 50 ≈ 99.85\nConsider that Ireland was almost twice as expen-\nsive (65 * 2 = 130) as Hungary in 2017. Hence the €50 \nproduct would cost almost twice as much in Ireland, \ni.e., around €100. Options B and C would be the best \nguesses."
    },
    {
      "id": "baneth24_ch6_s07_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 7 Q2",
      "set_id": "baneth24_ch6_set07",
      "figures": [
        "images/baneth24_ch6_set07_fig1.png"
      ],
      "question": "What was the difference between the percentage change in price levels in Japan as compared to those in Germany from 2012 to 2022?",
      "options": [
        {
          "letter": "A",
          "text": "3.81%"
        },
        {
          "letter": "B",
          "text": "10.35%"
        },
        {
          "letter": "C",
          "text": "15.43%"
        },
        {
          "letter": "D",
          "text": "19.24%"
        },
        {
          "letter": "E",
          "text": "23.05%"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nUse the comparative price levels of Germany and \nJapan in 2012 and 2022 to determine the difference \nbetween the percentage change in the price levels in \nJapan as compared to those in Germany from 2012 \nto 2022.\nCalculation\nThe comparative price level in Germany in 2012 was \n104.9 and in 2022 was 108.9. Similarly, the compara-\ntive price level in Japan in 2012 was 138.8 and in 2022 \nwas 112.1. This means that price levels in Germany \nincreased over 10 years and those in Japan decreased \nover the same period.\nPercentage change in comparative price level in \nGermany from 2012 to 2022:\n= ((Comparative price level in 2022 – Comparative price \nlevel in 2012) / (Comparative price level in 2012)) * 100%\n= ((108.9 – 104.9) / 104.9) * 100%\n= (4.0 / 104.9) * 100%\n≈ 0.0381 / 100% = + 3.81%\nPercentage change in comparative price level in \nJapan from 2012 to 2022:\n= ((Comparative price level in 2022 – Comparative price \nlevel in 2012) / (Comparative price level in 2012)) * 100%\n= ((112.1 – 138.8) / 138.8) * 100%\n= (– 26.7 / 138.8) * 100%\n≈ – 0.1924 / 100% = –19.24%\nThe difference between the percentage changes in \nthe price levels in Japan as compared to those in \nGermany from 2012 to 2022:\n= |(Percentage change in Japan) – (Percentage change \nin Germany)|\n= – 19.24% – (+3.81%)\n= – 19.24% – 3.81% = –23.05%\n= 23.05%\nPotential Shortcuts / Pitfalls\nThere are quite a few calculations here, with plenty \nof potential for going wrong, so can we get to an \nanswer which is close enough without doing full \ncalculations? Think about it this way. Germany’s \nprice level increased by 4 over ten years, which is \napproximately 4%. Japan’s price level, on the other \nhand, decreased by around 26 over ten years, which \nis approximately 20%. Hence the difference is 4% – \n(–20) = 24%. Therefore, option E should be correct \nbecause it is the closest value to our estimate."
    },
    {
      "id": "baneth24_ch6_s07_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 7 Q3",
      "set_id": "baneth24_ch6_set07",
      "figures": [
        "images/baneth24_ch6_set07_fig1.png"
      ],
      "question": "What should have been the comparative price level in Poland in 2017, if it were to match the percentage of increase in price level in the United States from 2012 to 2017?",
      "options": [
        {
          "letter": "A",
          "text": "58.8"
        },
        {
          "letter": "B",
          "text": "69.1"
        },
        {
          "letter": "C",
          "text": "77.3"
        },
        {
          "letter": "D",
          "text": "78.0"
        },
        {
          "letter": "E",
          "text": "118.0"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nCompute the percentage of increase in price level in \nthe United States from 2012 to 2017 and then find \nthe comparative price level for Poland in 2017 that \nwould have matched the percentage in Poland.\n\n202\nnumerical reasoning mixed questions test\nCalculation\nThe comparative price level in the United States in \n2012 was 98.3 and in 2017 was 118.0. Similarly, the \ncomparative price level in Poland in 2012 was 57.6.\nThe percentage of increase in price level in the United \nStates from 2012 to 2017:\n= ((Comparative price level in 2017 – Comparative price \nlevel in 2012) / (Comparative price level in 2012)) * 100%\n= ((118.0 – 98.3) / 98.3) * 100%\n= (19.7 / 98.3) * 100%\n≈ 0.2004 / 100% = 20.04%\nLet P, be the comparative price level in Poland in \n2017 to match the percentage of increase in price \nlevel of the United States from 2012 to 2017.\nTo match the percentage of increase of price level in \nthe United States from 2012 to 2017, the comparative \nprice level in Poland in 2017 should have been:\nTarget percentage of increase in price level:\n= ((Comparative price level in 2017 – Comparative price \nlevel in 2012) / (Comparative price level in 2012)) * 100%\n20.04% = ((P – 57.6) / 57.6) * 100%\n0.2004 = (P – 57.6) / 57.6\nP – 57.6 = 0.2004 * 57.6 ≈ 11.5\nP = 11.5 + 57.6 = 69.1\nPotential Shortcuts / Pitfalls\nThe actual comparative price level in Poland in 2017, \ni.e. 58.8, is irrelevant to the calculation. We do not \nneed the actual comparative price level, but one that \nwould equate the percentage increase in price level \nof the United States in the specified 5 years with that \nof Poland. It is also crucial to distinguish between \nthe percentage increase in comparative price levels as \nopposed to the simple increase in comparative price \nlevels.\nOnce again, we have lots of calculations that can be \ngreatly simplified. The comparative price level in \nthe United States increased by around 20, which is \nalmost equal to 20%. A 20% increase in 57.6, i.e., the \n2012 comparative price level of Poland, would give \nyou 57.6 *1.2 = 69.12. Option B is the closest value."
    },
    {
      "id": "baneth24_ch6_s08_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 8 Q1",
      "set_id": "baneth24_ch6_set08",
      "figures": [
        "images/baneth24_ch6_set08_fig1.png"
      ],
      "question": "What was the change in the number of cases per hospital bed from 1997 to 2021?",
      "options": [
        {
          "letter": "A",
          "text": "–12.7"
        },
        {
          "letter": "B",
          "text": "–6.3"
        },
        {
          "letter": "C",
          "text": "No change"
        },
        {
          "letter": "D",
          "text": "+6.3"
        },
        {
          "letter": "E",
          "text": "+12.7"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must estimate the number of cases per hospital \nbed for 1997 as well as for 2021 and then find the \ndifference between the two.\nCalculation\nWe know that:\nNumber of cases per hospital bed: \n= Total number of cases / Total number of hospital \nbeds \nThe total number of cases in Germany in 1997 was \nabout 16 500 thousand and in 2021 approximately \n16 750 thousand. The total number of hospital beds \nin Germany in 1997 was about 600 thousand and in \n2021 approximately 500 thousand. \nThe approximate number of cases per hospital bed in \nGermany in 1997:\n= 16 500 / 600\n≈ 27.5\nThe approximate number of cases per hospital bed in \nGermany in 2021:\n= 16 750 / 500\n≈ 33.5\nThe approximate change in the number of cases per \nhospital bed from 1997 to 2021:\n= 33.5 – 27.5\n= +6\nOption D is the closest value to our estimate and is \ntherefore the correct option to choose.\nPotential Shortcuts / Pitfalls\nAs always when there is a table with lots of rows \nand columns you have to be careful to get your data \nfrom the right ones. Here, for example, it is easy to \nconfuse 1997 with 1991, since 1991 is the first row in \nthe table. As well as calculating the ratio correctly, \nyou must subtract the ratio for 1997 from the ratio for \n2021 and not the other way around.\nThe data provided in the table is accurate, but the \nnumbers are also quite large, making it easier to approx-\nimate these figures to get an estimated ratio rather than \ndo full calculations. As can be seen, our result from \napproximating was quite close to the correct option \nand hence we were able to save valuable time.\n\n203\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s08_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 8 Q2",
      "set_id": "baneth24_ch6_set08",
      "figures": [
        "images/baneth24_ch6_set08_fig1.png"
      ],
      "question": "What was the average number of unoccupie beds per hospital in Germany in 2015?",
      "options": [
        {
          "letter": "A",
          "text": "22.5"
        },
        {
          "letter": "B",
          "text": "57.4"
        },
        {
          "letter": "C",
          "text": "197.9"
        },
        {
          "letter": "D",
          "text": "440.1"
        },
        {
          "letter": "E",
          "text": "112 354"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nUse the bed occupancy rate and the total number of \nbeds to find the average number of beds occupied \nin 2015. Subtract this from the number of beds to \nget the average number of unoccupied beds. Divide \nthis result by the number of hospitals to get the \naverage number of unoccupied beds per hospital in \nGermany in 2015.\nCalculation\nWe know that:\nBed occupancy rate:\n= Average number of beds occupied / Total number of \nbeds\nHence:\nAverage number of beds occupied:\n= Bed occupancy rate * Total number of beds\nThe approximate number of beds in 2015 was 500 \n000 and the approximate number of hospitals in 2015 \nwas 2 000.\nAverage number of beds occupied in 2015:\n≈ 77.5% * 500 000\n= 387 500\nAverage number unoccupied beds in 2015:\n= Total beds – Average number of beds occupied\n≈ 500 000 – 387 500 = 112 500\nAverage number unoccupied beds per hospital in \n2015:\n≈ 112 500 / 2 000 ≈ 56\nOption B is the closest in value. Hence, it is probably \ncorrect.\nPotential Shortcuts / Pitfalls\nIn complicated tables it is easy to get distracted by \nirrelevant data. The data for the number of cases, \noccupancy days and length of stay is irrelevant to \nthis question. Also, you must remember that the \nquestion asks about the number of unoccupied beds \nas opposed to the number of occupied beds."
    },
    {
      "id": "baneth24_ch6_s08_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 8 Q3",
      "set_id": "baneth24_ch6_set08",
      "figures": [
        "images/baneth24_ch6_set08_fig1.png"
      ],
      "question": "In which of the following situations will th bed occupancy rate be closest to 60%? d e",
      "options": [
        {
          "letter": "A",
          "text": "Total beds = 501 200, Total occupancy days = 105 million"
        },
        {
          "letter": "B",
          "text": "Total beds = 403 700, Total occupancy days = 105 million"
        },
        {
          "letter": "C",
          "text": "Total beds = 798 800, Total occupancy days = 140 million"
        },
        {
          "letter": "D",
          "text": "Total beds = 252 100, Total occupancy days = 70 million"
        },
        {
          "letter": "E",
          "text": "Total beds = 249 500, Total occupancy days = 35 million"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must first find the relationship between the \nbed occupancy rate, total beds and total occupancy \ndays. Then, we can substitute data given in each of \nthe options to find the bed occupancy rate closest \nto 60%.\nCalculation\nThere is a certain total number of beds. Each bed \nis available for 365 days (approximately) per year. \nHence, these beds are available for the following \nnumber of days in a year:\nBed occupancy available in a year = Total beds * 365\nThe bed occupancy rate can then be found by:\n((Total occupancy days) / (Bed occupancy available in a \nyear)) * 100%\n= ((Total occupancy days) / (Total beds * 365)) * 100*\nWe must now calculate the bed occupancy rate for \neach option based on approximate values. Let us \nassume 350 days per year for easier and quicker \ncalculations. \nOption A:\n≈ ((105 * 1 000 000) / (500 000 * 350)) * 100% = 60%\nOption B:\n≈ ((105 * 1 000 000) / (400 000 * 350)) * 100% = 75%\nOption C:\n≈ ((105 * 1 000 000) / (800 000 * 350)) * 100% = 50%\nOption D:\n≈ ((105 * 1 000 000) / (250 000 * 350)) * 100% = 80%\nOption E:\n≈ ((105 * 1 000 000) / (250 000 * 350)) * 100% = 40%\nBased on the approximate calculations, option A is \nthe closest in value. Hence, it is probably correct.\nPotential Shortcuts / Pitfalls\nWe do not actually require any data from the table \nfor this question. Also bear in mind that we got \nthe correct answer with the very first calculation, \nstarting with Option A. In the context of an exam \nthere is no point carrying on with all the calcula-\ntions for options B, C, D and E as well. \n\n204\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s09_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 9 Q1",
      "set_id": "baneth24_ch6_set09",
      "figures": [
        "images/baneth24_ch6_set09_fig1.png",
        "images/baneth24_ch6_set09_fig2.png"
      ],
      "question": "What was Austria’s inland consumption of natural gas as a percentage of its electricity available for final consumption in 2021?",
      "options": [
        {
          "letter": "A",
          "text": "0.02%"
        },
        {
          "letter": "B",
          "text": "0.5%"
        },
        {
          "letter": "C",
          "text": "66.8%"
        },
        {
          "letter": "D",
          "text": "74.8%"
        },
        {
          "letter": "E",
          "text": "149.6%"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must convert one of the consumption levels \nprovided into the units of the other by using the \nconversion factor and then we can calculate the \nrequired percentage.\nCalculation\nIn 2021, Austria’s inland consumption of natural gas \nwas 360.2 million Gigajoules and Austria’s electricity \navailable for final consumption was 66 861 GWh.\nAustria’s inland consumption of natural gas in 2021 \n(in GWh):\n= (Austria’s inland consumption of natural gas in 2021 \nin millions of gigajoules * 1 000 000) / (Gigajoules per \nGWh)\n= (360.2 * 1 000 000) / 3 600\n≈ (3.6 * 100 * 1 000 000) / (3.6 * 1 000)\n= 100 000\nAustria’s inland consumption of natural gas as \na percentage of its electricity available for final \nconsumption in 2021:\n= ((Austria’s inland consumption of natural gas in \n2021 in GWh) / (Austria’s electricity available for final \nconsumption in 2021 in GWh)) * 100%\n= (100 000 / 66 861) * 100%\n≈ (100 000 / (100 000 * 2/3)) * 100%\n= 3/2* 100%\n= 150%\nPotential Shortcuts / Pitfalls\nIt is a must to read the data for the correct year and \ncountry. The bar graphs are oriented differently, \nwhich may cause problems with correctly reading \nthe data, so be careful. \nIt is important to note that there are two conversions \nto be accounted for in the calculation. One is the \nchange in the order of magnitude from millions of \nGigajoules to Gigajoules and the other is the conver-\nsion of units from Gigajoules to GWh. Approximating \nthe result of the first conversion made it significantly \neasier for us to estimate the percentage solution. \nAlso, be careful not to calculate the reciprocal of \nwhat is required because it is provided as the incor-\nrect option C."
    },
    {
      "id": "baneth24_ch6_s09_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 9 Q2",
      "set_id": "baneth24_ch6_set09",
      "figures": [
        "images/baneth24_ch6_set09_fig1.png",
        "images/baneth24_ch6_set09_fig2.png"
      ],
      "question": "By how much more did Slovakia’s inland consumption of natural gas decline (in GWh) as compared to the electricity available for final consumption from 2021 to 2022?",
      "options": [
        {
          "letter": "A",
          "text": "33"
        },
        {
          "letter": "B",
          "text": "3 972"
        },
        {
          "letter": "C",
          "text": "4 006"
        },
        {
          "letter": "D",
          "text": "5 588"
        },
        {
          "letter": "E",
          "text": "9 594"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nCalculate the reductions in Slovakia’s inland \nconsumption of natural gas and the electricity avail-\nable for final consumption from 2021 to 2022. Then \nconvert them to common units (GWh) and order of \nmagnitude to calculate the solution.\nCalculation\nThe decline in Slovakia’s inland consumption \nof natural gas from 2021 to 2022 (in millions of \nGigajoules):\n= 177.2 – 211.7\n= – 34.5\nThe decline in Slovakia’s inland consumption of \nnatural gas from 2021 to 2022 (in GWh):\n= (– 34.5 * 1 000 000) / 3 600\n≈ – 9 500\nThe decline in Slovakia’s electricity available for \nfinal consumption from 2021 to 2022 (in GWh):\n= 22 451 – 26 457 \n≈ – 4 000\nThe additional decline of Slovakia’s inland consump-\ntion of natural gas decline (in GWh) as compared to \nthe electricity available for final consumption from \n2021 to 2022:\n= – 9 500 – (– 4 000)\n≈ – 5 500\nPotential Shortcuts / Pitfalls\nIt is essential to convert the order of magnitude and \nunits of the inland consumption of natural gas to \nfind the difference. It is convenient to approximate \nthe differences in order to quickly find an estimate \nwhich is close enough for us to guess the correct \noption. Be careful to subtract the 2021 figures from \nthe figures of 2022 for both calculations."
    },
    {
      "id": "baneth24_ch6_s09_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 9 Q3",
      "set_id": "baneth24_ch6_set09",
      "figures": [
        "images/baneth24_ch6_set09_fig1.png",
        "images/baneth24_ch6_set09_fig2.png"
      ],
      "question": "In 2022, what is the increase required in the inland consumption of natural gas in Estonia to match the electricity available for final consumption (in Terajoules)? (1 Terajoule = 1 000 Gigajoules)",
      "options": [
        {
          "letter": "A",
          "text": "8.33"
        },
        {
          "letter": "B",
          "text": "11 310"
        },
        {
          "letter": "C",
          "text": "16 424"
        },
        {
          "letter": "D",
          "text": "30 000"
        },
        {
          "letter": "E",
          "text": "16 423 800"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must first determine the inland consumption \nof natural gas and electricity available for final \nconsumption in Estonia in 2022. We must then \nconvert them to common units (Gigajoules). Finally, \n\n205\nnumerical reasoning mixed questions test\nwe can find the difference and convert the solu-\ntion to Terajoules by using the provided order of \nmagnitude.\nCalculation\nIn 2022, Estonia’s inland consumption of natural gas \nwas 13.6 million Gigajoules and electricity available \nfor final consumption was 8 348 GWh.\nElectricity available for final consumption in Estonia \nin 2022 (in Gigajoules):\n= 8 348 * 3 600\n≈ 30 000 000\nThe increase required in the inland consumption of \nnatural gas in Estonia to match the electricity avail-\nable for final consumption (in Gigajoules):\n= 30 000 000 – (13.6 * 1 000 000)\n= 30 000 000 – 13 600 000\n= 16 400 000\nWe know that:\n1 Terajoule = 1 000 Gigajoules\nThe increase required in the inland consumption of \nnatural gas in Estonia to match the electricity avail-\nable for final consumption (in Terajoules):\n= 16 400 000 / 1 000\n= 16 400\nPotential Shortcuts / Pitfalls\nYou need to deal with one unit conversion, and two \nconversions of order of magnitude. If you are not \ncareful with the conversions, you might end up with \na solution that matches an incorrect answer like \noption B. The key thing to get right is the accuracy \nof the order of magnitude and the correct units of \nthe solution. The approximations of numbers, used \nfor quicker calculations, will eventually not matter \nas far as choosing the correct answer is concerned.\nYou can also see that options C and E are basically \nthe same number with a difference in the order of \nmagnitude. If you need to make a pure guess, this is \nan indication that either of these would likely make \na good choice for the guess."
    },
    {
      "id": "baneth24_ch6_s10_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 10 Q1",
      "set_id": "baneth24_ch6_set10",
      "figures": [
        "images/baneth24_ch6_set10_fig1.png",
        "images/baneth24_ch6_set10_fig2.png"
      ],
      "question": "What was the total population of Croatia in 2018?",
      "options": [
        {
          "letter": "A",
          "text": "348 450"
        },
        {
          "letter": "B",
          "text": "4 058 165"
        },
        {
          "letter": "C",
          "text": "4 105 493"
        },
        {
          "letter": "D",
          "text": "4 190 669"
        },
        {
          "letter": "E",
          "text": "15 730 000"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must determine the relationship between \nGeneration of plastic packaging waste per capita \nand Generation of plastic packaging waste and then \nuse this relationship to determine Croatia’s total \npopulation in 2018.\nCalculation\nWe know that:\nGeneration of plastic packaging waste per capita, in \nkgs:\n= ((Generation of plastic packaging waste, in millions of \nkgs) * (1 000 000)) / (Total population)\nHence:\nTotal population:\n= ((Generation of plastic packaging waste, in millions \nof kgs) * (1 000 000)) / (Generation of plastic packaging \nwaste per capita, in kgs)\nTotal population of Croatia in 2018:\n(64.58 * 1 000 000) / 15.73\n≈ 4.105 * 1 000 000\n≈ 4 105 000\nPotential Shortcuts / Pitfalls\nApproximating the division result to three decimal \nplaces is good enough to arrive at the correct solu-\ntion quickly. Make sure that you select the data for \nthe correct country because Iceland’s total popu-\nlation for 2018 has been provided as an incorrect \noption (option A). \nWe know that 65 million divided by 15 results in a \nvalue somewhere between 4 and 5 million. Hence, \noptions B, C and D should be the only candidates for \na guess, if required."
    },
    {
      "id": "baneth24_ch6_s10_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 10 Q2",
      "set_id": "baneth24_ch6_set10",
      "figures": [
        "images/baneth24_ch6_set10_fig1.png",
        "images/baneth24_ch6_set10_fig2.png"
      ],
      "question": "Had Iceland’s population remained unchanged from 2016 to 2020 and the generation of plastic packaging waste per capita stayed at the given levels, what would have been the generation of plastic packaging waste in Iceland in 2020 (in millions of kgs)?",
      "options": [
        {
          "letter": "A",
          "text": "13.11"
        },
        {
          "letter": "B",
          "text": "14.35"
        },
        {
          "letter": "C",
          "text": "15.31"
        },
        {
          "letter": "D",
          "text": "16.57"
        },
        {
          "letter": "E",
          "text": "13 110 000"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must first determine the total population of \nIceland in 2016 by using the per capita formula. Then \nwe must use the per capita figure of 2020 along with \nthe total population of 2016 to compute the genera-\ntion of plastic packaging waste in 2020.\n\n206\nnumerical reasoning mixed questions test\nCalculation\nWe know that:\nTotal population:\n= ((Generation of plastic packaging waste, in millions \nof kgs) * (1 000 000)) / (Generation of plastic packaging \nwaste per capita, in kgs)\nTotal population of Iceland in 2016:\n= (15.31 * 1 000 000) / 46.04\n≈ (1 * 1 000 000) / 3\n≈ 333 333\nBy rearranging the per capita formula, we get:\nGeneration of plastic packaging waste, in millions of \nkgs:\n= ((Total population) * (Generation of plastic packaging \nwaste per capita, in kgs)) / 1 000 000\nGeneration of plastic packaging waste in Iceland in \n2020 if the total population has not changed since \n2016:\n= (333 333 * 39.42) / 1 000 000\n≈ (333 333 * 3 * 13) / 1 000 000\n= (1 000 000 * 13) / 1 000 000\n≈ 13 (million kg)\nPotential Shortcuts / Pitfalls\nThe approximations made in the calculation made \nit quicker and convenient. The approximate result \nwas close enough to option A. Option E provides \nthe correct solution but in kgs, whereas the solution \nis required in millions of kgs. Hence, you must keep \nnote of the order of magnitude.\nIf you need to make a guess, you might notice that \nOptions B, C and D are equal to the actual genera-\ntion of plastic packaging waste in the three years in \nthe table. It is unlikely that the calculated solution \nwould coincidentally be equal to an actual value. \nHence these three options can be ruled out."
    },
    {
      "id": "baneth24_ch6_s10_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 10 Q3",
      "set_id": "baneth24_ch6_set10",
      "figures": [
        "images/baneth24_ch6_set10_fig1.png",
        "images/baneth24_ch6_set10_fig2.png"
      ],
      "question": "In 2020, Malta aimed to reduce its annual generation of plastic packaging waste to 13 million kgs by the year 2022. The projected population increase in Malta by 2022 was 12% from 2020. What was the projected generation of plastic packaging waste per capita for 2022 (in kgs) assuming the target was achieved?",
      "options": [
        {
          "letter": "A",
          "text": "13.09"
        },
        {
          "letter": "B",
          "text": "14.56"
        },
        {
          "letter": "C",
          "text": "22.56"
        },
        {
          "letter": "D",
          "text": "24.14"
        },
        {
          "letter": "E",
          "text": "30.72"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must first calculate the total population of Malta \nin 2020. We then calculate the projected population \nof Malta in 2022 by using the projected percentage \nincrease and then use it with the target generation \nof plastic packaging waste for 2022 to determine the \nprojected per capita figure for 2022.\nCalculation\nWe know that:\nTotal population:\n= ((Generation of plastic packaging waste, in millions \nof kgs) * (1 000 000)) / (Generation of plastic packaging \nwaste per capita, in kgs)\nThe total population of Malta in 2020:\n= (14.11 * 1 000 000) / 27.43\n≈ (14 * 1 000 000) / 28\n= 1 000 000 / 2\n= 500 000\nThe projected population of Malta in 2022:\n= (Population in 2020) * (100% + 12%)\n= 500 000 * (1.12)\n= 560 000\nThe projected generation of plastic packaging waste \nper capita (in kgs) for 2022:\n= ((Generation of plastic packaging waste, in millions of \nkgs) * (1 000 000)) / Total population\n= (13 * 1 000 000) / 560 000\n≈ 23.2\nPotential Shortcuts / Pitfalls\nThe approximate solution value lies between the \nvalues of options C and D. But option D is simply \nthe per capita figure for 2020 reduced by 12%, which \nis obviously incorrect. Hence, option C must be \ncorrect. \nThe population of Malta was projected to increase \nwhile the total generation of plastic packaging waste \nwas projected to decrease by 2022. This means that \nthe per capita quantity for 2022 would be lower \nthan that of 2020. Hence, option E cannot be correct. \nOption A is simply a linear extrapolation of the trend \nbetween 2018 and 2020.\nBe careful to read the data for the correct year and \nthe correct country. As the two previous questions \nreferred to Croatia and Ireland you have to mentally \nswitch country each time."
    },
    {
      "id": "baneth24_ch6_s11_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 11 Q1",
      "set_id": "baneth24_ch6_set11",
      "figures": [
        "images/baneth24_ch6_set11_fig1.png"
      ],
      "question": "What was the difference in the HPI values o USA and Belgium in Q4/2022?",
      "options": [
        {
          "letter": "A",
          "text": "1.14"
        },
        {
          "letter": "B",
          "text": "66.69"
        },
        {
          "letter": "C",
          "text": "67.20"
        },
        {
          "letter": "D",
          "text": "68.13"
        },
        {
          "letter": "E",
          "text": "147.73"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must find the HPI values for USA and Belgium \nfor Q4/2022, based on the given values for Q1/2023 \n\n207\nnumerical reasoning mixed questions test\nand the percentage changes since. Then, we can find \nthe difference between those values.\nCalculation\nWe know that:\nHPI in Q1/2023 = (HPI in Q4/2022) * (100% + \n(Percentage change since Q4/2022))\nHPI value for USA in Q4/2022:\n216.64 = (HPI in Q4/2022) * (100% + 0.36%)\n217 ≈ (HPI in Q4/2022) * 100%\nHPI in Q4/2022 ≈ 217\nHPI value for Belgium in Q4/2022:\n149.95 = (HPI in Q4/2022) * (100% + 1.50%)\n150 ≈ (HPI in Q4/2022) * 101.50%\n150 = (HPI in Q4/2022) * 1.015\nHPI in Q4/2022 = 150 / 1.015\nHPI in Q4/2022 ≈ 147.75\nThe difference in the HPI values of USA and Belgium \nin Q4/2022:\n= 217 – 147.75\n= 69.25\nPotential Shortcuts / Pitfalls\nIt is very important to note that the percentage \nchange is from Q4/2022 to Q1/2023 and not the \nother way around. This means that the given values \nof Q1/2023 are the result of the increase.\nWhat if you need to guess? You can see from the table \nthat Belgium’s HPI value increased slightly more \nthan that of the USA from Q4/2022 to Q1/2023. The \ndifference in Q4/2022 was 66.69 so the figure we are \nlooking for should also be slightly more than 66.69. \nThis means that Options C and D are the only possi-\nbilities, so you are left with a 50/50 choice. To be \nsure which one is right, you would have to do the \ncalculation. \nIn fact, if you use the percentage increases since \nQ1/2022 by mistake, you get option C. Option A is \nthe difference between the percentage changes for \nBelgium and the USA in Q4/2022. Option B is the \ndifference between the HPI values for the USA and \nBelgium in Q1/2023. Option E is the HPI value for \nBelgium in Q4/2022 and not the difference between \nthe values for the USA and Belgium."
    },
    {
      "id": "baneth24_ch6_s11_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 11 Q2",
      "set_id": "baneth24_ch6_set11",
      "figures": [
        "images/baneth24_ch6_set11_fig1.png"
      ],
      "question": "What was the percentage change in the HPI value of New Zealand from Q1/2022 to Q4/2022?",
      "options": [
        {
          "letter": "A",
          "text": "–14.29%"
        },
        {
          "letter": "B",
          "text": "– 9.35%"
        },
        {
          "letter": "C",
          "text": "– 9.11%"
        },
        {
          "letter": "D",
          "text": "+9.11%"
        },
        {
          "letter": "E",
          "text": "+9.35%"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must first determine the HPI values in New \nZealand for Q1/2022 and Q4/2022 and then calcu-\nlate the percentage change.\nCalculation\nWe know that:\nHPI in Q1/2023 = (HPI in Q4/2022) * (100% + \n(Percentage change since Q4/2022))\nHPI value for New Zealand in Q4/2022:\n232.71 = (HPI in Q4/2022) * (100% – 2.59%)\n233 ≈ (HPI in Q4/2022) * 97.5%\n(HPI in Q4/2022) = 233 / 0.975\n(HPI in Q4/2022) ≈ 233 * 1.025 = 233 * 1 + 233 * 0.025\n(HPI in Q4/2022) ≈ 233 + 6\nHPI in Q4/2022 ≈ 239\nSimilarly, we have:\nHPI in Q1/2023 = (HPI in Q1/2022) * (100% + \n(Percentage change since Q1/2022))\nHPI value for New Zealand in Q1/2022:\n232.71 = (HPI in Q1/2022) * (100% – 11.70%)\n233 ≈ (HPI in Q1/2022) * 88%\n233 = (HPI in Q1/2022) * 0.88\nHPI in Q1/2022 = 233 / 0.88\nHPI in Q1/2022 ≈ 265\nThe percentage change in the HPI value of New \nZealand from Q1/2022 to Q4/2022:\n= ((239 – 265) / 265) * 100%\n= (– 26 / 265) * 100%\n≈ – 10%\nPotential Shortcuts / Pitfalls\nWe have made quite a few calculations to get to this \npoint but if you look at the answer options there are \nshortcuts that will avoid doing any significant calcu-\nlations at all. \nThe percentage decrease from Q1/2022 to Q1/2023 \nwas much higher than that from Q4/2022 to \nQ1/2023. Hence, the HPI value for Q1/2022 will be \nmuch higher as compared to Q4/2023. This means \nthat the percentage change must be negative. This \nconclusion eliminates options D and E. Option A is \nthe sum of the percentage changes from Q1/2022 to \nQ1/2023 and from Q4/2022 to Q1/2023 while option \n\n208\nnumerical reasoning mixed questions test\nC is the difference of the same percentage changes. \nSince the given percentage changes are not relative \nto the same HPI value, simple addition and subtrac-\ntion of percentage changes will not suffice. Option B \nis therefore the only realistic choice."
    },
    {
      "id": "baneth24_ch6_s11_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 11 Q3",
      "set_id": "baneth24_ch6_set11",
      "figures": [
        "images/baneth24_ch6_set11_fig1.png"
      ],
      "question": "Assuming linear growth since Q1/2022, wha is the anticipated HPI value for Türkiye in Q1/2024?",
      "options": [
        {
          "letter": "A",
          "text": "741"
        },
        {
          "letter": "B",
          "text": ""
        },
        {
          "letter": "C",
          "text": "2 468"
        },
        {
          "letter": "D",
          "text": "2 711"
        },
        {
          "letter": "E",
          "text": "4 019"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must first determine the HPI value in Türkiye \nfor Q1/2022. Then using a linear model, calculate an \nestimate for the HPI value in Q1/2024.\nCalculation\nWe know that:\nHPI in Q1/2023 = (HPI in Q1/2022) * (100% + \n(Percentage change since Q1/2022))\nHPI value for Türkiye in Q1/2022:\n1 726.23 = (HPI in Q1/2022) * (100% + 132.84%)\n1 729 ≈ (HPI in Q1/2022) * 233.33%\n1 729 = (HPI in Q1/2022) * 2.3333\n1 729 = (HPI in Q1/2022) * 7/3\nHPI in Q1/2022 = 1 729 * 3 / 7\nHPI in Q1/2022 ≈ 741\nTherefore, assuming a linear model, the change in \none year from Q1/2022 to Q1/2023 will be equal to \nthe change in the one year from Q1/2023 to Q1/2024. \nHence, the anticipated HPI value for Türkiye in \nQ1/2024 is:\n1 726.23 + (1 726.23 – 741)\n1 726.23 + 985.23\n= 2 711\nPotential Shortcuts / Pitfalls\nThinking about the answer options can save you \nfrom doing a lot of calculations. The 132.84% \nincrease from Q1/2022 to Q1/2023 shows that the \nvalue in Q1/2022 was less than half of the value in \nQ1/2023. Hence, options A and B can be ruled out. \nOption C is simply the sum of the values in Q1/2022 \nand Q1/2023, which is not linear. Option E is equal \nto the value of Q1/2023 increased by 132.84%, which \nis incorrect. That leaves only D.\nThe value for Q4/2022 has nothing to do with the \nlinear extrapolation since we are basing the increase \nin value on the trend between Q1/2022 and Q1/2023."
    },
    {
      "id": "baneth24_ch6_s12_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 12 Q1",
      "set_id": "baneth24_ch6_set12",
      "figures": [
        "images/baneth24_ch6_set12_fig1.png",
        "images/baneth24_ch6_set12_fig2.png"
      ],
      "question": "What was the average speed of the aircraft for the complete flight (in mph)?",
      "options": [
        {
          "letter": "A",
          "text": "407.0"
        },
        {
          "letter": "B",
          "text": "419.0"
        },
        {
          "letter": "C",
          "text": "424.7"
        },
        {
          "letter": "D",
          "text": "437.2"
        },
        {
          "letter": "E",
          "text": "1 606.2"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must use the formula for average speed and the \nactual travelled miles to calculate the average speed \nof the aircraft for the complete flight.\nCalculation\nWe know that:\nAverage speed = Total distance / Total time\nThe average speed of the aircraft for the complete \nflight (in mph):\n= 838 / (1 + (55/60))\n≈ 840 / (1 + 0.9) \n= 840 / 1.9\n≈ 442\nOption D is the closest in value, hence it must be \ncorrect.\nPotential Shortcuts / Pitfalls\nIt is very important to convert the time to hours by \ndividing the minutes by 60. Since the option values \nare close together, you cannot in this case approxi-\nmate the figures too much. If you do, your solution \nmight match options A or B. You must use the actual \ndistance travelled for the calculation of the average \nspeed as opposed to the direct distance. If you do \nthe latter, you will get incorrect option C.\nOption E is obviously a totally unrealistic speed for \nan ordinary commercial flight from the UK to Spain. \nHowever, while the flight details in this case imme-\ndiately tell you that E is wrong, it is worth remem-\nbering that the scenarios in numerical reasoning \nquestions, while highly likely to be realistic, do not \nnecessarily have to be."
    },
    {
      "id": "baneth24_ch6_s12_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 12 Q2",
      "set_id": "baneth24_ch6_set12",
      "figures": [
        "images/baneth24_ch6_set12_fig1.png",
        "images/baneth24_ch6_set12_fig2.png"
      ],
      "question": "Had the flight taken a direct route and flown at a 2% faster average speed, how much flight time would have been saved (in minutes)?",
      "options": [
        {
          "letter": "A",
          "text": "0.1"
        },
        {
          "letter": "B",
          "text": "1.0"
        },
        {
          "letter": "C",
          "text": "2.3"
        },
        {
          "letter": "D",
          "text": "3.3"
        },
        {
          "letter": "E",
          "text": "5.5"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must first determine the suggested faster speed, \nbased on the average speed of the actual flight, and \nthen used the direct distance provided to calculate \nthe minutes that would have been saved.\n\n209\nnumerical reasoning mixed questions test\nCalculation\nWe know that:\nAverage speed = Total distance / Total time\n2% faster average speed (in mph) as compared to the \nactual flight’s average speed:\n(838 / (1 + (55/60))) * (100% + 2%)\n≈ (838 / 1.9) * (100% + 2%)\n≈ 437.2 * 102%\n≈ 437.2 + 4.4 + 4.4\n≈ 446\nBy re-arranging the average speed formula, we get:\nTotal time = Total distance / Average speed\nTime taken for the flight with 2% faster average \nspeed and a direct route:\n814 / 446\n≈ 1.83 hours\n≈ 1 hour + (0.83 * 60) minutes\n≈ 1 hour + 50 minutes\nMinutes saved with 2% faster average speed and a \ndirect route:\n(1 hour 55 minutes) – (1 hour 50 minutes)\n= 5 minutes\nPotential Shortcuts / Pitfalls\nWe could have approximated the actual flight’s \naverage speed as we did before, but since we know \nthe exact figure from the option of the first question, \nwe could use that for higher accuracy. If the average \nspeed was reduced by 2%, by mistake, the result \nwould equal option B. \nYou must of course take note that time will be saved \non two counts. Firstly, due to the higher average \nspeed, i.e., more miles covered per unit of time. \nSecondly, due to the shorter distance that needs to \nbe covered, i.e., 838 – 814 = 24 miles less. You must \nuse the direct distance. If you use the distance of the \nactual flight, you will end up with answer option C."
    },
    {
      "id": "baneth24_ch6_s12_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 12 Q3",
      "set_id": "baneth24_ch6_set12",
      "figures": [
        "images/baneth24_ch6_set12_fig1.png",
        "images/baneth24_ch6_set12_fig2.png"
      ],
      "question": "Another aircraft took off 24 hours later from EMA for BCN and maintained the same average speed as flight 9388, but had to go around a major storm system on the way. How much more distance was travelled by the second aircraft, as a percentage of flight 9388’s distance, if it reached Barcelona in 2 hours and 18 minutes?",
      "options": [
        {
          "letter": "A",
          "text": "2.9%"
        },
        {
          "letter": "B",
          "text": "9.6%"
        },
        {
          "letter": "C",
          "text": "20.0%"
        },
        {
          "letter": "D",
          "text": "120.0%"
        },
        {
          "letter": "E",
          "text": "167.6%"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must first calculate flight 9388’s average speed \nand then use it along with the time provided for the \nsecond aircraft to calculate the distance travelled by \nit. Finally, we will calculate the new distance trav-\nelled as a percentage of the original.\nCalculation\nWe know that:\nAverage speed = Total distance / Total time\nThe average speed of the aircraft for the complete \nflight 9388 (in mph):\n= 838 / (1 + (55/60))\n= 437.2\nBy re-arranging the average speed formula, we get:\nTotal distance = Average speed * Total time\nDistance travelled by the second aircraft (in miles):\n437.2 * (2 + (18/60))\n= 437.2 * (2.3) \n≈ 1 005\nAdditional distance travelled by the second aircraft \nas a percentage of the distance travelled by flight \n9388:\n((1 005 – 838) / 838) * 100%\n= (167 / 838) * 100%\n≈ 20%\nPotential Shortcuts / Pitfalls\nA much quicker shortcut would be to find the ratio \nof the two flight times, i.e., (2 hours 18 minutes) / \n(1 hour 55 minutes) = 1.20. Hence, the ratio of the \ndistances will also be the same at the same average \nspeed."
    },
    {
      "id": "baneth24_ch6_s13_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 13 Q1",
      "set_id": "baneth24_ch6_set13",
      "figures": [
        "images/baneth24_ch6_set13_fig1.png"
      ],
      "question": "If the median Hong Kong property price in 2023 (mid-year) was 17.9 million Hong Kong Dollars (HKD), what was the corresponding mortgage value (in HKD)?",
      "options": [
        {
          "letter": "A",
          "text": "425 178"
        },
        {
          "letter": "B",
          "text": "837 053"
        },
        {
          "letter": "C",
          "text": "1 173 067"
        },
        {
          "letter": "D",
          "text": "2 004 437"
        },
        {
          "letter": "E",
          "text": "6 487 858"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nUse the price to income ratio and the given median \nproperty price to evaluate the annual income per \ncapita for Hong Kong. Use this result to calculate the \ncorresponding mortgage value by using the given \nmortgage as a % of annual income.\nCalculation\nWe know that:\nPrice to income ratio:\n= Median property price / Annual income per capita\nHence:\nAnnual income per capita:\n= Median property price/ Price to income ratio\n\n210\nnumerical reasoning mixed questions test\nAnnual income per capita in Hong Kong in 2023 \nmid-year (in HKD): \n= (17.9 * 1 000 000) / 42.1\n≈ (18 / 42) * 1 000 000\n= (3 / 7) * 1 000 000\nWe also know that:\nMortgage as a % of annual income:\n= (Mortgage value / Annual income per capita) * 100%\nHence:\nMortgage value:\n= ((Mortgage as a % of annual income) * (Annual \nincome per capita)) / 100%\nThe corresponding mortgage value based on the \nmedian property price in Hong Kong in 2023 mid-\nyear (in HKD):\n= (275.9% / 100%) * ((3 / 7) * 1 000 000)\n≈ 2.8 * (3 / 7) * 1 000 000\n= 0.4 * 3 * 1 000 000\n= 1 200 000\nOption C is the closest value to our estimate and is \ntherefore the option to choose.\nPotential Shortcuts / Pitfalls\nThere are a lot of columns in this table so it’s easy to \nget lost. It is very important not to confuse the price \nto income ratio with the price to rent ratio. You would \nend with option B if you made that mistake. It is also \ncrucial not to confuse the annual income per capita \nwith the total annual rental income."
    },
    {
      "id": "baneth24_ch6_s13_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 13 Q2",
      "set_id": "baneth24_ch6_set13",
      "figures": [
        "images/baneth24_ch6_set13_fig1.png"
      ],
      "question": "What was the difference between the Price to Rent ratios of Indonesia’s City Centre areas and Outside of City Centre areas?",
      "options": [
        {
          "letter": "A",
          "text": "0.7"
        },
        {
          "letter": "A",
          "text": "3.0"
        },
        {
          "letter": "A",
          "text": "14.7"
        },
        {
          "letter": "A",
          "text": "22.2"
        },
        {
          "letter": "A",
          "text": "39.6"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nUse the given gross rental yield % to calculate the \nprice to rent ratio in Indonesia’s city centre areas. \nThen use the result to find the difference between \nthe price to rent ratios of city centre and outside city \ncentre areas.\nCalculation\nWe know that:\nGross Rental Yield (%):\n= ((Total annual rental income) / (Property price)) * \n100%\nHence:\nPrice to Rent ratio:\n= (Property price) / (Total annual rental income)\n= 100% / Gross Rental Yield (%)\nThe price to rent ratio in Indonesia’s city centre areas \nin 2023 mid-year:\n= 100% / 4.5%\n= 100 / 4.5\n= 1 000 / 45\n= 200 / 9\n≈ 22\nThe difference between the price to rent ratios of city \ncentre and outside city centre areas in Indonesia in \n2023 mid-year:\n= 22 – 19.2\n= 2.8\nOption B is the closest in value. \nPotential Shortcuts / Pitfalls\nYou have just done a question about Hong Kong. \nThis one is about Indonesia so, as always, make sure \nyou are answering the right question! If you use the \ndata for Hong Kong, you could end up mistakenly \nchoosing option E."
    },
    {
      "id": "baneth24_ch6_s13_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 13 Q3",
      "set_id": "baneth24_ch6_set13",
      "figures": [
        "images/baneth24_ch6_set13_fig1.png"
      ],
      "question": "A property owner is earning an annual rental income of 20 million Pakistani Rupees (PKR) from a property located outside of city centre. How much more, or less, could he earn in rental income (in PKR), annually, from selling the existing property, purchasing a new property in the city centre (having the same price as the property sold) and then renting it out?",
      "options": [
        {
          "letter": "A",
          "text": "1 232 228 less"
        },
        {
          "letter": "B",
          "text": "1 000 000 less"
        },
        {
          "letter": "C",
          "text": "No change in annual rental income"
        },
        {
          "letter": "D",
          "text": "1 232 228 more"
        },
        {
          "letter": "E",
          "text": "18 767 773 more"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must first find the property price of the existing \nproperty by using the price to rent ratio (outside city \ncentre) and the given annual rental income. Then \nwe must use the price to rent ratio (city centre) to \ndetermine the annual rental income from the new \nproperty in the city centre.\nCalculation\nWe know that:\nPrice to Rent ratio:\n= (Property price) / (Total annual rental income)\nHence:\nProperty price = (Price to rent ratio) * (Total annual \nrental income)\nProperty price of the existing property outside city \ncentre (in PKR):\n= 19.8 * 20 * 1 000 000\n\n211\nnumerical reasoning mixed questions test\nWe will simplify to:\n≈ 20 * 20 * 1 000 000\n= 400 000 000\nBy re-arranging the price to rent ratio formula we \nget:\nTotal annual rental income = (Property price) / (Price to \nrent ratio)\nTotal annual rental income expected from the new \nproperty purchased in city centre (in PKR): \n= 400 000 000 / 21.1\n≈ 400 000 000 / 21\n= 400 000 000 / (10 * 2.1)\n= 40 000 000 / 2.1\n≈ 19 000 000\nThe annual rental income from the new property \nwill be less (in PKR) by:\n= 20 000 000 – 19 000 000\n= 1 000 000\nThis figure corresponds exactly with option B. But does \nthis mean option B is the correct answer? Remember \nthat we simplified the actual figures to make our esti-\nmate easier, so although option B is an exact match \nwith our estimate, we know that the actual solution \ncannot be equal to it. In fact, option A is correct as the \nonly other figure showing a drop in income. \nPotential Shortcuts / Pitfalls\nThe data approximations helped us get a fairly quick \nestimate of the change in annual rental income, but \nan alternative approach would be to think about the \nanswer options before doing any calculations. \nConsider the price to rent ratios in Pakistan. The \nproperties in city centre areas are more expensive \nrelative to the rent they earn compared with the \noutside of city centre areas. Hence, selling the outside \nof centre area property and buying a city centre area \nproperty will result in a loss of annual rental income. \nThis means that only options A and B can possibly \nbe correct. Moreover, the numbers of Pakistan’s price \nto rent ratios are not round enough to make a result \nlike option B likely. Option A is the best choice for an \nanswer without any calculations at all."
    },
    {
      "id": "baneth24_ch6_s14_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 14 Q1",
      "set_id": "baneth24_ch6_set14",
      "figures": [
        "images/baneth24_ch6_set14_fig1.png",
        "images/baneth24_ch6_set14_fig2.png"
      ],
      "question": "How much did Germany export in 2022 (in millions of euros)?",
      "options": [
        {
          "letter": "A",
          "text": "1 501 144"
        },
        {
          "letter": "B",
          "text": "1 714 864"
        },
        {
          "letter": "C",
          "text": "1 821 670"
        },
        {
          "letter": "D",
          "text": "1 902 586"
        },
        {
          "letter": "E",
          "text": "1 974 224"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nUse the GDP formula, the given GDP value and \nthe given values of the remaining components to \ncompute the value of exports by Germany in 2022. \nWe will use rounding of figures where possible.\nCalculation\nWe know that:\nGDP = (Consumption) + (Capital formation) + (Exports \n– Imports)\nHence:\nExports = (GDP) – (Consumption) – (Capital formation) \n+ (Imports)\nExports = 3 876 810 – 2 830 218 – 970 315 + 1 897 947\nExports ≈ 3 900 000 – 2 800 000 – 1 000 000 + 1 900 \n000\nExports = 2 000 000 million euros \nOption E is the closest to our approximation. Hence, \nit is the best choice.\nPotential Shortcuts / Pitfalls\nBe careful to use the data from 2022. If you use the \nGDP for 2020 or 2021 you will likely end up with \noptions A or B. Likewise, if you don’t form the equa-\ntion properly, you might end up with options C or D."
    },
    {
      "id": "baneth24_ch6_s14_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 14 Q2",
      "set_id": "baneth24_ch6_set14",
      "figures": [
        "images/baneth24_ch6_set14_fig1.png",
        "images/baneth24_ch6_set14_fig2.png"
      ],
      "question": "Given that, in 2020, the sum of Italy’s consumption expenditure and capital formation was 1 601 235 million euros, what were its net exports (in millions of euros)?",
      "options": [
        {
          "letter": "A",
          "text": "–29 415"
        },
        {
          "letter": "B",
          "text": "+59 785"
        },
        {
          "letter": "C",
          "text": "+186 441"
        },
        {
          "letter": "D",
          "text": "+307 919"
        },
        {
          "letter": "E",
          "text": "+1 802 496 t"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must use the GDP formula along with the Net \nExports formula and the given GDP and its compo-\nnent values to calculate Net Exports by Italy in 2020, \nagain using rounding.\nCalculation\nWe know that:\nGDP = (Consumption) + (Capital formation) + (Exports \n– Imports)\nNet Exports = Exports – Imports\n\n212\nnumerical reasoning mixed questions test\nHence:\nGDP = (Consumption) + (Capital formation) + (Net \nExports)\nNet Exports = (GDP) – (Consumption + Capital \nformation)\nNet Exports = (1 661 020) – (1 601 235)\nNet Exports ≈ 1 660 000 – 1 600 000\nNet Exports = +60 000 million Euros\nOption B is closest in value to our estimate.\nPotential Shortcuts / Pitfalls\nAlthough the eventual calculation involved the \nsimple subtraction of two numbers, the correct \nmanipulation of the given equations is the key to \nsolving this question. You must be careful also to \nuse Italy’s GDP value for 2020. If you used the values \nfor other years, you would end up with options C \nor D.\nSince the sum of the two components is less than the \nGDP for that year, it is obvious that the net exports \nwill be positive. Therefore, option A can be ruled out \nimmediately."
    },
    {
      "id": "baneth24_ch6_s14_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 14 Q3",
      "set_id": "baneth24_ch6_set14",
      "figures": [
        "images/baneth24_ch6_set14_fig1.png",
        "images/baneth24_ch6_set14_fig2.png"
      ],
      "question": "Given that consumption, capital formation and net exports of Spain experienced the same percentage growth as the GDP from 2021 to 2022, what was Spain’s approximate consumption expenditure in 2021 (in millions of euros)?",
      "options": [
        {
          "letter": "A",
          "text": "867 122"
        },
        {
          "letter": "B",
          "text": "936 037"
        },
        {
          "letter": "C",
          "text": "963 821"
        },
        {
          "letter": "D",
          "text": "1 029 316"
        },
        {
          "letter": "E",
          "text": "1 131 890"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nUse the GDP formula to determine Spain’s consump-\ntion expenditure in 2022. Then use the GDP growth \npercentage from 2021 to 2022 to determine its esti-\nmated consumption expenditure in 2021. We will \nuse rounding to speed up the calculation.\nCalculation\nWe know that:\nGDP = (Consumption) + (Capital formation) + (Exports) \n– (Imports)\nHence:\nConsumption = (GDP) – (Capital formation) – (Exports) \n+ (Imports)\nConsumption = 1 327 108 – 279 087 – 551 431 + 532 \n726\nConsumption ≈ 1 330 000 – 280 000 – 550 000 + 535 \n000\nConsumption = 1 035 000 million euros (in 2022)\nSpain’s GDP growth factor from 2021 to 2022:\n= 1 327 108 / 1 206 842\n≈ 1 350 000 / 1 200 000\n= 1 350 / 1 200\n= 270 / 240\n= 9 / 8\nSpain’s estimated consumption expenditure for \n2021:\n= (Spain’s consumption expenditure in 2022) / (Spain’s \nGDP growth factor from 2021 to 2022)\n= 1 035 000 / (9 / 8)\n= 1 035 000 * (8 / 9)\n= 115 000 * 8\n= 920 000 million euros\nOption B is the closest to our approximation. Hence, \nit is probably correct.\nPotential Shortcuts / Pitfalls\nSince Spain’s GDP of 2022 is higher than that in 2021, \nand consumption had the same percentage growth \nas GDP, it is obvious that the consumption expendi-\nture of 2021 is going to be lower than that in 2022. \nHence, options D and E can be ruled out."
    },
    {
      "id": "baneth24_ch6_s15_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 15 Q1",
      "set_id": "baneth24_ch6_set15",
      "figures": [
        "images/baneth24_ch6_set15_fig1.png",
        "images/baneth24_ch6_set15_fig2.png"
      ],
      "question": "What was Sweden’s gross debt of househol (in millions of euros) in 2021?",
      "options": [
        {
          "letter": "A",
          "text": "9 685"
        },
        {
          "letter": "B",
          "text": "320 080"
        },
        {
          "letter": "C",
          "text": "889 269"
        },
        {
          "letter": "D",
          "text": "935 000"
        },
        {
          "letter": "E",
          "text": "947 364"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must use Sweden’s gross debt-to-gross dispos-\nable income ratio of 2021 along with Sweden’s gross \ndisposable income in 2021 to calculate the gross debt \nof households for the same year.\nCalculation\nWe know that:\nGross debt to gross disposable income ratio:\n= (Gross debt of households) / (Gross disposable \nincome)\nHence:\nGross debt of households:\n= (Gross debt to gross disposable income ratio) * (Gross \ndisposable income)\nGross debt of households in Sweden in 2021 (in \nmillions of euros):\n= 172.04% * 550 665 \n= 1.7204 * 550 665\n= 947 364\nOption E is therefore correct.\n\n213\nnumerical reasoning mixed questions test\nPotential Shortcuts / Pitfalls\nSince the gross debt-to-gross disposable income for \nhouseholds is greater than 100%, our solution must \nbe greater in value than the gross disposable income \nfor Sweden in the given year. Hence, options A and \nB can be eliminated without any calculations.\nThis leave options, C, D and E. You should always \nlook for opportunities for rounding numbers but \nmust be careful when the likely answer options are \nclose in value, as is the case here with C, D and E. \nYour level of accuracy may not be sufficient. In this \ncase, if we had rounded 1.7204 to 1.7 and 550 655 to \n550 000, we would have calculated 935 000, which is \nthe incorrect answer option D.\nWhen using bar charts, take particular care that you \nselect the figures for the correct year and for the \ncorrect country. If you use the wrong year or country, \nyou will end up with answer options A or C. Using \nthe ratio incorrectly can end up with option B."
    },
    {
      "id": "baneth24_ch6_s15_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 15 Q2",
      "set_id": "baneth24_ch6_set15",
      "figures": [
        "images/baneth24_ch6_set15_fig1.png",
        "images/baneth24_ch6_set15_fig2.png"
      ],
      "question": "Given that the gross disposable income of households of Denmark was 390 000 million euros in 2022, what is the best estimate of th ds n he gross debt of households of Denmark in 2022 (in millions of euros)?",
      "options": [
        {
          "letter": "A",
          "text": "–390 000"
        },
        {
          "letter": "B",
          "text": "+739 922"
        },
        {
          "letter": "C",
          "text": "+790 822"
        },
        {
          "letter": "D",
          "text": "+850 750"
        },
        {
          "letter": "E",
          "text": "+892 891"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must first estimate the gross debt-to-gross \ndisposable income of households’ ratio of Denmark \nfor 2022 based on the trend from 2019 to 2021. We \nmust then use the given gross disposable income for \n2022 to estimate the gross debt of Denmark house-\nholds in 2022. \nCalculation\nChange in the gross debt-to-gross disposable income \nof households’ ratio of Denmark from 2019 to 2021:\n= 205.58% – 211.19%\n≈ –5.6%\nEstimated annual change in the gross debt-to-gross \ndisposable income of households’ ratio of Denmark \nfrom 2019 to 2021:\n= –5.6% / 2 = –2.8%\nEstimated gross debt-to-gross disposable income of \nhouseholds’ ratio of Denmark in 2022:\n= (Gross debt to gross disposable income of households’ \nratio of Denmark in 2022) + (Estimated annual change in \nthe ratio of Denmark from 2019 to 2021)\n= 205.58% –2.8%\n= 203.78%\nWe know that:\nGross debt of households:\n= (Gross debt to gross disposable income ratio) * (Gross \ndisposable income)\nEstimated gross debt of households in Denmark in \n2022 (in millions of Euros):\n= 203.78% * 390 000\n= 2.0378 * 390 000\n≈ 2.04 * 390 000\n= 795 600\nOption C is closest to our estimate.\nPotential Shortcuts / Pitfalls\nIn the previous question we did not round numbers \nbecause the three possible answer options were \nrather close in value. In this case the gaps in values \nare larger, so some rounding to produce an estimate \nwas sufficiently accurate.\nYou must calculate the ratio for 2022 based on linear \nextrapolation from 2019 to 2021. But do remember to \ndivide the change in the ratio in two years by 2, since \nwe are only estimating for 1 year ahead of 2021."
    },
    {
      "id": "baneth24_ch6_s15_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 15 Q3",
      "set_id": "baneth24_ch6_set15",
      "figures": [
        "images/baneth24_ch6_set15_fig1.png",
        "images/baneth24_ch6_set15_fig2.png"
      ],
      "question": "The gross debt in which of these countries had a lower growth rate than that of the gross disposable income from 2017 to 2021?",
      "options": [
        {
          "letter": "A",
          "text": "Denmark only"
        },
        {
          "letter": "B",
          "text": "Finland and Sweden"
        },
        {
          "letter": "C",
          "text": "Latvia only"
        },
        {
          "letter": "D",
          "text": "Finland only"
        },
        {
          "letter": "E",
          "text": "Denmark and Latvia"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must study the formula for gross debt-to-gross \ndisposable income ratio and then use it to analyze \nwhich of these countries had a lower growth rate \nthan that of the gross disposable income from 2017 \nto 2021.\nCalculation\nWe know that:\nGross debt to gross disposable income ratio:\n= (Gross debt of households) / (Gross disposable \nincome)\nA lower growth rate of gross debt as compared to the \ngross disposable income from 2017 to 2021 indicates \nthat the numerator, in the above-noted formula, \ngrows by a smaller percentage than the denominator. \nThis results in the ratio decreasing in value. Hence, \nwe need to look at countries which had a decreasing \ngross debt-to-gross disposable income ratio from \n2017 to 2021.\n\n214\nnumerical reasoning mixed questions test\nGross debt-to-gross disposable income ratios from \n2017 to 2021:\nDenmark: Decreased from 216.19% to 205.58%\nFinland: Increased from 112.78% to 118.26%\nLatvia: Decreased from 34.79% to 29.18%\nSweden: Increased from 162.46% to 172.04%\nTherefore, Denmark and Latvia had a lower growth \nrate of gross debt than that of gross disposable \nincome from 2017 to 2021. \nPotential Shortcuts / Pitfalls\nThe key to this question is understanding what you \nare being asked and how to use the formula. It does \nnot involve any calculations. \nYou must be careful that you read the bar chart \ncorrectly because the data for 2017 is shown in the \nbars at the bottom while that for 2021 is shown in the \nbars at the top, i.e. possibly the reverse of what you \nmight be expecting. You must also check for each \ncountry. Options A and C are incorrect because they \nexclude the other country."
    },
    {
      "id": "baneth24_ch6_s16_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 16 Q1",
      "set_id": "baneth24_ch6_set16",
      "figures": [
        "images/baneth24_ch6_set16_fig1.png"
      ],
      "question": "What percentage of worldwide vegetable oil consumption did sunflower seed oil, palm kernel oil and peanut oil account for in 2019/20?",
      "options": [
        {
          "letter": "A",
          "text": "15.4%"
        },
        {
          "letter": "B",
          "text": "16.6%"
        },
        {
          "letter": "C",
          "text": "33.3%"
        },
        {
          "letter": "D",
          "text": "47.8%"
        },
        {
          "letter": "E",
          "text": "83.4%"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must total the consumption of sunflower seed \noil, palm kernel oil and peanut oil and divide it by \nthe total consumption of vegetable oils worldwide in \n2019/20 to find the percentage.\nCalculation\nTotal consumption of vegetable oil worldwide in \n2019/20 (in million metric tons):\n≈ 200\nSunflower seed oil, palm kernel oil and peanut oil \naccounted for this percentage of the worldwide \nvegetable oil consumption in 2019/20:\n= ((18.92 + 8.15 + 6.22) / 200) * 100%\n≈ (33.29 / 200) * 100%\n≈ 16.645%\nOur calculation clearly most closely corresponds to \nOption B. \nPotential Shortcuts / Pitfalls\nYou must read the data for the correct year out of \nthe given data for 10 years. For example, option A \nprovides the percentage for 2015/16. Palm kernel oil \nmust not be confused with Palm oil. If you make \nthat mistake, your solution might match option D."
    },
    {
      "id": "baneth24_ch6_s16_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 16 Q2",
      "set_id": "baneth24_ch6_set16",
      "figures": [
        "images/baneth24_ch6_set16_fig1.png"
      ],
      "question": "It is estimated that about 90% of palm oil is used for food consumption, whereas industrial consumption claims the remaining 10%. What was the increase in the worldwide food consumption of palm oil as a percentage of worldwide vegetable oil consumption from 2015/16 to 2018/19?",
      "options": [
        {
          "letter": "A",
          "text": "0.2%"
        },
        {
          "letter": "B",
          "text": "2.2%"
        },
        {
          "letter": "C",
          "text": "19.5%"
        },
        {
          "letter": "D",
          "text": "30.1%"
        },
        {
          "letter": "E",
          "text": "32.3%"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must calculate the use of palm oil used for food \nconsumption as a percentage of the worldwide vege-\ntable oil consumption for 2015/16 and 2018/19. We can \nthen find the difference between the two percentages.\nCalculation\nPalm oil consumed in 2015/16 (in million metric \ntons): \n= 59.38 ≈ 60\nPalm oil used for food consumption in 2015/16 (in \nmillion metric tons): \n= 60 * 90% = 54\nWorldwide vegetable oil consumption in 2015/16 (in \nmillion metric tons): \n≈ 180\nUse of palm oil for food consumption as a percentage \nof worldwide vegetable oil consumption in 2015/16:\n= (54 / 180) * 100%\n= 30%\nPalm oil consumed in 2018/19 (in million metric \ntons): \n70.94 ≈ 71\nPalm oil used for food consumption in 2018/19 (in \nmillion metric tons): \n= 71 * 90% = 64\nWorldwide vegetable oil consumption in 2018/19 (in \nmillion metric tons): \n≈ 198\nUse of palm oil for food consumption as a percentage \nof worldwide vegetable oil consumption in 2018/19:\n= (64 / 198) * 100%\n≈ 32.3%\n\n215\nnumerical reasoning mixed questions test\nIncrease in the use of palm oil for food consumption \nas a percentage of worldwide vegetable oil consump-\ntion from 2015/16 to 2018/19:\n= 32.3% – 30%\n= 2.3%\nOption B is the closest in value. \nPotential Shortcuts / Pitfalls\nBar charts will often give a visual clue to the answer \nwithout calculations. A quick look at the chart in \nthis case tells us that answer options C, D and E are \nfar too high because the upward steps in consump-\ntion of palm oil are fairly similar to the upward \nsteps in total consumption of all vegetable oils. The \nincrease in the share of palm oil can only be very \nsmall. Thus, if you have to guess, the choice is only \nbetween A and B. To be sure of your answer, you \nwould have to do a calculation. However as 2.2% is \n11 times greater than 0.2% it was safe, as done above, \nto do some rounding of numbers. \nOption C gives the percentage increase in the \npercentages, which is not required. \nOptions D and E give the use of palm oil for food \nconsumption as a percentage of worldwide vege-\ntable oil consumption for 2015/16 and 2018/19 \nrespectively."
    },
    {
      "id": "baneth24_ch6_s16_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 16 Q3",
      "set_id": "baneth24_ch6_set16",
      "figures": [
        "images/baneth24_ch6_set16_fig1.png"
      ],
      "question": "Global vegetable oil production amounted to around 208.81 million metric tons in 2021/22. Assuming that vegetable oil was produced in the same proportion as it was consumed, how much more soybean oil was produced worldwide in 2021/22 as compared to palm kernel oil (in million metric tons)?",
      "options": [
        {
          "letter": "A",
          "text": "8.29"
        },
        {
          "letter": "B",
          "text": "12.09"
        },
        {
          "letter": "C",
          "text": "51.01"
        },
        {
          "letter": "D",
          "text": "52.17"
        },
        {
          "letter": "E",
          "text": "59.30"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must first find the difference in soybean oil \nconsumption and palm kernel oil consumption in \n2021/22. We must then multiply it by the worldwide \nvegetable oil production to consumption ratio to find \nhow much more soybean oil was produced world-\nwide in 2021/22 as compared to palm kernel oil.\nCalculation\nWorldwide soybean oil consumption in 2021/22 (in \nmillion metric tons) = 59.30\nWorldwide palm kernel oil consumption in 2021/22 \n(in million metric tons) = 8.29\nDifference in the worldwide soybean and palm \nkernel oil consumption in 2021/22 (in million metric \ntons):\n= 59.30 – 8.29 ≈ 51\nWorldwide vegetable oil production to consumption \nratio in 2021/22:\n= (Worldwide vegetable oil production) / (Worldwide \nvegetable oil consumption)\n≈ 208.81 / 205 ≈ 1.02\nDifference between the production of soybean oil \nand palm kernel oil in 2021/22 (in million metric \ntons):\n= ((Worldwide vegetable oil production) / (Worldwide \nvegetable oil consumption)) * (Difference in \nconsumption of soybean and palm kernel oil)\n= 1.02 * 51\n= 1 * 51 + 0.02 * 51\n≈ 51 + 1\n≈ 52\nBased on the approximate calculations, option D is \nthe closest in value. Hence, it is probably correct.\nPotential Shortcuts / Pitfalls\nSome approximating of numbers helped us to do \nthe calculations faster. As options C and D are fairly \nclose, rounding our numbers was not entirely risk-\nfree but the answer we got has sufficient confidence \nfor an exam with severe time pressures.\nIt is always easy to get lost where charts have a lot \nof data. There are 10 columns of data here, and you \nhave to be careful to use the figures for 2021/22. \nLikewise, for palm kernel oil and not palm oil. \nOption B is there as a trap if such a mistake is made. \nOptions A and E provide the consumption of palm \nkernel oil and soybean oil in 2021/22 respectively. \nOption C provides the difference between the two."
    },
    {
      "id": "baneth24_ch6_s17_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 17 Q1",
      "set_id": "baneth24_ch6_set17",
      "figures": [
        "images/baneth24_ch6_set17_fig1.png"
      ],
      "question": "Assuming constant land area, what is Indonesia’s projected population density (p square km) for 2050?",
      "options": [
        {
          "letter": "A",
          "text": "0.00017"
        },
        {
          "letter": "B",
          "text": "0.17"
        },
        {
          "letter": "C",
          "text": "148.00"
        },
        {
          "letter": "D",
          "text": "166.84"
        },
        {
          "letter": "E",
          "text": "281.20"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must use Indonesia’s projected population in \n2050 along with its given land area to calculate its \nprojected population density (per square km) for \n2050.\nCalculation\nIndonesia’s projected population for 2050 is 0.317 \nbillion.\nIndonesia’s land area is 1.9 million square km.\nIndonesia’s projected population density (per square \nkm) for 2050:\n\n216\nnumerical reasoning mixed questions test\n= Indonesia’s projected population for 2025 / \nIndonesia’s land area\n= (0.317 * 1 000 000 000) / (1.9 * 1 000 000)\n= (0.317 * 1 000) / 1.9\n≈ 320 / 2\n= 160\nBased on our approximate calculation, option D is \nthe correct answer.\nPotential Shortcuts / Pitfalls\nThe fairly wide spread of values in the answer \noptions indicated that some rounding of figures \nwould be a safe option. \nIt is essential to note that the population is in billions \n(which has nine zeroes) and the land area is given in \nmillions (having six zeroes). The population density \ndivides the population by the land area. Hence, nine \nzeroes are in the numerator and six zeroes are in the \ndenominator. If you make a mistake in this regard, \noptions A and B might match your incorrect solution.\nThe population is expected to grow from Sep-2023 \nto 2050 but with a constant land area. So, it is logical \nto expect a number higher than 148 (the density in \nSep-2023) in 2050. Options D and E are hence the \nonly two reasonable choices for a guess."
    },
    {
      "id": "baneth24_ch6_s17_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 17 Q2",
      "set_id": "baneth24_ch6_set17",
      "figures": [
        "images/baneth24_ch6_set17_fig1.png"
      ],
      "question": "Given that the Earth’s total land area is approximately 148 940 thousand square km, what was the average land area per person o the world in Sep-2023 (in square km)?",
      "options": [
        {
          "letter": "A",
          "text": "0.00005"
        },
        {
          "letter": "B",
          "text": "0.0186"
        },
        {
          "letter": "C",
          "text": "18.57"
        },
        {
          "letter": "D",
          "text": "53.86"
        },
        {
          "letter": "E",
          "text": "18 566 er of"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nInitially, we must calculate the world population in \nSep-2023 by using any given country’s population \nand its percentage share of the world population. \nWe must then divide the given land area of Earth by \nthe calculated population.\nCalculation\nLet w, be the world population in Sep-2023 (in \nbillions).\nIndia’s population Sep-2023 was 1.432 billion which \ncontributed a 17.85% share to the world population:\n(1.432 / w) * 100% = 17.85%\n(1.432 / w) = (17.85% / 100%) = 0.1785\n0.1785w = 1.432\nw = 1.432 / 0.1785\nw ≈ 1.45 / 0.18 ≈ 8\nThe average land area per person of the world in \nSep-2023 (in square km):\n= (148 940 * 1 000) / (8 * 1 000 000 000)\n= (0.14894 * 1 000 000 * 1 000) / (8 * 1 000 000 000)\n= 0.14894 / 8\n≈ 0.15 / 8\n≈ 0.02\nOption B is the closest to our estimated value.\nPotential Shortcuts / Pitfalls\nThe wide spread of values in the answer options \nensured that approximating the numbers would \nproduce a correct result. Getting the order of magni-\ntude right is the crucial part. The land area is given \nin thousands whereas the population figures are in \nbillions. \nNote also that the solution required is not the popu-\nlation density. In fact, it is the reciprocal of popula-\ntion density. If the population density is calculated \ninstead, your answer might match the incorrect \noptions A or D."
    },
    {
      "id": "baneth24_ch6_s17_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 17 Q3",
      "set_id": "baneth24_ch6_set17",
      "figures": [
        "images/baneth24_ch6_set17_fig1.png"
      ],
      "question": "Assuming constant growth rates, what will be the difference between Bangladesh’s population and Russia’s population (in millions) in Sep-2027?",
      "options": [
        {
          "letter": "A",
          "text": "0.029"
        },
        {
          "letter": "B",
          "text": "0.037"
        },
        {
          "letter": "C",
          "text": "29.0"
        },
        {
          "letter": "D",
          "text": "37.3"
        },
        {
          "letter": "E",
          "text": "71.1"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must apply the given growth rates to the popula-\ntions of the two countries in Sep-2023 for 4 consec-\nutive years to calculate the respective projected \npopulations in Sep-2027. Then we can find the \ndifference between the two projected populations.\nCalculation\nIn Sep-2023, Bangladesh’s population was 0.173 \nbillion whereas Russia’s population was 0.144 billion \nand the respective growth rates were 1.03% and \n–0.19%.\nThe projected population of Bangladesh after 4 years \nin Sep-2027 (in billions):\n0.173 * (100% + 1.03%) * (100% + 1.03%) * (100% + \n1.03%) * (100% + 1.03%) \n= 0.173 * (101.03%)⁴\n= 0.173 * (1.0103)⁴\n≈ 0.173 * 1.04\n≈ 0.18\nSimilarly, the projected population of Russia after 4 \nyears in Sep-2027 (in billions):\n= 0.144 * (100% – 0.19%)⁴\n= 0.144 * (99.81%)⁴\n= 0.144 * (0.9981) ⁴\n\n217\nnumerical reasoning mixed questions test\n≈ 0.14 * 0.992\n≈ 0.139\nThe difference between Bangladesh’s population \nand Russia’s population (in millions) in Sep-2027:\n= (0.18 – 0.139) * (1 000 000 000 / 1 000 000)\n= 0.041 * 1000 = 41\nOption D is clearly closest in value to our estimate. \nPotential Shortcuts / Pitfalls\nStrictly speaking, you must compound the growth \nrate as shown in the calculations. But since the time \nperiod for projection is relatively short, i.e., 4 years, \ncalculation assuming linear growth should also \nyield a similar result. The critical point is that the \nsolution is required in millions, not billions. This \nchange in order of magnitude at the last moment can \neasily throw anyone off. In such an event, option B \nwill match your solution. \nOption C, and its variant option A, are simply the \ndifference in the populations in Sep-2023.\nAs can be seen from the growth rates, the population \nof Bangladesh is increasing while the population of \nRussia is decreasing. Hence, the gap of 29 million in \nSep-2023 is bound to increase. Therefore, options D \nand E would be the obvious candidates for a guess \nshould there be a need to make one."
    },
    {
      "id": "baneth24_ch6_s18_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 18 Q1",
      "set_id": "baneth24_ch6_set18",
      "figures": [
        "images/baneth24_ch6_set18_fig1.png",
        "images/baneth24_ch6_set18_fig2.png"
      ],
      "question": "What was the difference between the total greenhouse gases emissions from production activities in Slovakia and Sweden in 2017 (in million kilograms)?",
      "options": [
        {
          "letter": "A",
          "text": "1 694"
        },
        {
          "letter": "B",
          "text": "12 298"
        },
        {
          "letter": "C",
          "text": "34 842"
        },
        {
          "letter": "D",
          "text": "47 140"
        },
        {
          "letter": "E",
          "text": "4 559 810"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must use the formula for greenhouse gases \nemissions from production activities per capita to \ncalculate the total greenhouse gases emissions from \nproduction activities in Slovakia and Sweden in 2017 \nand then find the difference.\nCalculation\nWe know that:\nGreenhouse gases emissions from production activi-\nties in kgs per capita:\n= Total greenhouse gases emissions from production \nactivities in kgs / Total population\nHence:\nTotal greenhouse gases emissions from production \nactivities in kgs:\n= Greenhouse gases emissions from production \nactivities in kgs per capita * Total population\nTotal greenhouse gases emissions from production \nactivities (in million kilograms) in Slovakia in 2017:\n= (6 410.31 * 5 435 343) / 1 000 000\n≈ (6 500 * 5 450 000) / 1 000 000\n= 6.5 * 5 450\n= 35 425\nTotal greenhouse gases emissions from production \nactivities (in million kilograms) in Sweden in 2017:\n= (4 716.31 * 9 995 153) / 1 000 000\n≈ (4 716.3 * 10 000 000) / 1 000 000\n= 4 716.3 * 10\n= 47 163\nThe difference between the total greenhouse gases \nemissions from production activities in Slovakia and \nSweden in 2017 (in million kilograms):\n= 47 163 – 35425\n= 11 738\nOption B has the closest value to our estimate. Hence, \nit must be the correct answer.\nPotential Shortcuts / Pitfalls\nIt is important to note that the solution is required in \nmillions of kilograms. Hence, we must divide by a \nmillion in our calculations. Options C and D provide \nthe respective total gas emissions in Slovakia and \nSweden in 2017. Options A and E provide the differ-\nences of per capita figures and population figures \nrespectively."
    },
    {
      "id": "baneth24_ch6_s18_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 18 Q2",
      "set_id": "baneth24_ch6_set18",
      "figures": [
        "images/baneth24_ch6_set18_fig1.png",
        "images/baneth24_ch6_set18_fig2.png"
      ],
      "question": "What is the estimated total of greenhouse gases emissions from production activities in Poland in 2019 (in million kilograms), assuming a linear trend from 2018 to 2020?",
      "options": [
        {
          "letter": "A",
          "text": "37.97"
        },
        {
          "letter": "B",
          "text": "9 281"
        },
        {
          "letter": "C",
          "text": "339 544"
        },
        {
          "letter": "D",
          "text": "352 442"
        },
        {
          "letter": "E",
          "text": "367 212"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must first estimate the gas emissions per capita \nin Poland in 2019 based on figures for 2018 and 2020. \nWe can then use the per capita formula and the \ngiven population of Poland in 2019 to estimate the \ntotal greenhouse gases emissions from production \nactivities in Poland in 2019 (in million kilograms).\nCalculation\nGreenhouse gases emissions from production activ-\nities per capita in Poland in 2018 were 9 669.40 kilo-\ngrams and in 2020 were 8 945.24 kilograms.\n\n218\nnumerical reasoning mixed questions test\nAssuming a linear decrease over two years, the esti-\nmated Greenhouse gases emissions from production \nactivities per capita in Poland in 2019 (in kilograms) \nwould be the average of the 2018 and 220 figures:\n(9 669.40 + 8 945.24) / 2\n≈ (9 650 * 8 950) / 2\n= 18 600 / 2\n= 9 300\nWe know that:\nTotal greenhouse gases emissions from production \nactivities in kgs:\n= Greenhouse gases emissions from production \nactivities in kgs per capita * Total population\nThe estimated total greenhouse gases emissions from \nproduction activities in Poland in 2019 (in million \nkilograms):\n= (9 300 * 37 972 812) / 1 000 000\n≈ (9 300 * 38 * 1 000 000) / 1 000 000\n= 9 300 * 38\n= 9 300 * 40 – 9 300 * 2\n= 372 000 – 18 600\n= 353 400\nBased on our estimate, option D is the correct answer.\nPotential Shortcuts / Pitfalls\nOur approximations in this case made our calcula-\ntions quicker and still produced the right answer. \nHad answer options C or E been very close to D \nthis would have carried more risk. Option A is basi-\ncally the population (in millions) of Poland in 2019. \nOption B is the estimated per capita figure for 2019. \nOptions C and E are the total emissions in 2018 and \n2020."
    },
    {
      "id": "baneth24_ch6_s18_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 18 Q3",
      "set_id": "baneth24_ch6_set18",
      "figures": [
        "images/baneth24_ch6_set18_fig1.png",
        "images/baneth24_ch6_set18_fig2.png"
      ],
      "question": "Given that the total of greenhouse gases emissions from production activities in Iceland in 2019 was 920 million kilograms less than that in 2018, what were the greenhouse gases emissions from production activities per capita in 2019 (in kilograms)?",
      "options": [
        {
          "letter": "A",
          "text": "13 014"
        },
        {
          "letter": "B",
          "text": "13 934"
        },
        {
          "letter": "C",
          "text": "16 425"
        },
        {
          "letter": "D",
          "text": "18 548"
        },
        {
          "letter": "E",
          "text": "347 530"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must first calculate the total greenhouse gases \nemissions from production activities in Iceland in \n2018 and then the total figure for 2019 by using the \ngiven difference. We can use the per capita formula \nto determine Iceland’s per capita figure for 2019.\nCalculation\nWe know that:\nTotal greenhouse gases emissions from production \nactivities in kgs:\n= Greenhouse gases emissions from production \nactivities in kgs per capita * Total population\nThe \ntotal \ngreenhouse \ngases \nemissions \nfrom \nproduction activities in Iceland in 2018 (in million \nkilograms):\n= (19 468.44 * 348 460) / 1 000 000\n≈ (19 500 * 0.35 * 1 000 000) / 1 000 000\n= 19 500 * 0.35\n= 6 825\nThe total greenhouse gases emissions from produc-\ntion activities in Iceland in 2018 (in million kilograms):\n= 6 825 – 920 \n= 5 905\nWe know that:\nGreenhouse gases emissions from production activities \nin kgs per capita:\n= Total greenhouse gases emissions from production \nactivities in kgs / Total population\nGreenhouse gases emission from production activi-\nties per capita in Iceland in 2019 (in kilograms):\n= (5 905 * 1 000 000) / 356 991\n≈ (5 900 * 1 000 000) / (35 * 10 000)\n= 590 000 / 35\n≈ 16 850\nOption C is the correct answer based on our \nestimation.\nPotential Shortcuts / Pitfalls\nHere you have to work with bits of data from the \nbar chart, the table and the question itself, and for \ndifferent years, so it is easy to get confused. Option \nA is the per capita figure for 2020 while option B is \n920 added to it. In option D, 920 is subtracted from \nthe per capita figure for 2018.\nApproximating the numbers helped in solving the \nquestion a bit faster. However, there were still a lot \nof calculations. If you are pressed for time, you could \ninstead do some very simple ballpark estimates. \nThe population doesn’t change much so can be \ndiscounted as a factor. The kg emissions per capita \nin Iceland were a fair bit over 19 (thousands) in 2018 \nand slightly over 13 (thousands) in 2020. Splitting the \ndifference gives you 16 (thousands), and because we \nrounded down more to get the 19 than we did for the \n13, we know the figure will actually be over rather \nthan less than 16. As you can see, the only answer \noption that resembles 16 000 is C, which is in fact the \ncorrect choice.\n\n219\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s19_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 19 Q1",
      "set_id": "baneth24_ch6_set19",
      "figures": [
        "images/baneth24_ch6_set19_fig1.png"
      ],
      "question": "What percentage of the non-medical staff on 31 December 2005 were pupils/apprentices?",
      "options": [
        {
          "letter": "A",
          "text": "6.80%"
        },
        {
          "letter": "B",
          "text": "7.76%"
        },
        {
          "letter": "C",
          "text": "9.63%"
        },
        {
          "letter": "D",
          "text": "12.33%"
        },
        {
          "letter": "E",
          "text": "87.67%"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must calculate the number of non-medical staff \non 31 December 2005 by subtracting the number of \nmedical staff from the Staff total. We can then work \nout what percentage of the non-medical staff on 31 \nDecember 2005 were pupils/apprentices.\nCalculation\nStaff total = Medical staff + Non medical staff\nHence:\nNon medical staff = Staff total – Medical staff \nThe overall number of non-medical staff on 31 \nDecember 2005:\n= 1 063 154 – 131 115\n≈ 1 060 000 – 130 000\n= 930 000\nThe percentage of the non-medical staff on 31 \nDecember 2005 who were pupils/apprentices:\n= ((Number of pupils/apprentices) / (Total number of \nnon medical staff)) * 100%\n= (72 330 / 930 000) * 100%\n≈ (75 000 / 930 000) * 100%\n= ((5 * 5 000) / (62 * 5 000)) * 100%\n= (5 / 62) * 100%\n≈ 8%\nBased on our approximate calculations, option B is \ncorrect.\nPotential Shortcuts / Pitfalls\nThere is quite a lot of detail in this table. It is essen-\ntial to read the data for the correct year and from the \ncolumns for 31 December. Option C gives the same \npercentage for 2020.\nIt is critical also to note that the number is required \nas a percentage of non-medical staff and not the staff \ntotal. If a mistake is made, option A will match \nyour solution. Options D and E give the number of \nmedical staff and non-medical staff as percentages of \nthe staff total."
    },
    {
      "id": "baneth24_ch6_s19_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 19 Q2",
      "set_id": "baneth24_ch6_set19",
      "figures": [
        "images/baneth24_ch6_set19_fig1.png"
      ],
      "question": "What additional percentage of medical staff was present on 31 December 2015 as compared to the annual average full-time medical staff?",
      "options": [
        {
          "letter": "A",
          "text": "12.97%"
        },
        {
          "letter": "B",
          "text": "17.03%"
        },
        {
          "letter": "C",
          "text": "37.42%"
        },
        {
          "letter": "D",
          "text": "42.71%"
        },
        {
          "letter": "E",
          "text": "112.97%"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must determine the number of medical staff on \n31 December 2015 by subtracting the non-medical \nstaff from the staff total. Similarly, we must calcu-\nlate the annual average of the medical staff in 2015. \nWe can then work out the additional percentage of \nmedical staff present at year end.\nCalculation\nWe know that:\nMedical staff = Staff total – Non medical staff\nThe number of medical staff present on 31 December \n2015:\n= 1 192 852 – 1 018 461\n≈ 1 200 000 – 1 020 000\n= 180 000\nThe annual average of medical staff in 2015:\n= 868 044 – 713 680\n≈ 870 000 – 710 000\n= 160 000\nThe additional percentage of medical staff present \non 31 December 2015 as compared to the annual \naverage full-time medical staff:\n= ((180 000 – 160 000) / 160 000) * 100%\n= (20 000 / 160 000) * 100%\n= (1 / 8) * 100%\n= 0.125 * 100%\n= 12.5%\nOption A has the closest value to our estimate.\nPotential Shortcuts / Pitfalls\nYou must take care to read data for 2015 only. No \nother data is required for this question. Option B \nshows the solution based on data for 2020. It is also \nimportant not to confuse medical staff with non-\nmedical staff for these calculations. Options C and \nD show the solutions for all hospital staff and non-\nmedical staff for 2015. Option E gives the ratio for the \nmedical staff at year end as compared to the annual \naverage. It does not show the additional percentage.\n\n220\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s19_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 19 Q3",
      "set_id": "baneth24_ch6_set19",
      "figures": [
        "images/baneth24_ch6_set19_fig1.png"
      ],
      "question": "Which of the following is the best estimate for the annual average number of pupils/ apprentices in 1995?",
      "options": [
        {
          "letter": "A",
          "text": "50 000"
        },
        {
          "letter": "B",
          "text": "67 860"
        },
        {
          "letter": "C",
          "text": "78 600"
        },
        {
          "letter": "D",
          "text": "88 840"
        },
        {
          "letter": "E",
          "text": "101 600"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe can find one estimate by using the number of \npupils/apprentices at year end as a percentage \nof staff total and the other estimate by using the \nnumber of pupils/apprentices at year end as a \npercentage of non-medical staff. We can then select \nan option based on these estimates.\nCalculation\nThe number of pupils/apprentices as a percentage of \nstaff total at year end of 1995:\n= (88 841 / 1 153 200) * 100%\n≈ (90 000 / 1 200 000) * 100%\n= 7.5%\nEstimate for the annual average of pupils/appren-\ntices in 1995 based on the above-noted percentage:\n= (Annual average of staff total) * (Percentage of pupils \n& apprentices at year end)\n= 887 564 * 7.5%\n≈ 900 000 * 7.5%\n= 67 500\nThe number of pupils/apprentices as a percentage of \nnon-medical staff at year end of 1995:\n= (88 841 / 1 036854) * 100%\n≈ (90 000 / 1 050 000) * 100%\n≈ 8.6%\nEstimate for the annual average of pupils/appren-\ntices in 1995 based on the above-noted percentage:\n= (Annual average of non medical staff) * (Percentage \nof pupils & apprentices at year end)\n= 785 974 * 8.6%\n≈ 785 000 * 8.6%\n≈ 67 500\nOption B is clearly by far the closest in value to our \nestimate. Hence, it must be correct.\nPotential Shortcuts / Pitfalls\nYou do not need to perform calculations for both \nestimates. The options are quite far apart in value \nand any reasonable calculation will lead to the \ncorrect option. Approximations and quick calcula-\ntions are key to these kinds of questions.\nOptions D and E give the actual number of pupils/\napprentices at year end and the actual annual \naverage of medical staff respectively. Option A is \njust a random number while option C is 10% of the \nannual average of the non-medical staff."
    },
    {
      "id": "baneth24_ch6_s20_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 20 Q1",
      "set_id": "baneth24_ch6_set20",
      "figures": [
        "images/baneth24_ch6_set20_fig1.png",
        "images/baneth24_ch6_set20_fig2.png"
      ],
      "question": "On average, how much faster was team USA as compared to team ITA (Italy) for the complete relay race?",
      "options": [
        {
          "letter": "A",
          "text": "0.00%"
        },
        {
          "letter": "B",
          "text": "0.62%"
        },
        {
          "letter": "C",
          "text": "1.13%"
        },
        {
          "letter": "D",
          "text": "1.47%"
        },
        {
          "letter": "E",
          "text": "2.20%"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must calculate the average speeds of each of the \ntwo teams by using the given distance and times \nand then calculate how much faster was team USA \nrelative to team ITA.\nCalculation\nWe know that:\nAverage speed = Total distance / Total time\nThe average speed of team USA for the complete \nrace (in m/s):\n= (400 * 4) / (2 * 60 + 57.3)\n= 1 600 / 177.3\n≈ 9.024\nThe average speed of team ITA for the complete race \n(in m/s):\n= (400 * 4) / (3 * 60 + 1.2)\n= 1 600 / 181.2\n≈ 8.830\nPercentage by which team USA was faster as \ncompared to team ITA (Italy) for the complete relay \nrace:\n= ((9.024 – 8.830) / 8.830) * 100%\n= (0.194 / 8.830) * 100%\n≈ 2.20%\nPotential Shortcuts / Pitfalls\nYou must remember to multiply the distance of each \nlap, i.e., 400 meters, by 4 to account for 4 runners. \nYou must also convert the given times to seconds for \nthe average speed calculations."
    },
    {
      "id": "baneth24_ch6_s20_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 20 Q2",
      "set_id": "baneth24_ch6_set20",
      "figures": [
        "images/baneth24_ch6_set20_fig1.png",
        "images/baneth24_ch6_set20_fig2.png"
      ],
      "question": "At which point was team USA’s average speed the highest?",
      "options": [
        {
          "letter": "A",
          "text": "Hall handover to Norwood"
        },
        {
          "letter": "B",
          "text": "Norwood handover to Robinson"
        },
        {
          "letter": "C",
          "text": "Robinson handover to Benjamin"
        },
        {
          "letter": "D",
          "text": "At the completion of the race"
        },
        {
          "letter": "E",
          "text": "Team USA maintained the same speed throughout"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must determine the average speeds of team USA \nat every hand over and at the completion of the race \nto determine at which of the given points of the relay \nrace, was team USA’s average speed the highest.\n\n221\nnumerical reasoning mixed questions test\nCalculation\nWe know that:\nAverage speed = Total distance / Total time\nTeam USA’s average speed when Hall handed over \nto Norwood (in m/s):\n400 / 44.5 ≈ 8.99\nTeam USA’s average speed when Norwood handed \nover to Robinson (in m/s):\n(400 * 2) / (1*60 + 28.5) = 800 / 88.5 ≈ 9.04\nTeam USA’s average speed when Robinson handed \nover to Benjamin (in m/s):\n(400 * 3) / (2*60 + 13.3) = 1 200 / 133.3 ≈ 9.00\nTeam USA’s average speed at the completion of the \nrace (in m/s):\n(400 * 4) / (2*60 + 57.3) = 1 600 / 177.3 ≈ 9.02\nPotential Shortcuts / Pitfalls\nYou must convert all times to seconds at the start of \nthe calculations. As can be seen, the average speeds \nonly differ in the second decimal place. Hence, you \nmust approximate at 2 decimal places.\nAn alternative method is to calculate all the indi-\nvidual times of the 4 runners. Hall’s time was 44.5, \nNorwood’s 44.01, Robinson’s 44.74, and Benjamin’s \n44.02 seconds. With each runner who had a lower \nindividual time (Norwood and Benjamin), i.e., a \nfaster speed, the average speed of team USA increased, \nwhile with the addition of each runner having a \nhigher time (Hall and Robinson), i.e., a slower speed, \nthe average speed of team USA decreased. Hence, \nteam USA’s average speed would have been highest \neither at the handover from Norwood to Robinson \n(option B) or at the completion of the race (option D). \nThese two options would make good guesses."
    },
    {
      "id": "baneth24_ch6_s20_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 20 Q3",
      "set_id": "baneth24_ch6_set20",
      "figures": [
        "images/baneth24_ch6_set20_fig1.png",
        "images/baneth24_ch6_set20_fig2.png"
      ],
      "question": "Assuming team NED (Netherlands) ran at a constant speed throughout, how far behind Robinson (of team USA) was NED’s third runner (in meters) when the handover from Robinson to Benjamin (team USA) was made?",
      "options": [
        {
          "letter": "A",
          "text": "1.0"
        },
        {
          "letter": "B",
          "text": "5.3"
        },
        {
          "letter": "C",
          "text": "15.1"
        },
        {
          "letter": "D",
          "text": "17.7"
        },
        {
          "letter": "E",
          "text": "27.5"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must calculate the distance run by team NED \nat the exact time when Robinson handed over to \nBenjamin. We must then subtract this distance from \nthe distance run by team USA at that point to find \nthe distance between Robinson and team NED’s \nthird runner.\nCalculation\nWe know that:\nAverage speed = Total distance / Total time\nTeam NED’s average speed for the complete race (in \nm/s):\n= (400 * 4) / (3*60 + 0.4)\n≈ 1 600 / 180\n≈ 8.87\nBy re-arranging the average speed formula, we get:\nTotal distance = Average speed * Total time\nDistance run (in meters) by team NED when \nRobinson handed over to Benjamin, i.e., after 02:13.3:\n= 8.87 * (2*60 + 13.3)\n= 8.87 * (120 + 13.3)\n= 8.87 * 133.3\n≈ 1 182\nThe distance between Robinson and team NED’s \nthird runner when Robinson handed over to \nBenjamin, i.e., at the 400 * 3 = 1 200m mark:\n= 1 200 – 1 182 \n= 18\nOption D is clearly the closest in value to our \nestimate.\nPotential Shortcuts / Pitfalls\nRounding the numbers helped speed up the calcu-\nlation. However, the margins in this question are \nminimal so approximating too much might lead you \nto a different option."
    },
    {
      "id": "baneth24_ch6_s21_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 21 Q1",
      "set_id": "baneth24_ch6_set21",
      "figures": [
        "images/baneth24_ch6_set21_fig1.png"
      ],
      "question": "In which of the following years were most terrorism suspects arrested per fatality caused in terrorist attacks in the EU?",
      "options": [
        {
          "letter": "A",
          "text": "2010"
        },
        {
          "letter": "B",
          "text": "2013"
        },
        {
          "letter": "C",
          "text": "2014"
        },
        {
          "letter": "D",
          "text": "2016"
        },
        {
          "letter": "E",
          "text": "2019"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must calculate the number of terrorism suspects \narrested per fatality caused in terrorist attacks in \nthe EU for each of the five given years. We can then \nidentify the year having the highest value.\nCalculation\nNumber of terrorism suspects arrested per fatality \ncaused in terrorist attacks in the EU each year:\nIn 2010: = 611 / 7 ≈ 609 / 7 = 87\nIn 2013: = 631 / 7 ≈ 90\n\n222\nnumerical reasoning mixed questions test\nIn 2014: = 774/ 4 ≈ 780 / 4 = 195 \nIn 2016: = 1 011 / 142 ≈ 1 015 / 145 = 7\nIn 2019: = 1 316 / 10 = 131.6\n2014 had the highest the highest number of terrorism \nsuspects arrested per fatality caused in terrorist \nattacks in the EU.\nPotential Shortcuts / Pitfalls\nIt is very important to use the data of the given years \nonly. It would be a waste of time to calculate the \nvalue for any other year.\nThink about this question in terms of fractions. A frac-\ntion with a larger numerator and a smaller denomi-\nnator yields a greater value. For 2010, the value is \napproximately 87. The numerator in 2013 is larger \nand the denominator is the same. Hence, the value \nfor 2013 is automatically larger. The fraction for 2014 \nhas a bigger numerator and a smaller denominator \nand the value is around 200. This means that 2014 \nhas a higher value than that of 2013. The denomi-\nnator for 2016 is quite a big number which implies \nthat the result is a small number. The value for 2019 is \nfairly obvious. Therefore, after mentally comparing, \nand not actually calculating, the five fractions we can \nconclude that 2014 has the highest value."
    },
    {
      "id": "baneth24_ch6_s21_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 21 Q2",
      "set_id": "baneth24_ch6_set21",
      "figures": [
        "images/baneth24_ch6_set21_fig1.png"
      ],
      "question": "What percentage of the terrorism suspects arrested in 2015 had a known affiliation?",
      "options": [
        {
          "letter": "A",
          "text": "13.4%"
        },
        {
          "letter": "B",
          "text": "63.8%"
        },
        {
          "letter": "C",
          "text": "79.4%"
        },
        {
          "letter": "D",
          "text": "82.3%"
        },
        {
          "letter": "E",
          "text": "86.6%"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must calculate the number of suspects arrested \nin 2015 who had known affiliations. We must then \nconvert that number into a percentage.\nCalculation\nSuspects listed in the ‘Not specified’ column are \nnot affiliated with any of the first four categories. \nHence, if we want to quickly ascertain the number \nof suspects with known affiliations, we can simply \nsubtract the ‘Not specified’ number from the total \nnumber of suspects.\nThe number of suspects arrested in 2015 who had \nknown affiliations:\n= 1 077 – 144 \n= 933\nPercentage of suspects arrested in 2015 who had \nknown affiliations:\n= (933 / 1 077) * 100%\n≈ 86.6%\nOption E is clearly the correct answer.\nPotential Shortcuts / Pitfalls\nThis is a simple enough calculation provided you \nuse the right data from the table. Otherwise, you \nmight end up with a result like option D, which is the \npercentage for 2014. Option A gives the percentage of \nsuspects with the affiliation ‘Not specified’. Option \nB gives the percentage of Jihadist suspects while \noption C is the sum of the percentages of Jihadist \nand Separatist suspects. The fatalities data is irrel-\nevant in this question."
    },
    {
      "id": "baneth24_ch6_s21_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 21 Q3",
      "set_id": "baneth24_ch6_set21",
      "figures": [
        "images/baneth24_ch6_set21_fig1.png"
      ],
      "question": "Which of the following pairs of affiliations accounted for more than 60% of terrorism- related arrests in each year from 2016 to 2018 in the EU?",
      "options": [
        {
          "letter": "A",
          "text": "Jihadist and Not Specified"
        },
        {
          "letter": "B",
          "text": "Right-Wing and Left-Wing"
        },
        {
          "letter": "C",
          "text": "Jihadist and Separatist"
        },
        {
          "letter": "D",
          "text": "Separatist and Not Specified"
        },
        {
          "letter": "E",
          "text": "Left-Wing and Not Specified"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must look at the suspects data for the given years \nand analyze which affiliations carry the bulk of the \nweight. We must then work out which of the given \npairs of affiliations accounted for more than 60% of \nterrorism-related arrests in each year from 2016 to \n2018 in the EU.\nCalculation\nLooking at the data, we can see that the ‘Jihadist’ \naffiliation had by far the most arrested suspects in \neach year from 2016 to 2018. In fact, the ‘Jihadist’ \naffiliation accounted for more than 50% of suspects \nin 2016 and 2017 and nearly 50% of suspects in 2018. \nHence, ‘Jihadist’ must be one of the affiliations we \nare looking for.\nThe suspects with ‘Not specified’ affiliations \naccounted for the second-highest number of suspects \nin each of the three years. \nTherefore, it would be impossible to have 60% of \nthe suspects in each year from 2016 to 2018 without \nboth the Jihadist’ and the ‘Not specified’ affiliations, \nmaking A the only possible answer.\nPotential Shortcuts / Pitfalls\nThe risk with this question is that you end up doing \na lot of unnecessary calculations when all that is \nneeded is to think about what the data is telling you. \n\n223\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s22_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 22 Q1",
      "set_id": "baneth24_ch6_set22",
      "figures": [
        "images/baneth24_ch6_set22_fig1.png",
        "images/baneth24_ch6_set22_fig2.png"
      ],
      "question": "In 2022, 721 000 females in Portugal were of the age 75+. How many males in Portugal were in the same age group in 2022?",
      "options": [
        {
          "letter": "A",
          "text": "473 800"
        },
        {
          "letter": "B",
          "text": "535 449"
        },
        {
          "letter": "C",
          "text": "576 800"
        },
        {
          "letter": "D",
          "text": "721 000"
        },
        {
          "letter": "E",
          "text": "10 300 000"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must construct an equation such that the total \nnumber of 75+ people is equal to the sum of the \nnumber of 75+ males and 75+ females to calculate \nthe total population of Portugal in 2022. We can \nthen use the percentage of 75+ males to calculate the \nnumber of 75+ males.\nCalculation\nLet M, be the number of 75+ males in Portugal in \n2022.\nLet P, be the total population of Portugal in 2022.\n4.6% of the total population were males of age 75+ in \nPortugal in 2022.\n11.6% of the total population were of age 75+ in \nPortugal in 2022.\nWe know that:\n(Total no. of people aged 75+) = (No. of males of age \n75+) + (No. of females of age 75+)\n(11.6% * P) = (4.6% * P) + (721 000)\n0.116P = 0.046P + 721 000\n0.116P – 0.046P = 721 000\n0.07P = 721 000\nP = (721 000 / 0.07)\n= 72 100 000 / 7\n= 10 300 000\nCalculate the number of 75+ males in Portugal in \n2022:\nM = 4.6% * P\nM = 4.6% * 10 300 000\nM = (4.6 / 100) * 10 300 000\nM = 4.6 * 103 000\nM = (4 * 103 000) + 0.6 * 103 000\nM = 412 000 + 61 800 = 473 800\nPotential Shortcuts / Pitfalls\nIf you’ve no time for proper calculations, you could \ntry some very crude rounding that you can do in your \nhead. We know from the table that 11.6% of the popu-\nlation are 75+ and that 4.6% of males are 75+. Round \nthe percentages to 12 and 5, so you now have 7 (i.e., 12 \n– 5) women for every 5 men. There are 721 000 women \nwho are 75+, which you can simplify to 700 000. You \nthen simply divide by 7 and multiply by 5 to get an \nestimate of 500 000 men. The nearest answer option \nis A, which is the right answer. Such crude rounding \nwon’t always work, but it is a worthwhile fallback \noption if the alternative is just wildly guessing."
    },
    {
      "id": "baneth24_ch6_s22_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 22 Q2",
      "set_id": "baneth24_ch6_set22",
      "figures": [
        "images/baneth24_ch6_set22_fig1.png",
        "images/baneth24_ch6_set22_fig2.png"
      ],
      "question": "In 2022, 430 000 people in Ireland were in the age group 65-74. What was Ireland’s tota population in 2022?",
      "options": [
        {
          "letter": "A",
          "text": "2 905 405"
        },
        {
          "letter": "B",
          "text": "5 058 824 on of the respective country. al"
        },
        {
          "letter": "C",
          "text": "6 825 397"
        },
        {
          "letter": "D",
          "text": "10 300 000"
        },
        {
          "letter": "E",
          "text": "10 487 805"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must find a percentage for the age group 65-74 \nin Ireland in 2022. We must then construct an equa-\ntion to use the given number and the calculated \npercentage of people in the 65-74 age group to calcu-\nlate the total population of Ireland in 2022.\nCalculation\nLet I, be the total population of Ireland in 2022.\nThe age group 65+ includes not only those who are \n65-74 but also those in the age group 75+. Hence:\n(People in age group 65+) = (People in age group \n65-74) + (People in age group 75+)\nTherefore:\n14.8% = (People in age group 65-74) + 6.3%\n(People in age group 65-74) = 14.8% – 6.3% = 8.5%\nCalculate the total population of Ireland in 2022:\nI * 8.5% = 430 000\nI = 430 000 / 8.5%\nI = 430 000 / (8.5 / 100)\nI = 430 000 * (100 / 8.5)\nI = 430 000 000 / 85\nI ≈ 5 060 000\nOption B is closest in value to our estimate.\nPotential Shortcuts / Pitfalls\nIt is crucial to understand that the 75+ age group \nis a subset of the 65+ age group. This is confirmed \nby the fact that when the percentages of all age \ngroups up to the 65+ age group are added together \nthey account for 100% of the total population. If the \npercentage for the 65+ age group is used instead of \nthe 65-74 age group, our solution will be equal to \noption A. Similarly, if only the percentage of the 75+ \nage group were to be used in the calculations, the \nsolution would equal option C.\nOption D is the total population of Portugal in \n2022 from the previous question. The value given \nin option E can be arrived at when the percentages \nof males are used instead of the percentages of all \npeople in respective age groups.\n\n224\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s22_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 22 Q3",
      "set_id": "baneth24_ch6_set22",
      "figures": [
        "images/baneth24_ch6_set22_fig1.png",
        "images/baneth24_ch6_set22_fig2.png"
      ],
      "question": "Given that Portugal had 83% more people than Ireland who were less than 65 years old, what was the ratio of the number of people in Ireland relative to Portugal who were less than 18 years of age?",
      "options": [
        {
          "letter": "A",
          "text": "0.55"
        },
        {
          "letter": "B",
          "text": "0.75"
        },
        {
          "letter": "C",
          "text": "1.00"
        },
        {
          "letter": "D",
          "text": "1.33"
        },
        {
          "letter": "E",
          "text": "2.04"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nUse the given facts to construct an equation such \nthat the ratio of the number people in Ireland rela-\ntive to Portugal who were less than 18 years of age \ncan be computed.\nCalculation\nLet E, be the number of people who were less than 18 \nyears of age in Ireland in 2022.\nLet T, be the number of people who were less than 18 \nyears of age in Portugal in 2022.\nLet I, be the total population of Ireland in 2022.\nLet P, be the total population of Portugal in 2022.\nWe need to evaluate the ratio, E / T.\nWe know that:\nE = 24.3% * I = 0.243I\nI = E / 0.243\nand \nT = 15.8% * P = 0.158P\nP = T / 0.158\nThe total percentage of people in Ireland in 2022 who \nwere less than 65 years of age:\n= (Total population) – (Percentage of people in age \ngroup 65+)\n= 100% – 14.8% = 85.2%\nThe total percentage of people in Portugal in 2022 \nwho were less than 65 years of age:\n= (Total population) – (Percentage of people in age \ngroup 65+)\n= 100% – 23.7% = 76.3%\nWe are told that Portugal had 83% more people than \nIreland who were less than 65 years old:\n((No. of people in Portugal less than 65 years old) / (No. \nof people in Ireland less than 65 years old)) * 100% = \n183%\n((76.3% * P) / (85.2% * I)) * 100% = 183%\n(76.3% * P) / (85.2% * I) = 1.83\n0.763P / 0.852I = 1.83\nP / I = 1.83 * (0.852 / 0.763)\nP / I ≈ 2.04\nNow we can substitute the expressions for P and I:\n(T / 0.158) / (E / 0.243) = 2.04\nT / 0.158 = 2.04 * (E / 0.243)\nE / T = 0.243 / (0.158 * 2.04)\nE / T ≈ 0.75\nOption B is the closest to our approximation and the \nanswer to choose.\nPotential Shortcuts / Pitfalls\nIt is very important to construct the equations care-\nfully because a slight error can be very costly. Option \nD is the reciprocal of the correct value. Option E is \nthe ratio of the total populations of Portugal and \nIreland.\nThere were a lot of calculations in this answer, but \nthere is a much shorter route if we go back to the first \ntwo questions in this set. For the first question we \nworked out that that the total population of Portugal \nwas 10 300 000. For the second question we calcu-\nlated that the total population of Ireland was 5 060 \n000. This means that Ireland’s total population is \nalmost half that of Portugal. Therefore, 16% (people \nof less than 18 years of age) of Portugal’s population \nwould equal approximately 2 * 16 = 32% of Ireland’s \npopulation. Hence, the ratio would be 24% / 32% = \n0.75."
    },
    {
      "id": "baneth24_ch6_s23_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 23 Q1",
      "set_id": "baneth24_ch6_set23",
      "figures": [
        "images/baneth24_ch6_set23_fig1.png",
        "images/baneth24_ch6_set23_fig2.png",
        "images/baneth24_ch6_set23_fig3.png",
        "images/baneth24_ch6_set23_fig4.png"
      ],
      "question": "Given that the total population of France was 67.9 million in 2022, what was its national debt that year (in trillions of U.S. Dollars)?",
      "options": [
        {
          "letter": "A",
          "text": "2.59"
        },
        {
          "letter": "B",
          "text": "2.88"
        },
        {
          "letter": "C",
          "text": "3.20"
        },
        {
          "letter": "D",
          "text": "5.62"
        },
        {
          "letter": "E",
          "text": "61.12"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must use France’s GDP per capita and total \npopulation for 2022 to calculate its GDP. We must \nthen use the national debt to GDP ratio to calculate \nFrance’s national debt in 2022.\nCalculation\nWe know that:\nGDP per capita = GDP / Total population\nHence:\nGDP = GDP per capita * Total population\nGDP of France in 2022 (in trillions of U.S. dollars):\n= (42 409 * 67.9) / 1 000 000\n≈ (42 500 * 68) / 1 000 000\n= 2.89\n\n225\nnumerical reasoning mixed questions test\nWe also know that:\nNational debt to GDP ratio = National debt / GDP\nFrance’s national debt to GDP ratio in 2022 was \n111.1%.\nHence, France’s national debt in 2022 was (in tril-\nlions of U.S. dollars):\n= 2.89 * 111.1%\n= 2.89 * (111.1 / 100)\n≈ 3.21\nOption C is the closest in value to our estimation. \nHence, it is probably correct.\nPotential Shortcuts / Pitfalls\nYou must be careful to read the data for France \nonly as there are 8 countries given and the bars are \naligned differently in the charts. It is also crucial to \ndeal with the different orders of magnitude prop-\nerly. The population has been provided in millions \n(6 zeroes) whereas the national debt is required \nin trillions (12 zeroes). Option B gives the GDP of \nFrance in 2022. Option A divides the GDP, instead of \nmultiplying it, by 111.1%."
    },
    {
      "id": "baneth24_ch6_s23_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 23 Q2",
      "set_id": "baneth24_ch6_set23",
      "figures": [
        "images/baneth24_ch6_set23_fig1.png",
        "images/baneth24_ch6_set23_fig2.png",
        "images/baneth24_ch6_set23_fig3.png",
        "images/baneth24_ch6_set23_fig4.png"
      ],
      "question": "The forecast GDP growth rate of advanced economies, including United States, was 0.5% for 2023 and 1.6% for 2024. Assuming no changes in the total population and in the national debt to GDP ratio, what was the forecast national debt per capita of the United States for 2024 (in U.S. Dollars)?",
      "options": [
        {
          "letter": "A",
          "text": "64 058"
        },
        {
          "letter": "B",
          "text": "76 730"
        },
        {
          "letter": "C",
          "text": "77 958"
        },
        {
          "letter": "D",
          "text": "94 875"
        },
        {
          "letter": "E",
          "text": "95 341"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must first find an estimate for the GDP per capita \nof the United States by using the forecast growth \nrates for 2023 and 2024. We can then use the national \ndebt to GQP ratio of 2022 to find an estimate for the \nnational debt of the United States in 2024.\nCalculation\nThe GDP per capita for the United States in 2022 was \nU.S. dollars 76 348.\nThe estimated United States GDP per capita (in U.S. \ndollars) for 2023 was:\n= 76 348 * (100% + 0.5%)\n= 76 348 * 1.005\n≈ 76 730\nThe estimated United States GDP per capita (in U.S. \ndollars) for 2024 was:\n= 76 730 * (100% + 1.6%)\n= 76 730 * 1.016\n≈ 77 958\nThe national debt to GDP ratio of the United States \nin 2022 was 121.7%.\nThe estimated United States national debt per capita \n(in U.S. dollars) for 2024 was:\n= 77 958 * 121.7%\n= 77 958 * 1.217\n≈ 94 875\nOption D is the same as our estimate.\nPotential Shortcuts / Pitfalls\nYou must compound the GDP growth separately. \nYou cannot add the two growth rate percentages \ntogether and apply them in a single calculation. If \nthis mistake is made then the solution will equal the \nincorrect option E.\nSince we used GDP per capita in the national debt \nto GDP ratio, the solution will automatically be \nnational debt per capita."
    },
    {
      "id": "baneth24_ch6_s23_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 23 Q3",
      "set_id": "baneth24_ch6_set23",
      "figures": [
        "images/baneth24_ch6_set23_fig1.png",
        "images/baneth24_ch6_set23_fig2.png",
        "images/baneth24_ch6_set23_fig3.png",
        "images/baneth24_ch6_set23_fig4.png"
      ],
      "question": "Given that Portugal had 83% more people than Ireland who were less than 65 years old, what was the ratio of the number of people in Ireland relative to Portugal who were less than 18 years of age?",
      "options": [
        {
          "letter": "A",
          "text": "0.55"
        },
        {
          "letter": "B",
          "text": "0.75"
        },
        {
          "letter": "C",
          "text": "1.00"
        },
        {
          "letter": "D",
          "text": "1.33"
        },
        {
          "letter": "E",
          "text": "2.04"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must use the given average annual forecast GDP \ngrowth rate for the United Kingdom until 2027 to \nestimate United Kingdom’s GDP per capita in 2027. \nWe must then use this estimate with the given \nnational debt to GDP ratio for 2027 to calculate the \nnational debt per capita for that year. \nCalculation\nUnited Kingdom’s estimated GDP per capita in 2027 \n(in U.S. dollars) is:\n45 295 * (100% + 2%)⁵\n= 45 295 * (102%)⁵\n= 45 295 * (1.02)⁵\n≈ 45 295 * 1.104\n≈ 50 000\nUnited Kingdom’s estimated national debt per \ncapita in 2027 (in U.S. dollars) is:\n= 50 000 * 113%\n= 50 000 * 1.13\n= 56 500\nOur estimate is closest to option D. \n\n226\nnumerical reasoning mixed questions test\nPotential Shortcuts / Pitfalls\nThe annual growth rates of the GDP must be \ncompounded for 5 years, i.e., from 2022 to 2027 to be \naccurate. You must not use the national debt to GDP \nratio for 2022, because the ratio for 2027 has already \nbeen provided to us (113%).\nAlthough the answer options A, B, C and D are fairly \nclose together, which would usually discourage \nmore ambitious estimating, in this case it would \nprove effective. Round the 2022 GDP per capita to \n45 000. Then, rather than compound the 2% growth, \nsimply multiply 2% by 5 to get 10% growth by 2027, \nwhich gives 49 500. Then multiply this by 1.13 to get \n55 935. This also gives you the correct answer D and \nyou would only need to use a calculator for the final \nstep."
    },
    {
      "id": "baneth24_ch6_s24_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 24 Q1",
      "set_id": "baneth24_ch6_set24",
      "figures": [
        "images/baneth24_ch6_set24_fig1.png",
        "images/baneth24_ch6_set24_fig2.png",
        "images/baneth24_ch6_set24_fig3.png"
      ],
      "question": "How much more cow milk fat content was produced in Spain than in Italy in 2018 (in tonnes)?",
      "options": [
        {
          "letter": "A",
          "text": "28 236"
        },
        {
          "letter": "B",
          "text": "43 883"
        },
        {
          "letter": "C",
          "text": "60 416"
        },
        {
          "letter": "D",
          "text": "91 621"
        },
        {
          "letter": "E",
          "text": "119 857"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must use the respective fat content percentages \nalong with the cow milk production to find the cow \nmilk fat content produced in Spain and Italy. We can \nthen find the difference between the two.\nCalculation\nTotal cow milk fat content produced in Italy in 2018 \n(in tonnes):\n= (2 470 * 1 000) * 3.71%\n≈ (2 500 * 1 000) * 3.7%\n≈ 93 000\nTotal cow milk fat content produced in Spain in 2018 \n(in tonnes):\n= (3 257 * 1 000) * 3.68%\n≈ (3 250 * 1 000) * 3.7%\n≈ 120 250\nThe difference in the total cow milk fat content \nproduced in Spain and Italy in 2018 (in tonnes):\n= 120 250 – 93 000\n= 27 250\nOption A is clearly the closest value to our estimate. \nPotential Shortcuts / Pitfalls\nReading the data for the incorrect year may result \nin solutions equal to option B or C. Although our \nestimated result was a bit off the correct answer, the \nwidely separated option values made that irrelevant.\nTo make the calculation slightly quicker, we could \nhave assumed the same cow milk fat content \npercentage for Italy and Spain (which were already \nvery close) and subtracted the cow milk produc-\ntion first and then multiplied it by the fat content \npercentage."
    },
    {
      "id": "baneth24_ch6_s24_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 24 Q2",
      "set_id": "baneth24_ch6_set24",
      "figures": [
        "images/baneth24_ch6_set24_fig1.png",
        "images/baneth24_ch6_set24_fig2.png",
        "images/baneth24_ch6_set24_fig3.png"
      ],
      "question": "How much more protein content was produced in 2022 in Finland due to a higher protein content percentage as compared to the protein content that would have been produced in 2022 had the protein content percentage stayed at the level of 2018 (in tonnes)?",
      "options": [
        {
          "letter": "A",
          "text": "0.54"
        },
        {
          "letter": "B",
          "text": ""
        },
        {
          "letter": "C",
          "text": "618"
        },
        {
          "letter": "D",
          "text": "3 159"
        },
        {
          "letter": "E",
          "text": "6 052"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must determine the protein content produced in \nFinland in 2022 as well as the protein content that \nwould have been produced in 2022 had the protein \ncontent percentage stayed at the level of 2018. Then, \nwe can find the difference between the two.\nCalculation\nCow milk protein content produced in Finland in \n2022 (in thousand tonnes): \n= 533 * 4.34%\n≈ 23.13\nCow milk protein content that would have been \nproduced in 2022 had the protein content percentage \nstayed at the level of 2018 (in thousand tonnes): \n= 533 * 4.44%\n≈ 23.67\nDifference in protein content had the protein content \npercentage not improved (in tonnes): \n= (23.67 – 23.13) * 1 000\n= 0.54 * 1 000\n= 540\nOption B is the closest in value. \nPotential Shortcuts / Pitfalls\nYou must take care to read the data for the correct \nyear and country as we have switched both year and \ncountry from the previous question. Option E is the \nrequired protein content difference, but for Italy.\nYou do not need to use the Finland’s cow milk \nproduction data for 2018 since your calculations \nmust be based on the production level of 2022. The \nonly difference to consider is that of the protein \ncontent percentages. Had we used the different \nproduction levels for 2018 and 2022, our solution \nwould have equaled option D. Similarly, had we \nused the production level of 2018 only, our solution \nwould have been equal to option C.\n\n227\nnumerical reasoning mixed questions test\nYou must also be careful of the change in the order of \nmagnitude. The solution is required in tonnes. If you \nforget to change it, your solution will equal option A."
    },
    {
      "id": "baneth24_ch6_s24_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 24 Q3",
      "set_id": "baneth24_ch6_set24",
      "figures": [
        "images/baneth24_ch6_set24_fig1.png",
        "images/baneth24_ch6_set24_fig2.png",
        "images/baneth24_ch6_set24_fig3.png"
      ],
      "question": "What was the percentage change in the combined yield of cow milk fat and protein content in Lithuania from 2020 to 2022?",
      "options": [
        {
          "letter": "A",
          "text": "–20.2%"
        },
        {
          "letter": "B",
          "text": "–19.1%"
        },
        {
          "letter": "C",
          "text": "–18.5%"
        },
        {
          "letter": "D",
          "text": "+2.1%"
        },
        {
          "letter": "E",
          "text": "+18.4%"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must separately calculate the combined cow \nmilk fat and protein content produced in Lithuania \nin 2020 and 2022. We must then calculate the \npercentage change between those two values.\nCalculation\nThe combined cow milk fat and protein content \npercentage for Lithuania in 2020:\n= 4.17% + 3.38%\n= 7.55%\nThe combined cow milk fat and protein content yield \nfor Lithuania in 2020 (in thousand tonnes):\n= 86 * 7.55%\n≈ 6.49\nThe combined cow milk fat and protein content \npercentage for Lithuania in 2022:\n= 4.27% + 3.44%\n= 7.71%\nThe combined cow milk fat and protein content yield \nfor Lithuania in 2022 (in thousand tonnes):\n= 69 * 7.71%\n≈ 5.32\nThe percentage change in the combined yield of cow \nmilk fat and protein content in Lithuania from 2020 \nto 2022:\n= ((5.32 – 6.49) / 6.49) * 100%\n= (–1.17 / 6.49) * 100%\n≈ –18.2% \nOption C is the closest in value to our approximate \nsolution. Hence, it is probably correct.\nPotential Shortcuts / Pitfalls\nIt is very important to read the data for the correct \nyears and the correct country. Had the data of 2018 \nand 2022 been used, option B would have matched \nour solution. Option A is simply the percentage \nchange in the cow milk production of Lithuania \nfrom 2020 to 2022. Similarly, option D is the \npercentage change in the combined fat and protein \ncontent percentages from 2020 to 2022."
    },
    {
      "id": "baneth24_ch6_s25_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 25 Q1",
      "set_id": "baneth24_ch6_set25",
      "figures": [
        "images/baneth24_ch6_set25_fig1.png",
        "images/baneth24_ch6_set25_fig2.png",
        "images/baneth24_ch6_set25_fig3.png",
        "images/baneth24_ch6_set25_fig4.png",
        "images/baneth24_ch6_set25_fig5.png"
      ],
      "question": "What was the change in Euros per tonne of the landings of fishery products (for industrial use) in Iceland from 2017 to 2021?",
      "options": [
        {
          "letter": "A",
          "text": "–6.02"
        },
        {
          "letter": "B",
          "text": "+0.05"
        },
        {
          "letter": "C",
          "text": "+54.83"
        },
        {
          "letter": "D",
          "text": "+155.99"
        },
        {
          "letter": "E",
          "text": "+197.74"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must use the value and tonnage of landings of \nfishery products (for industrial use) in 2017 and 2021 \nto calculate the ratio and then subtract the ratios to \nfind the difference.\nCalculation\nEuros per tonne of the landings of fishery products \n(for industrial use) in Iceland in 2017:\n= (71 591 * 1 000) / 500 944\n≈ (72 000 * 1 000) / 500 000\n= 720 / 5\n= 144\nAnd for 2021:\n= (65 423 * 1 000) / 330 856\n≈ (65 000 * 1 000) / 330 000\n= 6 500 / 33\n≈ 197\nThe change in euros per tonne of the landings of \nfishery products (for industrial use) in Iceland from \n2017 to 2021:\n= 197 – 144 \n= +53\nBased on our approximate calculation, option C is \nclearly the correct answer.\nPotential Shortcuts / Pitfalls\nIt is a must to read the data for the correct year and \ncountry. If you compare the ratios for 2019 and 2021, \nyour solution will match option A. And if you calcu-\nlate the ratio for Norway, instead of Iceland, your \nsolution would be equal to option D.\nIt is important to note that the value of the landings \nof fishery products (for industrial use) is in thou-\nsands and you must account for this in your calcula-\ntions. If the value is not converted, you might get an \nincorrect solution equal to option B. \nOption E provides the ratio for Iceland in 2021 only.\n\n228\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s25_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 25 Q2",
      "set_id": "baneth24_ch6_set25",
      "figures": [
        "images/baneth24_ch6_set25_fig1.png",
        "images/baneth24_ch6_set25_fig2.png",
        "images/baneth24_ch6_set25_fig3.png",
        "images/baneth24_ch6_set25_fig4.png",
        "images/baneth24_ch6_set25_fig5.png"
      ],
      "question": "How much more protein content was produced in 2022 in Finland due to a higher protein content percentage as compared to the protein content that would have been produced in 2022 had the protein content percentage stayed at the level of 2018 (in tonnes)?",
      "options": [
        {
          "letter": "A",
          "text": "0.54"
        },
        {
          "letter": "B",
          "text": ""
        },
        {
          "letter": "C",
          "text": "618"
        },
        {
          "letter": "D",
          "text": "3 159"
        },
        {
          "letter": "E",
          "text": "6 052"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must evaluate the ratio, euros per tonne, of land-\nings of fishery products (for human consumption) in \nSpain in 2019. We must then use the given difference \nto determine the ratio for landings of fishery prod-\nucts (for industrial use). Finally, we can use this ratio \nto determine the tonnage of the landings of fishery \nproducts (for industrial use) for Spain in 2019.\nCalculation\nEuros per tonne of the landings of fishery products \n(for human consumption) in Spain in 2019:\n= (1 855.6 * 1 000 000) / 781 610\n≈ (1 850 * 1 000 000) / 780 000\n= 185 000 / 78\n≈ 2 370\nEuros per tonne of the landings of fishery products \n(for industrial use) in Spain in 2019:\n= (Ratio for human consumption) – (Given difference)\n= 2 370 – 1 761.8\n≈ 610\nWe know that:\nEuros per tonne = Euros / Tonnes\nHence:\nTonnes = Euros / Euros per tonne\nThe tonnage of the landings of fishery products (for \nindustrial use) for Spain in 2019:\n= (1 941 * 1 000) / 610\n≈ (1 950 * 1 000) / 600\n= 3 250\nOption C is the closest to our estimated value.\nPotential Shortcuts / Pitfalls\nIt is vital to account for the different orders of \nmagnitude for euro values provided for human \nconsumption (in millions) and for industrial use (in \nthousands). Options A and E reflect such possible \nerrors in solutions. \nThe magnitude of tonnage values in options D and \nE are too high. They do not correspond to the small \neuro value of Spain (for Industrial use) in 2019. \nHence, they can be eliminated easily."
    },
    {
      "id": "baneth24_ch6_s25_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 25 Q3",
      "set_id": "baneth24_ch6_set25",
      "figures": [
        "images/baneth24_ch6_set25_fig1.png",
        "images/baneth24_ch6_set25_fig2.png",
        "images/baneth24_ch6_set25_fig3.png",
        "images/baneth24_ch6_set25_fig4.png",
        "images/baneth24_ch6_set25_fig5.png"
      ],
      "question": "What was the percentage change in the combined yield of cow milk fat and protein content in Lithuania from 2020 to 2022?",
      "options": [
        {
          "letter": "A",
          "text": "–20.2%"
        },
        {
          "letter": "B",
          "text": "–19.1%"
        },
        {
          "letter": "C",
          "text": "–18.5%"
        },
        {
          "letter": "D",
          "text": "+2.1%"
        },
        {
          "letter": "E",
          "text": "+18.4%"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must calculate the change in euros per tonne \nof the landings of fishery products (for human \nconsumption) in France from 2017 to 2021 to estimate \nthe annual change. We can then use this annual \nchange to project the euros per tonne value for 2026.\nCalculation\nChange in euros per tonne value of the landings of \nfishery products (for human consumption) in France \nfrom 2017 to 2021:\n= ((819.0 * 1 000 000) / 283 671) – ((862.2 * 1 000 000) / \n304 085)\n≈ ((820 * 1 000 000) / 285 000) – ((860 * 1 000 000) / 305 \n000)\n≈ 2 880 – 2 820\n= 60\nAnnual change in euros per tonne value of the land-\nings of fishery products (for human consumption) in \nFrance from 2017 to 2021:\n= 60 / 4\n= 15\nProjected value of euros per tonne of the landings of \nfishery products (for human consumption) in France \nin 2026:\n= (Euros per tonne in 2021) + (Annual change) * \n(Number of projected years)\n= 2 880 + 15 * 5\n= 2 880 + 75\n= 2 955\nOption E is closest in value to our estimate and hence \nis our best choice.\nPotential Shortcuts / Pitfalls\nOption D provides the projected value for 2023, if \nyou calculate that by mistake. \nOption C gives the projected value for 2026 of \nIceland. Similarly, you must only use data from the \ntable ‘for human consumption’. If you mistakenly \nuse the table ‘for industrial use’, your solution will \nmatch option B. Remember also that the table states \neuro values in millions. You must convert the order \nof magnitude, otherwise your solution might equal \noption A.\n\n229\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s26_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 26 Q1",
      "set_id": "baneth24_ch6_set26",
      "figures": [
        "images/baneth24_ch6_set26_fig1.png",
        "images/baneth24_ch6_set26_fig2.png",
        "images/baneth24_ch6_set26_fig3.png"
      ],
      "question": "Which countries had the highest and the lowest electricity consumptions per capita i 2022?",
      "options": [
        {
          "letter": "A",
          "text": "Highest: Iceland, Lowest: Nigeria"
        },
        {
          "letter": "B",
          "text": "Highest: Norway, Lowest: India"
        },
        {
          "letter": "C",
          "text": "Highest: Kuwait, Lowest: Nigeria"
        },
        {
          "letter": "D",
          "text": "Highest: China, Lowest: Iceland"
        },
        {
          "letter": "E",
          "text": "Highest: Iceland, Lowest: India"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must evaluate the per capita ratios for all six \ncountries mentioned in the options in order to deter-\nmine which countries have the highest and lowest \nvalues.\nCalculation\nWe know that:\nElectricity consumption per capita in 2022, in kW h \nper capita:\n= (Electricity consumption per capita in 2022, in kW h) / \n(Total population) \n= ((Electricity consumption per capita in 2022, in kW h) \n/ (1 000 000) / (Total population / 1 000 000))\n= (Electricity consumption per capita in 2022, in GW h) \n/ (Total population, in millions)\nElectricity consumption per capita in 2022 (in kW-h \nper capita):\nIceland: 20 108 / 0.4 ≈ 20 100 / 0.4 = 50 250\nNigeria: 32 126 / 218.5 ≈ 32 500 / 220 ≈ 150\nNorway: 152 677 / 5.4 ≈ 152 500 / 5 = 30 500\nIndia: 1 838 074 / 1 417.2 ≈ 1 850 000 / 1 400 ≈ 1 320\nKuwait: 82 957 / 4.3 ≈ 83 000 / 4 = 20 750\nChina: 8 839 076 / 1 425.9 ≈ 8 850 000 / 1 425 ≈ 6 200\nTherefore, Iceland had the highest electricity \nconsumption per capita in 2022 while Nigeria had \nthe lowest.\nPotential Shortcuts / Pitfalls\nIt is important to only read the data for the six coun-\ntries mentioned in the options. Calculating the per \ncapita figures for any other country would be a \nwaste of valuable time.\nAs mentioned in the formula, calculating the ratios \nwith the given units yields the correct result since \nboth the numerator and denominator represent the \norder of magnitude of a million. Even if the order \nof magnitudes had been different, simply dividing \nthe two numbers would have sufficed since we only \nneeded to compare the ratios of the countries and \nnot provide exact answers."
    },
    {
      "id": "baneth24_ch6_s26_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 26 Q2",
      "set_id": "baneth24_ch6_set26",
      "figures": [
        "images/baneth24_ch6_set26_fig1.png",
        "images/baneth24_ch6_set26_fig2.png",
        "images/baneth24_ch6_set26_fig3.png"
      ],
      "question": "What was the difference in the electricity consumption per capita in the United States and Germany in 2022 (in kW-h)?",
      "options": [
        {
          "letter": "A",
          "text": "569"
        },
        {
          "letter": "B",
          "text": "5 720"
        },
        {
          "letter": "C",
          "text": "6 981"
        },
        {
          "letter": "D",
          "text": "12 702"
        },
        {
          "letter": "E",
          "text": "14 573 n s"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must separately calculate the electricity \nconsumption per capita in the United States and \nGermany in 2022 and then find the difference.\nCalculation\nWe know that:\nElectricity consumption per capita in 2022, in kW h \nper capita:\n= (Electricity consumption per capita in 2022, in GW h) \n/ (Total population in millions)\nElectricity consumption per capita (in kW-h) in the \nUnited States in 2022:\n= 4 296 958 / 338.3\n≈ 4 300 000 / 340\n≈ 12 650\nElectricity consumption per capita (in kW-h) in \nGermany in 2022:\n= 582 255 / 83.4\n≈ 585 000 / 85\n≈ 6 880\nThe difference in the electricity consumption per \ncapita in the United States and Germany in 2022 (in \nkW-h):\n= 12 650 – 6 880\n= 5 770\nBased on our estimate, option B is the correct answer.\nPotential Shortcuts / Pitfalls\nIt is important to find the country per capita figures \nbefore finding the difference. It would be incorrect to \nfind the differences of the total electricity consump-\ntions and total populations first and then calculate \nthe ratio based on these differences. Option E would \nmatch the solution of such an incorrect calcula-\ntion. Options C and D provide the actual electricity \nconsumption per capita in Germany and the United \nStates respectively. \n\n230\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s26_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 26 Q3",
      "set_id": "baneth24_ch6_set26",
      "figures": [
        "images/baneth24_ch6_set26_fig1.png",
        "images/baneth24_ch6_set26_fig2.png",
        "images/baneth24_ch6_set26_fig3.png"
      ],
      "question": "Based on the Euros per tonne values of the landings of fishery products (for human consumption) in France in 2017 and in 2021, what is France’s projected Euros per tonne value for 2026?",
      "options": [
        {
          "letter": "A",
          "text": "0.003"
        },
        {
          "letter": "B",
          "text": ""
        },
        {
          "letter": "C",
          "text": "1 618"
        },
        {
          "letter": "D",
          "text": "2 913"
        },
        {
          "letter": "E",
          "text": "2 952 1 GW-h = 1 000 000 kW-h"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must first calculate the projected electricity \nconsumption and the total population of China in \n2023 based on the provided growth rates. Then, we \nmust calculate the electricity consumption per capita \nfor 2023 and eventually the increase from 2022.\nCalculation\nThe projected electricity consumption of China in \n2023 (in GW-h):\n= 8 839 076 * (100% + 5%)\n≈ 8 840 000 * 1.05\n= 9 282 000\nThe projected total population of China in 2023 (in \nmillions):\n= 1 425.9 * (100% – 0.5%)\n≈ 1 425 * 0.995\n≈ 1 418\nThe projected electricity consumption of China in \n2023 (in GW-h):\n= 8 839 076 * (100% + 5%)\n≈ 8 840 000 * 1.05\n= 9 282 000\nThe projected electricity consumption per capita of \nChina in 2023 (in kW-h):\n= 9 282 000 / 1 418\n≈ 6 545\nThe electricity consumption per capita of China in \n2022 (in kW-h):\n= 8 839 076 / 1 425.9 \n≈ 8 840 000 / 1 425 \n≈ 6 200\nThe projected increase in electricity consumption per \ncapita of China from 2022 to 2023 (in kW-h):\n= 6 545 – 6 200 \n= 345\nOption D is the correct answer based on our \nestimation.\nPotential Shortcuts / Pitfalls\nOption A can only be correct if both the electricity \nconsumption and the total population are projected \nto grow at the same rate. That is not the case. \nOption B’s value is obtained by decreasing 2022’s \nper capita figure by 5% – 0.5% = 4.5%. This is obvi-\nously absurd logic. Option E provides the projected \nper capita figure for 2023. This is not what has been \nasked for.\nIt is important to find the country per capita figures \nbefore finding the difference. It would be incorrect to \nfind the differences of the total electricity consump-\ntions and total populations first and then calculate \nthe ratio based on these differences. Option E would \nmatch the solution of such an incorrect calculation."
    },
    {
      "id": "baneth24_ch6_s27_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 27 Q1",
      "set_id": "baneth24_ch6_set27",
      "figures": [
        "images/baneth24_ch6_set27_fig1.png",
        "images/baneth24_ch6_set27_fig2.png"
      ],
      "question": "What was the approximate number of overnight stays made in holiday and other short-stay accommodation by tourists from Austria in Germany in 2022 (in millions)?",
      "options": [
        {
          "letter": "A",
          "text": "0.328"
        },
        {
          "letter": "B",
          "text": "0.785"
        },
        {
          "letter": "C",
          "text": "2.034"
        },
        {
          "letter": "D",
          "text": "2.245"
        },
        {
          "letter": "E",
          "text": "3.600"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must multiply the percentage of overnight stays \nin holiday and other short-stay accommodations in \nGermany in 2022 with the approximate number of \ntourists from Austria who visited Germany in 2022.\nCalculation\nThe percentage of overnight stays in holiday and \nother short-stay accommodation in Germany in 2022 \nwas 21.8%.\nThe approximate number of tourists from Austria \nwho visited Germany in 2022, from the bar chart, \nwas 3.5 million.\nThe approximate number of overnight stays made \nin holiday and other short-stay accommodation \nby tourists from Austria in Germany in 2022 (in \nmillions):\n= 3.5 * 21.8%\n≈ 3.5 * 22%\n= 3.5 * (10% + 10% + 1% + 1%)\n= 3.5 * 10% + 3.5 * 10% + 3.5 * 1% + 3.5 * 1%\n= 0.35 + 0.35 + 0.035 + 0.035\n= 0.77\nAs per our approximate calculation, option B is \nclearly by far the closest value. \nPotential Shortcuts / Pitfalls\nThe bars in the bar chart are not labelled. Hence, we \nwill have to read approximate values. This might cause \n\n231\nnumerical reasoning mixed questions test\nsome variation in our solution. In our calculation, \nwhen multiplying the percentage with the number \nof tourists, we broke the problem down into smaller \neasier and quickly solvable bits. Finding 1% and 10% \nof numbers is always easier. This process might seem \nlonger, but it is more efficient and saves time."
    },
    {
      "id": "baneth24_ch6_s27_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 27 Q2",
      "set_id": "baneth24_ch6_set27",
      "figures": [
        "images/baneth24_ch6_set27_fig1.png",
        "images/baneth24_ch6_set27_fig2.png"
      ],
      "question": "Given that there were 50 million overnight stays by non-citizens in Germany in 2022, approximately what percentage of them were not made in camping grounds by non- European tourists (limited to the given data)?",
      "options": [
        {
          "letter": "A",
          "text": "1.6%"
        },
        {
          "letter": "B",
          "text": "9.5%"
        },
        {
          "letter": "C",
          "text": "11.4%"
        },
        {
          "letter": "D",
          "text": "13.2%"
        },
        {
          "letter": "E",
          "text": "76.1%"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must calculate the percentage of overnights stays \nnot made in camping grounds. We must also ascer-\ntain the total number of overnight stays made by \nnon-Europeans (according to the bar chart). Then, \nwe must multiply these two to find our solution.\nCalculation\nThe percentage of overnight stays in camping \ngrounds in Germany in 2022 was 12.5%. Hence, the \npercentage of overnight stays not made in camping \ngrounds in Germany in 2022:\n= 100% – 12.5% \n= 87.5%\nThere are only citizens of two non-European coun-\ntries: United States and Arabs. \nThe total number of overnight stays (in millions, \nfrom the bar chart) made by the citizens of the United \nStates and the Arabs:\n= 5.4 + 1.2\n= 6.6\nThe number of overnight stays made by non-\nEuropean citizens in accommodations other than \ncamping grounds in Germany in 2022:\n= 6.6 * 87.5% \n≈ 6.6 * 88%\n= 6.6 * (100% – 10% – 1% – 1%)\n= 6.6 – 6.6 * 10% – 6.6 * 1% – 6.6 * 1%\n= 6.6 – 0.66 – 0.066 - 0.066\n= 5.94 – 0.132\n≈ 5.8\nThe percentage of overnight stays made by non-\nEuropean citizens in accommodations other than \ncamping grounds in Germany in 2022 was:\n= (5.8 / 50) * 100%\n= (1.16 / 10) * 100% \n= 11.6%\nOption C is the closest in value. Hence, it is probably \ncorrect.\nPotential Shortcuts / Pitfalls\nYou must use the gridlines on the bar chart to make \nas accurate an approximation as possible.\nThe great majority of the tourists to Germany were \nclearly Europeans, so option E is out of the ques-\ntion. One-eighth of overnight stays were in camping \ngrounds. Therefore, seven-eighths of the overnight \nstays must have been in other accommodations. This \nmeans that very small percentages, like option A, are \nunlikely.\nOption B accounts for citizens of the United States \nonly and ignores the Arabs. Option D on the other \nhand includes all non-Europeans and all accommo-\ndations, including the camping grounds."
    },
    {
      "id": "baneth24_ch6_s27_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 27 Q3",
      "set_id": "baneth24_ch6_set27",
      "figures": [
        "images/baneth24_ch6_set27_fig1.png",
        "images/baneth24_ch6_set27_fig2.png"
      ],
      "question": "There were 150% more overnight stays in Germany in January 2022 as compared to 12 months earlier. Given that there were 16.2 million overnight stays in January 2022 and that the percentages of overnight stays in different accommodations were mostly unchanged since 2021, approximately how many overnight stays (in millions) were in hotels, inns and guesthouses in January 2021?",
      "options": [
        {
          "letter": "A",
          "text": "3.66"
        },
        {
          "letter": "B",
          "text": "6.10"
        },
        {
          "letter": "C",
          "text": "6.48"
        },
        {
          "letter": "D",
          "text": "9.15"
        },
        {
          "letter": "E",
          "text": "10.80"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nFirst, we must determine the number of over-\nnight stays in January 2021 by using the number \nof overnight stays in January 2022 and the growth \npercentage. We must then use the percentage of \novernights stays in hotels, inns and guesthouses to \nfind the overnight stays (in millions) in hotels, inns \nand guesthouses in January 2021.\nCalculation\nNumber of overnight stays in January 2022:\n= (No. of overnight stays in January 2021) * (100% + \n150%)\nHence:\nNumber of overnight stays in January 2021:\n= (Number of overnight stays in January 2022) / 250%\nThe number of overnight stays (in millions) in \nJanuary 2021:\n= 16.2 / 250%\n= 16.2 / 2.5\n≈ (15 + 1.25) / 2.5\n= (15 / 2.5) + (1.25 / 2.5)\n= 6 + 0.5\n= 6.5\nThe percentage of overnights stays in hotels, inns \nand guesthouses in 2022 was 56.5% which was \n\n232\nnumerical reasoning mixed questions test\nunchanged from 2021. \nOvernight stays (in millions) in hotels, inns and \nguesthouses in January 2021:\n= 6.5 * 56.5%\n≈ 3.67\nOption A is likely to be correct based on our approxi-\nmate solution.\nPotential Shortcuts / Pitfalls\nNo information from the bar chart is required in \nthis question since the given number of overnight \nstays is not limited to foreign tourists.\nIt is quite easy to confuse a 150% increase with a \n50% increase. 150% increase means that the number \nincreased by 1.5 times the original number. If the \nincrease was taken to mean 50% only, the solution \nwould match option B for hotels, inns and guesthouses \nonly, or option E if all accommodations were consid-\nered. Option D gives the number of overnight stays in \nhotels, inns and guesthouses in January 2022. Option C \nis the total number of overnight stays in January 2021.\nAfter reading the question we knew that we were \nlooking for a solution that was nearly half of a \nnumber which was 2.5 times smaller than 16.2 \nmillion. Option A is probably the only solution in \nthat range."
    },
    {
      "id": "baneth24_ch6_s28_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 28 Q1",
      "set_id": "baneth24_ch6_set28",
      "figures": [
        "images/baneth24_ch6_set28_fig1.png"
      ],
      "question": "What was the average speed of Carlos Sainz car for the complete race (in km/h)?",
      "options": [
        {
          "letter": "A",
          "text": "57.0"
        },
        {
          "letter": "B",
          "text": "193.9"
        },
        {
          "letter": "C",
          "text": "195.4"
        },
        {
          "letter": "D",
          "text": "197.0"
        },
        {
          "letter": "E",
          "text": "308.5"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must calculate the race completion time for \nCarlos Sainz and then use the total distance for \nwhich his car was driven to evaluate his average \nspeed for the race.\nCalculation\nSainz’s race completion time (in hours):\n= (Winner’s time) + (Sainz’s additional time)\n= 1:33:56.7 + 48.052\n= 1 + (33 / 60) + ((56.7 + 48.052) / (60 * 60))\n= 1 + 0.55 + (104.752 / 3 600)\n≈ 1.55 + 0.029\n= 1.579\nTotal distance driven by Sainz (in km):\n= (Number of laps) * (Lap length)\n= 57 * 5.412\n≈ 308.5\nAverage speed = Total distance/ Total time \nThe average speed of Carlos Sainz’s car for the \ncomplete race (in km/h):\n= 308.5 / 1.579\n≈ 309 / 1.58\n≈ 195.6\nOption C is close enough to our approximate solu-\ntion to be correct.\nPotential Shortcuts / Pitfalls\nThe margin of victory in the race is measured in \nseconds, so the average speeds of the cars are very \nclose together. Options B, C and D all present a real-\nistic set of speeds for such a race so in this case you \nhave to do the calculations. In fact, option B is the \naverage speed of the contestant in 10th place while \noption D gives the average speed of the winner."
    },
    {
      "id": "baneth24_ch6_s28_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 28 Q2",
      "set_id": "baneth24_ch6_set28",
      "figures": [
        "images/baneth24_ch6_set28_fig1.png"
      ],
      "question": "Assuming that the combined average speed of 2 cars is the ratio of the sum of the distan driven by both cars and the sum of the time taken by both cars, how much slower (in km/h) were the 2 Aston Martin Aramco Mercedes cars than the 2 Red Bull Racing Honda RBPT cars in the race? km z’s ce",
      "options": [
        {
          "letter": "A",
          "text": "0.40"
        },
        {
          "letter": "B",
          "text": "1.41"
        },
        {
          "letter": "C",
          "text": "2.51"
        },
        {
          "letter": "D",
          "text": "2.82"
        },
        {
          "letter": "E",
          "text": "3.14"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must determine the total times taken by each \npair of cars. We must then find the average speed of \neach pair and find the difference.\nCalculation\nTotal time taken by the 2 Aston Martin Aramco \nMercedes cars (in hours):\n= 2 * (Winner’s time) + (Alonso’s additional time) + \n(Stroll’s additional time)\n= 2 * (1:33:56.7) + ((38.637 + 54.502) / 3 600)\n= 2 * (1 + (33 / 60) + (56.7 / 3 600)) + (93.139 / 3 600)\n≈ 2 * (1.566) + 0.026\n= 3.132 + 0.029\n= 3.16\nTotal time taken by the 2 Red Bull Racing Honda \nRBPT cars (in hours):\n= 2 * (Winner’s time) + (Perez’s additional time)\n= 2 * (1:33:56.7) + (11.987 / 3 600)\n≈ 2 * (1.566) + 0.003\n= 3.132 + 0.003\n= 3.135\nCombined average speed:\n= Total distance covered by both cars / Total time taken \nby both cars\nCombined average speed of the 2 Aston Martin \n\n233\nnumerical reasoning mixed questions test\nAramco Mercedes cars (in km/h):\n= (308.5 * 2) / 3.16\n= 617 / 3.16\n≈ 195.25\nCombined average speed of the 2 Red Bull Racing \nHonda RBPT cars (in km/h):\n= 617 / 3.135\n≈ 196.81\nDifference between the combined average speeds (in \nkm/h):\n= 196.81 – 195.25\n= 1.56\nOption B is the closest in value to our approximate \nsolution.\nPotential Shortcuts / Pitfalls\nThe margins are quite slim so you can approximate \nonly slightly. Options A and C give the difference \nin the average speeds of Verstappen with Perez and \nBottas respectively. Option D is equal to twice the \ndifference in combined speeds of the 2 pairs of cars. \nGiven that the average difference in speeds is very \nsmall, around 1.5 km/h, we should expect nothing \nextraordinary from the difference in combined \naverage speeds. Option B is the obvious candidate \nfor a guess."
    },
    {
      "id": "baneth24_ch6_s28_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 28 Q3",
      "set_id": "baneth24_ch6_set28",
      "figures": [
        "images/baneth24_ch6_set28_fig1.png"
      ],
      "question": "George Russell’s fastest lap time was 1 minute and 37.22 seconds. What would have been his position had he constantly driven at 98% of that average speed throughout the race?",
      "options": [
        {
          "letter": "A",
          "text": "First"
        },
        {
          "letter": "B",
          "text": "Second"
        },
        {
          "letter": "C",
          "text": "Third"
        },
        {
          "letter": "D",
          "text": "Sixth"
        },
        {
          "letter": "E",
          "text": "Ninth"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must multiply Russell’s fastest lap time by the \nnumber of laps. Then we must calculate his average \nspeed for the race and multiply it by 98%. Finally, we \nneed to calculate his revised race completion time \nwith the new average speed to determine his posi-\ntion in the race.\nCalculation\nRace time (in hours) based on George Russell’s \nfastest lap time:\n= (57 * (1 * 60 + 37.22)) / 3 600\n= (57 * 97.22) / 3 600\n≈ 5 542 / 3 600\n≈ 1.539\nAverage speed = Total distance / Total time\nGeorge Russell’s average speed for the complete race \nbased on the fastest lap time (in km/h): = 308.5 / \n1.539 ≈ 200.45\nGeorge Russell’s average speed for the complete race \nbased on 98% of the fastest lap time (in km/h):\n= 200.45 * 98%\n≈ 196.45\nTotal time = Total distance / Average speed\nTotal time taken by George Russell to complete race \nat 98% of the average speed of his fastest lap time:\n= 308.5 / 196.45 = 1.570 hours\n= 1 hour + 0.57 * 60 minutes\n= 1 hour + 34 minutes + 0.2 * 60 seconds\n= 1 hour + 34 minutes + 12 seconds = 1:34:12\nAdditional time required by George Russell from \nwinner’s time:\n= 1:34:12 – 1:33:56.7 = 15.3 seconds\nGeorge Russell would have finished third had he \ndriven at 98% of the average speed of his fastest lap \nthroughout the race.\nPotential Shortcuts / Pitfalls\nThere quite a few consecutive calculations to do. \nHence, it is better not to make too many approxima-\ntions, especially in the earlier steps. As it turns out, \nour calculated time was comfortably in the big gap \nbetween the second and third placed contestants. \nAn alternative method could have been to divide \nthe race time based on the fastest lap time by 98%. \nThis would have given us the revised race time for \nRussell more quickly."
    },
    {
      "id": "baneth24_ch6_s29_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 29 Q1",
      "set_id": "baneth24_ch6_set29",
      "figures": [
        "images/baneth24_ch6_set29_fig1.png"
      ],
      "question": "In 2021, what was the highest percentage contribution by any product to the respective country’s total trade services?",
      "options": [
        {
          "letter": "A",
          "text": "18.7%"
        },
        {
          "letter": "B",
          "text": "21.4%"
        },
        {
          "letter": "C",
          "text": "38.0%"
        },
        {
          "letter": "D",
          "text": "43.9%"
        },
        {
          "letter": "E",
          "text": "49.7%"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must identify products with the highest turn-\nover share for the respective countries and find their \ncorresponding percentage contributions to the total \ntrade services rendered.\nCalculation\nComputer programming, consultancy and related \nactivities had the highest share of turnover in both \nFrance and Sweden in 2021.\n\n234\nnumerical reasoning mixed questions test\nShare in France:\n= (65 804 / 173 320) * 100%\n≈ (66 000 / 174 000) * 100%\n= ((22 * 3 000) / (58 * 3 000)) * 100%\n= (22 / 58) * 100%\n≈ 38%\nShare in Sweden:\n= (36 833 / 74 175) * 100%\n≈ (37 000 / 74 000) * 100%\n= (1/2) * 100%\n= 50%\nOption E is closest to our estimate. \nPotential Shortcuts / Pitfalls\nThis is a case where you can get to the answer just \nby looking at the table and doing some very simple \nrounding in your head. The computer program-\nming, consultancy and related activities category is \nclearly the biggest component for both France and \nSweden, but in France it is something above one-\nthird of the total (66 to 173) and in Sweden it is a half \n(37 to 74). You know therefore that the answer must \nbe the closest option to one-half, which is E."
    },
    {
      "id": "baneth24_ch6_s29_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 29 Q2",
      "set_id": "baneth24_ch6_set29",
      "figures": [
        "images/baneth24_ch6_set29_fig1.png"
      ],
      "question": "What would have been the additional turnover (in millions of euros) from Sweden’s software publishing trade services had it been equal in percentage contribution to software publishing trade services of France?",
      "options": [
        {
          "letter": "A",
          "text": "497"
        },
        {
          "letter": "B",
          "text": "1 036"
        },
        {
          "letter": "C",
          "text": "5 993"
        },
        {
          "letter": "D",
          "text": "8 507"
        },
        {
          "letter": "E",
          "text": "11 488"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must calculate the percentage contribution of \nsoftware publishing in France’s trade services. We \ncan then find the turnover in Sweden that would \nmake its software publishing equal in percentage \ncontribution to that of France. Finally, we can find \nthe additional turnover required.\nCalculation\nThe percentage contribution of software publishing \nin France’s total trade services:\n= (14 003 / 173 320) * 100%\n≈ (14 000 / 175 000) * 100%\n= ((2 * 7000) / (25 * 7 000)) * 100%\n= ((2 * 4) / (25 * 4)) * 100%\n= 8%\nTurnover equivalent to 8% of Sweden’s total trade \nservices (in millions of euros):\n= 74 175 * 8%\n≈ 74 000 * (8 / 100)\n= 740 * 8 \n= 5 920\nAdditional turnover required in software publishing \nby Sweden to equal the percentage contribution \nof software publishing trade services of France (in \nmillions of Euros):\n= 5 920 – 5 496\n= 424\nOption A is the closest in value. \nPotential Shortcuts / Pitfalls\nThe options have big gaps in values. Therefore, \napproximations can be made to determine a ball \npark figure for the solution. Although our solution \nis about 74 million euros off from option A, it is still \ncomfortably close enough for us to be confident.\nOption C shows the total turnover, as opposed to the \nadditional turnover, required to equal the percentage \ncontribution of software publishing in France. \nOption D simply shows the difference between the \nturnover amounts of software publishing in both \ncountries, without accounting for any percentages. \nThe value in option E is obtained by adding the \npercentages of software publishing in both countries \nand then calculating a figure using Sweden’s total \ntrade services."
    },
    {
      "id": "baneth24_ch6_s29_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 29 Q3",
      "set_id": "baneth24_ch6_set29",
      "figures": [
        "images/baneth24_ch6_set29_fig1.png"
      ],
      "question": "What would be the required additional percentage contribution from advertising if Sweden was to match France’s turnover of the same product in 2021 without altering the total amount of trade services?",
      "options": [
        {
          "letter": "A",
          "text": "2.6%"
        },
        {
          "letter": "B",
          "text": "4.5%"
        },
        {
          "letter": "C",
          "text": "7.1%"
        },
        {
          "letter": "D",
          "text": "12.1%"
        },
        {
          "letter": "E",
          "text": "16.6%"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must calculate the difference between the turno-\nvers from advertising in France and Sweden in 2021. \nWe must then convert this amount to a percentage of \nSweden’s total turnover of trade services. \nCalculation\nFrance’s turnover from advertising in 2021 was 12 \n340 million euros and Sweden’s was 3 374 million \neuros. \nThe difference between the turnovers: \n= 12 340 – 3 374\n≈ 9 000 \nAdditional percentage contribution required from \nadvertising in Sweden to match France’s turnover \nfrom advertising in 2021: \n\n235\nnumerical reasoning mixed questions test\n= (9 000 / 74 175) * 100%\n≈ (9 000 / 75 000) * 100%\n= ((3 * 3 000) / (25 * 3 000)) * 100%\n= (3 / 25) * 100%\n= ((3 * 4) / (25 * 4)) * 100%\n= 12%\nOption D is the closest in value. \nPotential Shortcuts / Pitfalls\nIt is very important to understand what you are \naiming to match. In this case, we are trying to match \nthe amounts and not the percentages. Options B and \nC give the current percentages of advertising in \nSweden and France respectively. Option A gives the \ndifference of these two percentages. Option E gives \nthe total percentage contribution of advertising in \nSweden after the change, not the additional."
    },
    {
      "id": "baneth24_ch6_s30_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 30 Q1",
      "set_id": "baneth24_ch6_set30",
      "figures": [
        "images/baneth24_ch6_set30_fig1.png"
      ],
      "question": "Based on the amounts provided in the table, which of the following equations is the correct representation of the salesman’s monthly take-home amount in terms of its components? (R = total take-home remuneration amount, M monthly basic salary amount, S = sales amount, C = commission percentage on sales, B bonus amount, T = tax-deduction percentage bef payment)",
      "options": [
        {
          "letter": "A",
          "text": "R = (M + (S * C)) * T"
        },
        {
          "letter": "B",
          "text": "R = (M + S + B) (100% – T)"
        },
        {
          "letter": "C",
          "text": "R = (M + C + B) (100% – T)"
        },
        {
          "letter": "D",
          "text": "R = M * (100% – T) + (S * C) + B"
        },
        {
          "letter": "E",
          "text": "R = (M + (S * C) + B) (100% – T) f the remuneration. M = = ore"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must construct an equation for the monthly \ntake-home amount of the salesman based on the \ncomponents of the remuneration shown in the table.\nCalculation\nThe total take-home amount of the salesman \ncomprises three main components: the basic salary \n(M), the sales commission amount and the bonus \namount (B). The sales commission amount is a \nproduct of the sales amount (S) and the sales commis-\nsion percentage (C). These three main components of \nthe total remuneration can be expressed as follows:\nM+ (S * C) + B\nA tax amount must, however, be deducted before \npayment to the salesman. That tax deduction is \nmade at T = 2%. It is applicable to all three main \ncomponents of the remuneration, i.e., the tax deduc-\ntion percentage must be multiplied with each one \nof them. The remaining portion, i.e., represented \nby (100% – T), of the remuneration is the take-home \namount. Therefore, the equation for the total take-\nhome remuneration amount is:\nR = (M + (S * C) + B) (100% – T)\nWe can verify our equation by substituting the data \nof January into it. \nSubstitute R=4 410, M=4 000, S=100 000, C=0.50%, \nB=0 and T=2% into the equation:\n4 410 = (4 000 + (100 000 * 0.50%) + 0) (100% – 2%)\n4 410 = (4 000 + 500) (98%)\n4 410 = 4 500 * 0.98\n4 410 = 4 410\nThe equation has been verified.\nPotential Shortcuts / Pitfalls\nYou can skip the step of verifying the equation if you \nare short of time and confident you have constructed \nthe equation correctly. However, it is essential to get \nthe equation right. A simple conceptual mistake at \nthis stage can result in you finding incorrect solu-\ntions to all three questions in this set. \nAs noted in the question, the tax deduction will be \nmade on all components of the renumeration. Hence, \nthe tax deduction factor must be multiplied with \neach component. Option A gives the tax deduction \namount, not the take-home amount. Options B and \nC use the sales amount and the sales commission \npercentage as the sales commission amount respec-\ntively. In option D, the tax deduction percentage is \napplied to the basic monthly salary only, which is \nincorrect."
    },
    {
      "id": "baneth24_ch6_s30_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 30 Q2",
      "set_id": "baneth24_ch6_set30",
      "figures": [
        "images/baneth24_ch6_set30_fig1.png"
      ],
      "question": "What was the sales commission percentage in April?",
      "options": [
        {
          "letter": "A",
          "text": "0.22%"
        },
        {
          "letter": "B",
          "text": "0.40%"
        },
        {
          "letter": "C",
          "text": "0.45%"
        },
        {
          "letter": "D",
          "text": "0.50%"
        },
        {
          "letter": "E",
          "text": "4.50%"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nUse the equation established earlier and substi-\ntute the given values to compute the commission \npercentage in April.\nCalculation\nSubstitute R=5 100.90, M=4 300, S=90 000, B=500 and \nT=2% into the equation and solve for C.\nR = (M + (S * C) + B) (100% - T)\n5 100.90 = (4 300 + (90 000 * C) + 500) (100% - 2%)\n5 100.90 = (4 800 + (90 000 * C)) (98%)\n4 800 + (90 000 * C) = 5 100.90 / 98%\n4 800 + (90 000 * C) = 5 100.90 / (98 / 100)\n4 800 + (90 000 * C) = 5 100.90 * (100 / 98)\n4 800 + (90 000 * C) = 5 205\n90 000 * C = 5 205 – 4 800\n90 000 * C = 405\nC = 405 / 90 000\nC = 0.0045 * 100%\nC = 4.5%\n\n236\nnumerical reasoning mixed questions test\nPotential Shortcuts / Pitfalls\nThe figure for the sales commission is not given, but \nthat need not be a problem. The commission amount is \nnot a variable in our equation. In fact, the sales amount \nand the commission percentage are multiplied to get \nthe commission amount right inside the equation.\nA guess can be verified by plugging in all known \nvalues along with the guess into the equation to \ncheck if it is satisfied. Option A is half of the correct \npercentage while option E is ten times the correct \nsolution."
    },
    {
      "id": "baneth24_ch6_s30_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 30 Q3",
      "set_id": "baneth24_ch6_set30",
      "figures": [
        "images/baneth24_ch6_set30_fig1.png"
      ],
      "question": "What was the sales amount in June (in euros)?",
      "options": [
        {
          "letter": "A",
          "text": "115 000"
        },
        {
          "letter": "B",
          "text": "120 000"
        },
        {
          "letter": "C",
          "text": "125 000"
        },
        {
          "letter": "D",
          "text": "130 000"
        },
        {
          "letter": "E",
          "text": "135 000"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nFirst, we must re-engineer the earlier equation. We \nhave to make the tax deduction amount the subject \nof the equation instead of the take-home amount. \nWe can then use the new equation and substitute the \ngiven values to compute the sales amount in June.\nCalculation\nTax deduction amount:\n= (M + (S * C) + B) * T\nSubstitute (Tax deduction amount) = 117.60, M=4 \n300, C=0.60%, B=800 and T=2% into the equation \nand solve for S.\n117.60 = (4 300 + (S * 0.60%) + 800) * 2%\n117.60 = (5 100 + (0.006 * S)) * 2%\n5 100 + (0.006 * S) = 117.60 / 2%\n5 100 + (0.006 * S) = 5 880\n0.006 * S = 5 880 – 5 100\n0.006 * S = 780\nS = 780 / 0.006\nS = 130 000\nPotential Shortcuts / Pitfalls\nWe were not provided with the take-home amount \nbut did not need it. We only needed to make a slight \nadjustment to our equation to use the values we do \nhave.\nThe algebraic manipulation of the values in the equa-\ntion must be carried out meticulously. However, you \ncan choose to approximate values to some extent \nsince each of the given options is 5 000 apart. As \nmentioned before, a guess can be verified by plug-\nging in all known values along with the guess into \nthe equation to check if it is satisfied."
    },
    {
      "id": "baneth24_ch6_s31_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 31 Q1",
      "set_id": "baneth24_ch6_set31",
      "figures": [
        "images/baneth24_ch6_set31_fig1.png",
        "images/baneth24_ch6_set31_fig2.png"
      ],
      "question": "How many Japanese yen would one get in exchange for 450 Czech koruna in 2022?",
      "options": [
        {
          "letter": "A",
          "text": "7.54"
        },
        {
          "letter": "B",
          "text": "80.09"
        },
        {
          "letter": "C",
          "text": "2 292.98"
        },
        {
          "letter": "D",
          "text": "2 528.43"
        },
        {
          "letter": "E",
          "text": "1 525 880"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must use the given exchange rate to convert 450 \nCzech koruna into the equivalent amount of euros \nand then convert those euros into an equivalent \nnumber of Japanese yen based on the rate mentioned.\nCalculation\nThe exchange rate for Czech koruna versus euro in \n2022 was:\nAmount of Czech koruna / Equivalent amount of euros\n= 24.566 ≈ 25\nEquivalent amount of euros = 450 / 25 = 18\nThe exchange rate for Japanese yen versus Euro in \n2022 was:\nAmount of Japanese yen / Equivalent amount of euros\n= 138.03 ≈ 140\nAmount of Japanese yen: = 140 * 18 = 2 520\nOption D is closest in value to our estimate.\nPotential Shortcuts / Pitfalls\nOptions A and B result from algebraic mistakes. \nOption E multiplies all numbers involved and \noption C uses the rates for 2014."
    },
    {
      "id": "baneth24_ch6_s31_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 31 Q2",
      "set_id": "baneth24_ch6_set31",
      "figures": [
        "images/baneth24_ch6_set31_fig1.png",
        "images/baneth24_ch6_set31_fig2.png"
      ],
      "question": "What was the sales commission percentage in April?",
      "options": [
        {
          "letter": "A",
          "text": "0.22%"
        },
        {
          "letter": "B",
          "text": "0.40%"
        },
        {
          "letter": "C",
          "text": "0.45%"
        },
        {
          "letter": "D",
          "text": "0.50%"
        },
        {
          "letter": "E",
          "text": "4.50%"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must first use the exchange rate for 2014 to \nconvert 1 000 euros into the equivalent amount in \npounds sterling. Then we will convert those pounds \nsterling into an equivalent amount of Canadian \ndollars at the rates given for 2018.\nCalculation\nThe exchange rate for pound sterling versus euro in \n2014 was:\nAmount of pound sterling / Equivalent amount of \neuros\n= 0.80612 ≈ 0.806\nAmount of pound sterling\n= 1 000 * 0.806 = 806\n\n237\nnumerical reasoning mixed questions test\nThe exchange rate for Pound sterling versus euro in \n2018 was:\nAmount of pound sterling / Equivalent amount of \neuros\n= 0.88471 ≈ 0.885\nEquivalent amount of euros:\n806 / 0.885 ≈ 800 / 0.9 ≈ 890\nThe exchange rate for the Canadian dollar versus the \neuro in 2018 was:\nAmount of Canadian dollars / Equivalent amount of \neuros\n= 1.5294 ≈ 1.5\nAmount of Canadian dollars: = 890 * 1.5 = 1 335 \nOption D is closest in value to our estimate. \nPotential Shortcuts / Pitfalls\nA shortcut method:\n1 000 * 0.80612 * (1.5294 / 0.88471) = 1 393.54"
    },
    {
      "id": "baneth24_ch6_s31_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 31 Q3",
      "set_id": "baneth24_ch6_set31",
      "figures": [
        "images/baneth24_ch6_set31_fig1.png",
        "images/baneth24_ch6_set31_fig2.png"
      ],
      "question": "What was the sales amount in June (in euros)?",
      "options": [
        {
          "letter": "A",
          "text": "115 000"
        },
        {
          "letter": "B",
          "text": "120 000"
        },
        {
          "letter": "C",
          "text": "125 000"
        },
        {
          "letter": "D",
          "text": "130 000"
        },
        {
          "letter": "E",
          "text": "135 000"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must use the charged fee amount and the fee \nrate to evaluate the equivalent sum of the euros \namounts in both transactions. We can then calcu-\nlate the amount of Bulgarian lev the customer had \nto begin with. \nCalculation\nTwo exchange transactions were carried out by the \ndealer. One from Bulgarian lev to euros and then the \nother from euros to Romanian leu.\nThe fee (in euros) for each transaction must therefore \nbe:\n25.56 / 2 = 12.78\nWe know that:\nDealer fees amount:\n= Fee percentage * Equivalent amount of euros\n= 12.78 = 0.5% * Equivalent amount of euros\nEquivalent amount of euros:\n= 12.78 / 0.5% = 2 556\nThe exchange rate for Bulgarian lev versus euro in \n2018 was:\nAmount of Bulgarian lev / Equivalent amount of euros\n= 1.9558 ≈ 1.96\nAmount of Bulgarian lev: = 2 556 * 1.96 ≈ 5009\nOur estimate is closest to option C. \nPotential Shortcuts / Pitfalls\nYou must be careful to read the data for the relevant \ncurrency and year. In this question, the exchange \nrate for the Romanian leu is irrelevant. Option E \nprovides the equivalent amount of the Romanian leu \nin 2018. Options C and D are pretty close together in \nvalue. Hence, over-approximation might result in a \nvalue that is closer to the incorrect option.\nA simple shortcut is to divide the value in the guessed \noption by the exchange rate for the Bulgarian lev \nin 2018 and then apply the 0.5% transaction fee to \nverify the option."
    },
    {
      "id": "baneth24_ch6_s32_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 32 Q1",
      "set_id": "baneth24_ch6_set32",
      "figures": [
        "images/baneth24_ch6_set32_fig1.png"
      ],
      "question": "What was the percentage change in road traffic in the Netherlands from 2019 to 2021?",
      "options": [
        {
          "letter": "A",
          "text": "–14.3%"
        },
        {
          "letter": "B",
          "text": "–12.5%"
        },
        {
          "letter": "C",
          "text": "– 8.8%"
        },
        {
          "letter": "D",
          "text": "–4.8%"
        },
        {
          "letter": "E",
          "text": "–0.8%"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must calculate the percentage change in road \ntraffic in the Netherlands in 2021 relative to 2019.\nCalculation\nRoad traffic (in VKM) in the Netherlands in 2019 \nwas 140 709.\nRoad traffic (in VKM) in the Netherlands in 2021 was \n123 105.\nThe percentage change in road traffic in the \nNetherlands from 2019 to 2021:\n= ((123 105 – 140 709) / 140 709) * 100%\n≈ ((122 500 – 140 000) / 140 000) * 100%\n= (–17 500 / 140 000) * 100%\n= (– 1 /8) * 100%\n= –12.5%\nOption B matches our estimate.\nPotential Shortcuts / Pitfalls\nThis was a fairly straightforward question but as \nalways you must be careful to use the correct data. \nUsing the incorrect year may result in a solution \nlike option E (relative to 2020). In option A, the \npercentage change was found relative to the value \nof 2021.\n\n238\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s32_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 32 Q2",
      "set_id": "baneth24_ch6_set32",
      "figures": [
        "images/baneth24_ch6_set32_fig1.png"
      ],
      "question": "Given that approximately 92.5% of the road traffic in France was from vehicles registered in the country, what was the change in road traffic owing to vehicles registered elsewhere from 2020 to 2021 (in VKM)?",
      "options": [
        {
          "letter": "A",
          "text": "–50 351"
        },
        {
          "letter": "B",
          "text": "–4 082"
        },
        {
          "letter": "C",
          "text": "2 828"
        },
        {
          "letter": "D",
          "text": "34 885"
        },
        {
          "letter": "E",
          "text": "37 713"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must determine the percentage of road traffic \nfrom vehicles not registered in France. We can then \nuse this percentage to determine the road traffic (in \nVKM) in 2020 and 2021 from vehicles not registered \nin France.\nCalculation\nThe percentage of road traffic from vehicles not \nregistered in France: \n= 100% – (Percentage of road traffic from vehicles not \nregistered in France)\n= 100% – 92.5%\n= 7.5%\nChange in road traffic (in VKM) from 2020 to 2021 \nowing to vehicles not registered in France:\n= ((Road traffic in France in 2021) – (Road traffic in \nFrance in 2020)) * 7.5% \n= (562 267 – 524 554) * 7.5%\n≈ 38 000 * 7.5%\n= 38 000 * 1% * 7 + 38 000 * 0.5%\n= 380 * 7 + 190\n= 2 660 + 190\n= +2 850\nOption C is clearly the closest in value. \nPotential Shortcuts / Pitfalls\nYou can get to this answer simply by thinking about \nthe information you are given. The table tells us \nthat road traffic increased from 2020 to 2021, which \nimmediately rules out answer options A and B, \nwhich require a decrease. You can also see that the \nincrease was approximately (562 000 – 525 000) = \n37 000. However, the question text tells us that of \nthis 37 000 increase only 7.5% was due to vehicles \nregistered elsewhere, so it is obvious that D (nearly \n35 000) and E (nearly 38 000) cannot be right either. \nOnly C is left.\nOptions A and B give the changes in road traffic due \nto vehicles registered in the country and outside \nthe country respectively from 2019 to 2021. Option \nD gives the change in road traffic from 2020 to 2021 \nowing to vehicles registered in France. Option E \nsimply states the change in all road traffic in France \nfrom 2020 to 2021."
    },
    {
      "id": "baneth24_ch6_s32_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 32 Q3",
      "set_id": "baneth24_ch6_set32",
      "figures": [
        "images/baneth24_ch6_set32_fig1.png"
      ],
      "question": "The share of all road traffic in Spain due to lorries increased by 1.5% from 2019 to 2020. Given that road traffic due to lorries in 2020 was 22 410 VKM, what was the road traffic in Spain in 2019 due to all vehicles other than lorries (in VKM)?",
      "options": [
        {
          "letter": "A",
          "text": "22 079"
        },
        {
          "letter": "B",
          "text": "25 084"
        },
        {
          "letter": "C",
          "text": "173 277"
        },
        {
          "letter": "D",
          "text": "226 971"
        },
        {
          "letter": "E",
          "text": "229 976"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must first work out the percentage of road traffic \nin Spain due to lorries in 2020. We can then deter-\nmine the percentage of road traffic in Spain due to \nlorries in 2019 by using the given percentage change. \nFinally, by using the percentage of road traffic not \ncaused by lorries in 2019, we can calculate the road \ntraffic in Spain in 2019 due to all vehicles other than \nlorries (in VKM).\nCalculation\nThe percentage of road traffic in Spain due to lorries \nin 2020:\n= (22 410 / 195 687) * 100%\n≈ 11.5%\nThe percentage of road traffic in Spain due to lorries \nin 2019:\n= 11.5% – 1.5% = 10%\nThe percentage of road traffic in Spain not due to \nlorries in 2019:\n= 100% – 10% = 90%\nRoad traffic in Spain not due to lorries in 2019 (in \nVKM):\n= 252 055 * 90%\n≈ 250 000 * 90%\n= 225 000\nOption D is the closest in value to our approximate \nsolution. Hence, it is probably correct.\nPotential Shortcuts / Pitfalls\nApproximating made the calculation a bit quicker, \nthough not without some risk as answer options \nD and E are close together. Under test conditions \njudging when, and when not, to approximate can \noften be the critical first step in finding the correct \nanswer."
    },
    {
      "id": "baneth24_ch6_s33_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 33 Q1",
      "set_id": "baneth24_ch6_set33",
      "figures": [
        "images/baneth24_ch6_set33_fig1.png",
        "images/baneth24_ch6_set33_fig2.png",
        "images/baneth24_ch6_set33_fig3.png"
      ],
      "question": "What share of the pets in the European Union in 2022 did the cats in France and Ita account for?",
      "options": [
        {
          "letter": "A",
          "text": "4.8%"
        },
        {
          "letter": "B",
          "text": "7.0%"
        },
        {
          "letter": "C",
          "text": "7.7%"
        },
        {
          "letter": "D",
          "text": "11.8%"
        },
        {
          "letter": "E",
          "text": "32.2%"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nThe number of cats in France and Italy in 2022 must be \nadded together and then divided by the total number of \npets in the EU in 2022 to find the required percentage.\n\n239\nnumerical reasoning mixed questions test\nCalculation\nTotal number of cats in France and Italy in 2022 (in \nmillions):\n= 14.90 + 10.23\n= 25.13\nThe total number of pets in the EU in 2022 (in thou-\nsands) was 213 363.\nPercentage share of cats in France and Italy in the \ntotal number of pets in the EU in 2022:\n= ((25.13 * 1 000 000) / (213 363 * 1 000)) * 100%\n= (25 130 / 213 363) * 100%\n≈ 11.8%\nPotential Shortcuts / Pitfalls\nThe total number of cats in France and Italy is \nroughly 15 + 10 = 25 million while the total number \nof pets in the EU is almost 215 million. That is \nslightly more than 10% and hence option D is the \nobvious candidate if you need to make a guess. \nOptions A, B, C and E are the result of incorrect selec-\ntions of types of pet and countries."
    },
    {
      "id": "baneth24_ch6_s33_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 33 Q2",
      "set_id": "baneth24_ch6_set33",
      "figures": [
        "images/baneth24_ch6_set33_fig1.png",
        "images/baneth24_ch6_set33_fig2.png",
        "images/baneth24_ch6_set33_fig3.png"
      ],
      "question": "Given that the Netherlands had 2.3% of all cats and dogs in the European Union in 2022, how many dogs (in thousands) did the Netherlands have in 2022?",
      "options": [
        {
          "letter": "A",
          "text": "1.4"
        },
        {
          "letter": "B",
          "text": "3.0"
        },
        {
          "letter": "C",
          "text": "1 430"
        },
        {
          "letter": "D",
          "text": "1 900"
        },
        {
          "letter": "E",
          "text": "3 007"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must use the given percentage to calculate the \nsum of cats and dogs in the Netherland in 2022. We \ncan then subtract the given number of cats in the \nNetherlands to determine the number of dogs in the \nNetherlands in 2022.\nCalculation\nLet N, be the sum of cats and dogs in the Netherlands \nin 2022 (in thousands).\nThe Netherlands had 2.3% of all cats and dogs in the \nEuropean Union in 2022:\n(N / (77 928 + 66 866)) * 100% = 2.3%\nN / (78000 + 67 000) ≈ 2.3% / 100%= 0.023\nN / 145 000 = 0.023\nN = 0.023 * 145 000\nN = 3 335\nNumber of dogs (in thousands) in the Netherlands \nin 2022:\n= 3 335 – 1.90 * 1 000\n= 3 335 – 1 900\n= 1 435\nOption C is the closest to our estimated value.\nPotential Shortcuts / Pitfalls\nYou must take care to read the data for cats and dogs \nin the EU and the number of cats in the Netherlands \nonly. Option B gives the solution for France in 2019. \nOptions B (in millions) and E (in thousands) provide \nthe solution based on the percentage of 2.3% relative \nto the total number of pets in the EU. Option A has \nan incorrect order of magnitude. Option D is simply \nthe number of cats, which is already known."
    },
    {
      "id": "baneth24_ch6_s33_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 33 Q3",
      "set_id": "baneth24_ch6_set33",
      "figures": [
        "images/baneth24_ch6_set33_fig1.png",
        "images/baneth24_ch6_set33_fig2.png",
        "images/baneth24_ch6_set33_fig3.png"
      ],
      "question": "Sales of pet food in the European Union generated a turnover of 29.1 billion euros in 2022. Assuming uniform consumption of pe food by every pet in the EU, how much pet food (in millions of euros) was consumed b pet dogs in Romania in 2022?",
      "options": [
        {
          "letter": "A",
          "text": "136.4"
        },
        {
          "letter": "B",
          "text": "571.9"
        },
        {
          "letter": "C",
          "text": "596.1"
        },
        {
          "letter": "D",
          "text": "6 940"
        },
        {
          "letter": "E",
          "text": "571 872"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must calculate the consumption of pet food by \nevery pet in the EU based on the given pet food \nturnover and multiply that with the number of dogs \nin Romania to evaluate the pet food (in millions of \neuros) consumed by pet dogs in Romania in 2022.\nCalculation\nConsumption of pet food by every pet in the EU (in \neuros):\n= (29.1 * 1 000 000 000) / (213 363 * 1 000)\n= 29 100 000 / 213 363\n≈ 136\nPet food (in millions of euros) consumed by pet dogs \nin Romania in 2022:\n= 136 * 4.19\n≈ 570\nOption C is closest in value to our estimate and \nhence is our best guess.\nPotential Shortcuts / Pitfalls\nThe orders of magnitude of every number are crucial \nto our solution. Option E provides the solution in \nthousands of euros. Option A is the consumption \nof pet food by every pet in the EU (given in euros). \nOption C uses the number of cats in Romania \ninstead of the number of dogs. Option D results \nfrom dividing the entire pet food turnover by the \nnumber of pet dogs in Romania.\nAlthough the assumption that each pet in the EU \nconsumes the same value of pet food may seem \nabsurd, you must always stick to the information \ngiven in the question.\n\n240\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s34_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 34 Q1",
      "set_id": "baneth24_ch6_set34",
      "figures": [
        "images/baneth24_ch6_set34_fig1.png",
        "images/baneth24_ch6_set34_fig2.png"
      ],
      "question": "Which of the following cities had the lowest total income in 2021?",
      "options": [
        {
          "letter": "A",
          "text": "El Paso, Texas"
        },
        {
          "letter": "B",
          "text": "Jacksonville, Florida"
        },
        {
          "letter": "C",
          "text": "Las Vegas, Nevada"
        },
        {
          "letter": "D",
          "text": "New York, New York"
        },
        {
          "letter": "E",
          "text": "Philadelphia, Pennsylvania"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must estimate the total incomes of each of the \ngiven five U.S. cities to determine which of them has \nthe lowest total income.\nCalculation\nPer capita income (in U.S. dollars):\n= (Total income, in thousands of U.S. dollars) / \n(Resident population, in thousands)\nTotal income, in thousands of U.S. dollars:\n= Per capita income (in U.S. dollars) * (Resident \npopulation, in thousands)\nTotal income (in thousands of U.S. dollars) in 2022:\nEl Paso: 678.42 * 25 670 ≈ 700 * 26 000 = 18 200 000\nJacksonville: 954.61 * 32 953 ≈ 1 000 * 33 000 = 33 000 \n000\nLas Vegas: 646.79 * 33 825 ≈ 650 * 34 000 = 22 100 000\nNew York: 8 467.51 * 42 406 ≈ 8 500 * 42 000 = 357 000 \n000\nPhiladelphia: 1 576.25 * 32 707 ≈ 1 600 * 33 000 = 52 \n800 000\nTherefore, El Paso had the lowest total income in \n2022.\nPotential Shortcuts / Pitfalls\nIt’s important in a question like this not to get \ndistracted by irrelevant data. There are 15 cities in \nthe table but only five of them are relevant to the \nquestion.\nAbove we have the full calculations for each of the \nfive cities. However, you can get to the answer just \nby thinking about the information in the table. The \nper capita income column tells you that El Paso has \nthe lowest per capita income. The resident popula-\ntion column shows that only Las Vegas has a smaller \npopulation than El Paso, but the difference in popu-\nlation between the two is very small whereas the \ndifference in per capita income is large. The answer \nmust be El Paso."
    },
    {
      "id": "baneth24_ch6_s34_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 34 Q2",
      "set_id": "baneth24_ch6_set34",
      "figures": [
        "images/baneth24_ch6_set34_fig1.png",
        "images/baneth24_ch6_set34_fig2.png"
      ],
      "question": "Given that the total income of Los Angeles was U.S. dollars 35.5 billion more than that of Chicago in 2021, what was the per capita income of Los Angeles in 2021 (in U.S. dollars)?",
      "options": [
        {
          "letter": "A",
          "text": "9 222"
        },
        {
          "letter": "B",
          "text": "21 053"
        },
        {
          "letter": "C",
          "text": "38 493"
        },
        {
          "letter": "D",
          "text": "39 498"
        },
        {
          "letter": "E",
          "text": "56 383"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nFirst, we must calculate the total income for Chicago \nin 2021. Then, by using the mentioned difference we \ncan evaluate the total income of Los Angeles. Finally, \nby using the per capita formula, we can calculate the \nper capita income of Los Angeles.\nCalculation\nTotal income, in thousands of U.S. dollars:\n= Per capita income (in U.S. dollars) * (Resident \npopulation, in thousands)\nTotal income of Chicago in 2021 (in thousands of U.S. \ndollars):\n= 2 696.56 * 43 217\n≈ 2 700 * 43 000\n= 116 100 000\nTotal income of Los Angeles in 2021 (in billions of \nU.S. dollars):\n= 116.1 + 35.5\n= 151.6\nPer capita income (in U.S. dollars):\n= (Total income, in thousands of U.S. dollars) / \n(Resident population, in thousands)\nPer capita income of Los Angeles in 2021 (in U.S. \ndollars):\n= (151.6 * 1 000 000 000) / (3 849.30 * 1 000)\n≈ 151 600 000 / 3 800\n≈ 39 900\nBased on our estimate, option D is the correct answer.\nPotential Shortcuts / Pitfalls\nIt is essential to keep track of the order of magni-\ntudes in every step of the calculation. We must also \nbe careful to read the data for Chicago and Los \nAngeles only. If by mistake the difference in total \nincomes is treated as the total income of Los Angeles, \nyour solution will equal option A. If 35.5 billion U.S. \ndollars is subtracted from Chicago’s total income, \ninstead of being added, your solution will match \noption B. Option E, results when the total income of \nLos Angeles is divided by Chicago’s population. \n\n241\nnumerical reasoning mixed questions test\nOption C is close to the correct answer option D, so \nmay look tempting for a guess. However, you might \nnotice that it is simply Los Angeles’ population \nstated in hundreds."
    },
    {
      "id": "baneth24_ch6_s34_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 34 Q3",
      "set_id": "baneth24_ch6_set34",
      "figures": [
        "images/baneth24_ch6_set34_fig1.png",
        "images/baneth24_ch6_set34_fig2.png"
      ],
      "question": "Given that the total income of Houston was between those of Chicago and San Francisco, what was the resident population (in thousands) of Houston in 2021?",
      "options": [
        {
          "letter": "A",
          "text": "1 689"
        },
        {
          "letter": "B",
          "text": "1 916"
        },
        {
          "letter": "C",
          "text": "2 288"
        },
        {
          "letter": "D",
          "text": "2 345"
        },
        {
          "letter": "E",
          "text": "Cannot be determined with the given information"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must calculate the range of the total income of \nHouston to check if the resident population can be \nevaluated by using the per capita income.\nCalculation\nResident population = Total income / Per capita \nincome\nFor us to exactly calculate any one of the three vari-\nables in this formula, we must know the exact values \nof the other two. We do know the exact value for the \nper capita income for Houston, but we only know \na range for the total income, i.e., that it is between \nthose of Chicago and San Francisco. Therefore, it is \nimpossible to determine the exact value for Houston’s \nresident population. However, we will try to narrow \ndown the options by using the range of total income \nto find the range of resident population.\nThe resident population upper limit of Houston by \nusing the total income of Chicago (in thousands):\n= (2 696.56 * 43 217) / 36 265\n≈ (2 700 * 43 000) / 36 000\n= 3 225\nThe resident population lower limit of Houston \nby using the total income of San Francisco (in \nthousands):\n= (815.20 * 80 383) / 36 265\n≈ (800 * 80 000) / 36 000\n= 1 775\nOptions B, C and D all fall in the approximate range \nof population of Houston. Therefore, we cannot \nselect any one of them and Option E must be the \ncorrect answer.\nPotential Shortcuts / Pitfalls\nEven if we had found only one match in the range of \npopulation of Houston, we still could not say with \ncertainty that it is the correct solution. You have to \nknow the exact total income and the exact per capita \nincome to find the exact population of Houston. \nOption C is the actual population of Houston, but it is \nnot possible to determine it using the given informa-\ntion. Options A, B and D are just random numbers."
    },
    {
      "id": "baneth24_ch6_s35_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 35 Q1",
      "set_id": "baneth24_ch6_set35",
      "figures": [
        "images/baneth24_ch6_set35_fig1.png"
      ],
      "question": "Which of these countries had the second- largest increase in the balance of payments in international trade in services with EU27 countries from 2020 to 2022?",
      "options": [
        {
          "letter": "A",
          "text": "Bulgaria"
        },
        {
          "letter": "B",
          "text": "Finland"
        },
        {
          "letter": "C",
          "text": "Germany"
        },
        {
          "letter": "D",
          "text": "Poland"
        },
        {
          "letter": "E",
          "text": "Serbia"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nWe must determine the change in each coun-\ntry’s balance of payments in international trade in \nservices with EU27 countries from 2020 to 2022 to \nfind which country had the second-largest increase.\nCalculation\nWe must subtract the balance of payment figures of \n2020 (with EU27 countries) from those of 2022 (with \nEU27 countries) to evaluate the change.\nBulgaria: \n= 2 295 – 1 802 ≈ 2 300 – 1 800 = 500\nFinland:\n= –9 747 – (–6 276) ≈ –9 750 + 6250 = –3 500\nGermany:\n= –58 130 – (–19 171) ≈ –58 000 + 19 000 = –39 000\nPoland:\n= 18 281 – 12 463 ≈ 18 000 – 12 500 = 5 500\nSerbia:\n= 505 – 232 ≈ 500 – 230 = 270\nAs per our approximate calculations, Bulgaria had \nthe second-largest increase.\nPotential Shortcuts / Pitfalls\nIt is very important to use the data for international \ntrade in services with EU27 countries in 2020 and \n2022 only. If data for Extra-EU27 countries is used \ninstead, our answer will change to Poland. If we use \nthe data for 2021 instead of 2022, our answer will \nmatch option E, i.e., Serbia. It is also important to \nremember in cases like Germany, when subtracting \nwith negative numbers, that the operator must \nchange to an addition sign, as shown above.\nYou don’t actually need to do all the calculations \nshown above. Look at the table. As we are looking \nfor an increase, i.e., a positive change, from 2020 to \n2022 Finland and Germany cannot possibly be right \nbecause their change was negative. The increase \nalone in Poland (from 12 463 to 18 281) was visibly \nbigger than the total for 2022 for both Bulgaria and \nSerbia, so Poland is clearly in first place. That leaves \nonly Bulgaria and Serbia to calculate. \n\n242\nnumerical reasoning mixed questions test"
    },
    {
      "id": "baneth24_ch6_s35_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 35 Q2",
      "set_id": "baneth24_ch6_set35",
      "figures": [
        "images/baneth24_ch6_set35_fig1.png"
      ],
      "question": "What was the overall change in the balance of payments in international trade in services for Germany from 2021 to 2022?",
      "options": [
        {
          "letter": "A",
          "text": "Imports grew 29.53 billion euros more than its exports"
        },
        {
          "letter": "B",
          "text": "Imports grew 27.12 billion euros more than its exports"
        },
        {
          "letter": "C",
          "text": "Imports grew 21.95 billion euros more than its exports"
        },
        {
          "letter": "D",
          "text": "Imports grew 5.17 billion euros more than its exports"
        },
        {
          "letter": "E",
          "text": "Exports grew 9.71 billion euros more than its imports"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe can calculate the overall change in the balance \nof payments in international trade in services for \nGermany from 2021 to 2022 by adding the figures \nfor both balance of payments in 2022 and then \nsubtracting the sum of both balance of payments \nfigures of 2020 from them.\nCalculation\nOverall balance of payments in international trade \nin services for Germany in 2022 (in millions of \neuros):\n= (Balance of payments in international trade in \nservices with EU27 countries) + (Balance of payments \nin international trade in services with Extra-EU27 \ncountries)\n= –58 130 + 31 321\n≈ – 58 000 + 31 000\n= –27 000\nOverall balance of payments in international trade in \nservices for Germany in 2021 (in millions of Euros):\n= (Balance of payments in international trade in \nservices with EU27 countries) + (Balance of payments \nin international trade in services with Extra-EU27 \ncountries)\n= –36 180 + 36 494 \n≈ –36 000 + 36 500\n= 500\nOverall change in the balance of payments in inter-\nnational trade in services for Germany from 2021 to \n2022 (in millions of euros):\n= – 27 000 – 500\n= – 27 500\nOption B is the closest in value. Hence, it is probably \ncorrect.\nPotential Shortcuts / Pitfalls\nIt is crucial to use the data for international trade \nin services for Germany with EU27 and Extra-EU27 \ncountries in 2021 and 2022 only. If data for 2020 is \nused instead of 2021, your solution would be the \nincorrect option A. Similarly, if you used just the \ndata for EU27 countries or for Extra-EU27 coun-\ntries your solutions would match options C and D \nrespectively. Option E uses the data for Poland."
    },
    {
      "id": "baneth24_ch6_s35_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 35 Q3",
      "set_id": "baneth24_ch6_set35",
      "figures": [
        "images/baneth24_ch6_set35_fig1.png"
      ],
      "question": "The sum of imports by Finland, Poland and Serbia in international trade in services from Extra-EU27 countries increased by 3 584 million euros from 2020 to 2021. What was the increase in the sum of exports by Finland, Poland and Serbia in international trade in services to Extra-EU27 countries from 2020 to 2021?",
      "options": [
        {
          "letter": "A",
          "text": "2 412 million euros"
        },
        {
          "letter": "B",
          "text": "5 573 million euros"
        },
        {
          "letter": "C",
          "text": "5 996 million euros"
        },
        {
          "letter": "D",
          "text": "8 619 million euros"
        },
        {
          "letter": "E",
          "text": "20 974 million euros"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nFirst, we must determine the change in the sum of \nbalance of payments of Finland, Poland and Serbia \nwith Extra-EU27 countries from 2020 to 2021. Then, \nwe must use the given change in the sum of imports \nby these countries from Extra-EU27 countries to find \nthe sum of change in the exports from these coun-\ntries to the Extra-EU27 countries from 2020 to 2021.\nCalculation\nThe sum of the balance of payments of Finland, \nPoland and Serbia with Extra-EU27 countries in \n2021 (in millions of euros):\n= 4 991 + 11 551 + 939\n≈ 5 000 + 11 500 + 950\n= 17 450\nThe sum of the balance of payments of Finland, \nPoland and Serbia with Extra-EU27 countries in 2020 \n(in millions of euros):\n= 3 706 + 10 493 + 870\n≈ 3 700 + 10 500 + 850\n= 15 050\nThe change in the sum of the balance of payments of \nFinland, Poland and Serbia with Extra-EU27 coun-\ntries from 2020 to 2021 (in millions of euros):\n= 17 450 – 15 050\n= 2 400\nWe know that: \nBalance of payments = Exports – Imports\nHence: Exports = Balance of payments + Imports\nThe increase in the sum of exports by Finland, \nPoland and Serbia in international trade in services \nto Extra-EU27 countries from 2020 to 2021 (in \nmillions of euros):\n= 2 400 + 3 584\n= 5 984\nOption C is therefore likely to be correct based on \nour approximate solution.\nPotential Shortcuts / Pitfalls\nYou have to be careful to rearrange the balance \nof payments equation correctly. You also must \nbe careful to read the data for 2020 and 2021 for \nFinland, Poland and Serbia only with Extra-EU27 \n\n243\nnumerical reasoning mixed questions test\ncountries. If you read the data for 2022 instead of \n2021, options D and E will match solutions for the \nchange in balance of payments and exports. Option \nA is simply the change in the balance of payments \nfrom 2020 to 2021. Option B gives the change in \nexports of the three countries to the EU27 countries \nfrom 2020 to 2021."
    },
    {
      "id": "baneth24_ch6_s36_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 36 Q1",
      "set_id": "baneth24_ch6_set36",
      "figures": [],
      "question": "What was the total distance travelled by Sunshine (in km)?",
      "options": [
        {
          "letter": "A",
          "text": "73.4"
        },
        {
          "letter": "B",
          "text": "136.0"
        },
        {
          "letter": "C",
          "text": "207.4"
        },
        {
          "letter": "D",
          "text": "251.9"
        },
        {
          "letter": "E",
          "text": "251 872"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must use the formula for average speed to calcu-\nlate the total distance travelled by Sunshine.\nCalculation\nAverage speed of Sunshine (in km/h):\n= 16 * 1.852\n≈ 30\nAverage speed = Total distance / Total time\nHence: Total distance = Average speed * Total time\nTotal distance travelled by Sunshine (in hours):\n= 30 * 8.5\n= 255\nOption D is close enough to our approximate solu-\ntion to be correct.\nPotential Shortcuts / Pitfalls\nThis is a fairly simple question. However, it is vital \nto change the given speed of Sunshine from knots \nto km/h because the solution is required in km. You \nmust also use the given time taken for Sunshine and \nnot for Moonlight or your solution will equal option \nC. The average speed formula must be re-arranged \nproperly, otherwise you might end up with option \nA. Option E gives the solution in meters, instead of \nkm."
    },
    {
      "id": "baneth24_ch6_s36_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 36 Q2",
      "set_id": "baneth24_ch6_set36",
      "figures": [],
      "question": "What was Moonlight’s average speed (in knots)?",
      "options": [
        {
          "letter": "A",
          "text": "17.5"
        },
        {
          "letter": "B",
          "text": "20.6"
        },
        {
          "letter": "C",
          "text": "25.0"
        },
        {
          "letter": "D",
          "text": "46.3"
        },
        {
          "letter": "E",
          "text": ""
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nFirst, we must compute the time taken by Moonlight \nand then use the distance and time to calculate the \naverage speed in km/h. We can then use the conver-\nsion factor to find the average speed in knots.\nCalculation\nTotal time taken by Moonlight (in hours):\n= 8.5 – 1.5\n= 7\nAverage speed = Total distance / Total time\nAverage speed of Moonlight (in km/h):\n= 324.1 / 7\n= 46.3\nAverage speed of Moonlight (in knots):\n= 46.3 / 1.852\n= 25\nPotential Shortcuts / Pitfalls\nThe correct use of the average speed formula is as \nimportant for this question as the conversion of \nunits. You must be careful not to add the 1.5 hours \nto the 8.5 hours of Sunshine or your solution will \nmatch option A. Option D gives the average speed \nof Moonlight in km/h. Option E gives the distance \nbetween port Best and port Crown in nautical miles."
    },
    {
      "id": "baneth24_ch6_s36_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 36 Q3",
      "set_id": "baneth24_ch6_set36",
      "figures": [],
      "question": "Both ships departed at the same time from port Crown to return to their respective ports of origin. On average, Moonlight travelled 5 knots faster than Sunshine. Given that Sunshine arrived back at port Ace at the same time as Moonlight reached port Best, what was the total time it took each of them?",
      "options": [
        {
          "letter": "A",
          "text": "7 hours, 48 minutes"
        },
        {
          "letter": "B",
          "text": "8 hours"
        },
        {
          "letter": "C",
          "text": "8 hours, 12 minutes"
        },
        {
          "letter": "D",
          "text": "8 hours, 28 minutes"
        },
        {
          "letter": "E",
          "text": "8 hours, 48 minutes"
        }
      ],
      "correct": "A",
      "explanation": "Reasoning\nUse the known distances from port Crown to port \nBest and to port Ace along with the speed and time \ndifferences to construct an equation in terms of the \ntime taken by Moonlight. Then, solve the equation.\nCalculation\nLet T, be the time taken by each of Sunshine and \nMoonlight to travel to port Ace and port Best respec-\ntively (in hours).\nAverage speed of Sunshine from port Crown to port \nAce (in km/h):\n= 251.9 / T\nAverage speed of Moonlight from port Crown to \nport Best (in km/h):\n= 324.1 / T\nThe difference in the average speeds of both ships \n(in km/h):\n= 5 * 1.852\n\n244\nnumerical reasoning mixed questions test\nEquation for the difference of average speeds of both \nships:\n(324.1 / T) – (251.9 / T) = 5 * 1.852\n(324.1 – 251.9) / T = 9.26\n72.2 / T = 9.26\nT = 72.2 / 9.26\nT ≈ 7 .796 hours\nT ≈ 7 hours, 48 minutes\nPotential Shortcuts / Pitfalls\nCorrect construction of the equation is key to this \nproblem. Since the option values are quite close \ntogether it is better in this case not to approximate \nany numbers unless absolutely necessary."
    },
    {
      "id": "baneth24_ch6_s37_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 37 Q1",
      "set_id": "baneth24_ch6_set37",
      "figures": [
        "images/baneth24_ch6_set37_fig1.png"
      ],
      "question": "On average, how many more smartphone mobile network subscriptions per smartpho sold were there in 2022 as compared to 2018",
      "options": [
        {
          "letter": "A",
          "text": "0.10"
        },
        {
          "letter": "B",
          "text": "1.45"
        },
        {
          "letter": "C",
          "text": "2.21"
        },
        {
          "letter": "D",
          "text": "3.15"
        },
        {
          "letter": "E",
          "text": "4.60"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must separately find the ratios of smartphone \nmobile network subscriptions per smartphone sold, \nfor 2018 and 2022. We can then subtract the two to \nfind the difference.\nCalculation\nSmartphone mobile network subscriptions per \nsmartphone sold in 2018:\n= 4 906.90 / 1 556.27\n≈ 4 950 / 1 500\n= (33 * 150) / (10 * 150)\n= 33 / 10\n≈ 3.3\nSmartphone mobile network subscriptions per \nsmartphone sold in 2022:\n= 6 421.78 / 1 395.25\n≈ 6 400 / 1 400\n= (32 * 200) / (7 * 200)\n= 32 / 7\n≈ 4.6\nDifference in smartphone mobile network subscrip-\ntions per smartphone sold in 2022 as compared to \n2018:\n= 4.6 – 3.3 \n= 1.3\nOption B is closest to our estimate.\nPotential Shortcuts / Pitfalls\nBoth the number of smartphone mobile network \nsubscriptions and the number of smartphones \nsold are given in millions. Hence, when we calcu-\nlate the ratio, the millions cancel each other out. It \nis important to calculate the ratio correctly. Option \nA gives the difference of the reciprocals (of what is \nrequired). Option C gives the difference of ratios for \n2022 and 2016. Options D and E give the values for \nthe ratios in 2018 and 2022 respectively."
    },
    {
      "id": "baneth24_ch6_s37_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 37 Q2",
      "set_id": "baneth24_ch6_set37",
      "figures": [
        "images/baneth24_ch6_set37_fig1.png"
      ],
      "question": "What was the forecast increase in monthly mobile data traffic due to smartphones sold 2023 relative to 2016 (in thousands of TB)? 1 TB = 1 000 GB",
      "options": [
        {
          "letter": "A",
          "text": "2 947"
        },
        {
          "letter": "B",
          "text": "19 279"
        },
        {
          "letter": "C",
          "text": "24 339"
        },
        {
          "letter": "D",
          "text": "27 286"
        },
        {
          "letter": "E",
          "text": "24 338 775"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must separately find monthly mobile data traffic \ndue to smartphones sold, in 2016 and 2022. We can \nthen subtract the two to find the increase.\nCalculation\nMobile data traffic due to smartphones sold in 2016 \n(in thousands of TB):\n= (1.97 * (1 495.96 * 1 000 000)) / (1 000 * 1 000)\n≈ 2 * 1 500\n= 3 000\nMobile data traffic due to smartphones sold in 2023 \n(in thousands of TB):\n= (20.37 * (1 339.51 * 1 000 000)) / (1 000 * 1 000)\n≈ 20 * 1 350\n= 27 000\nIncrease in mobile data traffic due to smartphones \nsold in 2023 as compared to 2016 (in thousands of \nTB):\n= 27 000 – 3 000 \n= 24 000\nOption C is the closest in value. Hence, it is probably \ncorrect.\nPotential Shortcuts / Pitfalls\nYou only need the mobile data traffic and smart-\nphones sold data for 2016 and 2023 for this question. \nYou must bear in mind that the number of smart-\nphones sold is given in millions and the mobile \ndata traffic ratio is per smartphone. Hence, you \nmust multiply the numerator by a million to get the \nfigures right. The value in option B was achieved by \nusing the data for 2022 instead of 2023. Options A \nand D provide the mobile data traffic due to smart-\nphones sold in 2016 and 2023 respectively.\nIf pressed for time, you can get close enough with \nsome very crude approximating in your head to find \nthe first two digits of the answer. For 2016 do 1.5 * 2 = \n\n245\nnumerical reasoning mixed questions test\n3. For 2023 do 1.3 * 20 = 26. Then you have 26 – 3 = 23, \nbut as both numbers for 2023 were rounded down, \nyou know the actual answer might quite likely start \nwith 24 not 23. However, both options C and E have \n24 as their first two digits and at this point you have \nto get the order of magnitude right. The conver-\nsion factor of a TB of data in terms of GB has been \nprovided and the solution is required in thousands of \nTB. If you miss this, and instead calculate in TB, your \nanswer will match option E."
    },
    {
      "id": "baneth24_ch6_s37_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 37 Q3",
      "set_id": "baneth24_ch6_set37",
      "figures": [
        "images/baneth24_ch6_set37_fig1.png"
      ],
      "question": "How many more, or less, smartphones are forecast to be sold worldwide in 2025 as compared to 2021 (in million units)?",
      "options": [
        {
          "letter": "A",
          "text": "–380"
        },
        {
          "letter": "B",
          "text": "–257"
        },
        {
          "letter": "C",
          "text": "–163"
        },
        {
          "letter": "D",
          "text": "1177"
        },
        {
          "letter": "E",
          "text": "Cannot say"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must first observe the pattern of change in the \nnumber of smartphones sold each year. We can then \ndetermine if there is a trend to enable us to extrapo-\nlate to forecast the number of smartphone sales in \n2025. If there is, we can then find the difference with \nthe figure for 2021.\nConsider the following regarding the number of \nsmartphones sold each year:\nFrom 2019 to 2020 there was a decrease of 189 million\nFrom 2020 to 2021 there was an increase of 82 million\nFrom 2021 to 2022 there was a decrease of 39 million\nFrom 2022 to 2023 there is a (forecast) decrease of 56 \nmillion \nThe numbers show great and seemingly random \nfluctuations. There is no other data provided to \nsupport a reliable interpretation or indicate any sort \nof pattern. We must conclude that the answer is E, \nCannot say.\nPotential Shortcuts / Pitfalls\nThe risk with this question is that you embark on \nall sorts of complicated calculations whereas there \nis no reliable way of producing a forecast. To do so, \nwould require additional information to explain the \napparently random pattern in recent years, and also \nforecasts of market trends for the future."
    },
    {
      "id": "baneth24_ch6_s38_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 38 Q1",
      "set_id": "baneth24_ch6_set38",
      "figures": [
        "images/baneth24_ch6_set38_fig1.png"
      ],
      "question": "What was the loan amount (principal amount plus accrued interest amount) on 31 December 2023 (in euros)?",
      "options": [
        {
          "letter": "A",
          "text": "10 155.00"
        },
        {
          "letter": "B",
          "text": "10 300.00"
        },
        {
          "letter": "C",
          "text": "10 600.00"
        },
        {
          "letter": "D",
          "text": "10 609.00"
        },
        {
          "letter": "E",
          "text": "10 927.27"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must use the given equation by substituting the \nprincipal amount, the annual interest rate and the \nnumber of years to find the future value of the loan \nafter 2 years.\nCalculation\nSubstitute P = 10 000, r = 3% and t = 2 into the given \nequation to evaluate A.\nA = P(1 + r)t\nA = 10 000 × (1 + 3%)2\nA = 10 000 × (1.03)2\nA = 10 000 × 1.0609\nA = 10 609\nPotential Shortcuts / Pitfalls\nThe number of years between the dates is two. If \nthe calculation is done for 3 years, the solution will \nmatch option E. Option B gives the solution for just \n1 year. \nYou can solve this question in your head. 3% of 10 \n000 is 300. Using simple interest, that comes to 600 in \ninterest for 2 years. Option C gives a solution (10 600) \nbased on simple interest. However, the information \nwe are given tells us that compound interest is charged. \nCompounding increases the interest amount slightly \nsince interest on the previous interest amount is also \ncharged. Hence, option D (10 609) should be the \nobvious choice."
    },
    {
      "id": "baneth24_ch6_s38_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 38 Q2",
      "set_id": "baneth24_ch6_set38",
      "figures": [
        "images/baneth24_ch6_set38_fig1.png"
      ],
      "question": "On which of the following dates will the future loan amount be equal to 11 592.74 euros?",
      "options": [
        {
          "letter": "A",
          "text": "31 December 2024"
        },
        {
          "letter": "B",
          "text": "31 December 2025"
        },
        {
          "letter": "C",
          "text": "31 December 2026"
        },
        {
          "letter": "D",
          "text": "31 December 2027"
        },
        {
          "letter": "E",
          "text": "31 December 2028"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must use the given equation by substituting \nthe given future value, the principal amount and \nthe annual interest rate to find the number of years \nand hence the date at which the loan value equals 11 \n592.74 euros.\nCalculation\nSubstitute A = 11 592.74, P = 10 000 and r = 3% into \nthe given equation to evaluate t.\nA = P(1 + r)t\n11 592.74 = 10 000 × (1 + 3%)t\n(1.03)t = (11 592.74) / (10 000)\n(1.03)t = 1.159274)\nWe can substitute values of t, according to the given \noptions to verify each one.\nFor 31 December 2024: t = 3\n(1.03)3 = 1.159274\n1.092727 ≠ 1.159274\n\n246\nnumerical reasoning mixed questions test\nFor 31 December 2025:t = 4\n(1.03)4 = 1.159274\n1.12550881 ≠ 1.159274\nFor 31 December 2026: t = 5\n(1.03)5 = 1.159274\n1.1592740743 ≈ 1.159274\nTherefore, 31 December 2026 is the date when the \nloan amount equals 11 592.74 euros.\nPotential Shortcuts / Pitfalls\nA good strategy would have been to start with the \ndate in the middle, i.e., option C, and then moved \ntowards option B or D depending on the resulting \nvalue. This would have cut down our calculating \ntime (and in this case produced the correct answer \nimmediately). \nIt is important to substitute values with great care \nand not make approximations because the difference \nbetween each value is just 3%."
    },
    {
      "id": "baneth24_ch6_s38_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 38 Q3",
      "set_id": "baneth24_ch6_set38",
      "figures": [
        "images/baneth24_ch6_set38_fig1.png"
      ],
      "question": "If Mr. Long is able to pay off the loan amount (principal amount plus accrued interest amount) by 31 December 2029, what would be his total savings in interest expense (in euros)?",
      "options": [
        {
          "letter": "A",
          "text": "0.00"
        },
        {
          "letter": "B",
          "text": "600.00"
        },
        {
          "letter": "C",
          "text": "609.00"
        },
        {
          "letter": "D",
          "text": "748.99"
        },
        {
          "letter": "E",
          "text": "771.46"
        }
      ],
      "correct": "E",
      "explanation": "Reasoning\nWe must use the given equation by substituting the \nprincipal amount, the annual interest rate and the \nnumber of years to find the future value of the loan \nafter 8 years and then after 10 years. We can then \nfind the difference of the two values to determine \nthe total savings.\nCalculation\nFuture loan value on 31 December 2029, i.e., after 8 \nyears:\nSubstitute P = 10 000, r = 3% and t = 8 into the given \nequation to evaluate A8.\nA8 = P(1 + r)t\nA8 = 10 000 × (1 + 3%)8\nA8 = 10 000 × (1.03)8\nA8 ≈ 10 000 × 1.266770\nA8 = 12 667.70\nFuture loan value on 31 December 2031, i.e., after 10 \nyears:\nSubstitute P = 10 000, r = 3% and t = 10 into the given \nequation to evaluate A10.\nA10 = P(1 + r)t\nA10 = 10 000 × (1 + 3%)10\nA10 = 10 000 × (1.03)10\nA10 ≈ 10 000 × 1.343916\nA10 = 13 439.16 \nTotal savings, i.e. the difference in future values, due \nto early repayment:\nA10 – A8\n= 13 439.16 – 12 667.70\n= 771.46\nPotential Shortcuts / Pitfalls\nIf you calculate the difference in interest amounts on \nthe basis of simple interest your solution will match \noption B. It would also be a mistake to assume \nthat the savings will be equal to the compounded \ninterest amount for the first two years because the \ncompounding in the 9th and 10th years will be \nhigher than the first two years. Option C gives the \nsolution for such a mistake. Option D is the differ-\nence of the future values had the loan been for 9 \nyears and was repaid early in 7 years. \nAs mentioned above, the compounding in the 9th \nand 10th years will be higher than the first two years. \nHence, options D and E are the only possible candi-\ndates for a guess, giving you a 50/50 chance."
    },
    {
      "id": "baneth24_ch6_s39_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 39 Q1",
      "set_id": "baneth24_ch6_set39",
      "figures": [
        "images/baneth24_ch6_set39_fig1.png"
      ],
      "question": "Given that the total number of people with a disability in Belgium was around five times the total number of people with a disability in Slovenia, what was the ratio of people with heart, blood pressure or circulation problems in Belgium to those in Slovenia?",
      "options": [
        {
          "letter": "A",
          "text": "0.29"
        },
        {
          "letter": "B",
          "text": "0.68"
        },
        {
          "letter": "C",
          "text": "3.40"
        },
        {
          "letter": "D",
          "text": "4.64"
        },
        {
          "letter": "E",
          "text": "5.00"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nRead the given percentages of people with a disa-\nbility having heart, blood pressure or circulation \nproblems in Belgium and Slovenia. Use these figures \nand the given ratio of the number of people with a \ndisability in both countries to find the required ratio.\nCalculation\nLet S be the number of people in Slovenia who had \na disability.\nThe number of people with a disability in Belgium:\n= 5 * S = 5S\nThe number of people with a disability having heart, \nblood pressure or circulation problems in Belgium:\n= (5S) * 9.6%\n= 0.48 * S\n\n247\nnumerical reasoning mixed questions test\nSimilarly, in Slovenia:\n= S * 14.1%\n= 0.141 * S\nThe ratio of people with heart, blood pressure or \ncirculation problems in Belgium to those in Slovenia:\n= (0.48 * S) / (0.141 * S)\n= 0.48 / 0.141\n≈ 49 / 14 \n= 7 /2\n= 3.50\nOption C is the closest in value to our estimated ratio.\nPotential Shortcuts / Pitfalls\nOption B simply gives the ratio of the percentages \nfrom the chart while option E gives the ratio of the \nnumber of people with disabilities in both countries. \nOption A is the reciprocal of the correct solution, \ni.e., the numerator and the denominator of the ratio \nwere swapped.\nYou can guess the right answer fairly simply given \nthat the answer options are sufficiently spread. The \npercentage of people with heart, blood pressure or \ncirculation problems in Belgium is lower than that \nin Slovenia. However, the number of people with \ndisabilities in Belgium is 5 times that in Slovenia. \nHence, 5 * 9.6% = 48%. This is between 3 to 4 times \ngreater than the 14.1% of Slovenia. Therefore, option \nC would be the best choice for an answer."
    },
    {
      "id": "baneth24_ch6_s39_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 39 Q2",
      "set_id": "baneth24_ch6_set39",
      "figures": [
        "images/baneth24_ch6_set39_fig1.png"
      ],
      "question": "If the total number of people with a disability in Belgium was the same as the total number of people with a disability in Greece, what was the ratio of people with a disability not having arthrosis, diabetes and skin conditions in Greece with respect to Belgium?",
      "options": [
        {
          "letter": "A",
          "text": "0.49"
        },
        {
          "letter": "B",
          "text": "0.80"
        },
        {
          "letter": "C",
          "text": "1.00"
        },
        {
          "letter": "D",
          "text": "1.26"
        },
        {
          "letter": "E",
          "text": "2.02"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nRead the given percentages of people with a disa-\nbility having arthrosis, diabetes and skin conditions \nin Belgium and Greece. Use these figures and the \ngiven ratio of the number of people with a disability \nin both countries to find the required ratio.\nCalculation\nLet G, be the number of people in Greece who had \na disability. According to the question text, the \nnumber of people with a disability in Belgium is the \nsame, so is also G.\nThe number of people with disability not having \narthrosis, diabetes and skin conditions in Belgium:\n= G * (100%– (27.7% + 5.9%))\n= G * (100% – 33.6%)\n= G * 66.4%\n= 0.664 * G\nSimilarly, in Greece:\n= G * (100% – (8.2% + 8.4%))\n= G * (100% – 16.6%)\n= G * 83.4%\n= 0.834 * G\nThe ratio of people with a disability not having \narthrosis, diabetes and skin conditions in Greece to \nthose in Belgium:\n= (0.834 * G) / (0.664 * G)\n= 0.834 / 0.664\n≈ 0.83 / 0.664 \n= 1.25\nOption D is the closest in value to our estimated \nratio.\nPotential Shortcuts / Pitfalls\nIt is essential to read the percentages for arthrosis, \ndiabetes and skin conditions in Belgium and Greece \nonly. We could have alternatively read the percent-\nages of all other disabilities excluding the two noted \nones, but that is simply a waste of time.\nWe used the same variable for both the number of \npeople with disabilities so that they can conveniently \nbe cancelled out during the calculations.\nOption A is the ratio of the percentages from the \nchart while option C gives the ratio of the number of \npeople with disabilities in both countries. Option B is \nthe reciprocal of the correct solution, i.e., the numer-\nator and the denominator of the ratio were swapped. \nOption E is the reciprocal of option A.\nThe percentage of people with disabilities in Greece \nnot having the said conditions was higher than in \nBelgium. Hence, you know that the ratio will be \ngreater than 1. This leaves you with options D and E \nas candidates for a guess, if required."
    },
    {
      "id": "baneth24_ch6_s39_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 39 Q3",
      "set_id": "baneth24_ch6_set39",
      "figures": [
        "images/baneth24_ch6_set39_fig1.png"
      ],
      "question": "Assuming that the number of people with disabilities in Belgium and Greece are equa and each is five times the number of people with disabilities in Slovenia, what percenta of people with a disability in these three countries had “Other longstanding health problems”?",
      "options": [
        {
          "letter": "A",
          "text": "8.9%"
        },
        {
          "letter": "B",
          "text": "9.5%"
        },
        {
          "letter": "C",
          "text": "10.1%"
        },
        {
          "letter": "D",
          "text": "11.0%"
        },
        {
          "letter": "E",
          "text": "11.7%"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nRead the given percentages of people with a disa-\nbility having other longstanding health problems \nin Belgium, Greece and Slovenia. Use these figures \nand the given ratios of the number of people with a \ndisability in the three countries to find the required \nratio.\n\n248\nnumerical reasoning mixed questions test\nCalculation\nLet S be the number of people in Slovenia who had a \ndisability. The number of people with a disability in \nboth Belgium and Greece is the same: 5S\nThe number of people with other longstanding \nhealth problems in Belgium:\n= (5S) * 11.0% = 0.55 * S\nIn Greece: = (5S) * 8.9% = 0.445 * S\nIn Slovenia: = S * 11.7% = 0.117 * S\nThe total number of people with disabilities in \nBelgium, Greece and Slovenia:\n= 5S + 5S + S = 11S\nThe percentage of people with a disability in these \nthree countries who had other longstanding health \nproblems:\n= ((0.55S + 0.445S + 0.117S) / 11S) * 100%\n= (1.112 / 11) * 100%\n≈ 10.1%\nOption C is the closest in value to our estimated ratio.\nPotential Shortcuts / Pitfalls\nAs always, you must be careful to read the data that \nis required as it is easy to go wrong on a compli-\ncated bar chart. It is also very important to express \nall numbers in terms of a single variable so that the \nvariable can be cancelled out eventually.\nOptions A, D and E are simply the percentages for \nother longstanding health problems for each of the \nthree individual countries, as shown on the chart. \nIt would be an unlikely coincidence if the overall \npercentage for the three countries combined was \nexactly equal to any one of the individual percentages. \nOne of options B or C would therefore be your best \nchoice for a guess, if required."
    },
    {
      "id": "baneth24_ch6_s40_q1",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 40 Q1",
      "set_id": "baneth24_ch6_set40",
      "figures": [
        "images/baneth24_ch6_set40_fig1.png",
        "images/baneth24_ch6_set40_fig2.png",
        "images/baneth24_ch6_set40_fig3.png"
      ],
      "question": "What was the change in the percentage share of electricity generated in Germany using solid fossil fuels from 2017 to 2019?",
      "options": [
        {
          "letter": "A",
          "text": "–28.9%"
        },
        {
          "letter": "B",
          "text": "–10.7%"
        },
        {
          "letter": "C",
          "text": "–8.7%"
        },
        {
          "letter": "D",
          "text": "–0.3%"
        },
        {
          "letter": "E",
          "text": "+28.3%"
        }
      ],
      "correct": "C",
      "explanation": "Reasoning\nWe must calculate the percentage share of electricity \ngenerated in Germany using solid fossil fuels in \nboth 2017 and 2019 and then subtract the two to find \nthe change.\nCalculation\nPercentage share of electricity generated in Germany \nusing solid fossil fuels in 2017:\n= (241 254 / 652 022) * 100%\n≈ 37%\nAnd in 2019:\n= (171 450 / 605 430) * 100%\n≈ 28%\nThe change in the percentage share of electricity \ngenerated in Germany using solid fossil fuels from \n2017 to 2019:\n= 28% – 37%\n= –9%\nOption C is the closest to our estimate.\nPotential Shortcuts / Pitfalls\nCare is needed in reading the data. Option D gives \nthe value of change in percentage share from 2019 to \n2021. The value in option A is the percentage change \nin the electricity generated using solid fossil fuels, \nwithout any reference to the total electricity gener-\nated in Germany. Option B is the percentage share \nchange relative to the total electricity generated in \n2017 only. Option E is simply the percentage share of \nelectricity generated using solid fossil fuels in 2019 \nin Germany."
    },
    {
      "id": "baneth24_ch6_s40_q2",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 40 Q2",
      "set_id": "baneth24_ch6_set40",
      "figures": [
        "images/baneth24_ch6_set40_fig1.png",
        "images/baneth24_ch6_set40_fig2.png",
        "images/baneth24_ch6_set40_fig3.png"
      ],
      "question": "How much more electricity (in GWh) must Poland make from renewables and biofuels by replacing other sources, relative to the total generation in 2021, to match the percentage share of electricity generated in Türkiye from renewables and biofuels in 2021?",
      "options": [
        {
          "letter": "A",
          "text": "14 031"
        },
        {
          "letter": "B",
          "text": "23 389"
        },
        {
          "letter": "C",
          "text": "31 330"
        },
        {
          "letter": "D",
          "text": "32 512"
        },
        {
          "letter": "E",
          "text": "63 842"
        }
      ],
      "correct": "D",
      "explanation": "Reasoning\nWe must determine the percentage share of elec-\ntricity generation from renewables and biofuels \nin Türkiye in 2021. We must then find the desired \nlevel of electricity generation from renewables and \nbiofuels in Poland by using this desired percentage \nwith its total generation. Finally, we can compute \nthe additional generation required from renewables \nand biofuels to match the percentage share of elec-\ntricity generated in Türkiye from renewables and \nbiofuels in 2021.\nCalculation\nThe percentage share of electricity generation from \nrenewables and biofuels in Türkiye in 2021: \n= (118 552 / 333 412) * 100%\n≈ 35.5%\n\n249\nnumerical reasoning mixed questions test\nDesired level of electricity generation from renewa-\nbles and biofuels in Poland in 2021 (in GWh):\n= 35.5% * 179 548\n≈ 35.5% * 180 000\n= 63 900\nAdditional electricity generation required from \nrenewables and biofuels to match the level of Türkiye \n(in GWh): \n= 63 900 – 31 330\n≈ 63 900 – 31 300\n= 32 600\nOption D is the closest in value. Hence, it is probably \ncorrect.\nPotential Shortcuts / Pitfalls\nYou can make a good guess using simple frac-\ntions. Approximately a third (≈ 111 000 / 333 000) \nof Türkiye’s generation is from renewables and \nbiofuels. Poland’s one-third generation would be ≈ \n180 000 / 3 = 60 000, out of which ≈ 30 000 is already \nin place. Therefore, you know that something like an \nadditional 30 000 GWh is required. Options C and \nD are close to this. However, option C is given in \nthe table as the actual 2021 production for renewa-\nbles and biofuels for Poland. That just leaves D as a \ngood choice.\nOption A uses the electricity generation from solid \nfossil fuels in Poland as the total generation by \nmistake. Option B uses the figure for electricity \ngeneration by solid fossil fuels in Türkiye instead of \nfrom renewables and biofuels to determine the target \npercentage. Option E is the target level of electricity \ngeneration from renewables and biofuels in Poland, \ninstead of the amount of the increase."
    },
    {
      "id": "baneth24_ch6_s40_q3",
      "type": "numerical",
      "source": "Baneth24",
      "book_ref": "Ch.6 Set 40 Q3",
      "set_id": "baneth24_ch6_set40",
      "figures": [
        "images/baneth24_ch6_set40_fig1.png",
        "images/baneth24_ch6_set40_fig2.png",
        "images/baneth24_ch6_set40_fig3.png"
      ],
      "question": "What was the change in the percentage share of electricity not generated from solid fossil fuels, renewables and biofuels in Norway from 2017 to 2021?",
      "options": [
        {
          "letter": "A",
          "text": "–1.9%"
        },
        {
          "letter": "B",
          "text": "–1.3%"
        },
        {
          "letter": "C",
          "text": "–0.1%"
        },
        {
          "letter": "D",
          "text": "+1.3%"
        },
        {
          "letter": "E",
          "text": "+99.3%"
        }
      ],
      "correct": "B",
      "explanation": "Reasoning\nWe must first separately evaluate the percentage \nshares of electricity generation not from solid fossil \nfuels, renewable and biofuels in Norway in 2017 and \nin 2019. We can then calculate the change in these \npercentage shares.\nCalculation\nThe percentage share of electricity generation not \nfrom solid fossil fuels, renewable and biofuels in \nNorway in 2017:\n= 100% – (((43 + 146 225) / 149 156) * 100%)\n= 100% – ((146 268 / 149 156) * 100%)\n≈ 100% – 98.1%\n≈ 1.9%\nAnd the same in 2021:\n= 100% – (((44 + 156507) / 157 583) * 100%)\n= 100% – ((156 551 / 157 583) * 100%)\n≈ 100% – 99.3%\n≈ 0.7%\nThe change in the percentage share of electricity not \ngenerated from solid fossil fuels, renewables and \nbiofuels in Norway from 2017 to 2021:\n= 0.7% – 1.9% \n= –1.2%\nOption B is the closest in value to our approximate \nsolution and the correct choice for an answer.\nPotential Shortcuts / Pitfalls\nYou can find the correct option to choose by thinking \nabout the information in the table rather than doing \nlengthy calculations. Norway’s electricity generation \nfrom solid fossil fuels was clearly negligible in both \nyears and therefore can be disregarded. In contrast, \ngeneration from renewables and biofuels accounted \nfor around 98% of total electricity generation in 2017. \nHence, only around 2% of total generation was not \nfrom those sources. In 2021, the percentage from \nrenewables and biofuels went even higher and was \nclose to 99%. Therefore, the percentage share of \ntotal generation not from renewables and biofuels \ncould have only gone down and must be close to 1%. \nOption B is the best choice for your answer.\n\n250\nnumerical reasoning mixed questions test\nData sources for the numerical reasoning questions\nSet 1\nhttps://ec.europa.eu/eurostat/databrowser/view/PIPE_IF_LENGHT/\ndefault/table?lang=en, https://ec.europa.eu/eurostat/databrowser/view/\nPIPE_IF_CAPAC/default/table?lang=en\nSet 2\nhttps://ec.europa.eu/eurostat/databrowser/view/sdg_11_31/default/\ntable?lang=en , https://ec.europa.eu/eurostat/databrowser/view/\nLAN_SETTL__custom_7181453/default/table?lang=en\nSet 3\nhttps://ec.europa.eu/eurostat/databrowser/view/TTR00016/default/\ntable?lang=en\nSet 4\nhttps://worldathletics.org/en/competitions/world-athletics-champi-\nonships/budapest23/results/women/20-kilometres-race-walk/final/\nresult\nSet 5\nhttps://www.statista.com/statistics/282087/number-of-monthly-active-\ntwitter-users/, https://www.statista.com/statistics/264810/number-of-\nmonthly-active-facebook-users-worldwide/, https://www.statista.com/\nstatistics/376128/facebook-global-user-age-distribution/\nSet 6\nhttps://ec.europa.eu/eurostat/databrowser/view/\nEXT_SER_BEC01__custom_7431204/default/table?lang=en\nSet 7\nhttps://ec.europa.eu/eurostat/databrowser/view/tec00120/default/\ntable?lang=en\nSet 8\nhttps://www.destatis.de/EN/Themes/Society-Environment/Health/\nHospitals/Tables/gd-hospitals-years.html\nSet 9\nhttps://ec.europa.eu/eurostat/databrowser/view/NRG_CB_GAS/\ndefault/table?lang=en, https://ec.europa.eu/eurostat/databrowser/view/\nNRG_CB_E/default/table?lang=en\nSet 10\nhttps://ec.europa.eu/eurostat/databrowser/view/cei_pc050/default/\ntable?lang=en , https://ec.europa.eu/eurostat/databrowser/product/view/\nTPS00001\nSet 11\nhttps://www.theglobaleconomy.com/rankings/house_price_index/\nSet 12\nhttps://www.flightaware.com/live/flight/RYR9388/\nhistory/20230916/0555Z/EGNX/LEBL\nSet 13\nhttps://www.numbeo.com/property-investment/rankings_by_country.jsp\nSet 14\nhttps://ec.europa.eu/eurostat/databrowser/view/\nNAMA_10_GDP__custom_7504064/default/table?lang=en\nSet 15\nhttps://ec.europa.eu/eurostat/databrowser/view/tec00104/default/\ntable?lang=en, https://ec.europa.eu/eurostat/databrowser/view/teina090/\ndefault/table?lang=en\nSet 16\nhttps://www.statista.com/statistics/263937/\nvegetable-oils-global-consumption/\nSet 17\nhttps://worldpopulationreview.com/countries\nSet 18\nhttps://ec.europa.eu/eurostat/databrowser/view/cei_gsr011/default/\ntable?lang=en , https://ec.europa.eu/eurostat/databrowser/view/\nDEMO_PJAN/default/table?lang=en\nSet 19\nhttps://www.destatis.de/EN/Themes/Society-Environment/Health/\nHospitals/Tables/staff-hospitals-years.html\nSet 20\nhttps://worldathletics.org/en/competitions/world-athletics-champion-\nships/world-athletics-championships-budapest-2023-7138987/results/\nmen/4x400-metres-relay/final/result\nSet 21\nhttps://www.statista.com/statistics/746578/number-of-arrested-terror-\nsuspects-eu/ , https://www.statista.com/statistics/1178596/\nnumber-of-fatalities-from-terrorism-eu/\nSet 22\nhttps://ec.europa.eu/eurostat/databrowser/view/ILC_LVPS01__\ncustom_7624487/default/table?lang=en , https://ec.europa.eu/eurostat/\ndatabrowser/view/DEMO_PJAN/default/table?lang=en\nSet 23\nhttps://www.statista.com/statistics/264647/national-debt-of-selected-\ncountries-in-relation-to-gross-domestic-product-gdp/  , https://www.\nstatista.com/statistics/256427/gdp-per-capita-in-the-main-industrialized-\nand-emerging-countries/ , https://www.statista.com/statistics/268295/\nforecast-on-the-gdp-growth-by-world-regions/ , https://www.statista.com/\nstatistics/270381/national-debt-of-the-united-kingdom-in-relation-to-gross-\ndomestic-product-gdp/ , https://ec.europa.eu/eurostat/databrowser/view/\nDEMO_PJAN/default/table?lang=en\nSet 24\nhttps://ec.europa.eu/eurostat/databrowser/view/APRO_MK_COLA/\ndefault/table?lang=en , https://ec.europa.eu/eurostat/databrowser/view/\nAPRO_MK_FATPROT/default/table?lang=en\nSet 25\nhttps://ec.europa.eu/eurostat/databrowser/view/FISH_LD_MAIN/\ndefault/table?lang=en\nSet 26\nhttps://www.statista.com/statistics/383633/worldwide-consumption-of-\nelectricity-by-country/ , https://worldpopulationreview.com/countries\nSet 27\nhttps://www.destatis.de/EN/Themes/Economic-Sectors-Enterprises/\nAccommodation-Food-Services-Activities-Tourism/_node.html#sprg268212 , \nhttps://www.destatis.de/EN/Press/2022/08/PE22_338_45412.html\nSet 28\nhttps://www.formula1.com/en/results.html/2023/races/1141/\nbahrain/race-result.html , https://en.wikipedia.org/wiki/\nBahrain_International_Circuit\nSet 29\nhttps://ec.europa.eu/eurostat/databrowser/view/\nSBS_PART_BSPRD__custom_7691390/default/table?lang=en\nSet 30\nhttps://ec.europa.eu/eurostat/databrowser/view/ILC_LVPS01__\ncustom_7624487/default/table?lang=en , https://ec.europa.eu/eurostat/\ndatabrowser/view/DEMO_PJAN/default/table?lang=en\nSet 31\nhttps://ec.europa.eu/eurostat/databrowser/view/TEC00033/default/\ntable?lang=en\nSet 32\nhttps://ec.europa.eu/eurostat/databrowser/view/ROAD_TF_VEH/\ndefault/table?lang=en\nSet 33\nhttps://www.statista.com/statistics/515410/cat-population-european-union-\neu-by-country/ , https://www.statista.com/statistics/515010/pet-\npopulation-european-union-eu-by-animal/ , https://www.statista.com/\nstatistics/515398/pet-food-sales-turnover-europe/ , https://www.statista.\ncom/statistics/414956/dog-population-european-union-eu-by-country/\nSet 34\nhttps://www.statista.com/statistics/205589/top-20-cities-in-the-us-with-the-\nhighest-resident-population/ , https://www.statista.com/statistics/205618/\nper-capita-income-in-the-top-20-most-populated-cities-in-the-us/\nSet 35\nhttps://ec.europa.eu/eurostat/databrowser/view/\nBOP_ITS6_DET__custom_7729164/default/table?lang=en\nSet 37\nhttps://www.statista.com/statistics/330695/number-of-smartphone-users-\nworldwide/, https://www.statista.com/statistics/263437/global-\nsmartphone-sales-to-end-users-since-2007/ , https://www.statista.com/\nstatistics/738977/worldwide-monthly-data-traffic-per-smartphone/\nSet 39\nhttps://ec.europa.eu/eurostat/databrowser/view/\nHLTH_DB_EMTYAG__custom_7759556/default/table?lang=en\nSet 40\nhttps://ec.europa.eu/eurostat/databrowser/view/\nNRG_BAL_PEH__custom_7786034/default/table?lang=en\n\nIn an EPSO abstract reasoning test you are presented with a series of figures in a sequence \nwhich follows some rules you are not told. You are also given a second set of figures (A, B, \nC, D, E) as answer options, from which you must choose the correct one to answer the ques­\ntion “Which of the following figures comes next in the series?” (or similar).  \n   It can certainly be a daunting experience to face such a test for the first time. Your eyes \nwill tend to scan the shapes of the figures in a haphazard fashion. You finally get an idea \nabout the possible rules, and then look at the figures in the answer options to see which \none fits. And then you realise that the figure you carefully selected would only fit the \nseries pattern if just one thing was a little bit different. So now you must start all over \nagain... \n   But, just as in the case of verbal and numerical reasoning tests, understanding the prin­\nciples involved and a systematic approach to applying them can produce results much \nmore reliably and quickly.  \n   As part of such a systematic approach, let us therefore first review the various abstract \nreasoning test types, which are based on: \n•   the use or avoidance of colours \n•   the logical relationship between the various figures, whether they are part of a series, \na grid, or if there is one figure which is the odd-one-out \n•   the number of dimensions in the test (two- or three-dimensional tests both exist) \n   Fortunately, it is now known that EPSO have chosen a type of abstract reasoning test \nthat is very well defined: \n•   only black-and-white images are used (possibly with various shades of grey) \n7.\nSucceeding in Abstract Reasoning Tests \n•\n•\n•\n•\n•\n•\n•\n•\n•\n•\n• •\n•\n•\n•\n•\n•\n•\n•\n•\n?\n•\n•\n•\n•\nA\n•\n•\n•\n•\nB\n• •\n•\n•\nC\n•\n•\n•\n•\nD\n•\n•\n•\n•\nE\nA typical abstract question: Which figure is next in the series?\n\n•   only two-dimensional tests are given \n•   only series-type questions are used \n•   five items of the series are shown, and the candidate must select the next, sixth item \n•   there are usually five answer options (though EPSO may vary this). \n \n   In abstract reasoning tests, the most important skill is learning to identify the compo­\nnents. Let us look at these one-by one: \n•   Building blocks: the building blocks of abstract reasoning tests are the following: \n–           Shapes and patterns are the actual visual objects that are used to construct the \nfigures in the test: triangles, squares, circles and other geometric shapes, as well \nas the physical properties of these objects: striped, dotted or solid fill patterns \n–            Operations are various visual changes that these objects can undergo, such as \ncolour inversion, multiplication, rotation, change of position, and countless others \n–            Rules are text-based descriptions of the relationship between the various \nshapes/patterns and the operations affecting them \n     In this chapter, we will: \n•   Introduce how abstract reasoning tests are designed: insight into the thought process \nthat is behind the creation of abstract reasoning tests will be very valuable when you \nare on the other side, that is, when taking such tests \n•   Introduce the various building blocks, typical shapes, patterns and operations that \nyou will encounter in abstract reasoning tests \n•   Discuss how to approach abstract reasoning tests \n•   Provide tips on how to prepare for them \n   By identifying the building blocks of a test item and systematically looking for the \nabove patterns and operations, you will quickly be able to identify the rules that the \nquestion author invented to create the figures and the answer options. \n   Consequently, you will be able to “generate” or “anticipate” the correct figure in your \nmind without even looking at the answer options. This method is highly reliable since \nyou will not select one of the answer options as the correct answer just because it seems \nthe best or most suitable option: you will also have independent confirmation − the \nfigure you came up with yourself based on the rule(s) you have figured out. \nHow Are Abstract Reasoning Tests Designed? \nIn this section, we will provide a look into the “workshop” of abstract reasoning test \ndesigners and, through a real test example, introduce how abstract reasoning exercises \nare designed. \n   As mentioned earlier, EPSO exclusively uses the series type tests in its competitions. \nIn this type of abstract reasoning test, the test taker is asked to find the figure that cor­\nrectly completes a series. \n   If we identify the rule, we will not only be able to tell which figure will be the sixth one \n(as in the example above), but also the ninth or the sixteenth one. \n   When designing an abstract reasoning test, the designer has specific steps to take: \n1.  The designer decides what shapes and patterns will be used in the tests. Based on the \nsample test above, let’s say we will use basic geometric shapes (circles and squares).  \n252\nSUCCEEDING IN ABSTRACT REASONING TESTS\n\n2.  Next, the designer has to decide on the difficulty level of the test. The importance of \nthis lies in the fact that the number of rules (generally) correlates with the difficulty \nof the test. \n3.  Once the rules and the shapes/operations are identified and drawn, the designer \nneeds to come up with one correct and several incorrect answer options. The trick to \nkeep in mind here is that the incorrect answer options are not random – they all \nfollow the rules of the test item up to a point, then deliberately err in one or more \nrespects, thus making them almost correct. \nConsider the sample item above. We can identify the following building blocks: \n•   unshaded circles \n•  squares forming 3x3 areas. \n     The first rule you may notice is the movement of the circles. We might describe this \nas follows: \nRule #1: One by one, the circles move in a clockwise direction. \n   Based on this rule we can quickly find the correct answer – which is option D. \n   Let’s see how we could make this test item a bit harder. \n   If you look at the sample item below, you will immediately realize that a new building \nblock was introduced: shaded squares. \nSUCCEEDING IN ABSTRACT REASONING TESTS\n253\n•\n•\n•\n•\n•\n•\n•\n•\n•\n•\n• •\n•\n•\n•\n•\n•\n•\n•\n•\n• •\n•\n•\nA\n•\n•\n•\n•\nB\n•\n•\n• •\nC\n•\n•\n•\n•\nD\n•\n•\n• •\nE\n?\n•\n•\n•\n•\n•\n•\n•\n•\n•\n•\n• •\n•\n•\n•\n•\n•\n•\n•\n•\n?\n• •\n•\n•\nA\n•\n•\n•\n•\nB\n•\n•\n•\n•\nC\n•\n•\n•\n•\nD\n•\n•\n• •\nE\n\n   Before we try to find the rule governing the shading of certain squares, notice that the \nrule we came up with above still holds: \nRule #1: One by one, the circles move in a clockwise direction. \n   This rule, however, does not explain the appearance of shaded squares, as any number \nof different images could be correct from the answer options. We need to identify the \nsecond rule: \nRule #2: The shading alternatingly takes one and two steps in an anticlockwise direction. \n   The only answer option that matches both of these rules is option C. \n   Note how close option B is to be the correct answer, but deliberately misusing the \nsecond rule. \n   We can make the test item even harder by introducing another additional component:  \n   Notice that, again, a new building block and rule must have been introduced govern­\ning the appearance of the shaded circle. We can describe this regularity as follows: \nRule #3: Circles that stood on a shaded square will become shaded themselves for a turn. \n   The only answer option matching all three rules is option E. \n   As a summary, let us overview what techniques we can use to understand the thought \nprocess of the designer of the test items better: \n•  Determining what building blocks to use (unshaded/shaded squares and circles) and \nthe number of rules governing their change \n•  Eliminating answer options based on each rule we have identified \nPatterns and Operations \nNow that we have seen the basic components of abstract reasoning tests and the way \nthey are designed, it is time to turn to the various patterns and operations that you must \nbe aware of and able to recognize in order to quickly and efficiently solve these tests.  \n   It would be of course impossible to take stock of all the possible shapes and patterns, \nbut we will try to give a comprehensive overview in the next section. \nRotation \nFigs. 1 and 2 on the opposite page shows a simple rotation by 45° clockwise. You can \ngain the necessary routine in identifying rotations by taking the time to sit down with a \n254\nSUCCEEDING IN ABSTRACT REASONING TESTS\n•\n•\n•\n•\n•\n•\n•\n•\n•\n•\n• •\n•\n•\n•\n•\n•\n•\n•\n•\n?\n• •\n•\n•\nA\n•\n•\n•\n•\nB\n• •\n•\n•\nC\n•\n•\n•\n•\nD\n•\n•\n•\n•\nE\n\npiece of paper and a pencil, draw various \nshapes and then redraw them after rotat­\ning them various degrees in either direc­\ntion, clockwise or counter-clockwise.  \n   The example below shows a different \nkind of rotation. In strict geometrical \nterms, the relationship between the two \nfigures is not rotation at all, yet for conve­\nnience’s sake, we will discuss it in this \nsection. \n     In the two figures, the small icons in \nthe small squares around the larger one in \nthe middle swap places with their neigh­\nbours in a clockwise direction. In a sense \nwe can say that the icons “rotate” along \nan imaginary circle around the larger \nsquare. \nAxial Reflection \nThe two examples on the right show the \ngeometrical operation called “axial reflec­\ntion”. The thin lines between the two fig­\nures in each of the two sets represent an \nimaginary mirror. In the first set, the \nfigure on the right is the reflection of the \nfigure on the left in the “mirror” in the \nmiddle and vice versa. This is an example \nof a horizontal reflection. \n   The second set represents a so-called vertical reflection. While for demonstration’s \nsake the examples show the horizontal reflection side by side and the vertical reflection \nwith one figure below the other, in real tests this may not always be the case.  \n    In the example on the left, the figure on the right is \nstill the vertical “reflection” of the figure on the left, but \nthe placement of the second figure does not correspond \nwith where it would actually be in a strictly geometrical \nsense, that is, below the first image – this makes it \nharder to consider the relationship between the two fig­\nures as a reflection. \n   You can practice the recognition of this operation in the same cost-effective way as \ndescribed above for rotations – all you need is paper, a pencil and loads of patience. \nPatterns and Inversions \n“Which of the following figures completes the series?” \n   In the example on the top right, a new building block component is introduced – pat­\nterns. The example features three of the next page shapes: \n•  Stars \nSUCCEEDING IN ABSTRACT REASONING TESTS\n255\n•••\n••\n•••\n••\nFig. 1\nFig. 2\nHorizontal reflection\nVertical reflection\nVertical reflection\n\u0001\nl\nn\nÀ\nn\nÀ\nl\n\u0001\n\n•  Circles \n•   Rhombuses \n... and three distinct patterns or “fills”: \n•  No fill (or solid white fill) \n•  Solid black fill \n•  Solid Grey fill \nLooking at the sample test, we notice that two “operations” \ntake place: \n•  The shapes in each figure change places according to some \nrule \n•  The patterns (or fill) of the rhombuses and the circle also \nchange according to some rule \n•  The pattern (or fill) of the star never changes \n   After further observation, we can establish the following rules regarding the patterns: \nRule #1a: If a rhombus has a grey fill, change it to solid black in the next step. If it has a \nsolid black fill, change it to a grey pattern in the next step. \nRule #1b: If a circle has a grey pattern, change it to solid white in the next step. If it has \na solid white fill, change it to a grey pattern in the next step. \nRule #1c: Always leave the star’s pattern unchanged. \n   There are of course many other combinations possible, involving more types of pat­\nterns and different relationships between them. Another typical case is so-called inver­\nsion. In such tests, the solid colour fill (usually black or white) of each shape and object \nturns into its exact opposite. Every shape with black fill becomes white, and vice versa. \n   The other component of our rule for the above example has to do with the positions of \nthe shapes in relation to each other. We will discuss this in the next section. \nTranslation  \nIn geometry, translation is an operation where each and \nevery point of a shape is moved to a specified distance in a \nspecified direction. In the example on the right, each point of \nthe triangle is moved (or “translated”) to the same distance \nand in the same direction, as indicated by the dotted line or \n“vector” connecting the two shapes. The vector is only \nshown here for demonstration purposes and would not be \nvisible in a real exercise. We must also keep in mind that the \nmovement sometimes occurs along an actual shape that is \npart of the figure: \n     In the example on the left, the handle­\nbar line “migrates” around the other \nshapes in a counter-clockwise order. The \nmovement is not a rotation or a reflection \n– the points of the handlebar line are \nsimply moved at a certain distance in a \ncertain direction in each step of the series. \n     Therefore the correct answer is a shape \nthat is the same as the middle one in the \ntop row.  \n256\nSUCCEEDING IN ABSTRACT REASONING TESTS\nFig. 1\nFig. 2\n?\n?\n\n   Similarly to rotation, there is also a geometrically less accurate meaning of the term \n“translation”. Looking at the sample question with the star, the circle and the rhombus, \nwe may notice the following rule governing the placement of the three shapes in the fig­\nures of the series: \n   Rule #2: Move each of the three shapes one position up. If the shape is already in the \ntop position, it will now occupy the bottom position in the figure. \n   In the example, the six answer options were intentionally deleted. Based on the \nmethod described earlier in this chapter, we can mentally generate the correct figure \nbased on the rules we have established for the series (repeated below for convenience). \n   Rule #1: “If a rhombus has a grey fill, change it to solid black in the next step. If it has \na solid black fill, change it to a grey pattern in the next step. If a circle has a grey pattern, \nchange it to solid white in the next step. If it has a solid white fill, change it to a grey pat­\ntern in the next step. Always leave the star’s pattern unchanged.” \n   In the fifth item in the series (the figure that will take the place of the ques­\ntion mark), then, the circle will become grey and the rhombus will become \nsolid black. The star will remain white. \n   Rule #2: “Move each of the three shapes one position up. If the shape is \nalready in the top position, it will now occupy the bottom position in the \nfigure.” \n   In the figure we are looking for, the now black rhombus will take the \nbottom position, the now grey circle will go to the middle, and the still white \nstar will move to the top position.  \nAngles  \nIn geometry, an angle is defined as a figure formed by two lines extending from the same \npoint. In simple geometry, angles are usually given as being any number that is larger \nthan zero and smaller than 360°. \n   When it comes to abstract reasoning tests, we need to be aware of angles for various \nreasons. In the case of identifying rotations, the rotation is usually done at a certain \nangle: 45°, 90° (also called a “right angle”), 180°, or 270°. Of course, rotation at any angle \nis possible, but due to the difficulty in identifying “custom” angles (say, 67°), such rota­\ntions are not likely to appear in EPSO’s abstract reasoning tests. \n   When establishing the “rule” for a test question, we must always think about angles as \nwell. \n   Consider the example below: \nSUCCEEDING IN ABSTRACT REASONING TESTS\n257\n\n   If we look at the images in the sample test above, we see a flask in various positions. \nAfter some further observation, we will notice that the flasks in the second, third and fur­\nther figures are rotated at certain angles when compared to the flask in the first figure. \nWe might describe this regularity based on angles as follows: \nRule #1: The flask is rotated around a fixed point 45 then 180 degrees, and then the cycle repeats. \nVisual Arithmetic \nThe last typical abstract reasoning component we discuss here is sometimes referred to \nas visual arithmetic.  \n   If we look at the figure extracted from a real abstract reasoning test, we see a large \nouter square with seven smaller squares along its sides. The top left square is black, and \nthere are various shapes in the other squares (the fact that not all squares contain shapes \nis not relevant for our purposes now). What is the rule that could govern which kind of \nshape appears in each of the small squares? One tactic we can follow in items similar to \nthis is to first count the number of sides the shapes have. \nObviously, the triangle has three sides, the pentagon has five \nand the hexagon has six. How many sides should we “allo­\ncate” to the circle? Let’s worry about that a bit later. \n   The other question is what determines why a certain shape \nis placed in a certain position in the figure. Counting can again \nhelp us out. If we count the distance (defined as the number of \nsquares) between the shapes and the black square in a clock­\nwise direction, we will notice that the position with the trian­\ngle, for example, is three steps away, the position with the \npentagon is five shapes away, and so on. \n   We can now identify a rule: \nRule #1: The distance of a shape in any given square is governed by the number of sides \nthe shape has. \n   It is important to bear in mind that EPSO’s abstract reasoning tests, similarly to all such \nwell-designed tests, attempt to measure the candidate’s intuition and intelligence both \nvisually (identification of shapes, patterns, and so on) and logically (e.g. identifying rela­\ntionships and numerical regularities). \nSummary and Approaches to Practice \nIn this chapter, we have overviewed various aspects of abstract reasoning tests: \n•   Test design, difficulty, rules and distractors \n•  Building blocks: operations, rules and patterns (rotation, reflection, angles, visual arith­\nmetic, and so on) \n   Let us now add some suggestions on how to practice. \n•  If you feel that a geometrical operation (reflection, rotation, angles, etc.) is one of your \nweak points, do not shy away from sitting down with some paper and a pencil. Draw \nvarious shapes and perform the operations on them until they become routine and \nyou are able to recognize a 90° clockwise rotation of a complex shape in a couple of \nseconds \n•  Once you are familiar with all of the typical rules and operations as detailed above, \nstart practicing on the actual test questions in the next chapter of this book \n•  Since abstract reasoning tests are all about shapes, it is especially important to try to \nmodel the infrastructure of the exam while practicing – the EPSO test will be admin­\n258\nSUCCEEDING IN ABSTRACT REASONING TESTS\nn\nÀ\nl\n\u0001\nÂ\n\nistered on a computer, which will make it harder (and stranger) to take than a paper-\nbased test where you can scribble on the paper. If you have access to such services, \ntry also to practice online \n \n   In the next chapter there are 50 questions with fully worked answer explanations so \nyou can see step-by-step how to solve a question in a logical sequence. \nSUCCEEDING IN ABSTRACT REASONING TESTS\n259"
    },
    {
      "id": "num5_q1",
      "type": "numerical",
      "source": "NUM5",
      "book_ref": "NUM5 Q1",
      "set_id": null,
      "figures": [
        "images/num5_q1_fig1.png"
      ],
      "question": "Sebastian uses a blend of different chocolates in his recipe. He uses 20% chocolate A, 15% chocolate B, 30% chocolate C and 10% chocolate D; the rest is made up of chocolate E. What is the cacao content of his blend?",
      "options": [
        {
          "letter": "A",
          "text": "60.3%"
        },
        {
          "letter": "B",
          "text": "63.25%"
        },
        {
          "letter": "C",
          "text": "65.75%"
        },
        {
          "letter": "D",
          "text": "67.8%"
        },
        {
          "letter": "E",
          "text": "68.6% Distribution of scientists in different laboratories Omega Laboratory Gamma Laboratory Zeta Laboratory Chemists 25 % 34 % 18 % Physicists 28 % 18 % 38 % Mathematicians 31 % 42 % 26 % Biologists 16 % 6 % 18 % of whom: Marine biologists 6 % 2 % 4 %"
        }
      ],
      "correct": "C",
      "explanation": "Question 2\nDistribution of scientists in different laboratories\na)\n128\nb)\n13\nc)\n28\nd)\n32\ne)\nCannot say\nThe Gamma laboratory has 160 mathematicians, i.e. twice as many as the Zeta\nlaboratory. There are as many chemists in the Omega laboratory as there are\nmathematicians in the Zeta laboratory. In the Omega laboratory, how many biologists\nare not marine biologists?\nOmega\nLaboratory\nGamma\nLaboratory\nZeta\nLaboratory\nChemists\n25 %\n34 %\n18 %\nPhysicists\n28 %\n18 %\n38 %\nMathematicians\n31 %\n42 %\n26 %\nBiologists\n16 %\n6 %\n18 %\nof whom:\nMarine biologists\n6 %\n2 %\n4 %\nQuestion 2\n3\n4\n\n06/09/2024\n3"
    },
    {
      "id": "num5_q2",
      "type": "numerical",
      "source": "NUM5",
      "book_ref": "NUM5 Q2",
      "set_id": null,
      "figures": [
        "images/num5_q2_fig1.png"
      ],
      "question": "The Gamma laboratory has 160 mathematicians, i.e. twice as many as the Zeta laboratory. There are as many chemists in the Omega laboratory as there are mathematicians in the Zeta laboratory. In the Omega laboratory, how many biologists are not marine biologists?",
      "options": [
        {
          "letter": "A",
          "text": "128"
        },
        {
          "letter": "B",
          "text": "13"
        },
        {
          "letter": "C",
          "text": "28"
        },
        {
          "letter": "D",
          "text": "32"
        },
        {
          "letter": "E",
          "text": "Cannot say Distribution of vegetable plants in a kitchen garden 25% 15% 16% 24% 20% Tomatoes Cucumbers Carrots Chicory Potatoes"
        }
      ],
      "correct": "D",
      "explanation": "Number of mathematicians in Zeta: 160 / 2 = 80\nShare of non-marine biologists in Omega: 16% - 6% = 10%\nLet N be the number of non-marine biologists in Omega:\nNumber of chemists in Omega: 80\nN\n10%\n80\n25%\nN = 80 X 10% / 25% = 800 / 25 = 32\nDistribution of scientists in different laboratories\nThe Gamma laboratory has 160 mathematicians, i.e. twice as many as the Zeta laboratory.\nThere are as many chemists in the Omega laboratory as there are mathematicians in the\nZeta laboratory. In the Omega laboratory, how many biologists are not marine biologists?\nOmega\nLaboratory\nGamma\nLaboratory\nZeta\nLaboratory\nChemists\n25 %\n34 %\n18 %\nPhysicists\n28 %\n18 %\n38 %\nMathematicians\n31 %\n42 %\n26 %\nBiologists\n16 %\n6 %\n18 %\nof whom:\nMarine biologists\n6 %\n2 %\n4 %"
    },
    {
      "id": "num5_q3",
      "type": "numerical",
      "source": "NUM5",
      "book_ref": "NUM5 Q3",
      "set_id": null,
      "figures": [
        "images/num5_q3_fig1.png"
      ],
      "question": "In this kitchen garden, there are 8 cherry tomato plants, and they account for 40% of all the tomato plants. A quarter of the potato plants are sweet potato plants. How many sweet potato plants are there in this kitchen garden?",
      "options": [
        {
          "letter": "A",
          "text": "20"
        },
        {
          "letter": "B",
          "text": "16"
        },
        {
          "letter": "C",
          "text": ""
        },
        {
          "letter": "D",
          "text": "5"
        },
        {
          "letter": "E",
          "text": "12 Number of fishers Muravia 1 524 000 1 586 050 1 605 400 1 628 250 Venalia 850 450 875 200 885 500 898 600 Zogland 625 780 637 650 639 450 642 800 Levonia 2 542 300 2 596 700 2 627 500 2 658 100"
        }
      ],
      "correct": "C",
      "explanation": "8 = 40% x tomato plants\nTomato plants = 8/40% = 2/10% = 20\nLet N be the number of potatoe plants:\nN\n20%\n20\n25%\nN = 20 X 20% / 25% = 400 / 25 = 16\nSweet potato plants = 16/4 = 4\nDistribution of vegetable plants in a kitchen garden\nIn this kitchen garden, there are 8 cherry tomato plants, and they account for 40% of all\nthe tomato plants. A quarter of the potato plants are sweet potato plants. How many sweet\npotato plants are there in this kitchen garden?\n25%\n15%\n16%\n24%\n20%\nTomatoes\nCucumbers\nCarrots\nChicory\nPotatoes"
    },
    {
      "id": "num5_q4",
      "type": "numerical",
      "source": "NUM5",
      "book_ref": "NUM5 Q4",
      "set_id": null,
      "figures": [
        "images/num5_q4_fig1.png"
      ],
      "question": "In 2016, 64% of fishers in Levonia were over the age of 44. Two years later, this proportion was 62%. How did the number of fishers aged 44 and under change in Levonia from 2016 to 2018?",
      "options": [
        {
          "letter": "A",
          "text": "It rose by 7.4%"
        },
        {
          "letter": "B",
          "text": "It fell by 8.1%"
        },
        {
          "letter": "C",
          "text": "It fell by 7.4%"
        },
        {
          "letter": "D",
          "text": "It rose by 8.1%"
        },
        {
          "letter": "E",
          "text": "Cannot say Number of restaurants by type of cuisine Indian Chinese Japanese Italian Boronitz Crovaka Albana Denitz"
        }
      ],
      "correct": "D",
      "explanation": "Question 6\nIn Albana, three quarters of Italian restaurants are pizzerias. In the same town, two in\nthree restaurants have been in operation since before 2012. In Albana, how many\nItalian restaurants which are not pizzerias have been in operation since before 2012?\nNumber of restaurants by type of cuisine\na)\n20\nb)\n26\nc)\n9\nd)\n27\ne)\nCannot say\nIndian\nChinese\nJapanese\nItalian\nBoronitz\n9   \n16   \n18   \n28   \nCrovaka\n22   \n28   \n16   \n20   \nAlbana\n25   \n32   \n42   \n36   \nDenitz\n18   \n22   \n28   \n26   \nQuestion 5\n9\n10\n\n06/09/2024\n6"
    },
    {
      "id": "num5_q5",
      "type": "numerical",
      "source": "NUM5",
      "book_ref": "NUM5 Q5",
      "set_id": null,
      "figures": [
        "images/num5_q5_fig1.png"
      ],
      "question": "In Albana, three quarters of Italian restaurants are pizzerias. In the same town, two in three restaurants have been in operation since before 2012. In Albana, how many Italian restaurants which are not pizzerias have been in operation since before 2012?",
      "options": [
        {
          "letter": "A",
          "text": "20"
        },
        {
          "letter": "B",
          "text": "26"
        },
        {
          "letter": "C",
          "text": "9"
        },
        {
          "letter": "D",
          "text": "27"
        },
        {
          "letter": "E",
          "text": "Cannot say"
        }
      ],
      "correct": "D",
      "explanation": "Share of fishers aged 44 and under in Levonia in 2016: 100% - 64% = 36% \nShare of fishers aged 44 and under in Levonia in 2018: 100% - 62% = 38% \nNumber of fishers aged 44 and under in Levonia in 2016: 0.36 x 2 596 700 = 934 812 \nNumber of fishers aged 44 and under in Levonia in 2018: 0.38 x 2 658 100 = 1 010 078\n% change: (1 010 078 – 934 812) / 934 812 = + 8.1%\nIn 2016, 64% of fishers in Levonia were over the age of 44. Two years later, this proportion\nwas 62%. How did the number of fishers aged 44 and under change in Levonia from 2016 to\n2018?\n2015\n2016\n2017\n2018\nMuravia\n1 524 000  \n1 586 050\n1 605 400  \n1 628 250  \nVenalia\n850 450 \n875 200  \n885 500  \n898 600  \nZogland\n625 780 \n637 650  \n639 450  \n642 800  \nLevonia\n2 542 300 \n2 596 700  \n2 627 500  \n2 658 100  \nNumber of fishers"
    },
    {
      "id": "sjt_s01_ra",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 1 · Réaction A",
      "set_id": "sjt_s01",
      "situation": "Vous êtes chef de projet dans une institution publique. Un nouveau collaborateur a rejoint votre équipe il y a deux semaines. Il travaille principalement en télétravail et vous remarquez qu'il n'ose pas poser de questions lors des réunions en visioconférence. Ses premiers livrables montrent qu'il n'a pas bien compris certaines procédures internes.",
      "situation_title": "Le collègue silencieux en télétravail",
      "figures": [],
      "question": "RÉACTION A : Vous lui envoyez un e-mail avec les liens vers la documentation interne et lui dites de vous contacter s'il a des questions.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "C",
      "explanation": "Score attendu : +/-\nDémarche active mais unilatérale. Vous fournissez de l'aide sans engager un vrai dialogue ni chercher à comprendre ses difficultés."
    },
    {
      "id": "sjt_s01_rb",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 1 · Réaction B",
      "set_id": "sjt_s01",
      "situation": "Vous êtes chef de projet dans une institution publique. Un nouveau collaborateur a rejoint votre équipe il y a deux semaines. Il travaille principalement en télétravail et vous remarquez qu'il n'ose pas poser de questions lors des réunions en visioconférence. Ses premiers livrables montrent qu'il n'a pas bien compris certaines procédures internes.",
      "situation_title": "Le collègue silencieux en télétravail",
      "figures": [],
      "question": "RÉACTION B : Vous ne faites rien de particulier car il finira par s'adapter comme tout le monde.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "A",
      "explanation": "Score attendu : --\nPassivité totale face à un problème visible. Vous n'aidez pas un collègue en difficulté et ne contribuez pas à l'intégration dans l'équipe."
    },
    {
      "id": "sjt_s01_rc",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 1 · Réaction C",
      "set_id": "sjt_s01",
      "situation": "Vous êtes chef de projet dans une institution publique. Un nouveau collaborateur a rejoint votre équipe il y a deux semaines. Il travaille principalement en télétravail et vous remarquez qu'il n'ose pas poser de questions lors des réunions en visioconférence. Ses premiers livrables montrent qu'il n'a pas bien compris certaines procédures internes.",
      "situation_title": "Le collègue silencieux en télétravail",
      "figures": [],
      "question": "RÉACTION C : Vous l'appelez pour un échange informel, lui demandez comment il se sent dans l'équipe et lui proposez de le guider pendant le premier mois avec des points réguliers.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "E",
      "explanation": "Score attendu : ++\nDémarche proactive avec dialogue direct, empathie et solution structurée (mentorat avec suivi régulier). Encourage durablement la collaboration."
    },
    {
      "id": "sjt_s01_rd",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 1 · Réaction D",
      "set_id": "sjt_s01",
      "situation": "Vous êtes chef de projet dans une institution publique. Un nouveau collaborateur a rejoint votre équipe il y a deux semaines. Il travaille principalement en télétravail et vous remarquez qu'il n'ose pas poser de questions lors des réunions en visioconférence. Ses premiers livrables montrent qu'il n'a pas bien compris certaines procédures internes.",
      "situation_title": "Le collègue silencieux en télétravail",
      "figures": [],
      "question": "RÉACTION D : Vous demandez à son responsable direct de lui fixer un entretien pour clarifier les procédures.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "B",
      "explanation": "Score attendu : -\nEscalade sans dialogue direct. Vous déléguez le problème au lieu de prendre l'initiative de collaborer vous-même."
    },
    {
      "id": "sjt_s02_ra",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 2 · Réaction A",
      "set_id": "sjt_s02",
      "situation": "Vous coordonnez un projet de digitalisation qui implique le service informatique et le service clientèle. Les deux services ne sont pas d'accord sur les priorités : l'IT veut d'abord sécuriser l'infrastructure, tandis que le service clientèle veut lancer rapidement le nouveau portail en ligne. Les échanges par e-mail deviennent de plus en plus tendus.",
      "situation_title": "Conflit de priorités entre services",
      "figures": [],
      "question": "RÉACTION A : Vous organisez une réunion conjointe pour comprendre les contraintes de chacun et construire ensemble un planning qui intègre les deux priorités.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "E",
      "explanation": "Score attendu : ++\nActif, dialogue direct entre les parties, co-construction d'une solution et mise en place d'un cadre structuré (planning commun)."
    },
    {
      "id": "sjt_s02_rb",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 2 · Réaction B",
      "set_id": "sjt_s02",
      "situation": "Vous coordonnez un projet de digitalisation qui implique le service informatique et le service clientèle. Les deux services ne sont pas d'accord sur les priorités : l'IT veut d'abord sécuriser l'infrastructure, tandis que le service clientèle veut lancer rapidement le nouveau portail en ligne. Les échanges par e-mail deviennent de plus en plus tendus.",
      "situation_title": "Conflit de priorités entre services",
      "figures": [],
      "question": "RÉACTION B : Vous décidez vous-même de l'ordre des priorités et communiquez votre décision aux deux services par e-mail.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "A",
      "explanation": "Score attendu : --\nVous imposez une décision sans consulter ni impliquer les parties concernées. Aucune collaboration ni dialogue."
    },
    {
      "id": "sjt_s02_rc",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 2 · Réaction C",
      "set_id": "sjt_s02",
      "situation": "Vous coordonnez un projet de digitalisation qui implique le service informatique et le service clientèle. Les deux services ne sont pas d'accord sur les priorités : l'IT veut d'abord sécuriser l'infrastructure, tandis que le service clientèle veut lancer rapidement le nouveau portail en ligne. Les échanges par e-mail deviennent de plus en plus tendus.",
      "situation_title": "Conflit de priorités entre services",
      "figures": [],
      "question": "RÉACTION C : Vous envoyez un e-mail aux deux chefs de service en leur demandant de trouver un accord entre eux avant la prochaine réunion de projet.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "B",
      "explanation": "Score attendu : -\nVous vous déchargez de votre rôle de facilitateur. Pas de dialogue direct, pas de facilitation active de la collaboration."
    },
    {
      "id": "sjt_s02_rd",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 2 · Réaction D",
      "set_id": "sjt_s02",
      "situation": "Vous coordonnez un projet de digitalisation qui implique le service informatique et le service clientèle. Les deux services ne sont pas d'accord sur les priorités : l'IT veut d'abord sécuriser l'infrastructure, tandis que le service clientèle veut lancer rapidement le nouveau portail en ligne. Les échanges par e-mail deviennent de plus en plus tendus.",
      "situation_title": "Conflit de priorités entre services",
      "figures": [],
      "question": "RÉACTION D : Vous appelez séparément chaque chef de service pour comprendre leurs contraintes, puis vous proposez un compromis lors de la prochaine réunion d'équipe.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "D",
      "explanation": "Score attendu : +\nDémarche active avec dialogue et empathie. Cependant, les deux services ne co-construisent pas directement ensemble — vous servez d'intermédiaire."
    },
    {
      "id": "sjt_s03_ra",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 3 · Réaction A",
      "set_id": "sjt_s03",
      "situation": "Votre collègue Sophie est experte dans un domaine technique essentiel pour le projet. Elle répond toujours à vos questions quand vous la sollicitez, mais elle ne partage jamais spontanément ses connaissances avec le reste de l'équipe. Plusieurs membres se plaignent de devoir toujours lui demander les mêmes informations.",
      "situation_title": "La collègue qui ne partage pas",
      "figures": [],
      "question": "RÉACTION A : Vous proposez à l'équipe de créer un espace de documentation partagé et suggérez à Sophie d'y contribuer. Vous commencez vous-même par y déposer vos propres connaissances pour montrer l'exemple.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "E",
      "explanation": "Score attendu : ++\nActif, dialogue avec l'équipe, co-construction d'un outil partagé, durable et structuré. Vous montrez l'exemple (indicateur clé du niveau 2)."
    },
    {
      "id": "sjt_s03_rb",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 3 · Réaction B",
      "set_id": "sjt_s03",
      "situation": "Votre collègue Sophie est experte dans un domaine technique essentiel pour le projet. Elle répond toujours à vos questions quand vous la sollicitez, mais elle ne partage jamais spontanément ses connaissances avec le reste de l'équipe. Plusieurs membres se plaignent de devoir toujours lui demander les mêmes informations.",
      "situation_title": "La collègue qui ne partage pas",
      "figures": [],
      "question": "RÉACTION B : Vous en parlez directement à Sophie, lui expliquez l'impact sur l'équipe et lui demandez si elle serait d'accord pour organiser de courtes sessions de partage de connaissances.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "D",
      "explanation": "Score attendu : +\nActif avec dialogue direct et approche collaborative. Mais la solution reste ponctuelle et dépend de l'acceptation de Sophie."
    },
    {
      "id": "sjt_s03_rc",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 3 · Réaction C",
      "set_id": "sjt_s03",
      "situation": "Votre collègue Sophie est experte dans un domaine technique essentiel pour le projet. Elle répond toujours à vos questions quand vous la sollicitez, mais elle ne partage jamais spontanément ses connaissances avec le reste de l'équipe. Plusieurs membres se plaignent de devoir toujours lui demander les mêmes informations.",
      "situation_title": "La collègue qui ne partage pas",
      "figures": [],
      "question": "RÉACTION C : Vous signalez le problème à votre responsable et lui demandez d'intervenir auprès de Sophie.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "B",
      "explanation": "Score attendu : -\nEscalade sans avoir d'abord tenté le dialogue direct avec Sophie. Vous ne prenez pas l'initiative de résoudre le problème collaborativement."
    },
    {
      "id": "sjt_s03_rd",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 3 · Réaction D",
      "set_id": "sjt_s03",
      "situation": "Votre collègue Sophie est experte dans un domaine technique essentiel pour le projet. Elle répond toujours à vos questions quand vous la sollicitez, mais elle ne partage jamais spontanément ses connaissances avec le reste de l'équipe. Plusieurs membres se plaignent de devoir toujours lui demander les mêmes informations.",
      "situation_title": "La collègue qui ne partage pas",
      "figures": [],
      "question": "RÉACTION D : Vous compilez vous-même les informations que Sophie vous a partagées et les envoyez à toute l'équipe par e-mail.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "C",
      "explanation": "Score attendu : +/-\nActif et utile à court terme, mais unilatéral. Ne résout pas la cause du problème et ne stimule pas Sophie à collaborer davantage."
    },
    {
      "id": "sjt_s04_ra",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 4 · Réaction A",
      "set_id": "sjt_s04",
      "situation": "Lors d'un comité de pilotage, un partenaire externe critique vivement la qualité du dernier livrable de votre équipe. Votre collaborateur Marc, qui a rédigé le document, est présent et visiblement affecté. Le partenaire demande une révision complète du document.",
      "situation_title": "Critique en comité de pilotage",
      "figures": [],
      "question": "RÉACTION A : Vous remerciez le partenaire pour son retour, puis proposez de planifier une réunion de travail avec lui et Marc pour identifier ensemble les points à améliorer et définir les priorités de révision.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "E",
      "explanation": "Score attendu : ++\nActif, dialogue direct, co-construction avec toutes les parties prenantes, et mise en place d'un cadre structuré pour la révision."
    },
    {
      "id": "sjt_s04_rb",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 4 · Réaction B",
      "set_id": "sjt_s04",
      "situation": "Lors d'un comité de pilotage, un partenaire externe critique vivement la qualité du dernier livrable de votre équipe. Votre collaborateur Marc, qui a rédigé le document, est présent et visiblement affecté. Le partenaire demande une révision complète du document.",
      "situation_title": "Critique en comité de pilotage",
      "figures": [],
      "question": "RÉACTION B : Vous défendez publiquement le travail de Marc et demandez au partenaire de formuler ses critiques par écrit pour une prochaine discussion.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "B",
      "explanation": "Score attendu : -\nBien que vous souteniez votre collègue, vous bloquez le dialogue constructif en réunion. Le report par écrit freine la collaboration."
    },
    {
      "id": "sjt_s04_rc",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 4 · Réaction C",
      "set_id": "sjt_s04",
      "situation": "Lors d'un comité de pilotage, un partenaire externe critique vivement la qualité du dernier livrable de votre équipe. Votre collaborateur Marc, qui a rédigé le document, est présent et visiblement affecté. Le partenaire demande une révision complète du document.",
      "situation_title": "Critique en comité de pilotage",
      "figures": [],
      "question": "RÉACTION C : Vous acceptez les critiques sans discussion et promettez de tout refaire dans la semaine.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "A",
      "explanation": "Score attendu : --\nSoumission passive. Aucune évaluation critique, aucun dialogue, aucune implication de Marc. Vous ne défendez ni votre équipe ni la qualité du travail."
    },
    {
      "id": "sjt_s04_rd",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 4 · Réaction D",
      "set_id": "sjt_s04",
      "situation": "Lors d'un comité de pilotage, un partenaire externe critique vivement la qualité du dernier livrable de votre équipe. Votre collaborateur Marc, qui a rédigé le document, est présent et visiblement affecté. Le partenaire demande une révision complète du document.",
      "situation_title": "Critique en comité de pilotage",
      "figures": [],
      "question": "RÉACTION D : Après la réunion, vous discutez avec Marc pour comprendre ce qui s'est passé et le rassurer, puis vous contactez le partenaire pour clarifier ses attentes précises.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "D",
      "explanation": "Score attendu : +\nActif, dialogue avec les deux parties, empathique. Mais les échanges sont séquentiels — pas de co-construction directe entre Marc et le partenaire."
    },
    {
      "id": "sjt_s05_ra",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 5 · Réaction A",
      "set_id": "sjt_s05",
      "situation": "Votre institution migre vers un nouvel outil de gestion de projet. Plusieurs collègues expérimentés résistent au changement et continuent d'utiliser l'ancien système. Ils disent que le nouvel outil est « inutilement compliqué » et qu'ils « n'ont pas le temps d'apprendre ».",
      "situation_title": "Résistance au nouvel outil",
      "figures": [],
      "question": "RÉACTION A : Vous proposez d'organiser des sessions de formation courtes et pratiques, et vous vous portez volontaire pour être la personne de référence dans votre service.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "E",
      "explanation": "Score attendu : ++\nActif, dialogue, collaboratif, et structuré et durable (sessions + rôle de référent). Vous montrez l'exemple et facilitez la transition."
    },
    {
      "id": "sjt_s05_rb",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 5 · Réaction B",
      "set_id": "sjt_s05",
      "situation": "Votre institution migre vers un nouvel outil de gestion de projet. Plusieurs collègues expérimentés résistent au changement et continuent d'utiliser l'ancien système. Ils disent que le nouvel outil est « inutilement compliqué » et qu'ils « n'ont pas le temps d'apprendre ».",
      "situation_title": "Résistance au nouvel outil",
      "figures": [],
      "question": "RÉACTION B : Vous demandez à la direction de rendre l'utilisation du nouvel outil obligatoire et de fixer une date limite.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "B",
      "explanation": "Score attendu : -\nEscalade vers la hiérarchie avec une approche coercitive. Pas de dialogue ni de collaboration avec les collègues concernés."
    },
    {
      "id": "sjt_s05_rc",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 5 · Réaction C",
      "set_id": "sjt_s05",
      "situation": "Votre institution migre vers un nouvel outil de gestion de projet. Plusieurs collègues expérimentés résistent au changement et continuent d'utiliser l'ancien système. Ils disent que le nouvel outil est « inutilement compliqué » et qu'ils « n'ont pas le temps d'apprendre ».",
      "situation_title": "Résistance au nouvel outil",
      "figures": [],
      "question": "RÉACTION C : Vous comprenez leur frustration et ne les forcez pas. Chacun avancera à son rythme.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "A",
      "explanation": "Score attendu : --\nPassivité totale. Le problème ne se résoudra pas tout seul et freine la transition de toute l'équipe."
    },
    {
      "id": "sjt_s05_rd",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 5 · Réaction D",
      "set_id": "sjt_s05",
      "situation": "Votre institution migre vers un nouvel outil de gestion de projet. Plusieurs collègues expérimentés résistent au changement et continuent d'utiliser l'ancien système. Ils disent que le nouvel outil est « inutilement compliqué » et qu'ils « n'ont pas le temps d'apprendre ».",
      "situation_title": "Résistance au nouvel outil",
      "figures": [],
      "question": "RÉACTION D : Vous créez un guide rapide et le partagez avec les collègues réticents, en leur proposant de leur montrer individuellement comment l'outil peut simplifier leurs tâches quotidiennes.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "D",
      "explanation": "Score attendu : +\nActif, aide concrète et personnalisée. Mais l'approche reste individuelle — pas de dynamique collective ni de cadre structuré."
    },
    {
      "id": "sjt_s06_ra",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 6 · Réaction A",
      "set_id": "sjt_s06",
      "situation": "Deux membres de votre équipe projet, Ahmed et Laura, sont en désaccord sur la méthodologie à suivre pour analyser les données du projet. Ahmed préfère une approche quantitative, Laura une approche qualitative. La tension est palpable lors des réunions et les autres membres de l'équipe n'osent plus donner leur avis.",
      "situation_title": "Désaccord méthodologique",
      "figures": [],
      "question": "RÉACTION A : Vous organisez un atelier de travail où Ahmed et Laura présentent chacun leur approche, puis l'équipe entière évalue ensemble les avantages et inconvénients pour aboutir à une décision commune.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "E",
      "explanation": "Score attendu : ++\nActif, dialogue direct entre les parties, co-construction collective avec toute l'équipe, cadre structuré (atelier). Résout le conflit durablement."
    },
    {
      "id": "sjt_s06_rb",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 6 · Réaction B",
      "set_id": "sjt_s06",
      "situation": "Deux membres de votre équipe projet, Ahmed et Laura, sont en désaccord sur la méthodologie à suivre pour analyser les données du projet. Ahmed préfère une approche quantitative, Laura une approche qualitative. La tension est palpable lors des réunions et les autres membres de l'équipe n'osent plus donner leur avis.",
      "situation_title": "Désaccord méthodologique",
      "figures": [],
      "question": "RÉACTION B : Vous prenez Ahmed et Laura à part séparément pour écouter leurs arguments, puis vous tranchez en faveur de l'approche qui vous semble la plus adaptée.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "C",
      "explanation": "Score attendu : +/-\nActif avec écoute, mais la décision est unilatérale. Ahmed ou Laura peut se sentir non entendu(e), le conflit n'est pas résolu collaborativement."
    },
    {
      "id": "sjt_s06_rc",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 6 · Réaction C",
      "set_id": "sjt_s06",
      "situation": "Deux membres de votre équipe projet, Ahmed et Laura, sont en désaccord sur la méthodologie à suivre pour analyser les données du projet. Ahmed préfère une approche quantitative, Laura une approche qualitative. La tension est palpable lors des réunions et les autres membres de l'équipe n'osent plus donner leur avis.",
      "situation_title": "Désaccord méthodologique",
      "figures": [],
      "question": "RÉACTION C : Vous laissez le conflit se résoudre de lui-même car Ahmed et Laura sont des professionnels compétents qui trouveront un terrain d'entente.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "A",
      "explanation": "Score attendu : --\nPassivité face à un conflit qui s'aggrave et paralyse l'équipe. Les autres membres n'osent plus s'exprimer — la collaboration est bloquée."
    },
    {
      "id": "sjt_s06_rd",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 6 · Réaction D",
      "set_id": "sjt_s06",
      "situation": "Deux membres de votre équipe projet, Ahmed et Laura, sont en désaccord sur la méthodologie à suivre pour analyser les données du projet. Ahmed préfère une approche quantitative, Laura une approche qualitative. La tension est palpable lors des réunions et les autres membres de l'équipe n'osent plus donner leur avis.",
      "situation_title": "Désaccord méthodologique",
      "figures": [],
      "question": "RÉACTION D : Vous envoyez un e-mail à toute l'équipe en proposant un vote anonyme sur la méthodologie à adopter.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "B",
      "explanation": "Score attendu : -\nÉvite le dialogue direct. Un vote ne résout pas le conflit sous-jacent et risque de diviser davantage l'équipe."
    },
    {
      "id": "sjt_s07_ra",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 7 · Réaction A",
      "set_id": "sjt_s07",
      "situation": "Votre équipe fonctionne en mode hybride. Vous remarquez que les décisions importantes sont souvent prises de manière informelle entre les collègues présents au bureau, sans inclure ceux qui télétravaillent ce jour-là. Un collègue en télétravail vous dit qu'il se sent mis à l'écart.",
      "situation_title": "Décisions sans les télétravailleurs",
      "figures": [],
      "question": "RÉACTION A : Vous proposez à l'équipe d'instaurer une règle : toute décision importante est discutée lors des réunions hebdomadaires où tout le monde est connecté, et documentée sur la plateforme collaborative.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "E",
      "explanation": "Score attendu : ++\nActif, dialogue avec l'équipe, co-construction d'une nouvelle règle de fonctionnement, cadre structuré et durable qui protège l'inclusion."
    },
    {
      "id": "sjt_s07_rb",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 7 · Réaction B",
      "set_id": "sjt_s07",
      "situation": "Votre équipe fonctionne en mode hybride. Vous remarquez que les décisions importantes sont souvent prises de manière informelle entre les collègues présents au bureau, sans inclure ceux qui télétravaillent ce jour-là. Un collègue en télétravail vous dit qu'il se sent mis à l'écart.",
      "situation_title": "Décisions sans les télétravailleurs",
      "figures": [],
      "question": "RÉACTION B : Vous envoyez un e-mail récapitulatif après chaque journée au bureau pour tenir les télétravailleurs informés des discussions.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "C",
      "explanation": "Score attendu : +/-\nActif et utile, mais unilatéral et palliatif. Ne change pas le processus décisionnel qui exclut les télétravailleurs."
    },
    {
      "id": "sjt_s07_rc",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 7 · Réaction C",
      "set_id": "sjt_s07",
      "situation": "Votre équipe fonctionne en mode hybride. Vous remarquez que les décisions importantes sont souvent prises de manière informelle entre les collègues présents au bureau, sans inclure ceux qui télétravaillent ce jour-là. Un collègue en télétravail vous dit qu'il se sent mis à l'écart.",
      "situation_title": "Décisions sans les télétravailleurs",
      "figures": [],
      "question": "RÉACTION C : Vous dites au collègue de venir plus souvent au bureau s'il veut être au courant des décisions.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "A",
      "explanation": "Score attendu : --\nRejette la responsabilité sur le collègue, aucune empathie, nie le problème structurel. Va à l'encontre de la collaboration en contexte hybride."
    },
    {
      "id": "sjt_s07_rd",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 7 · Réaction D",
      "set_id": "sjt_s07",
      "situation": "Votre équipe fonctionne en mode hybride. Vous remarquez que les décisions importantes sont souvent prises de manière informelle entre les collègues présents au bureau, sans inclure ceux qui télétravaillent ce jour-là. Un collègue en télétravail vous dit qu'il se sent mis à l'écart.",
      "situation_title": "Décisions sans les télétravailleurs",
      "figures": [],
      "question": "RÉACTION D : Vous en discutez avec votre responsable pour qu'il rappelle les bonnes pratiques du travail hybride à toute l'équipe.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "B",
      "explanation": "Score attendu : -\nEscalade sans initiative directe. Vous auriez pu prendre l'initiative de proposer une solution à l'équipe vous-même."
    },
    {
      "id": "sjt_s08_ra",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 8 · Réaction A",
      "set_id": "sjt_s08",
      "situation": "Vous êtes désigné pour piloter un nouveau projet qui nécessite la collaboration de quatre services différents qui n'ont jamais travaillé ensemble. Lors de la première réunion, chaque représentant défend uniquement les intérêts de son service et personne ne semble voir l'objectif commun du projet.",
      "situation_title": "Premier projet transversal",
      "figures": [],
      "question": "RÉACTION A : Vous reformulez clairement l'objectif commun du projet, puis invitez chaque service à identifier comment il peut contribuer. Vous proposez de co-construire ensemble une charte de projet avec des rôles, responsabilités et règles de fonctionnement.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "E",
      "explanation": "Score attendu : ++\nActif, dialogue, co-construction collective, cadre structuré et durable (charte). Recentre sur l'objectif commun et crée une base de collaboration."
    },
    {
      "id": "sjt_s08_rb",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 8 · Réaction B",
      "set_id": "sjt_s08",
      "situation": "Vous êtes désigné pour piloter un nouveau projet qui nécessite la collaboration de quatre services différents qui n'ont jamais travaillé ensemble. Lors de la première réunion, chaque représentant défend uniquement les intérêts de son service et personne ne semble voir l'objectif commun du projet.",
      "situation_title": "Premier projet transversal",
      "figures": [],
      "question": "RÉACTION B : Vous préparez vous-même un plan de projet détaillé avec les rôles de chacun et le présentez à la prochaine réunion pour validation.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "C",
      "explanation": "Score attendu : +/-\nActif, mais unilatéral. Les services ne sont pas impliqués dans la construction du plan et risquent de ne pas s'y reconnaître."
    },
    {
      "id": "sjt_s08_rc",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 8 · Réaction C",
      "set_id": "sjt_s08",
      "situation": "Vous êtes désigné pour piloter un nouveau projet qui nécessite la collaboration de quatre services différents qui n'ont jamais travaillé ensemble. Lors de la première réunion, chaque représentant défend uniquement les intérêts de son service et personne ne semble voir l'objectif commun du projet.",
      "situation_title": "Premier projet transversal",
      "figures": [],
      "question": "RÉACTION C : Vous reportez la prochaine réunion en attendant que les esprits se calment et que chacun ait eu le temps de réfléchir.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "A",
      "explanation": "Score attendu : --\nPassivité et évitement. Reporter ne résout rien — les tensions risquent de s'aggraver sans cadre de collaboration."
    },
    {
      "id": "sjt_s08_rd",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 8 · Réaction D",
      "set_id": "sjt_s08",
      "situation": "Vous êtes désigné pour piloter un nouveau projet qui nécessite la collaboration de quatre services différents qui n'ont jamais travaillé ensemble. Lors de la première réunion, chaque représentant défend uniquement les intérêts de son service et personne ne semble voir l'objectif commun du projet.",
      "situation_title": "Premier projet transversal",
      "figures": [],
      "question": "RÉACTION D : Vous organisez des rencontres bilatérales avec chaque chef de service pour comprendre leurs besoins et contraintes, puis vous proposez un compromis à la réunion suivante.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "D",
      "explanation": "Score attendu : +\nActif, dialogue, cherche à comprendre. Mais les services ne co-construisent pas directement ensemble — vous restez l'intermédiaire."
    },
    {
      "id": "sjt_s09_ra",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 9 · Réaction A",
      "set_id": "sjt_s09",
      "situation": "Votre collègue Thomas semble débordé : il arrive tôt, part tard, et a annulé sa participation à plusieurs réunions d'équipe. Quand vous lui demandez comment il va, il répond « ça va, j'ai juste beaucoup de travail ». D'autres collègues ont remarqué la situation mais personne n'agit.",
      "situation_title": "Collègue en surcharge",
      "figures": [],
      "question": "RÉACTION A : Vous invitez Thomas à prendre un café, vous l'écoutez sans juger, et vous lui proposez d'aborder ensemble la question de la répartition des tâches lors de la prochaine réunion d'équipe.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "E",
      "explanation": "Score attendu : ++\nActif, dialogue direct et empathique, solution collaborative (redistribution en équipe), et cadre structuré (réunion d'équipe)."
    },
    {
      "id": "sjt_s09_rb",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 9 · Réaction B",
      "set_id": "sjt_s09",
      "situation": "Votre collègue Thomas semble débordé : il arrive tôt, part tard, et a annulé sa participation à plusieurs réunions d'équipe. Quand vous lui demandez comment il va, il répond « ça va, j'ai juste beaucoup de travail ». D'autres collègues ont remarqué la situation mais personne n'agit.",
      "situation_title": "Collègue en surcharge",
      "figures": [],
      "question": "RÉACTION B : Vous informez votre responsable que Thomas est en surcharge et qu'il faudrait intervenir.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "B",
      "explanation": "Score attendu : -\nEscalade sans avoir d'abord proposé votre aide directement à Thomas. Vous ne prenez pas l'initiative de collaborer."
    },
    {
      "id": "sjt_s09_rc",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 9 · Réaction C",
      "set_id": "sjt_s09",
      "situation": "Votre collègue Thomas semble débordé : il arrive tôt, part tard, et a annulé sa participation à plusieurs réunions d'équipe. Quand vous lui demandez comment il va, il répond « ça va, j'ai juste beaucoup de travail ». D'autres collègues ont remarqué la situation mais personne n'agit.",
      "situation_title": "Collègue en surcharge",
      "figures": [],
      "question": "RÉACTION C : Vous respectez sa réponse et n'insistez pas — chacun gère sa charge de travail comme il l'entend.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "A",
      "explanation": "Score attendu : --\nPassivité face à un collègue en difficulté visible. Ne pas agir alors que le problème est connu va à l'encontre de la collaboration."
    },
    {
      "id": "sjt_s09_rd",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 9 · Réaction D",
      "set_id": "sjt_s09",
      "situation": "Votre collègue Thomas semble débordé : il arrive tôt, part tard, et a annulé sa participation à plusieurs réunions d'équipe. Quand vous lui demandez comment il va, il répond « ça va, j'ai juste beaucoup de travail ». D'autres collègues ont remarqué la situation mais personne n'agit.",
      "situation_title": "Collègue en surcharge",
      "figures": [],
      "question": "RÉACTION D : Vous proposez spontanément de l'aider sur une de ses tâches urgentes pour alléger sa charge cette semaine.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "D",
      "explanation": "Score attendu : +\nActif, solidaire et empathique. Mais la solution est ponctuelle et ne s'attaque pas à la cause structurelle de la surcharge."
    },
    {
      "id": "sjt_s10_ra",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 10 · Réaction A",
      "set_id": "sjt_s10",
      "situation": "Votre projet vient de se terminer avec succès. Certains aspects se sont très bien passés, d'autres moins. Votre responsable vous demande de faire un bilan. Plusieurs membres de l'équipe semblent pressés de passer au projet suivant et ne voient pas l'intérêt d'un retour d'expérience.",
      "situation_title": "Retour d'expérience de fin de projet",
      "figures": [],
      "question": "RÉACTION A : Vous organisez une session de retour d'expérience structurée. Vous expliquez d'abord son utilité, puis invitez chacun à partager ce qui a fonctionné et ce qui pourrait être amélioré. Vous documentez les leçons apprises pour les futurs projets.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "E",
      "explanation": "Score attendu : ++\nActif, dialogue, participation collective, cadre structuré et durable (documentation des leçons). Encourage le partage de connaissances."
    },
    {
      "id": "sjt_s10_rb",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 10 · Réaction B",
      "set_id": "sjt_s10",
      "situation": "Votre projet vient de se terminer avec succès. Certains aspects se sont très bien passés, d'autres moins. Votre responsable vous demande de faire un bilan. Plusieurs membres de l'équipe semblent pressés de passer au projet suivant et ne voient pas l'intérêt d'un retour d'expérience.",
      "situation_title": "Retour d'expérience de fin de projet",
      "figures": [],
      "question": "RÉACTION B : Vous rédigez vous-même le bilan sur base de vos observations et le partagez avec l'équipe pour commentaires par e-mail.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "C",
      "explanation": "Score attendu : +/-\nActif mais unilatéral. Les collègues ne sont pas impliqués dans la réflexion collective — le partage de perspectives est limité."
    },
    {
      "id": "sjt_s10_rc",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 10 · Réaction C",
      "set_id": "sjt_s10",
      "situation": "Votre projet vient de se terminer avec succès. Certains aspects se sont très bien passés, d'autres moins. Votre responsable vous demande de faire un bilan. Plusieurs membres de l'équipe semblent pressés de passer au projet suivant et ne voient pas l'intérêt d'un retour d'expérience.",
      "situation_title": "Retour d'expérience de fin de projet",
      "figures": [],
      "question": "RÉACTION C : Vous laissez tomber le retour d'expérience puisque l'équipe n'est pas motivée. Vous informez votre responsable que le timing ne s'y prête pas.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "A",
      "explanation": "Score attendu : --\nPassivité. Renoncer à un retour d'expérience fait perdre une opportunité d'apprentissage collectif et de partage de bonnes pratiques."
    },
    {
      "id": "sjt_s10_rd",
      "type": "sjt",
      "source": "BOSA_SJT",
      "book_ref": "Situation 10 · Réaction D",
      "set_id": "sjt_s10",
      "situation": "Votre projet vient de se terminer avec succès. Certains aspects se sont très bien passés, d'autres moins. Votre responsable vous demande de faire un bilan. Plusieurs membres de l'équipe semblent pressés de passer au projet suivant et ne voient pas l'intérêt d'un retour d'expérience.",
      "situation_title": "Retour d'expérience de fin de projet",
      "figures": [],
      "question": "RÉACTION D : Vous envoyez un questionnaire en ligne à chaque membre de l'équipe pour recueillir anonymement les retours, puis vous compilez les résultats.",
      "options": [
        {
          "letter": "A",
          "text": "Très inapproprié (--)"
        },
        {
          "letter": "B",
          "text": "Inapproprié (-)"
        },
        {
          "letter": "C",
          "text": "Neutre (+/-)"
        },
        {
          "letter": "D",
          "text": "Approprié (+)"
        },
        {
          "letter": "E",
          "text": "Très approprié (++)"
        }
      ],
      "correct": "D",
      "explanation": "Score attendu : +\nActif, implique les autres et peut encourager l'expression de ceux qui n'osent pas parler. Mais pas de dialogue direct ni de co-construction collective."
    },
    {
      "id": "bosa_num_q1",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q1",
      "set_id": null,
      "figures": [],
      "question": "Si un projet dispose d'un budget de 240 000 € réparti également sur 8 mois, quel est le budget mensuel ?",
      "options": [
        {
          "letter": "A",
          "text": "28 000 €"
        },
        {
          "letter": "B",
          "text": "30 000 €"
        },
        {
          "letter": "C",
          "text": "32 000 €"
        },
        {
          "letter": "D",
          "text": "34 000 €"
        },
        {
          "letter": "E",
          "text": "36 000 €"
        }
      ],
      "correct": "B",
      "explanation": "240 000 ÷ 8 = 30 000 €."
    },
    {
      "id": "bosa_num_q2",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q2",
      "set_id": null,
      "figures": [],
      "question": "Un service public compte 180 employés. Si 20% travaillent à temps partiel, combien travaillent à temps plein ?",
      "options": [
        {
          "letter": "A",
          "text": "36"
        },
        {
          "letter": "B",
          "text": "124"
        },
        {
          "letter": "C",
          "text": "136"
        },
        {
          "letter": "D",
          "text": "144"
        },
        {
          "letter": "E",
          "text": "150"
        }
      ],
      "correct": "D",
      "explanation": "20% à temps partiel → 80% à temps plein. 180 × 0,80 = 144."
    },
    {
      "id": "bosa_num_q3",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q3",
      "set_id": null,
      "figures": [],
      "question": "Si 3 collaborateurs peuvent traiter 45 dossiers en une semaine, combien de dossiers 5 collaborateurs peuvent-ils traiter dans le même délai (au même rythme) ?",
      "options": [
        {
          "letter": "A",
          "text": "60"
        },
        {
          "letter": "B",
          "text": "65"
        },
        {
          "letter": "C",
          "text": "70"
        },
        {
          "letter": "D",
          "text": "75"
        },
        {
          "letter": "E",
          "text": "80"
        }
      ],
      "correct": "D",
      "explanation": "45 ÷ 3 = 15 dossiers par collaborateur par semaine. 15 × 5 = 75."
    },
    {
      "id": "bosa_num_q4",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q4",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n3, 6, 12, 24, __",
      "options": [
        {
          "letter": "A",
          "text": "30"
        },
        {
          "letter": "B",
          "text": "36"
        },
        {
          "letter": "C",
          "text": "42"
        },
        {
          "letter": "D",
          "text": "48"
        },
        {
          "letter": "E",
          "text": "54"
        }
      ],
      "correct": "D",
      "explanation": "Chaque terme est multiplié par 2 : 3→6→12→24→48."
    },
    {
      "id": "bosa_num_q5",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q5",
      "set_id": null,
      "figures": [],
      "question": "Le projet Alpha coûte 125 000 € et dure 6 mois. Le projet Beta coûte 180 000 € et dure 9 mois. Quel projet a le coût mensuel le plus bas ?",
      "options": [
        {
          "letter": "A",
          "text": "Projet Alpha (20 833 €/mois)"
        },
        {
          "letter": "B",
          "text": "Projet Beta (20 000 €/mois)"
        },
        {
          "letter": "C",
          "text": "Les deux projets ont le même coût mensuel"
        },
        {
          "letter": "D",
          "text": "On ne peut pas le déterminer avec ces informations"
        },
        {
          "letter": "E",
          "text": "Projet Alpha (25 000 €/mois)"
        }
      ],
      "correct": "B",
      "explanation": "Alpha : 125 000 ÷ 6 = 20 833 €/mois. Beta : 180 000 ÷ 9 = 20 000 €/mois. Beta a le coût mensuel le plus bas."
    },
    {
      "id": "bosa_num_q6",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q6",
      "set_id": null,
      "figures": [],
      "question": "Le nombre de réclamations traitées par un service est passé de 1 250 au premier trimestre à 1 450 au deuxième trimestre. Quel est le pourcentage d'augmentation ?",
      "options": [
        {
          "letter": "A",
          "text": "12,0%"
        },
        {
          "letter": "B",
          "text": "13,8%"
        },
        {
          "letter": "C",
          "text": "16,0%"
        },
        {
          "letter": "D",
          "text": "18,2%"
        },
        {
          "letter": "E",
          "text": "20,0%"
        }
      ],
      "correct": "C",
      "explanation": "Augmentation = 1 450 − 1 250 = 200. Pourcentage = (200 ÷ 1 250) × 100 = 16,0%."
    },
    {
      "id": "bosa_num_q7",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q7",
      "set_id": null,
      "figures": [],
      "question": "Un projet est planifié sur 12 mois avec un budget total de 360 000 €. Après 4 mois, 40% du budget a été dépensé. Si les dépenses continuent au même rythme mensuel, de combien le projet dépassera-t-il son budget à la fin des 12 mois ?",
      "options": [
        {
          "letter": "A",
          "text": "0 € (dans le budget)"
        },
        {
          "letter": "B",
          "text": "36 000 €"
        },
        {
          "letter": "C",
          "text": "72 000 €"
        },
        {
          "letter": "D",
          "text": "108 000 €"
        },
        {
          "letter": "E",
          "text": "144 000 €"
        }
      ],
      "correct": "C",
      "explanation": "40% de 360 000 = 144 000 € dépensés en 4 mois → 36 000 €/mois.\nSur 12 mois : 36 000 × 12 = 432 000 €.\nDépassement : 432 000 − 360 000 = 72 000 €."
    },
    {
      "id": "bosa_num_q8",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q8",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n2, 5, 11, 23, __",
      "options": [
        {
          "letter": "A",
          "text": "35"
        },
        {
          "letter": "B",
          "text": "42"
        },
        {
          "letter": "C",
          "text": "47"
        },
        {
          "letter": "D",
          "text": "53"
        },
        {
          "letter": "E",
          "text": "59"
        }
      ],
      "correct": "C",
      "explanation": "Règle : ×2 puis +1. 2→5 (×2+1), 5→11 (×2+1), 11→23 (×2+1), 23→47 (×2+1)."
    },
    {
      "id": "bosa_num_q9",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q9",
      "set_id": null,
      "figures": [],
      "question": "Le tableau suivant montre les heures prestées par projet au cours de deux trimestres :\n\nProjet    |  T1  |  T2\nAlpha     | 450  | 520\nBeta      | 380  | 410\nGamma     | 290  | 350\n\nQuel projet a connu la plus forte augmentation en pourcentage entre T1 et T2 ?",
      "options": [
        {
          "letter": "A",
          "text": "Alpha"
        },
        {
          "letter": "B",
          "text": "Beta"
        },
        {
          "letter": "C",
          "text": "Gamma"
        },
        {
          "letter": "D",
          "text": "Alpha et Beta ex-aequo"
        },
        {
          "letter": "E",
          "text": "Les trois sont identiques"
        }
      ],
      "correct": "C",
      "explanation": "Alpha : (520−450) ÷ 450 = 15,6%\nBeta : (410−380) ÷ 380 = 7,9%\nGamma : (350−290) ÷ 290 = 20,7%\nGamma a la plus forte augmentation.",
      "question_html": "<p>Le tableau suivant montre les heures prestées par projet au cours de deux trimestres :</p><table class='q-table'><tr><th>Projet</th><th>T1</th><th>T2</th></tr><tr><td>Alpha</td><td>450</td><td>520</td></tr><tr><td>Beta</td><td>380</td><td>410</td></tr><tr><td>Gamma</td><td>290</td><td>350</td></tr></table><p>Quel projet a connu la plus forte augmentation en pourcentage entre T1 et T2 ?</p>"
    },
    {
      "id": "bosa_num_q10",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q10",
      "set_id": null,
      "figures": [],
      "question": "Un service traite 800 dossiers par mois. Suite à une réorganisation, la productivité augmente de 15%. Suite à une deuxième optimisation, la productivité augmente encore de 10% par rapport au nouveau niveau. Combien de dossiers le service traite-t-il maintenant par mois ?",
      "options": [
        {
          "letter": "A",
          "text": "920"
        },
        {
          "letter": "B",
          "text": "1 000"
        },
        {
          "letter": "C",
          "text": "1 012"
        },
        {
          "letter": "D",
          "text": "1 020"
        },
        {
          "letter": "E",
          "text": "1 100"
        }
      ],
      "correct": "C",
      "explanation": "Première augmentation : 800 × 1,15 = 920.\nDeuxième augmentation : 920 × 1,10 = 1 012.\nAttention : les pourcentages ne s'additionnent pas (15% + 10% ≠ 25% de 800)."
    },
    {
      "id": "bosa_num_q11",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q11",
      "set_id": null,
      "figures": [],
      "question": "Un département dispose de 96 000 € pour former ses 12 collaborateurs. Quel montant peut être consacré à chaque formation individuelle ?",
      "options": [
        {
          "letter": "A",
          "text": "7 200 €"
        },
        {
          "letter": "B",
          "text": "8 000 €"
        },
        {
          "letter": "C",
          "text": "8 400 €"
        },
        {
          "letter": "D",
          "text": "9 000 €"
        },
        {
          "letter": "E",
          "text": "9 600 €"
        }
      ],
      "correct": "B",
      "explanation": "96 000 ÷ 12 = 8 000 € par collaborateur."
    },
    {
      "id": "bosa_num_q12",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q12",
      "set_id": null,
      "figures": [],
      "question": "Sur 450 dossiers reçus, 18% ont été jugés incomplets. Combien de dossiers sont complets ?",
      "options": [
        {
          "letter": "A",
          "text": "369"
        },
        {
          "letter": "B",
          "text": "378"
        },
        {
          "letter": "C",
          "text": "381"
        },
        {
          "letter": "D",
          "text": "396"
        },
        {
          "letter": "E",
          "text": "405"
        }
      ],
      "correct": "A",
      "explanation": "Dossiers incomplets : 450 × 0,18 = 81. Complets : 450 − 81 = 369."
    },
    {
      "id": "bosa_num_q13",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q13",
      "set_id": null,
      "figures": [],
      "question": "Une imprimante produit 240 pages en 8 minutes. Combien de pages produit-elle en 15 minutes au même rythme ?",
      "options": [
        {
          "letter": "A",
          "text": "360"
        },
        {
          "letter": "B",
          "text": "400"
        },
        {
          "letter": "C",
          "text": "420"
        },
        {
          "letter": "D",
          "text": "450"
        },
        {
          "letter": "E",
          "text": "480"
        }
      ],
      "correct": "D",
      "explanation": "240 ÷ 8 = 30 pages/minute. 30 × 15 = 450 pages."
    },
    {
      "id": "bosa_num_q14",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q14",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n5, 10, 20, 40, __",
      "options": [
        {
          "letter": "A",
          "text": "60"
        },
        {
          "letter": "B",
          "text": "70"
        },
        {
          "letter": "C",
          "text": "80"
        },
        {
          "letter": "D",
          "text": "90"
        },
        {
          "letter": "E",
          "text": "100"
        }
      ],
      "correct": "C",
      "explanation": "Chaque terme est multiplié par 2 : 5→10→20→40→80."
    },
    {
      "id": "bosa_num_q15",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q15",
      "set_id": null,
      "figures": [],
      "question": "Multiplier par 0,1 revient à diviser par combien ?",
      "options": [
        {
          "letter": "A",
          "text": "0,1"
        },
        {
          "letter": "B",
          "text": "1"
        },
        {
          "letter": "C",
          "text": "5"
        },
        {
          "letter": "D",
          "text": "10"
        },
        {
          "letter": "E",
          "text": "100"
        }
      ],
      "correct": "D",
      "explanation": "Multiplier par 0,1 = diviser par 10. Exemple : 50 × 0,1 = 5 = 50 ÷ 10."
    },
    {
      "id": "bosa_num_q16",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q16",
      "set_id": null,
      "figures": [],
      "question": "Un projet avait un budget initial de 200 000 €. Après révision, le budget est augmenté à 250 000 €. Quel est le pourcentage d'augmentation ?",
      "options": [
        {
          "letter": "A",
          "text": "20%"
        },
        {
          "letter": "B",
          "text": "25%"
        },
        {
          "letter": "C",
          "text": "30%"
        },
        {
          "letter": "D",
          "text": "50%"
        },
        {
          "letter": "E",
          "text": "125%"
        }
      ],
      "correct": "B",
      "explanation": "Augmentation = 50 000. Pourcentage = (50 000 ÷ 200 000) × 100 = 25%."
    },
    {
      "id": "bosa_num_q17",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q17",
      "set_id": null,
      "figures": [],
      "question": "Si P = 12, Q = 15 et R = 18, laquelle de ces expressions a la plus grande valeur ?",
      "options": [
        {
          "letter": "A",
          "text": "P + Q"
        },
        {
          "letter": "B",
          "text": "Q + R"
        },
        {
          "letter": "C",
          "text": "P × 3"
        },
        {
          "letter": "D",
          "text": "R × 2"
        },
        {
          "letter": "E",
          "text": "P + Q + R"
        }
      ],
      "correct": "E",
      "explanation": "P+Q = 27, Q+R = 33, P×3 = 36, R×2 = 36, P+Q+R = 45. La somme des trois est la plus grande."
    },
    {
      "id": "bosa_num_q18",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q18",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n1, 4, 9, 16, __",
      "options": [
        {
          "letter": "A",
          "text": "20"
        },
        {
          "letter": "B",
          "text": "23"
        },
        {
          "letter": "C",
          "text": "25"
        },
        {
          "letter": "D",
          "text": "28"
        },
        {
          "letter": "E",
          "text": "32"
        }
      ],
      "correct": "C",
      "explanation": "Ce sont les carrés parfaits : 1², 2², 3², 4², 5² = 25."
    },
    {
      "id": "bosa_num_q19",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q19",
      "set_id": null,
      "figures": [],
      "question": "(a + 5) × 3 = 36. Quelle est la valeur de a ?",
      "options": [
        {
          "letter": "A",
          "text": "5"
        },
        {
          "letter": "B",
          "text": "7"
        },
        {
          "letter": "C",
          "text": "9"
        },
        {
          "letter": "D",
          "text": "11"
        },
        {
          "letter": "E",
          "text": "12"
        }
      ],
      "correct": "B",
      "explanation": "(a + 5) × 3 = 36 → a + 5 = 12 → a = 7."
    },
    {
      "id": "bosa_num_q20",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q20",
      "set_id": null,
      "figures": [],
      "question": "Pour réaliser un sondage, on doit interroger 5% de la population d'une ville de 84 000 habitants. Combien de personnes doivent être interrogées ?",
      "options": [
        {
          "letter": "A",
          "text": "420"
        },
        {
          "letter": "B",
          "text": "840"
        },
        {
          "letter": "C",
          "text": "4 200"
        },
        {
          "letter": "D",
          "text": "8 400"
        },
        {
          "letter": "E",
          "text": "42 000"
        }
      ],
      "correct": "C",
      "explanation": "84 000 × 0,05 = 4 200 personnes."
    },
    {
      "id": "bosa_num_q21",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q21",
      "set_id": null,
      "figures": [],
      "question": "Un fonctionnaire travaille 7h36 par jour. Combien de minutes cela représente-t-il ?",
      "options": [
        {
          "letter": "A",
          "text": "436"
        },
        {
          "letter": "B",
          "text": "446"
        },
        {
          "letter": "C",
          "text": "456"
        },
        {
          "letter": "D",
          "text": "466"
        },
        {
          "letter": "E",
          "text": "476"
        }
      ],
      "correct": "C",
      "explanation": "7 heures = 420 minutes + 36 minutes = 456 minutes."
    },
    {
      "id": "bosa_num_q22",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q22",
      "set_id": null,
      "figures": [],
      "question": "Budget annuel par service (en milliers d'euros) :\n\nService     | 2024  | 2025\nRH          | 320   | 340\nIT          | 510   | 490\nComm.       | 180   | 220\nJuridique   | 240   | 260\n\nQuel service a le budget total le plus élevé sur les deux années combinées ?",
      "options": [
        {
          "letter": "A",
          "text": "RH"
        },
        {
          "letter": "B",
          "text": "IT"
        },
        {
          "letter": "C",
          "text": "Communication"
        },
        {
          "letter": "D",
          "text": "Juridique"
        },
        {
          "letter": "E",
          "text": "RH et IT ex-aequo"
        }
      ],
      "correct": "B",
      "explanation": "RH : 320+340 = 660. IT : 510+490 = 1 000. Comm : 180+220 = 400. Juridique : 240+260 = 500. IT a le total le plus élevé.",
      "question_html": "<p>Budget annuel par service (en milliers d'euros) :</p><table class='q-table'><tr><th>Service</th><th>2024</th><th>2025</th></tr><tr><td>RH</td><td>320</td><td>340</td></tr><tr><td>IT</td><td>510</td><td>490</td></tr><tr><td>Comm.</td><td>180</td><td>220</td></tr><tr><td>Juridique</td><td>240</td><td>260</td></tr></table><p>Quel service a le budget total le plus élevé sur les deux années combinées ?</p>"
    },
    {
      "id": "bosa_num_q23",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q23",
      "set_id": null,
      "figures": [],
      "question": "Un projet a reçu les évaluations suivantes de 5 parties prenantes : 7, 8, 6, 9 et 5. Quelle est la moyenne des évaluations ?",
      "options": [
        {
          "letter": "A",
          "text": "6,5"
        },
        {
          "letter": "B",
          "text": "7"
        },
        {
          "letter": "C",
          "text": "7,2"
        },
        {
          "letter": "D",
          "text": "7,5"
        },
        {
          "letter": "E",
          "text": "8"
        }
      ],
      "correct": "B",
      "explanation": "(7 + 8 + 6 + 9 + 5) = 35. Moyenne = 35 ÷ 5 = 7."
    },
    {
      "id": "bosa_num_q24",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q24",
      "set_id": null,
      "figures": [],
      "question": "Un service a un taux d'absentéisme de 4,5%. S'il compte 200 collaborateurs, combien sont absents en moyenne ?",
      "options": [
        {
          "letter": "A",
          "text": "7"
        },
        {
          "letter": "B",
          "text": "9"
        },
        {
          "letter": "C",
          "text": "11"
        },
        {
          "letter": "D",
          "text": "13"
        },
        {
          "letter": "E",
          "text": "15"
        }
      ],
      "correct": "B",
      "explanation": "200 × 0,045 = 9 personnes absentes en moyenne."
    },
    {
      "id": "bosa_num_q25",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q25",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n2, 6, 18, 54, __",
      "options": [
        {
          "letter": "A",
          "text": "108"
        },
        {
          "letter": "B",
          "text": "126"
        },
        {
          "letter": "C",
          "text": "162"
        },
        {
          "letter": "D",
          "text": "180"
        },
        {
          "letter": "E",
          "text": "216"
        }
      ],
      "correct": "C",
      "explanation": "Chaque terme est multiplié par 3 : 2→6→18→54→162."
    },
    {
      "id": "bosa_num_q26",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q26",
      "set_id": null,
      "figures": [],
      "question": "Un bureau de 45 m² doit accueillir des postes de travail de 6 m² chacun. Combien de postes peut-on installer au maximum ?",
      "options": [
        {
          "letter": "A",
          "text": "6"
        },
        {
          "letter": "B",
          "text": "7"
        },
        {
          "letter": "C",
          "text": "8"
        },
        {
          "letter": "D",
          "text": "9"
        },
        {
          "letter": "E",
          "text": "10"
        }
      ],
      "correct": "B",
      "explanation": "45 ÷ 6 = 7,5. On ne peut installer que des postes complets : 7 postes."
    },
    {
      "id": "bosa_num_q27",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q27",
      "set_id": null,
      "figures": [],
      "question": "Pour un sondage, le ratio hommes/femmes doit être de 3:2. Si 120 hommes participent, combien de femmes faut-il ?",
      "options": [
        {
          "letter": "A",
          "text": "60"
        },
        {
          "letter": "B",
          "text": "72"
        },
        {
          "letter": "C",
          "text": "80"
        },
        {
          "letter": "D",
          "text": "90"
        },
        {
          "letter": "E",
          "text": "100"
        }
      ],
      "correct": "C",
      "explanation": "Ratio 3:2. Si 3 parts = 120, alors 1 part = 40. 2 parts = 80 femmes."
    },
    {
      "id": "bosa_num_q28",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q28",
      "set_id": null,
      "figures": [],
      "question": "Si 2x − 8 = 12, quelle est la valeur de x ?",
      "options": [
        {
          "letter": "A",
          "text": "2"
        },
        {
          "letter": "B",
          "text": "6"
        },
        {
          "letter": "C",
          "text": "8"
        },
        {
          "letter": "D",
          "text": "10"
        },
        {
          "letter": "E",
          "text": "12"
        }
      ],
      "correct": "D",
      "explanation": "2x − 8 = 12 → 2x = 20 → x = 10."
    },
    {
      "id": "bosa_num_q29",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q29",
      "set_id": null,
      "figures": [],
      "question": "Trois fournisseurs proposent un service d'impression :\n- Fournisseur X : 0,08 € par page\n- Fournisseur Y : forfait de 40 € pour 600 pages\n- Fournisseur Z : 0,065 € par page\n\nPour une commande de 600 pages, quel fournisseur est le moins cher ?",
      "options": [
        {
          "letter": "A",
          "text": "Fournisseur X"
        },
        {
          "letter": "B",
          "text": "Fournisseur Y"
        },
        {
          "letter": "C",
          "text": "Fournisseur Z"
        },
        {
          "letter": "D",
          "text": "Fournisseurs Y et Z ex-aequo"
        },
        {
          "letter": "E",
          "text": "Les trois sont identiques"
        }
      ],
      "correct": "C",
      "explanation": "X : 600 × 0,08 = 48 €. Y : 40 €. Z : 600 × 0,065 = 39 €. Fournisseur Z est le moins cher."
    },
    {
      "id": "bosa_num_q30",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q30",
      "set_id": null,
      "figures": [],
      "question": "Un produit coûte 85 €. Après une réduction de 20%, quel est le nouveau prix ?",
      "options": [
        {
          "letter": "A",
          "text": "65 €"
        },
        {
          "letter": "B",
          "text": "68 €"
        },
        {
          "letter": "C",
          "text": "70 €"
        },
        {
          "letter": "D",
          "text": "72 €"
        },
        {
          "letter": "E",
          "text": "75 €"
        }
      ],
      "correct": "B",
      "explanation": "Réduction : 85 × 0,20 = 17 €. Nouveau prix : 85 − 17 = 68 €."
    },
    {
      "id": "bosa_num_q31",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q31",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n100, 90, 81, 73, __",
      "options": [
        {
          "letter": "A",
          "text": "63"
        },
        {
          "letter": "B",
          "text": "64"
        },
        {
          "letter": "C",
          "text": "65"
        },
        {
          "letter": "D",
          "text": "66"
        },
        {
          "letter": "E",
          "text": "67"
        }
      ],
      "correct": "D",
      "explanation": "Les écarts diminuent de 1 : −10, −9, −8, −7. Donc 73 − 7 = 66."
    },
    {
      "id": "bosa_num_q32",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q32",
      "set_id": null,
      "figures": [],
      "question": "Un train part à 9h47 et arrive à 11h23. Quelle est la durée du trajet ?",
      "options": [
        {
          "letter": "A",
          "text": "1h24"
        },
        {
          "letter": "B",
          "text": "1h36"
        },
        {
          "letter": "C",
          "text": "1h46"
        },
        {
          "letter": "D",
          "text": "2h24"
        },
        {
          "letter": "E",
          "text": "2h36"
        }
      ],
      "correct": "B",
      "explanation": "De 9h47 à 11h23 : de 9h47 à 10h00 = 13 min, de 10h00 à 11h23 = 1h23. Total = 1h36."
    },
    {
      "id": "bosa_num_q33",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q33",
      "set_id": null,
      "figures": [],
      "question": "Une photocopieuse utilise 3 cartouches pour 9 000 copies. Combien de cartouches faut-il pour 15 000 copies ?",
      "options": [
        {
          "letter": "A",
          "text": "4"
        },
        {
          "letter": "B",
          "text": "5"
        },
        {
          "letter": "C",
          "text": "6"
        },
        {
          "letter": "D",
          "text": "7"
        },
        {
          "letter": "E",
          "text": "8"
        }
      ],
      "correct": "B",
      "explanation": "1 cartouche = 3 000 copies. 15 000 ÷ 3 000 = 5 cartouches."
    },
    {
      "id": "bosa_num_q34",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q34",
      "set_id": null,
      "figures": [],
      "question": "Satisfaction des usagers par canal (score sur 10) :\n\nCanal      | 2023 | 2024\nGuichet    | 7,2  | 7,5\nTéléphone  | 6,8  | 7,1\nE-mail     | 5,9  | 6,4\nEn ligne   | 6,1  | 7,0\n\nQuel canal a connu la plus grande amélioration entre 2023 et 2024 ?",
      "options": [
        {
          "letter": "A",
          "text": "Guichet"
        },
        {
          "letter": "B",
          "text": "Téléphone"
        },
        {
          "letter": "C",
          "text": "E-mail"
        },
        {
          "letter": "D",
          "text": "En ligne"
        },
        {
          "letter": "E",
          "text": "E-mail et En ligne ex-aequo"
        }
      ],
      "correct": "D",
      "explanation": "Guichet : +0,3. Téléphone : +0,3. E-mail : +0,5. En ligne : +0,9. Le canal En ligne a la plus grande amélioration.",
      "question_html": "<p>Satisfaction des usagers par canal (score sur 10) :</p><table class='q-table'><tr><th>Canal</th><th>2023</th><th>2024</th></tr><tr><td>Guichet</td><td>7,2</td><td>7,5</td></tr><tr><td>Téléphone</td><td>6,8</td><td>7,1</td></tr><tr><td>E-mail</td><td>5,9</td><td>6,4</td></tr><tr><td>En ligne</td><td>6,1</td><td>7,0</td></tr></table><p>Quel canal a connu la plus grande amélioration entre 2023 et 2024 ?</p>"
    },
    {
      "id": "bosa_num_q35",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q35",
      "set_id": null,
      "figures": [],
      "question": "Les durées de traitement de 4 dossiers sont : 12 jours, 8 jours, 15 jours et 9 jours. Quelle est la durée moyenne ?",
      "options": [
        {
          "letter": "A",
          "text": "10 jours"
        },
        {
          "letter": "B",
          "text": "10,5 jours"
        },
        {
          "letter": "C",
          "text": "11 jours"
        },
        {
          "letter": "D",
          "text": "11,5 jours"
        },
        {
          "letter": "E",
          "text": "12 jours"
        }
      ],
      "correct": "C",
      "explanation": "(12 + 8 + 15 + 9) = 44. Moyenne = 44 ÷ 4 = 11 jours."
    },
    {
      "id": "bosa_num_q36",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q36",
      "set_id": null,
      "figures": [],
      "question": "Un employé gagne 3 250 € brut par mois. Après déduction de 13,07% de cotisations sociales, quel est son salaire imposable ?",
      "options": [
        {
          "letter": "A",
          "text": "2 750,23 €"
        },
        {
          "letter": "B",
          "text": "2 825,23 €"
        },
        {
          "letter": "C",
          "text": "2 825,72 €"
        },
        {
          "letter": "D",
          "text": "2 834,50 €"
        },
        {
          "letter": "E",
          "text": "2 850,00 €"
        }
      ],
      "correct": "B",
      "explanation": "Cotisations : 3 250 × 0,1307 = 424,775 ≈ 424,78 €. Imposable : 3 250 − 424,78 = 2 825,23 €."
    },
    {
      "id": "bosa_num_q37",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q37",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n1, 1, 2, 3, 5, 8, __",
      "options": [
        {
          "letter": "A",
          "text": "11"
        },
        {
          "letter": "B",
          "text": "12"
        },
        {
          "letter": "C",
          "text": "13"
        },
        {
          "letter": "D",
          "text": "14"
        },
        {
          "letter": "E",
          "text": "15"
        }
      ],
      "correct": "C",
      "explanation": "Suite de Fibonacci : chaque terme est la somme des deux précédents. 5 + 8 = 13."
    },
    {
      "id": "bosa_num_q38",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q38",
      "set_id": null,
      "figures": [],
      "question": "Si A = 3/4, B = 0,8 et C = 7/10, lequel est le plus grand ?",
      "options": [
        {
          "letter": "A",
          "text": "A"
        },
        {
          "letter": "B",
          "text": "B"
        },
        {
          "letter": "C",
          "text": "C"
        },
        {
          "letter": "D",
          "text": "A et B sont égaux"
        },
        {
          "letter": "E",
          "text": "Les trois sont égaux"
        }
      ],
      "correct": "B",
      "explanation": "A = 3/4 = 0,75. B = 0,8. C = 7/10 = 0,70. B (0,8) est le plus grand."
    },
    {
      "id": "bosa_num_q39",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q39",
      "set_id": null,
      "figures": [],
      "question": "Un service doit numériser 12 000 documents. Après 3 semaines, 4 500 ont été numérisés. Au même rythme, combien de semaines supplémentaires faudra-t-il pour terminer ?",
      "options": [
        {
          "letter": "A",
          "text": "4"
        },
        {
          "letter": "B",
          "text": "5"
        },
        {
          "letter": "C",
          "text": "6"
        },
        {
          "letter": "D",
          "text": "7"
        },
        {
          "letter": "E",
          "text": "8"
        }
      ],
      "correct": "B",
      "explanation": "Rythme : 4 500 ÷ 3 = 1 500 par semaine. Restant : 12 000 − 4 500 = 7 500. Semaines : 7 500 ÷ 1 500 = 5."
    },
    {
      "id": "bosa_num_q40",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q40",
      "set_id": null,
      "figures": [],
      "question": "Le périmètre d'un rectangle est de 56 cm. Si la largeur est de 10 cm, quelle est la longueur ?",
      "options": [
        {
          "letter": "A",
          "text": "14 cm"
        },
        {
          "letter": "B",
          "text": "16 cm"
        },
        {
          "letter": "C",
          "text": "18 cm"
        },
        {
          "letter": "D",
          "text": "20 cm"
        },
        {
          "letter": "E",
          "text": "22 cm"
        }
      ],
      "correct": "C",
      "explanation": "Périmètre = 2 × (L + l). 56 = 2 × (L + 10) → 28 = L + 10 → L = 18 cm."
    },
    {
      "id": "bosa_num_q41",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q41",
      "set_id": null,
      "figures": [],
      "question": "Un service a traité 840 dossiers en janvier. En février, il en a traité 966. Quelle est l'augmentation en pourcentage ?",
      "options": [
        {
          "letter": "A",
          "text": "10%"
        },
        {
          "letter": "B",
          "text": "12%"
        },
        {
          "letter": "C",
          "text": "15%"
        },
        {
          "letter": "D",
          "text": "18%"
        },
        {
          "letter": "E",
          "text": "20%"
        }
      ],
      "correct": "C",
      "explanation": "Augmentation = 966 − 840 = 126. Pourcentage = (126 ÷ 840) × 100 = 15%."
    },
    {
      "id": "bosa_num_q42",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q42",
      "set_id": null,
      "figures": [],
      "question": "Diviser par 0,5 revient à multiplier par combien ?",
      "options": [
        {
          "letter": "A",
          "text": "0,2"
        },
        {
          "letter": "B",
          "text": "0,5"
        },
        {
          "letter": "C",
          "text": "1"
        },
        {
          "letter": "D",
          "text": "2"
        },
        {
          "letter": "E",
          "text": "5"
        }
      ],
      "correct": "D",
      "explanation": "Diviser par 0,5 = multiplier par 2. Exemple : 10 ÷ 0,5 = 20 = 10 × 2."
    },
    {
      "id": "bosa_num_q43",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q43",
      "set_id": null,
      "figures": [],
      "question": "Nombre de projets par statut et par département :\n\nDépartement | En cours | Terminé | En attente\nIT          | 8        | 12      | 3\nRH          | 4        | 6       | 2\nFinance     | 5        | 9       | 1\n\nQuel est le nombre total de projets terminés ?",
      "options": [
        {
          "letter": "A",
          "text": "21"
        },
        {
          "letter": "B",
          "text": "25"
        },
        {
          "letter": "C",
          "text": "27"
        },
        {
          "letter": "D",
          "text": "30"
        },
        {
          "letter": "E",
          "text": "33"
        }
      ],
      "correct": "C",
      "explanation": "Projets terminés : 12 + 6 + 9 = 27.",
      "question_html": "<p>Nombre de projets par statut et par département :</p><table class='q-table'><tr><th>Département</th><th>En cours</th><th>Terminé</th><th>En attente</th></tr><tr><td>IT</td><td>8</td><td>12</td><td>3</td></tr><tr><td>RH</td><td>4</td><td>6</td><td>2</td></tr><tr><td>Finance</td><td>5</td><td>9</td><td>1</td></tr></table><p>Quel est le nombre total de projets terminés ?</p>"
    },
    {
      "id": "bosa_num_q44",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q44",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n64, 32, 16, 8, __",
      "options": [
        {
          "letter": "A",
          "text": "2"
        },
        {
          "letter": "B",
          "text": "3"
        },
        {
          "letter": "C",
          "text": "4"
        },
        {
          "letter": "D",
          "text": "6"
        },
        {
          "letter": "E",
          "text": "0"
        }
      ],
      "correct": "C",
      "explanation": "Chaque terme est divisé par 2 : 64→32→16→8→4."
    },
    {
      "id": "bosa_num_q45",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q45",
      "set_id": null,
      "figures": [],
      "question": "Un employé peut choisir entre deux formules de remboursement de transport :\n- Formule A : 80% d'un abonnement à 75 €/mois\n- Formule B : forfait fixe de 55 €/mois\n\nQuelle formule est la plus avantageuse pour l'employé ?",
      "options": [
        {
          "letter": "A",
          "text": "Formule A (60 €/mois)"
        },
        {
          "letter": "B",
          "text": "Formule B (55 €/mois)"
        },
        {
          "letter": "C",
          "text": "Les deux sont identiques"
        },
        {
          "letter": "D",
          "text": "Formule A (65 €/mois)"
        },
        {
          "letter": "E",
          "text": "On ne peut pas déterminer"
        }
      ],
      "correct": "A",
      "explanation": "Formule A : 75 × 0,80 = 60 €. Formule B : 55 €. L'employé reçoit plus avec la formule A."
    },
    {
      "id": "bosa_num_q46",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q46",
      "set_id": null,
      "figures": [],
      "question": "Un bâtiment consomme 45 000 kWh par an. Après rénovation, la consommation baisse de 12%. Quelle est la nouvelle consommation annuelle ?",
      "options": [
        {
          "letter": "A",
          "text": "36 000 kWh"
        },
        {
          "letter": "B",
          "text": "38 400 kWh"
        },
        {
          "letter": "C",
          "text": "39 600 kWh"
        },
        {
          "letter": "D",
          "text": "40 500 kWh"
        },
        {
          "letter": "E",
          "text": "41 200 kWh"
        }
      ],
      "correct": "C",
      "explanation": "Réduction : 45 000 × 0,12 = 5 400. Nouvelle consommation : 45 000 − 5 400 = 39 600 kWh."
    },
    {
      "id": "bosa_num_q47",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q47",
      "set_id": null,
      "figures": [],
      "question": "Un fonctionnaire preste 38 heures par semaine sur 5 jours. Il travaille 230 jours par an. Combien d'heures preste-t-il par an ?",
      "options": [
        {
          "letter": "A",
          "text": "1 634,4"
        },
        {
          "letter": "B",
          "text": "1 710,4"
        },
        {
          "letter": "C",
          "text": "1 748,0"
        },
        {
          "letter": "D",
          "text": "1 824,0"
        },
        {
          "letter": "E",
          "text": "1 900,0"
        }
      ],
      "correct": "C",
      "explanation": "Heures/jour = 38 ÷ 5 = 7,6. Heures/an = 7,6 × 230 = 1 748,0."
    },
    {
      "id": "bosa_num_q48",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q48",
      "set_id": null,
      "figures": [],
      "question": "Le temps d'attente moyen au guichet est de 12 minutes. Si 5 personnes attendent respectivement 8, 14, 10, 18 et x minutes, quelle est la valeur de x ?",
      "options": [
        {
          "letter": "A",
          "text": "8"
        },
        {
          "letter": "B",
          "text": "10"
        },
        {
          "letter": "C",
          "text": "12"
        },
        {
          "letter": "D",
          "text": "14"
        },
        {
          "letter": "E",
          "text": "16"
        }
      ],
      "correct": "B",
      "explanation": "Moyenne = 12 → total = 60. Somme connue = 8+14+10+18 = 50. x = 60 − 50 = 10."
    },
    {
      "id": "bosa_num_q49",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q49",
      "set_id": null,
      "figures": [],
      "question": "Sur une carte à l'échelle 1:25 000, une distance mesure 8 cm. Quelle est la distance réelle ?",
      "options": [
        {
          "letter": "A",
          "text": "200 m"
        },
        {
          "letter": "B",
          "text": "2 km"
        },
        {
          "letter": "C",
          "text": "20 km"
        },
        {
          "letter": "D",
          "text": "0,2 km"
        },
        {
          "letter": "E",
          "text": "25 km"
        }
      ],
      "correct": "B",
      "explanation": "8 cm × 25 000 = 200 000 cm = 2 000 m = 2 km."
    },
    {
      "id": "bosa_num_q50",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q50",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n3, 7, 15, 31, __",
      "options": [
        {
          "letter": "A",
          "text": "47"
        },
        {
          "letter": "B",
          "text": "55"
        },
        {
          "letter": "C",
          "text": "62"
        },
        {
          "letter": "D",
          "text": "63"
        },
        {
          "letter": "E",
          "text": "65"
        }
      ],
      "correct": "D",
      "explanation": "Règle : ×2 puis +1. 3→7 (×2+1), 7→15 (×2+1), 15→31 (×2+1), 31→63 (×2+1)."
    },
    {
      "id": "bosa_num_q51",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q51",
      "set_id": null,
      "figures": [],
      "question": "Le budget d'un projet est passé de 180 000 € à 153 000 €. Quel est le pourcentage de diminution ?",
      "options": [
        {
          "letter": "A",
          "text": "12%"
        },
        {
          "letter": "B",
          "text": "15%"
        },
        {
          "letter": "C",
          "text": "17%"
        },
        {
          "letter": "D",
          "text": "18%"
        },
        {
          "letter": "E",
          "text": "20%"
        }
      ],
      "correct": "B",
      "explanation": "Diminution = 180 000 − 153 000 = 27 000. Pourcentage = (27 000 ÷ 180 000) × 100 = 15%."
    },
    {
      "id": "bosa_num_q52",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q52",
      "set_id": null,
      "figures": [],
      "question": "Un article coûte 200 €. Il est d'abord soldé de 30%, puis une remise supplémentaire de 10% est appliquée sur le prix soldé. Quel est le prix final ?",
      "options": [
        {
          "letter": "A",
          "text": "120 €"
        },
        {
          "letter": "B",
          "text": "126 €"
        },
        {
          "letter": "C",
          "text": "130 €"
        },
        {
          "letter": "D",
          "text": "132 €"
        },
        {
          "letter": "E",
          "text": "140 €"
        }
      ],
      "correct": "B",
      "explanation": "Après −30% : 200 × 0,70 = 140 €. Après −10% : 140 × 0,90 = 126 €.\nAttention : −30% puis −10% ≠ −40%."
    },
    {
      "id": "bosa_num_q53",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q53",
      "set_id": null,
      "figures": [],
      "question": "Un service emploie 8 personnes à 3 500 €/mois et 4 personnes à 4 200 €/mois. Quel est le coût salarial mensuel total ?",
      "options": [
        {
          "letter": "A",
          "text": "42 800 €"
        },
        {
          "letter": "B",
          "text": "44 800 €"
        },
        {
          "letter": "C",
          "text": "46 200 €"
        },
        {
          "letter": "D",
          "text": "48 600 €"
        },
        {
          "letter": "E",
          "text": "50 400 €"
        }
      ],
      "correct": "B",
      "explanation": "(8 × 3 500) + (4 × 4 200) = 28 000 + 16 800 = 44 800 €."
    },
    {
      "id": "bosa_num_q54",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q54",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n1, 3, 7, 15, 31, __",
      "options": [
        {
          "letter": "A",
          "text": "47"
        },
        {
          "letter": "B",
          "text": "55"
        },
        {
          "letter": "C",
          "text": "62"
        },
        {
          "letter": "D",
          "text": "63"
        },
        {
          "letter": "E",
          "text": "65"
        }
      ],
      "correct": "D",
      "explanation": "Chaque terme = précédent × 2 + 1. 31 × 2 + 1 = 63. Ou : 2ⁿ − 1 (1, 3, 7, 15, 31, 63)."
    },
    {
      "id": "bosa_num_q55",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q55",
      "set_id": null,
      "figures": [],
      "question": "Répartition du personnel par niveau et par régime :\n\nNiveau | Temps plein | Temps partiel\nA     | 45          | 8\nB     | 72          | 15\nC     | 38          | 22\nD     | 25          | 10\n\nQuel pourcentage du personnel total travaille à temps partiel ?",
      "options": [
        {
          "letter": "A",
          "text": "19,4%"
        },
        {
          "letter": "B",
          "text": "21,5%"
        },
        {
          "letter": "C",
          "text": "23,4%"
        },
        {
          "letter": "D",
          "text": "25,0%"
        },
        {
          "letter": "E",
          "text": "27,3%"
        }
      ],
      "correct": "C",
      "explanation": "Temps partiel total : 8+15+22+10 = 55. Total : (45+72+38+25)+(8+15+22+10) = 180+55 = 235.\nPourcentage = (55 ÷ 235) × 100 ≈ 23,4%.",
      "question_html": "<p>Répartition du personnel par niveau et par régime :</p><table class='q-table'><tr><th>Niveau</th><th>Temps plein</th><th>Temps partiel</th></tr><tr><td>A</td><td>45</td><td>8</td></tr><tr><td>B</td><td>72</td><td>15</td></tr><tr><td>C</td><td>38</td><td>22</td></tr><tr><td>D</td><td>25</td><td>10</td></tr></table><p>Quel pourcentage du personnel total travaille à temps partiel ?</p>"
    },
    {
      "id": "bosa_num_q56",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q56",
      "set_id": null,
      "figures": [],
      "question": "Un consultant externe facture 850 €/jour. Si un projet nécessite 3 consultants pendant 4 jours par semaine sur 6 semaines, quel est le coût total ?",
      "options": [
        {
          "letter": "A",
          "text": "51 000 €"
        },
        {
          "letter": "B",
          "text": "57 600 €"
        },
        {
          "letter": "C",
          "text": "61 200 €"
        },
        {
          "letter": "D",
          "text": "68 000 €"
        },
        {
          "letter": "E",
          "text": "72 000 €"
        }
      ],
      "correct": "C",
      "explanation": "Jours totaux = 3 × 4 × 6 = 72 jours-consultant. Coût = 72 × 850 = 61 200 €."
    },
    {
      "id": "bosa_num_q57",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q57",
      "set_id": null,
      "figures": [],
      "question": "Le nombre de visiteurs d'un site web est passé de 45 000 à 54 000 en un mois. Si cette croissance mensuelle se maintient, combien de visiteurs le site aura-t-il dans deux mois (depuis le niveau initial) ?",
      "options": [
        {
          "letter": "A",
          "text": "63 000"
        },
        {
          "letter": "B",
          "text": "64 800"
        },
        {
          "letter": "C",
          "text": "66 000"
        },
        {
          "letter": "D",
          "text": "68 400"
        },
        {
          "letter": "E",
          "text": "72 000"
        }
      ],
      "correct": "B",
      "explanation": "Croissance = (54 000 − 45 000) ÷ 45 000 = 20%. Mois 2 : 54 000 × 1,20 = 64 800."
    },
    {
      "id": "bosa_num_q58",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q58",
      "set_id": null,
      "figures": [],
      "question": "Dans un service, le ratio entre les postes budgétaires et les postes effectivement occupés est de 5:4. Si le service a 60 postes budgétaires, combien sont vacants ?",
      "options": [
        {
          "letter": "A",
          "text": "8"
        },
        {
          "letter": "B",
          "text": "10"
        },
        {
          "letter": "C",
          "text": "12"
        },
        {
          "letter": "D",
          "text": "15"
        },
        {
          "letter": "E",
          "text": "20"
        }
      ],
      "correct": "C",
      "explanation": "Ratio 5:4 → pour 5 postes budgétaires, 4 sont occupés. 60 × (4/5) = 48 occupés. Vacants : 60 − 48 = 12."
    },
    {
      "id": "bosa_num_q59",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q59",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n2, 3, 5, 9, 17, __",
      "options": [
        {
          "letter": "A",
          "text": "25"
        },
        {
          "letter": "B",
          "text": "29"
        },
        {
          "letter": "C",
          "text": "31"
        },
        {
          "letter": "D",
          "text": "33"
        },
        {
          "letter": "E",
          "text": "35"
        }
      ],
      "correct": "D",
      "explanation": "Les écarts doublent : +1, +2, +4, +8, +16. Donc 17 + 16 = 33."
    },
    {
      "id": "bosa_num_q60",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q60",
      "set_id": null,
      "figures": [],
      "question": "Un projet a 3 phases :\n- Phase 1 : 3 mois, coût mensuel 12 000 €\n- Phase 2 : 5 mois, coût mensuel 18 000 €\n- Phase 3 : 2 mois, coût mensuel 8 000 €\n\nQuel est le coût total du projet ?",
      "options": [
        {
          "letter": "A",
          "text": "126 000 €"
        },
        {
          "letter": "B",
          "text": "138 000 €"
        },
        {
          "letter": "C",
          "text": "142 000 €"
        },
        {
          "letter": "D",
          "text": "148 000 €"
        },
        {
          "letter": "E",
          "text": "152 000 €"
        }
      ],
      "correct": "C",
      "explanation": "Phase 1 : 3 × 12 000 = 36 000. Phase 2 : 5 × 18 000 = 90 000. Phase 3 : 2 × 8 000 = 16 000.\nTotal = 36 000 + 90 000 + 16 000 = 142 000 €."
    },
    {
      "id": "bosa_num_q61",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q61",
      "set_id": null,
      "figures": [],
      "question": "Un projet obtient les scores suivants lors de l'évaluation :\n- Qualité (coeff. 3) : 8/10\n- Délais (coeff. 2) : 6/10\n- Budget (coeff. 1) : 9/10\n\nQuelle est la note moyenne pondérée ?",
      "options": [
        {
          "letter": "A",
          "text": "7,0"
        },
        {
          "letter": "B",
          "text": "7,5"
        },
        {
          "letter": "C",
          "text": "7,7"
        },
        {
          "letter": "D",
          "text": "8,0"
        },
        {
          "letter": "E",
          "text": "8,2"
        }
      ],
      "correct": "B",
      "explanation": "(8×3 + 6×2 + 9×1) ÷ (3+2+1) = (24 + 12 + 9) ÷ 6 = 45 ÷ 6 = 7,5."
    },
    {
      "id": "bosa_num_q62",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q62",
      "set_id": null,
      "figures": [],
      "question": "Temps de réponse moyen aux demandes (en jours ouvrables) :\n\nType de demande    | T1   | T2   | T3   | T4\nInformation        | 2,1  | 1,8  | 1,5  | 1,3\nRéclamation        | 5,4  | 5,0  | 4,8  | 4,2\nDemande technique  | 8,2  | 7,5  | 7,0  | 6,8\n\nQuel type de demande a connu la plus forte réduction en pourcentage entre T1 et T4 ?",
      "options": [
        {
          "letter": "A",
          "text": "Information"
        },
        {
          "letter": "B",
          "text": "Réclamation"
        },
        {
          "letter": "C",
          "text": "Demande technique"
        },
        {
          "letter": "D",
          "text": "Information et Réclamation ex-aequo"
        },
        {
          "letter": "E",
          "text": "Les trois sont identiques"
        }
      ],
      "correct": "A",
      "explanation": "Information : (2,1−1,3)/2,1 = 38,1%. Réclamation : (5,4−4,2)/5,4 = 22,2%. Technique : (8,2−6,8)/8,2 = 17,1%.\nInformation a la plus forte réduction en pourcentage.",
      "question_html": "<p>Temps de réponse moyen aux demandes (en jours ouvrables) :</p><table class='q-table'><tr><th>Type de demande</th><th>T1</th><th>T2</th><th>T3</th><th>T4</th></tr><tr><td>Information</td><td>2,1</td><td>1,8</td><td>1,5</td><td>1,3</td></tr><tr><td>Réclamation</td><td>5,4</td><td>5,0</td><td>4,8</td><td>4,2</td></tr><tr><td>Demande technique</td><td>8,2</td><td>7,5</td><td>7,0</td><td>6,8</td></tr></table><p>Quel type de demande a connu la plus forte réduction en pourcentage entre T1 et T4 ?</p>"
    },
    {
      "id": "bosa_num_q63",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q63",
      "set_id": null,
      "figures": [],
      "question": "Un investissement de 10 000 € croît de 8% la première année, puis perd 5% la deuxième année. Quelle est sa valeur après 2 ans ?",
      "options": [
        {
          "letter": "A",
          "text": "10 260 €"
        },
        {
          "letter": "B",
          "text": "10 300 €"
        },
        {
          "letter": "C",
          "text": "10 340 €"
        },
        {
          "letter": "D",
          "text": "10 400 €"
        },
        {
          "letter": "E",
          "text": "10 500 €"
        }
      ],
      "correct": "A",
      "explanation": "An 1 : 10 000 × 1,08 = 10 800. An 2 : 10 800 × 0,95 = 10 260 €."
    },
    {
      "id": "bosa_num_q64",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q64",
      "set_id": null,
      "figures": [],
      "question": "Un bureau commande 15 ordinateurs à 1 200 € pièce et 15 écrans à 350 € pièce. La livraison coûte 2% du montant total. Quel est le coût total avec livraison ?",
      "options": [
        {
          "letter": "A",
          "text": "23 250 €"
        },
        {
          "letter": "B",
          "text": "23 460 €"
        },
        {
          "letter": "C",
          "text": "23 715 €"
        },
        {
          "letter": "D",
          "text": "24 000 €"
        },
        {
          "letter": "E",
          "text": "24 225 €"
        }
      ],
      "correct": "C",
      "explanation": "Ordinateurs : 15 × 1 200 = 18 000. Écrans : 15 × 350 = 5 250. Sous-total = 23 250.\nLivraison : 23 250 × 0,02 = 465. Total = 23 250 + 465 = 23 715 €."
    },
    {
      "id": "bosa_num_q65",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q65",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n4, 5, 7, 10, 14, __",
      "options": [
        {
          "letter": "A",
          "text": "17"
        },
        {
          "letter": "B",
          "text": "18"
        },
        {
          "letter": "C",
          "text": "19"
        },
        {
          "letter": "D",
          "text": "20"
        },
        {
          "letter": "E",
          "text": "21"
        }
      ],
      "correct": "C",
      "explanation": "Les écarts augmentent de 1 : +1, +2, +3, +4, +5. Donc 14 + 5 = 19."
    },
    {
      "id": "bosa_num_q66",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q66",
      "set_id": null,
      "figures": [],
      "question": "Un prix a augmenté de 25%. Pour revenir au prix initial, de quel pourcentage faut-il le réduire ?",
      "options": [
        {
          "letter": "A",
          "text": "15%"
        },
        {
          "letter": "B",
          "text": "20%"
        },
        {
          "letter": "C",
          "text": "25%"
        },
        {
          "letter": "D",
          "text": "30%"
        },
        {
          "letter": "E",
          "text": "33%"
        }
      ],
      "correct": "B",
      "explanation": "Si prix initial = 100, après +25% = 125. Pour revenir à 100 : (125−100)/125 = 25/125 = 20%."
    },
    {
      "id": "bosa_num_q67",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q67",
      "set_id": null,
      "figures": [],
      "question": "Un mélange contient de l'eau et du concentré dans un ratio de 7:3. Si on a 2,1 litres de concentré, combien de litres d'eau faut-il ?",
      "options": [
        {
          "letter": "A",
          "text": "4,2 L"
        },
        {
          "letter": "B",
          "text": "4,9 L"
        },
        {
          "letter": "C",
          "text": "5,6 L"
        },
        {
          "letter": "D",
          "text": "6,3 L"
        },
        {
          "letter": "E",
          "text": "7,0 L"
        }
      ],
      "correct": "B",
      "explanation": "Ratio eau:concentré = 7:3. Si 3 parts = 2,1 L, 1 part = 0,7 L. Eau = 7 × 0,7 = 4,9 L."
    },
    {
      "id": "bosa_num_q68",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q68",
      "set_id": null,
      "figures": [],
      "question": "Un département dépense 15 000 €/mois en personnel et 8 000 €/mois en fonctionnement. On prévoit une hausse de 3% sur le personnel et de 5% sur le fonctionnement l'année prochaine. Quel sera le budget mensuel total ?",
      "options": [
        {
          "letter": "A",
          "text": "23 550 €"
        },
        {
          "letter": "B",
          "text": "23 750 €"
        },
        {
          "letter": "C",
          "text": "23 850 €"
        },
        {
          "letter": "D",
          "text": "24 100 €"
        },
        {
          "letter": "E",
          "text": "24 350 €"
        }
      ],
      "correct": "C",
      "explanation": "Personnel : 15 000 × 1,03 = 15 450. Fonctionnement : 8 000 × 1,05 = 8 400. Total = 23 850 €."
    },
    {
      "id": "bosa_num_q69",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q69",
      "set_id": null,
      "figures": [],
      "question": "Coût par ETP (équivalent temps plein) par service :\n\nService  | ETP  | Budget (k€)\nIT       | 25   | 1 875\nRH       | 12   | 780\nComm.    | 8    | 640\nLogist.  | 18   | 1 080\n\nQuel service a le coût par ETP le plus élevé ?",
      "options": [
        {
          "letter": "A",
          "text": "IT"
        },
        {
          "letter": "B",
          "text": "RH"
        },
        {
          "letter": "C",
          "text": "Communication"
        },
        {
          "letter": "D",
          "text": "Logistique"
        },
        {
          "letter": "E",
          "text": "IT et Communication ex-aequo"
        }
      ],
      "correct": "C",
      "explanation": "IT : 1 875/25 = 75 k€. RH : 780/12 = 65 k€. Comm : 640/8 = 80 k€. Logist : 1 080/18 = 60 k€.\nCommunication a le coût par ETP le plus élevé.",
      "question_html": "<p>Coût par ETP (équivalent temps plein) par service :</p><table class='q-table'><tr><th>Service</th><th>ETP</th><th>Budget (k€)</th></tr><tr><td>IT</td><td>25</td><td>1 875</td></tr><tr><td>RH</td><td>12</td><td>780</td></tr><tr><td>Comm.</td><td>8</td><td>640</td></tr><tr><td>Logist.</td><td>18</td><td>1 080</td></tr></table><p>Quel service a le coût par ETP le plus élevé ?</p>"
    },
    {
      "id": "bosa_num_q70",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q70",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n1, 2, 6, 24, __",
      "options": [
        {
          "letter": "A",
          "text": "48"
        },
        {
          "letter": "B",
          "text": "72"
        },
        {
          "letter": "C",
          "text": "96"
        },
        {
          "letter": "D",
          "text": "120"
        },
        {
          "letter": "E",
          "text": "144"
        }
      ],
      "correct": "D",
      "explanation": "Ce sont les factorielles : 1!, 2!, 3!, 4!, 5! = 120. (×1, ×2, ×3, ×4, ×5)"
    },
    {
      "id": "bosa_num_q71",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q71",
      "set_id": null,
      "figures": [],
      "question": "Un projet emploie 2 seniors à 600 €/jour et 3 juniors à 350 €/jour. L'équipe travaille 4 jours par semaine pendant 8 semaines. Quel est le coût total en personnel ?",
      "options": [
        {
          "letter": "A",
          "text": "68 800 €"
        },
        {
          "letter": "B",
          "text": "72 000 €"
        },
        {
          "letter": "C",
          "text": "72 400 €"
        },
        {
          "letter": "D",
          "text": "76 800 €"
        },
        {
          "letter": "E",
          "text": "80 000 €"
        }
      ],
      "correct": "A",
      "explanation": "Coût/jour : (2×600)+(3×350) = 1200+1050 = 2 150 €/jour.\nJours totaux : 4 × 8 = 32 jours. Total : 2 150 × 32 = 68 800 €."
    },
    {
      "id": "bosa_num_q72",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q72",
      "set_id": null,
      "figures": [],
      "question": "Un magasin augmente ses prix de 10% puis accorde une remise de 10% sur le nouveau prix. Le prix final est-il égal, supérieur ou inférieur au prix initial ?",
      "options": [
        {
          "letter": "A",
          "text": "Égal au prix initial"
        },
        {
          "letter": "B",
          "text": "Inférieur de 1%"
        },
        {
          "letter": "C",
          "text": "Inférieur de 2%"
        },
        {
          "letter": "D",
          "text": "Supérieur de 1%"
        },
        {
          "letter": "E",
          "text": "Supérieur de 2%"
        }
      ],
      "correct": "B",
      "explanation": "Si prix = 100 : +10% → 110. −10% → 110 × 0,9 = 99. Résultat : inférieur de 1% au prix initial."
    },
    {
      "id": "bosa_num_q73",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q73",
      "set_id": null,
      "figures": [],
      "question": "Trois projets ont les caractéristiques suivantes :\n- Projet A : ROI de 15%, investissement 200 000 €\n- Projet B : ROI de 12%, investissement 350 000 €\n- Projet C : ROI de 20%, investissement 150 000 €\n\nQuel projet génère le retour le plus élevé en valeur absolue ?",
      "options": [
        {
          "letter": "A",
          "text": "Projet A"
        },
        {
          "letter": "B",
          "text": "Projet B"
        },
        {
          "letter": "C",
          "text": "Projet C"
        },
        {
          "letter": "D",
          "text": "Projets A et B ex-aequo"
        },
        {
          "letter": "E",
          "text": "Projets A et C ex-aequo"
        }
      ],
      "correct": "B",
      "explanation": "A : 200 000 × 0,15 = 30 000. B : 350 000 × 0,12 = 42 000. C : 150 000 × 0,20 = 30 000.\nProjet B génère le retour le plus élevé en valeur absolue."
    },
    {
      "id": "bosa_num_q74",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q74",
      "set_id": null,
      "figures": [],
      "question": "Un département recrute 3 profils A à 4 800 €/mois et 5 profils B à 3 400 €/mois. Quel est le salaire moyen dans l'équipe ?",
      "options": [
        {
          "letter": "A",
          "text": "3 800 €"
        },
        {
          "letter": "B",
          "text": "3 925 €"
        },
        {
          "letter": "C",
          "text": "4 100 €"
        },
        {
          "letter": "D",
          "text": "4 225 €"
        },
        {
          "letter": "E",
          "text": "4 400 €"
        }
      ],
      "correct": "B",
      "explanation": "(3 × 4 800 + 5 × 3 400) ÷ 8 = (14 400 + 17 000) ÷ 8 = 31 400 ÷ 8 = 3 925 €."
    },
    {
      "id": "bosa_num_q75",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q75",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n8, 6, 9, 7, 10, 8, __",
      "options": [
        {
          "letter": "A",
          "text": "6"
        },
        {
          "letter": "B",
          "text": "9"
        },
        {
          "letter": "C",
          "text": "10"
        },
        {
          "letter": "D",
          "text": "11"
        },
        {
          "letter": "E",
          "text": "12"
        }
      ],
      "correct": "D",
      "explanation": "Deux séries alternées : 8, 9, 10, 11... (positions impaires, +1) et 6, 7, 8... (positions paires, +1). Le prochain est 11."
    },
    {
      "id": "bosa_num_q76",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q76",
      "set_id": null,
      "figures": [],
      "question": "En 2023, une institution a reçu 12 400 demandes. En 2024, elle en a reçu 14 880. Si la même croissance se maintient, combien de demandes recevra-t-elle en 2025 ?",
      "options": [
        {
          "letter": "A",
          "text": "16 800"
        },
        {
          "letter": "B",
          "text": "17 360"
        },
        {
          "letter": "C",
          "text": "17 856"
        },
        {
          "letter": "D",
          "text": "18 200"
        },
        {
          "letter": "E",
          "text": "18 600"
        }
      ],
      "correct": "C",
      "explanation": "Croissance 2023→2024 : (14 880−12 400)/12 400 = 20%. En 2025 : 14 880 × 1,20 = 17 856."
    },
    {
      "id": "bosa_num_q77",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q77",
      "set_id": null,
      "figures": [],
      "question": "Un service de 20 personnes travaille 228 jours/an. Le taux d'absentéisme est de 6%. Combien de jours-personnes effectifs le service preste-t-il par an ?",
      "options": [
        {
          "letter": "A",
          "text": "4 012"
        },
        {
          "letter": "B",
          "text": "4 150"
        },
        {
          "letter": "C",
          "text": "4 286,4"
        },
        {
          "letter": "D",
          "text": "4 320"
        },
        {
          "letter": "E",
          "text": "4 560"
        }
      ],
      "correct": "C",
      "explanation": "Jours théoriques : 20 × 228 = 4 560. Effectifs : 4 560 × (1 − 0,06) = 4 560 × 0,94 = 4 286,4."
    },
    {
      "id": "bosa_num_q78",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q78",
      "set_id": null,
      "figures": [],
      "question": "Le budget d'un projet se répartit comme suit : 60% personnel, 25% fonctionnement, 15% investissement. Si le poste investissement représente 45 000 €, quel est le budget total ?",
      "options": [
        {
          "letter": "A",
          "text": "250 000 €"
        },
        {
          "letter": "B",
          "text": "275 000 €"
        },
        {
          "letter": "C",
          "text": "300 000 €"
        },
        {
          "letter": "D",
          "text": "325 000 €"
        },
        {
          "letter": "E",
          "text": "350 000 €"
        }
      ],
      "correct": "C",
      "explanation": "15% du total = 45 000 €. Total = 45 000 ÷ 0,15 = 300 000 €."
    },
    {
      "id": "bosa_num_q79",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q79",
      "set_id": null,
      "figures": [],
      "question": "Taux de satisfaction des projets livrés (%) :\n\nAnnée | <50% | 50-75% | >75%\n2022  | 5    | 12     | 8\n2023  | 3    | 10     | 15\n2024  | 2    | 8      | 22\n\nQuel est le pourcentage de projets avec un taux de satisfaction supérieur à 75% en 2024 ?",
      "options": [
        {
          "letter": "A",
          "text": "62,5%"
        },
        {
          "letter": "B",
          "text": "66,7%"
        },
        {
          "letter": "C",
          "text": "68,8%"
        },
        {
          "letter": "D",
          "text": "71,4%"
        },
        {
          "letter": "E",
          "text": "73,3%"
        }
      ],
      "correct": "C",
      "explanation": "Total projets 2024 : 2+8+22 = 32. Projets >75% : 22. Pourcentage = 22/32 = 68,75% ≈ 68,8%.",
      "question_html": "<p>Taux de satisfaction des projets livrés (%) :</p><table class='q-table'><tr><th>Année</th><th>&lt;50%</th><th>50-75%</th><th>&gt;75%</th></tr><tr><td>2022</td><td>5</td><td>12</td><td>8</td></tr><tr><td>2023</td><td>3</td><td>10</td><td>15</td></tr><tr><td>2024</td><td>2</td><td>8</td><td>22</td></tr></table><p>Quel est le pourcentage de projets avec un taux de satisfaction supérieur à 75% en 2024 ?</p>"
    },
    {
      "id": "bosa_num_q80",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q80",
      "set_id": null,
      "figures": [],
      "question": "Un service a un budget annuel de 480 000 €. Il doit réaliser des économies de 3% par an pendant 3 ans. Quel sera son budget la troisième année ?",
      "options": [
        {
          "letter": "A",
          "text": "428 652 €"
        },
        {
          "letter": "B",
          "text": "432 000 €"
        },
        {
          "letter": "C",
          "text": "436 800 €"
        },
        {
          "letter": "D",
          "text": "437 683 €"
        },
        {
          "letter": "E",
          "text": "440 000 €"
        }
      ],
      "correct": "D",
      "explanation": "An 1 : 480 000 × 0,97 = 465 600. An 2 : 465 600 × 0,97 = 451 632. An 3 : 451 632 × 0,97 ≈ 437 683 €."
    },
    {
      "id": "bosa_num_q81",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q81",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n0, 1, 1, 2, 4, 7, 13, __",
      "options": [
        {
          "letter": "A",
          "text": "20"
        },
        {
          "letter": "B",
          "text": "22"
        },
        {
          "letter": "C",
          "text": "24"
        },
        {
          "letter": "D",
          "text": "26"
        },
        {
          "letter": "E",
          "text": "28"
        }
      ],
      "correct": "C",
      "explanation": "Chaque terme est la somme des 3 précédents : 0+1+1=2, 1+1+2=4, 1+2+4=7, 2+4+7=13, 4+7+13=24."
    },
    {
      "id": "bosa_num_q82",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q82",
      "set_id": null,
      "figures": [],
      "question": "Un appel d'offres reçoit 3 propositions :\n- Offre A : 95 000 € avec un délai de 6 mois\n- Offre B : 82 000 € avec un délai de 8 mois\n- Offre C : 110 000 € avec un délai de 5 mois\n\nQuel est le coût mensuel moyen de l'offre la plus économique au mois ?",
      "options": [
        {
          "letter": "A",
          "text": "10 250 €"
        },
        {
          "letter": "B",
          "text": "12 500 €"
        },
        {
          "letter": "C",
          "text": "15 833 €"
        },
        {
          "letter": "D",
          "text": "18 333 €"
        },
        {
          "letter": "E",
          "text": "22 000 €"
        }
      ],
      "correct": "A",
      "explanation": "A : 95 000/6 = 15 833. B : 82 000/8 = 10 250. C : 110 000/5 = 22 000. Offre B est la moins chère/mois = 10 250 €."
    },
    {
      "id": "bosa_num_q83",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q83",
      "set_id": null,
      "figures": [],
      "question": "La population d'une commune croît de 2% par an. Si elle compte 50 000 habitants aujourd'hui, combien en aura-t-elle dans 3 ans ?",
      "options": [
        {
          "letter": "A",
          "text": "52 020"
        },
        {
          "letter": "B",
          "text": "53 000"
        },
        {
          "letter": "C",
          "text": "53 060"
        },
        {
          "letter": "D",
          "text": "53 060,4"
        },
        {
          "letter": "E",
          "text": "53 100"
        }
      ],
      "correct": "D",
      "explanation": "An 1 : 50 000 × 1,02 = 51 000. An 2 : 51 000 × 1,02 = 52 020. An 3 : 52 020 × 1,02 = 53 060,4."
    },
    {
      "id": "bosa_num_q84",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q84",
      "set_id": null,
      "figures": [],
      "question": "Un employé peut choisir entre :\n- Option A : salaire de 3 000 € + prime annuelle de 2 400 €\n- Option B : salaire de 3 250 € sans prime\n\nSur une année, quelle option rapporte le plus ?",
      "options": [
        {
          "letter": "A",
          "text": "Option A rapporte 600 € de plus"
        },
        {
          "letter": "B",
          "text": "Option A rapporte 400 € de plus"
        },
        {
          "letter": "C",
          "text": "Les deux sont identiques"
        },
        {
          "letter": "D",
          "text": "Option B rapporte 400 € de plus"
        },
        {
          "letter": "E",
          "text": "Option B rapporte 600 € de plus"
        }
      ],
      "correct": "E",
      "explanation": "A : (3 000 × 12) + 2 400 = 38 400 €/an. B : 3 250 × 12 = 39 000 €/an. B rapporte 600 € de plus."
    },
    {
      "id": "bosa_num_q85",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q85",
      "set_id": null,
      "figures": [],
      "question": "Le taux de réussite d'un examen est passé de 72% à 81%. De combien de points de pourcentage le taux a-t-il augmenté, et quel est le pourcentage d'augmentation relative ?",
      "options": [
        {
          "letter": "A",
          "text": "+9 points, +12,5%"
        },
        {
          "letter": "B",
          "text": "+9 points, +9%"
        },
        {
          "letter": "C",
          "text": "+9 points, +11,1%"
        },
        {
          "letter": "D",
          "text": "+11,1 points, +9%"
        },
        {
          "letter": "E",
          "text": "+12,5 points, +9%"
        }
      ],
      "correct": "A",
      "explanation": "Points de pourcentage : 81 − 72 = 9. Augmentation relative : 9/72 × 100 = 12,5%."
    },
    {
      "id": "bosa_num_q86",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q86",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n2, 3, 5, 7, 11, 13, __",
      "options": [
        {
          "letter": "A",
          "text": "15"
        },
        {
          "letter": "B",
          "text": "17"
        },
        {
          "letter": "C",
          "text": "19"
        },
        {
          "letter": "D",
          "text": "21"
        },
        {
          "letter": "E",
          "text": "23"
        }
      ],
      "correct": "B",
      "explanation": "Ce sont les nombres premiers consécutifs : 2, 3, 5, 7, 11, 13, 17."
    },
    {
      "id": "bosa_num_q87",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q87",
      "set_id": null,
      "figures": [],
      "question": "Un projet utilise 3 types de ressources dans un rapport de 2:3:5. Si la ressource de type C (la plus importante) représente 75 000 €, quel est le coût total ?",
      "options": [
        {
          "letter": "A",
          "text": "120 000 €"
        },
        {
          "letter": "B",
          "text": "135 000 €"
        },
        {
          "letter": "C",
          "text": "150 000 €"
        },
        {
          "letter": "D",
          "text": "175 000 €"
        },
        {
          "letter": "E",
          "text": "200 000 €"
        }
      ],
      "correct": "C",
      "explanation": "Total parts = 2+3+5 = 10. Type C = 5 parts = 75 000 → 1 part = 15 000. Total = 10 × 15 000 = 150 000 €."
    },
    {
      "id": "bosa_num_q88",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q88",
      "set_id": null,
      "figures": [],
      "question": "Un service traite 150 dossiers/jour avec 10 agents. 3 agents partent en congé et ne sont pas remplacés. Combien de jours faudra-t-il aux agents restants pour traiter 735 dossiers ?",
      "options": [
        {
          "letter": "A",
          "text": "5"
        },
        {
          "letter": "B",
          "text": "6"
        },
        {
          "letter": "C",
          "text": "7"
        },
        {
          "letter": "D",
          "text": "8"
        },
        {
          "letter": "E",
          "text": "9"
        }
      ],
      "correct": "C",
      "explanation": "Productivité/agent = 150/10 = 15 dossiers/jour. Avec 7 agents : 7×15 = 105/jour. Jours = 735 ÷ 105 = 7."
    },
    {
      "id": "bosa_num_q89",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q89",
      "set_id": null,
      "figures": [],
      "question": "Évolution du nombre de plaintes par canal :\n\nCanal    | 2022 | 2023 | 2024\nCourrier | 320  | 280  | 210\nE-mail   | 450  | 520  | 630\nEn ligne | 180  | 310  | 480\nTotal    | 950  | 1110 | 1320\n\nQuel canal représente la plus grande part du total en 2024 ?",
      "options": [
        {
          "letter": "A",
          "text": "Courrier (15,9%)"
        },
        {
          "letter": "B",
          "text": "E-mail (47,7%)"
        },
        {
          "letter": "C",
          "text": "En ligne (36,4%)"
        },
        {
          "letter": "D",
          "text": "E-mail et En ligne ex-aequo"
        },
        {
          "letter": "E",
          "text": "On ne peut pas le déterminer"
        }
      ],
      "correct": "B",
      "explanation": "Courrier : 210/1320 = 15,9%. E-mail : 630/1320 = 47,7%. En ligne : 480/1320 = 36,4%. E-mail est le plus grand.",
      "question_html": "<p>Évolution du nombre de plaintes par canal :</p><table class='q-table'><tr><th>Canal</th><th>2022</th><th>2023</th><th>2024</th></tr><tr><td>Courrier</td><td>320</td><td>280</td><td>210</td></tr><tr><td>E-mail</td><td>450</td><td>520</td><td>630</td></tr><tr><td>En ligne</td><td>180</td><td>310</td><td>480</td></tr><tr><td><strong>Total</strong></td><td><strong>950</strong></td><td><strong>1110</strong></td><td><strong>1320</strong></td></tr></table><p>Quel canal représente la plus grande part du total en 2024 ?</p>"
    },
    {
      "id": "bosa_num_q90",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q90",
      "set_id": null,
      "figures": [],
      "question": "Un projet prévu à 250 000 € a subi deux dépassements successifs : +8% au premier trimestre, puis +5% (sur le nouveau montant) au deuxième trimestre. Quel est le budget actuel ?",
      "options": [
        {
          "letter": "A",
          "text": "278 500 €"
        },
        {
          "letter": "B",
          "text": "280 000 €"
        },
        {
          "letter": "C",
          "text": "282 500 €"
        },
        {
          "letter": "D",
          "text": "283 500 €"
        },
        {
          "letter": "E",
          "text": "285 000 €"
        }
      ],
      "correct": "D",
      "explanation": "Après +8% : 250 000 × 1,08 = 270 000. Après +5% : 270 000 × 1,05 = 283 500 €."
    },
    {
      "id": "bosa_num_q91",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q91",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n1, 4, 10, 22, 46, __",
      "options": [
        {
          "letter": "A",
          "text": "82"
        },
        {
          "letter": "B",
          "text": "88"
        },
        {
          "letter": "C",
          "text": "92"
        },
        {
          "letter": "D",
          "text": "94"
        },
        {
          "letter": "E",
          "text": "96"
        }
      ],
      "correct": "D",
      "explanation": "Chaque terme = précédent × 2 + 2. 1→4 (×2+2), 4→10 (×2+2), 10→22 (×2+2), 22→46 (×2+2), 46→94 (×2+2)."
    },
    {
      "id": "bosa_num_q92",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q92",
      "set_id": null,
      "figures": [],
      "question": "Trois contrats de maintenance sont proposés :\n- Contrat X : 500 €/mois + 50 € par intervention\n- Contrat Y : 900 €/mois, interventions illimitées\n- Contrat Z : 200 €/mois + 120 € par intervention\n\nÀ partir de combien d'interventions par mois le contrat Y devient-il le plus avantageux ?",
      "options": [
        {
          "letter": "A",
          "text": "6"
        },
        {
          "letter": "B",
          "text": "7"
        },
        {
          "letter": "C",
          "text": "8"
        },
        {
          "letter": "D",
          "text": "9"
        },
        {
          "letter": "E",
          "text": "10"
        }
      ],
      "correct": "D",
      "explanation": "Y = 900. X = 500+50n → 900 quand n=8 (X=900). Z = 200+120n → 900 quand n≈5,8.\nPour n=8 : X=900, Z=1 160, Y=900. Pour n=9 : X=950, Z=1 280, Y=900. Y est le meilleur à partir de 9 interventions."
    },
    {
      "id": "bosa_num_q93",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q93",
      "set_id": null,
      "figures": [],
      "question": "Le taux de satisfaction d'un service était de 60%. Après une première mesure d'amélioration, il augmente de 20% (relatif). Après une deuxième mesure, il augmente encore de 10% (relatif). Quel est le taux de satisfaction actuel ?",
      "options": [
        {
          "letter": "A",
          "text": "72%"
        },
        {
          "letter": "B",
          "text": "78%"
        },
        {
          "letter": "C",
          "text": "79,2%"
        },
        {
          "letter": "D",
          "text": "84%"
        },
        {
          "letter": "E",
          "text": "90%"
        }
      ],
      "correct": "C",
      "explanation": "Après +20% : 60% × 1,20 = 72%. Après +10% : 72% × 1,10 = 79,2%."
    },
    {
      "id": "bosa_num_q94",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q94",
      "set_id": null,
      "figures": [],
      "question": "Un chef de projet évalue 4 risques avec leur probabilité et impact :\n- R1 : probabilité 30%, impact 50 000 €\n- R2 : probabilité 60%, impact 20 000 €\n- R3 : probabilité 10%, impact 100 000 €\n- R4 : probabilité 80%, impact 5 000 €\n\nQuel est le risque avec la valeur monétaire attendue la plus élevée ?",
      "options": [
        {
          "letter": "A",
          "text": "R1 (15 000 €)"
        },
        {
          "letter": "B",
          "text": "R2 (12 000 €)"
        },
        {
          "letter": "C",
          "text": "R3 (10 000 €)"
        },
        {
          "letter": "D",
          "text": "R4 (4 000 €)"
        },
        {
          "letter": "E",
          "text": "R1 et R2 ex-aequo"
        }
      ],
      "correct": "A",
      "explanation": "R1 : 0,30×50 000=15 000. R2 : 0,60×20 000=12 000. R3 : 0,10×100 000=10 000. R4 : 0,80×5 000=4 000.\nR1 a la valeur attendue la plus élevée."
    },
    {
      "id": "bosa_num_q95",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q95",
      "set_id": null,
      "figures": [],
      "question": "Un datacenter consomme 2 400 kWh/jour. Le tarif est de 0,25 €/kWh entre 6h et 22h (heures pleines) et 0,15 €/kWh entre 22h et 6h (heures creuses). Si la consommation est répartie uniformément, quel est le coût journalier ?",
      "options": [
        {
          "letter": "A",
          "text": "480 €"
        },
        {
          "letter": "B",
          "text": "500 €"
        },
        {
          "letter": "C",
          "text": "520 €"
        },
        {
          "letter": "D",
          "text": "540 €"
        },
        {
          "letter": "E",
          "text": "560 €"
        }
      ],
      "correct": "C",
      "explanation": "Consommation/heure = 2 400/24 = 100 kWh. Heures pleines (16h) : 1 600 × 0,25 = 400 €. Creuses (8h) : 800 × 0,15 = 120 €. Total = 520 €."
    },
    {
      "id": "bosa_num_q96",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q96",
      "set_id": null,
      "figures": [],
      "question": "Quel nombre complète cette série ?\n3, 4, 6, 10, 18, __",
      "options": [
        {
          "letter": "A",
          "text": "26"
        },
        {
          "letter": "B",
          "text": "30"
        },
        {
          "letter": "C",
          "text": "34"
        },
        {
          "letter": "D",
          "text": "36"
        },
        {
          "letter": "E",
          "text": "42"
        }
      ],
      "correct": "C",
      "explanation": "Les écarts doublent : +1, +2, +4, +8, +16. Donc 18 + 16 = 34."
    },
    {
      "id": "bosa_num_q97",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q97",
      "set_id": null,
      "figures": [],
      "question": "Trois équipes se partagent un budget de 180 000 € proportionnellement à leur effectif : Équipe A (6 pers.), Équipe B (9 pers.), Équipe C (3 pers.). Combien reçoit l'équipe B ?",
      "options": [
        {
          "letter": "A",
          "text": "60 000 €"
        },
        {
          "letter": "B",
          "text": "72 000 €"
        },
        {
          "letter": "C",
          "text": "80 000 €"
        },
        {
          "letter": "D",
          "text": "90 000 €"
        },
        {
          "letter": "E",
          "text": "100 000 €"
        }
      ],
      "correct": "D",
      "explanation": "Total effectif = 6+9+3 = 18. Part de B = 9/18 = 1/2. Budget B = 180 000 × 0,5 = 90 000 €."
    },
    {
      "id": "bosa_num_q98",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q98",
      "set_id": null,
      "figures": [],
      "question": "Indicateurs de performance par trimestre :\n\nIndicateur      | Q1    | Q2    | Q3    | Q4\nDossiers reçus  | 1 200 | 1 350 | 1 100 | 1 500\nDossiers traités| 1 100 | 1 200 | 1 150 | 1 400\nDélai moyen (j) | 8,5   | 9,2   | 7,8   | 8,0\n\nQuel trimestre a le meilleur ratio dossiers traités / dossiers reçus ?",
      "options": [
        {
          "letter": "A",
          "text": "Q1 (91,7%)"
        },
        {
          "letter": "B",
          "text": "Q2 (88,9%)"
        },
        {
          "letter": "C",
          "text": "Q3 (104,5%)"
        },
        {
          "letter": "D",
          "text": "Q4 (93,3%)"
        },
        {
          "letter": "E",
          "text": "Q1 et Q4 ex-aequo"
        }
      ],
      "correct": "C",
      "explanation": "Q1: 1100/1200=91,7%. Q2: 1200/1350=88,9%. Q3: 1150/1100=104,5% (plus traités que reçus). Q4: 1400/1500=93,3%.\nQ3 a le meilleur ratio — il a même traité plus que reçu (rattrapage de retard).",
      "question_html": "<p>Indicateurs de performance par trimestre :</p><table class='q-table'><tr><th>Indicateur</th><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th></tr><tr><td>Dossiers reçus</td><td>1 200</td><td>1 350</td><td>1 100</td><td>1 500</td></tr><tr><td>Dossiers traités</td><td>1 100</td><td>1 200</td><td>1 150</td><td>1 400</td></tr><tr><td>Délai moyen (j)</td><td>8,5</td><td>9,2</td><td>7,8</td><td>8,0</td></tr></table><p>Quel trimestre a le meilleur ratio dossiers traités / dossiers reçus ?</p>"
    },
    {
      "id": "bosa_num_q99",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q99",
      "set_id": null,
      "figures": [],
      "question": "Un service prévoit de digitaliser 5 000 dossiers. La numérisation coûte 2,50 € par dossier. L'indexation coûte 1,80 € par dossier. Le contrôle qualité coûte 0,70 € par dossier. Si 8% des dossiers nécessitent un retraitement complet (les 3 étapes), quel est le coût total ?",
      "options": [
        {
          "letter": "A",
          "text": "25 000 €"
        },
        {
          "letter": "B",
          "text": "26 000 €"
        },
        {
          "letter": "C",
          "text": "27 000 €"
        },
        {
          "letter": "D",
          "text": "28 000 €"
        },
        {
          "letter": "E",
          "text": "29 000 €"
        }
      ],
      "correct": "C",
      "explanation": "Coût/dossier = 2,50+1,80+0,70 = 5,00 €. Coût initial : 5 000 × 5 = 25 000 €.\nRetraitement : 5 000 × 0,08 = 400 dossiers × 5 = 2 000 €. Total = 25 000 + 2 000 = 27 000 €."
    },
    {
      "id": "bosa_num_q100",
      "type": "numerical_bosa",
      "source": "BOSA_Num",
      "book_ref": "BOSA Num Q100",
      "set_id": null,
      "figures": [],
      "question": "Un chef de projet doit planifier une formation. Le coût total est : frais fixes de 2 000 € + 150 € par participant. Le budget disponible est de 5 000 €. Quel est le nombre maximum de participants ?",
      "options": [
        {
          "letter": "A",
          "text": "18"
        },
        {
          "letter": "B",
          "text": "20"
        },
        {
          "letter": "C",
          "text": "22"
        },
        {
          "letter": "D",
          "text": "25"
        },
        {
          "letter": "E",
          "text": "33"
        }
      ],
      "correct": "B",
      "explanation": "2 000 + 150n ≤ 5 000 → 150n ≤ 3 000 → n ≤ 20. Maximum : 20 participants."
    }
  ]
};
