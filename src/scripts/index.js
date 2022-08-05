import { db } from "../scripts/database.js";

import {
  addHightlightNews,
  changeBreakingNews,
  showAllNews,
  showEditorsPick,
  showLive,
} from "../scripts/DOM.js";

const trendingNews = db.all_news.filter(({ trending }) => trending);
addHightlightNews(trendingNews[0]);

const breakingNews = db.all_news.filter(({ breaking_news }) => breaking_news);
changeBreakingNews(breakingNews[0]);

db.all_news.slice(0, 5).forEach((news) => showAllNews(news));

const editorPick = db.all_news.filter(({ editors_pick }) => editors_pick);
editorPick.forEach((news) => showEditorsPick(news));

const lives = db.live_news;
showLive(lives[0]);
