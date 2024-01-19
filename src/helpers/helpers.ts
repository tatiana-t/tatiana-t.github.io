import {ICommentItem, ICommentListItem} from "src/helpers/types";

export const getLikesAmount = (list: ICommentItem[]): number => {
    return list.reduce((amount, item) => {
        return amount + item.likes;
    }, 0);
};

export const mappedData = (list: ICommentItem[]): Record<string, boolean> => {
    return list.reduce<Record<string, boolean>>((map, item) => {
        map[item.id] = false;
        return map;
    }, {});
};

export const getTreeDataToRender = (data: any[]): ICommentListItem[] => {
    const map: Record<string, number> = data.reduce((result, item, i) => {
        item.replies = [];
        result[item.id] = i;
        return result;
    }, {});

    return data.reduce<ICommentListItem[]>((tree, item) => {
        if (item.parent) {
            data[map[item.parent]].replies.push(item);
        } else {
            tree.push(item);
        }
        return tree;
    }, []);
};
