import {
  FETCH_RECOMMEND_REQUEST,
  FETCH_RECOMMEND_SUCCESS,
  FETCH_RECOMMEND_FAILURE,
} from "./recommendationActionTypes";
import { RECOMMEND_URL } from "../../constants";

export const fetchRecommendationRequest = () => {
  return {
    type: FETCH_RECOMMEND_REQUEST,
  };
};

export const fetchRecommendationSuccess = (recommendedProducts) => {
  return {
    type: FETCH_RECOMMEND_SUCCESS,
    payload: recommendedProducts,
  };
};

export const fetchRecommendationFailure = (error) => {
  return {
    type: FETCH_RECOMMEND_FAILURE,
    payload: error,
  };
};

export const fetchRecommendation = () => {
  return (dispatch) => {
    dispatch(fetchRecommendationRequest());
    fetch(RECOMMEND_URL)
      .then((res_) => res_.json())
      .then((data) => {
        dispatch(fetchRecommendationSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchRecommendationFailure(err));
      });
  };
};