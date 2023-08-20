import { useState } from 'react'

export const useGoogleApi = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [gapi] = useState(window['gapi' as any] ? window['gapi' as any] : [])
  const getDataFromGoogleSheets = async (): Promise<[string, string, string, string][]> => {
    if (!gapi) {
      console.warn(`gapi not found`)
      return []
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await (gapi as any).client.sheets.spreadsheets.values.get({
        spreadsheetId: '1a6ew3ROASG42a74gPIvPTOFpCTz_hae-_ZiPV5ZL4TA',
        range: 'one', // 范围可以是特定的工作表和单元格范围
      })
      return res.result.values as [string, string, string, string][]
    } catch (error) {
      console.error(error)
      return []
    }
  }
  const getDataById = async (
    id: string,
  ): Promise<
    | {
        name: string
        text: string
      }
    | undefined
  > => {
    const datas = await getDataFromGoogleSheets()
    if (!datas) {
      console.warn('get datas error')
      return undefined
    }
    const data = datas.find((each) => each.includes(id))
    if (data) {
      return {
        name: data[1] || '親愛的朋友',
        text: data[2] || '誠摯的歡迎您前來',
      }
    }
    return undefined
  }
  return { gapi, getDataById, getDataFromGoogleSheets }
}
export default useGoogleApi
