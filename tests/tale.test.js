import { kolobok, newYear } from '../src/tale'

describe('kolobok function', () => {
  it('should return the correct response for дедушка', () => {
    const result = kolobok('дедушка')
    expect(result).toBe('Я от дедушки ушёл')
  })

  it('should return the correct response for заяц', () => {
    const result = kolobok('заяц')
    expect(result).toBe('Я от зайца ушёл')
  })

  it('should return the correct response for лиса', () => {
    const result = kolobok('лиса')
    expect(result).toBe('Меня съели')
  })

  it('should throw error for unknown character', () => {
    expect(() => {
      kolobok('неизвестный')
    }).toThrow('Я встретил кого-то неизвестного')
  })

  it('can see strange', () => {
    try {
      kolobok('Дед Мороз')
      console.log('Мы этого не видим')
      // throw new error('...')
    } catch (error) { // error message
      expect(error.message).toBe('Я встретил кого-то неизвестного')
    }
  })
})

//параметрезованные тесты для колобка
describe('kolobok function', () =>{
  const data = [
    {
      name: 'дедушка',
      expected: 'Я от дедушки ушёл'
    },
    {
      name: 'заяц',
      expected: 'Я от зайца ушёл'
    },
    {
      name: 'лиса',
      expected: 'Меня съели'
    },
    {
      name: 'неизвестный',
      expectedError: 'Я встретил кого-то неизвестного'
    }
  ]

  test.each(data)('parametr test kolobok # $name',
  ({name, expected, expectedError}) => {
    if (expectedError) {
      expect(() => {
        kolobok(name)
      }).toThrow(expected) //тут мб expectedError
    } else {
      expect(kolobok(name)).toBe(expected)
    }
  })

  // test.each(data)('parametr test kolobok # $name',
  //   ({name, expected}) => {
  //     expect(kolobok(name)).toBe(expected)
  //   })
})

//--------------------
describe('newYear function', () => {
  it('should return the correct response for Дед Мороз', () => {
    const result = newYear('Дед Мороз')
    expect(result).toBe('Дед Мороз! Дед Мороз! Дед Мороз!')
  })

  it('should return the correct response for Снегурочка', () => {
    const result = newYear('Снегурочка')
    expect(result).toBe('Снегурочка! Снегурочка! Снегурочка!')
  })

  it('should return a default response for unknown character', () => {
    expect(() => {
      newYear('неизвестный')
    }).toThrow('Неизвестный персонаж')
  })
})
