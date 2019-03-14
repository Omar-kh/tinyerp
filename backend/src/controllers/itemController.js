import { itemService } from '../services';

const { createItem, findItemByName } = itemService;

export const postItem = async (req, res, next) => {
    const { item } = req.body;
    try {
        await createItem(item);
        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
};

export const getItemByName = async (req, res, next) => {
    const { item } = req.body;
    try {
        const itemFound = await findItemByName(item);
        res.json(itemFound);
    } catch (error) {
        next(error);
    }
};
