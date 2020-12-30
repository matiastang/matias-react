/*
 * @Author: tangdaoyong
 * @Date: 2020-12-22 14:22:43
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2020-12-30 11:04:24
 * @Description: services index
 */
const fetch_GET = (url: string) => {
    return fetch(url);
};

const fetch_GET_JSON = <T>(url: string) => {
    return new Promise<T>((resolve, reject) => {
        fetch_GET(url)
                .then(res => {
                    res.json()
                            .then(json => resolve(json))
                            .catch(error => reject(error))
                            .finally(() => {

                            });
                })
                .catch(error => reject(error))
                .finally(() => {

                });
    });
};

export default fetch_GET;

export {
    fetch_GET_JSON
};