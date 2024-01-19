import {useState, useEffect} from "react";
import getCommentsRequest from "src/api/comments/getCommentsRequest";
import getAuthorsRequest from "src/api/authors/getAuthorsRequest";
import {
    getTreeDataToRender,
    getLikesAmount,
    mappedData,
} from "src/helpers/helpers";
import {ICommentListItem, IAuthor} from "src/helpers/types";

const useGetAuthors = () => {
    const [authors, setAuthors] = useState({});
    const [isAuthorsLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        getAuthorsRequest()
            .then((data: IAuthor[]) => {
                setAuthors(
                    data.reduce((result, item) => {
                        result[item.id] = item;
                        return result;
                    }, {} as Record<string, IAuthor>),
                );
            })
            .catch((e) => {
                console.error("Get authors error: ", e);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return {authors, isAuthorsLoading};
};

const useGetComments = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState("");

    const [loadedPage, setLoadedPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [comments, setComments] = useState([] as ICommentListItem[]);
    const [commentsAmount, setCommentsAmount] = useState(0);

    const [likesMap, setLikesMap] = useState({} as Record<string, boolean>);
    const [likesAmount, setLikesAmount] = useState(0);

    useEffect(() => {
        if (!isFetching) return;
        let ignore = false;
        setError("");

        getCommentsRequest(loadedPage + 1)
            .then((data) => {
                if (!ignore) {
                    setCommentsAmount(
                        (oldAmount) => oldAmount + data.data.length,
                    );
                    setLikesAmount(
                        (oldAmount) => oldAmount + getLikesAmount(data.data),
                    );
                    setComments((oldComments) => [
                        ...oldComments,
                        ...getTreeDataToRender(data.data),
                    ]);
                    setLikesMap((oldMap) => ({
                        ...oldMap,
                        ...mappedData(data.data),
                    }));
                    setLoadedPage(data.pagination.page);
                    setTotalPages(data.pagination.total_pages);
                }
            })
            .catch(() => {
                setError("Попробуйте еще раз!");
            })
            .finally(() => {
                setIsFetching(false);
            });
        return () => {
            ignore = true;
        };
    }, [isFetching, loadedPage]);

    return {
        isFetching,
        setIsFetching,
        error,
        comments,
        commentsAmount,
        likesMap,
        setLikesMap,
        likesAmount,
        setLikesAmount,
        isLastPage: loadedPage === totalPages,
    };
};

export default {
    useGetAuthors,
    useGetComments,
} as const;
