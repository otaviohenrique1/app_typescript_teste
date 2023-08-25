function logger<T>(variable: T): void {
  console.log(variable);
}

logger<string>("Olá mundo");
logger<number>(99);
logger<boolean>(true);