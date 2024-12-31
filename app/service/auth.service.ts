import { catchError, from, map, Observable } from "rxjs";
import { storeAuthToken } from "../shared/utils/ls";
import http, { handleError } from "./api";

type LoginT = {
  email: string;
  password: string;
};

export const getTrips = (payload: any): Observable<any> => {
  return from(
    http.get("/trips/trips-for-booking", { params: { ...payload } })
  ).pipe(
    map((response: any) => response),
    catchError((e) => handleError(e))
  );
};
