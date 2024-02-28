import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Mustafa Akaydın"
        slug="mustafakaydn"
        datetime={new Date("2024-02-28")}
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore odio harum optio deserunt dicta saepe rerum eum minima magni?`}
      />
      <Tweet
        name="Mustafa Akaydın"
        slug="mustafakaydn"
        datetime={new Date("2024-02-28")}
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore odio harum optio deserunt dicta saepe rerum eum minima magni?`}
      />
    </Layout>
  );
}

export default HomePage
