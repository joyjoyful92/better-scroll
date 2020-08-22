import { OptionsConstructor } from '../Options'

describe('BetterScroll Options', () => {
  let options: OptionsConstructor

  beforeEach(() => {
    options = new OptionsConstructor()
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should have default value', () => {
    expect(options).toEqual({
      HWCompositing: true,
      autoBlur: true,
      bindToWrapper: false,
      bounce: {
        bottom: true,
        left: true,
        right: true,
        top: true
      },
      bounceTime: 800,
      click: false,
      dblclick: false,
      deceleration: 0.0015,
      directionLockThreshold: 5,
      disableMouse: false,
      disableTouch: true,
      eventPassthrough: '',
      flickLimitDistance: 100,
      flickLimitTime: 200,
      freeScroll: false,
      momentum: true,
      momentumLimitDistance: 15,
      momentumLimitTime: 300,
      preventDefault: true,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
      },
      tagException: {
        tagName: /^TEXTAREA$/
      },
      probeType: 0,
      resizePolling: 60,
      scrollX: false,
      scrollY: true,
      startX: 0,
      startY: 0,
      stopPropagation: false,
      swipeBounceTime: 500,
      swipeTime: 2500,
      tap: '',
      useTransition: true,
      autoEndDistance: 5,
      bindToTarget: false,
      outOfBoundaryDampingFactor: 1 / 3
    })
  })

  it('should shallow copy options when call merge(options)', () => {
    options.merge({
      scrollY: false,
      scrollX: true,
      bounce: false
    })

    expect(options).toEqual({
      HWCompositing: true,
      autoBlur: true,
      bindToWrapper: false,
      bounce: false,
      bounceTime: 800,
      click: false,
      dblclick: false,
      deceleration: 0.0015,
      directionLockThreshold: 5,
      disableMouse: false,
      disableTouch: true,
      eventPassthrough: '',
      flickLimitDistance: 100,
      flickLimitTime: 200,
      freeScroll: false,
      momentum: true,
      momentumLimitDistance: 15,
      momentumLimitTime: 300,
      preventDefault: true,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
      },
      tagException: {
        tagName: /^TEXTAREA$/
      },
      probeType: 0,
      resizePolling: 60,
      scrollX: true,
      scrollY: false,
      startX: 0,
      startY: 0,
      stopPropagation: false,
      swipeBounceTime: 500,
      swipeTime: 2500,
      tap: '',
      useTransition: true,
      autoEndDistance: 5,
      bindToTarget: false,
      outOfBoundaryDampingFactor: 1 / 3
    })
  })

  it('should generate some extra properties of options', () => {
    options.process()

    expect(options).toEqual({
      HWCompositing: true,
      autoBlur: true,
      bindToWrapper: false,
      bounce: {
        bottom: true,
        left: true,
        right: true,
        top: true
      },
      bounceTime: 800,
      click: false,
      dblclick: false,
      deceleration: 0.0015,
      directionLockThreshold: 5,
      disableMouse: false,
      disableTouch: true,
      eventPassthrough: '',
      flickLimitDistance: 100,
      flickLimitTime: 200,
      freeScroll: false,
      momentum: true,
      momentumLimitDistance: 15,
      momentumLimitTime: 300,
      preventDefault: true,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
      },
      tagException: {
        tagName: /^TEXTAREA$/
      },
      probeType: 0,
      resizePolling: 60,
      scrollX: false,
      scrollY: true,
      startX: 0,
      startY: 0,
      stopPropagation: false,
      swipeBounceTime: 500,
      swipeTime: 2500,
      tap: '',
      useTransition: true,
      translateZ: ' translateZ(1px)',
      autoEndDistance: 5,
      bindToTarget: false,
      outOfBoundaryDampingFactor: 1 / 3
    })
  })

  it('should resolve bounce when calling process', () => {
    options
      .merge({
        bounce: false
      })
      .process()

    expect(options.bounce).toEqual({
      bottom: false,
      left: false,
      right: false,
      top: false
    })

    options
      .merge({
        bounce: true
      })
      .process()

    expect(options.bounce).toEqual({
      bottom: true,
      left: true,
      right: true,
      top: true
    })
  })
})
