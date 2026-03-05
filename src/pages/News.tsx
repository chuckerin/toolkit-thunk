import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '../app/store';
import { clearNewsList, getNews } from '../features/newsSlice';
import Card from '../components/Card';

import styles from '../styles/News.module.css';

const News = () => {
  const { newsList, loading, error } = useSelector(
    (state: RootState) => state.news,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNews());

    return () => {
      dispatch(clearNewsList());
    };
  }, [dispatch]);

  return (
    <div className={styles.newsWrapper}>
      <h1>News</h1>
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <div className={styles.cardWrapper}>
          {newsList.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
