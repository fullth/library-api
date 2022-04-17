https://github.com/typestack/typedi#readme

### TypeDI란
- TypeDI는 자바스크립트와 타입스크립트를 위한 의존성 주입 툴이다.

### 주요 특징
1. 속성 기반 주입
2. 생성자 기반 주입
3. 싱글톤과 transient 서비스
4. 다중 DI 컨테이너 지원    

### 설치
```shell
npm install typedi reflect-metadata
```

### import
```typescript
import 'reflect-metadata';

// reflect-metadata package를 import한 이후에 다른 패키지를 불러들여야함.
```

### tsconfig.json설정
```shell
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

### 기본 사용법
- @Service 데코레이터를 등록한 클래스는 Container에 등록됨.
```typescript
import { Container, Service } from 'typedi';

@Service()
class ExampleInjectedService {
  printMessage() {
    console.log('I am alive!');
  }
}

@Service()
class ExampleService {
  constructor(
    // because we annotated ExampleInjectedService with the @Service()
    // decorator TypeDI will automatically inject an instance of
    // ExampleInjectedService here when the ExampleService class is requested
    // from TypeDI.
    public injectedService: ExampleInjectedService
  ) {}
}

const serviceInstance = Container.get(ExampleService);
// we request an instance of ExampleService from TypeDI

serviceInstance.injectedService.printMessage();
// logs "I am alive!" to the console
```