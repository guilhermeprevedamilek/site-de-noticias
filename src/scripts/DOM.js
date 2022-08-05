export function addHightlightNews({
  id,
  title,
  description,
  author,
  reading_time,
  date,
  image_url,
  image_alt,
}) {
  const highlightedNewsSection = document.querySelector(".highlighted-news");

  highlightedNewsSection.setAttribute("news-id", id);

  highlightedNewsSection.innerHTML = `       
    <img
      src="${image_url}"
      alt="${image_alt}"
      class="highlighted-news__image"
    />

    <div class="highlighted-news__informations">
      <div class="highlighted-news__info-header">
        <span class="highlighted-news__trending">Em Alta</span>

        <div class="highlighted-news__interactions">
          <button class="highlighted-news__interaction">
            <img src="./src/icons/ui/like.svg" alt="Ícone de curtida" />
          </button>

          <button class="highlighted-news__interaction">
            <img
              src="./src/icons/ui/share.svg"
              alt="Ícone de compartilhamento"
            />
          </button>

          <button class="highlighted-news__interaction">
            <img src="./src/icons/ui/save.svg" alt="Ícone de marcador" />
          </button>
        </div>
      </div>

      <div class="highlighted-news__info-content">
        <h3 class="highlighted-news__title">
          ${title}
        </h3>

        <img
          src="${image_url}"
          alt="${image_alt}"
          class="highlighted-news__image-mobile"
        />

        <p class="highlighted-news__description">
          ${description}
        </p>
      </div>

      <div class="news__info-footer">
        <p class="news__publish-date">2 horas atrás</p>
        <p class="news__author-read-time">
          Por ${author} &#124; ${reading_time}min de leitura
        </p>
      </div>
    </div>
  `;
}

export function changeBreakingNews({ title }) {
  const breakingNewsTitle = document.querySelector(".braking-news__news-title");

  breakingNewsTitle.innerText = title;
}

export function showAllNews({
  id,
  title,
  description,
  author,
  reading_time,
  date,
  likes,
  share,
  image_url,
  image_alt,
}) {
  const allNewsSection = document.querySelector(".website-news__all-news");

  const newsDiv = document.createElement("div");

  newsDiv.className = "website-news__individual-news";

  newsDiv.setAttribute("news-id", id);

  newsDiv.innerHTML = `
                <img
                  src="${image_url}"
                  alt="${image_alt}"
                  class="website-news__news-image"
                />

                <div class="website-news__news-info-content">
                  <h3 class="website-news__news-title">
                    ${title}
                  </h3>

                  <p class="website-news__news-description">
                    ${description}
                  </p>
                </div>

                <div class="webiste-news__news news__info-footer">
                  <p class="news__publish-date">2 horas atrás</p>
                  <p class="news__author-read-time">
                    Por ${author} &#124; ${reading_time}min de leitura
                  </p>
                </div>

                <div class="website-news__interactions">
                  <button class="website-news__interaction">
                    <p class="website-news__interaction-content">
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9 16C9 16 0 7.64952 0 4.68445C0 1.52744 1.64588 0 5.0625 0C6.75 0 9 2.5811 9 2.5811C9 2.5811 11.25 0 12.9375 0C16.3541 0 18 1.52644 18 4.68445C18 7.64952 9 16 9 16ZM12.9375 1.03264C12.0499 1.03264 9 3.61179 9 3.61179C9 3.61179 5.949 1.03264 5.0625 1.03264C2.07225 1.03264 1.125 2.15932 1.125 4.82149C1.125 7.32371 9 14.4504 9 14.4504C9 14.4504 16.875 7.32371 16.875 4.82149C16.875 2.15932 15.9277 1.03264 12.9375 1.03264Z"
                          fill="#2A2A2A"
                        />
                      </svg>

                      <span class="website-news__interaction-count">${likes}</span>
                    </p>
                  </button>

                  <button class="website-news__interaction">
                    <p class="website-news__interaction-content">
                      <svg
                        width="13"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 16H1C0.447 16 0 15.553 0 15.001V5C0 4.448 0.447 4 1 4H2.5V5H1.5C1.224 5 1 5.225 1 5.5V14.5C1 14.777 1.224 15.001 1.5 15.001H11.5C11.775 15.001 12 14.777 12 14.5V5.5C12 5.225 11.775 5 11.5 5H10.5V4H12C12.552 4 13 4.448 13 5V15.001C13 15.553 12.552 16 12 16ZM8.66602 3.35693L7 1.69092V11.5C7 11.776 6.775 12 6.5 12C6.224 12 6 11.776 6 11.5V1.69092L4.33301 3.35693C4.14301 3.54793 3.83294 3.54793 3.64294 3.35693C3.45294 3.16793 3.45294 2.85697 3.64294 2.66797L6.11304 0.196899C6.11604 0.192899 6.122 0.191012 6.125 0.187012C6.136 0.174012 6.13204 0.154968 6.14404 0.141968C6.16304 0.123968 6.18996 0.129967 6.20996 0.115967C6.28396 0.0559668 6.36995 0.0149346 6.47095 0.00793457C6.47895 0.00793457 6.48604 0.00292969 6.49304 0.00292969C6.49604 0.00292969 6.49798 0 6.50098 0C6.50398 0 6.50603 0.00192969 6.50903 0.00292969C6.51503 0.00192969 6.51902 0.00598145 6.52502 0.00598145C6.64402 0.0119814 6.75196 0.0589346 6.83496 0.132935C6.84196 0.139935 6.85301 0.136944 6.85901 0.142944C6.86501 0.150944 6.86202 0.161969 6.86902 0.167969C6.87302 0.171969 6.87198 0.179937 6.87598 0.184937L9.35803 2.66797C9.54903 2.85697 9.54903 3.16793 9.35803 3.35693C9.16603 3.54893 8.85702 3.54893 8.66602 3.35693Z"
                          fill="#2A2A2A"
                        />
                      </svg>

                      <span class="website-news__interaction-count">${share}</span>
                    </p>
                  </button>

                  <button class="website-news__interaction">
                    <svg
                      width="10"
                      height="16"
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 12L0 16V1C0 0.447715 0.447715 0 1 0H9C9.55228 0 10 0.447715 10 1V16L5 12ZM9 2C9 1.44772 8.55229 1 8 1H2C1.44772 1 1 1.44772 1 2V14L5 10.5L9 14V2Z"
                        fill="#2A2A2A"
                      />
                    </svg>
                  </button>
                </div>
  `;

  allNewsSection.appendChild(newsDiv);
}

export function showLive({ id, title, video_cover, video_cover_alt }) {
  const liveNews = document.querySelector(".live-news__news");

  liveNews.innerHTML = `
      <div class="live-news__news-image-gradient">
      <img
        src="${video_cover}"
        alt="${video_cover_alt}"
        class="live-news__news-image"
      />
      </div>

      <h4 class="live-news__news-title">
        ${title}
      </h4>
    `;
}

export function showEditorsPick({
  id,
  title,
  description,
  author,
  reading_time,
  date,
  likes,
  share,
  image_url,
  image_alt,
  topic,
}) {
  const editorPickSection = document.querySelector(".editors-pick__all-news");

  const newsDiv = document.createElement("div");

  newsDiv.className = "editors-pick__individual-news";

  newsDiv.setAttribute("news-id", id);

  newsDiv.innerHTML = `
        <div class="editors-pick__news-picture">
                  <div class="editors-pick__news-topic">
                    <div class="editors-pick__topic-rectangle">
                      <span class="editors-pick__topic-text">${topic}</span>
                    </div>
                  </div>

                  <div class="editors-pick__news-image-gradient">
                    <img
                      src="${image_url}"
                      alt="${image_alt}"
                      class="editors-pick__news-image"
                    />
                  </div>
                </div>

                <div class="editors-pick__news-info-content">
                  <h4 class="editors-pick__news-title">
                    ${title}
                  </h4>

                  <p class="editors-pick__news-description">
                    ${description}
                  </p>
                </div>
    `;

  editorPickSection.appendChild(newsDiv);
}
